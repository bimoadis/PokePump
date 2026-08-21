import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getRandomCuratedPokemon } from '@/lib/pokeapi';
import { pokemonStore } from '@/lib/store';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | null = null;
function getPrisma(): PrismaClient | null {
  if (prisma) return prisma;
  try {
    if (process.env.DATABASE_URL) {
      prisma = new PrismaClient();
    }
  } catch (e: any) {
    console.warn('Prisma client init warning in webhook:', e?.message);
  }
  return prisma;
}

interface NormalizedTweetEvent {
  tweetId: string;
  authorHandle: string;
  authorId?: string;
  avatarUrl?: string;
  tweetText: string;
}

// 1. GET Handler for X (Twitter) CRC (Challenge-Response Check)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const crcToken = searchParams.get('crc_token');

    if (!crcToken) {
      return NextResponse.json(
        { error: 'Missing crc_token query parameter' },
        { status: 400 }
      );
    }

    const consumerSecret =
      process.env.X_CONSUMER_SECRET ||
      process.env.TWITTER_CONSUMER_SECRET ||
      '';

    if (!consumerSecret || consumerSecret === 'your_x_consumer_secret') {
      console.warn('⚠️ X_CONSUMER_SECRET is not configured properly in environment variables.');
    }

    const hmac = crypto
      .createHmac('sha256', consumerSecret)
      .update(crcToken)
      .digest('base64');

    return NextResponse.json({
      response_token: `sha256=${hmac}`
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error handling Twitter CRC:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Helper: Normalize both X API v2 (post.mention.create via payload) and v1.1 payloads
function extractEventsFromPayload(body: any): NormalizedTweetEvent[] {
  const events: NormalizedTweetEvent[] = [];
  if (!body) return events;

  console.log('📦 Raw Webhook Payload:', JSON.stringify(body));

  // 1. X API v1.1 Legacy format: { tweet_create_events: [...] }
  if (body.tweet_create_events && Array.isArray(body.tweet_create_events)) {
    for (const tweet of body.tweet_create_events) {
      if (tweet && tweet.id_str) {
        events.push({
          tweetId: tweet.id_str,
          authorHandle: tweet.user?.screen_name || 'trainer',
          authorId: tweet.user?.id_str,
          avatarUrl: tweet.user?.profile_image_url_https,
          tweetText: tweet.text || ''
        });
      }
    }
  }

  // 2. X API v2 Stream Webhook format:
  // { data: { event_type: "post.mention.create", payload: { id, text, author_id }, includes: { users: [...] } } }
  // OR { data: { id, text, author_id }, includes: { users: [...] } }
  if (body.data) {
    const dataItems = Array.isArray(body.data) ? body.data : [body.data];
    
    // Collect users from all possible includes locations
    const usersList: any[] = [
      ...(body.includes?.users || []),
      ...(body.data?.includes?.users || [])
    ];
    
    const usersMap = new Map<string, any>();
    for (const u of usersList) {
      if (u && u.id) usersMap.set(String(u.id), u);
    }

    for (const item of dataItems) {
      // Check if tweet data is inside item.payload (X Event Stream format) or directly on item
      const tweet = item.payload || item;
      if (tweet && (tweet.id || tweet.id_str || tweet.text)) {
        const authorIdStr = String(tweet.author_id || tweet.user_id || item.author_id || '');
        const userObj = authorIdStr ? usersMap.get(authorIdStr) : null;
        const authorHandle = userObj?.username || userObj?.screen_name || tweet.author_handle || 'T3A4WT5G';
        const avatarUrl = userObj?.profile_image_url || userObj?.profile_image_url_https;

        events.push({
          tweetId: String(tweet.id || tweet.id_str || Date.now()),
          authorHandle: authorHandle,
          authorId: authorIdStr || undefined,
          avatarUrl: avatarUrl,
          tweetText: tweet.text || item.text || ''
        });
      }
    }
  }

  // 3. Fallback direct object format
  if (events.length === 0 && body.text && (body.id || body.id_str)) {
    events.push({
      tweetId: String(body.id || body.id_str),
      authorHandle: body.user?.screen_name || body.author_id || 'trainer',
      authorId: body.user?.id_str || body.author_id,
      avatarUrl: body.user?.profile_image_url_https || body.profile_image_url,
      tweetText: body.text || ''
    });
  }

  console.log(`🔎 Extracted ${events.length} event(s) from webhook payload`);
  return events;
}

// 2. POST Handler for incoming Twitter / X Events
export async function POST(request: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const events = extractEventsFromPayload(body);
    const botUsername = (process.env.X_BOT_USERNAME || '@getPokePump').replace('@', '').toLowerCase();

    for (const event of events) {
      const { authorHandle, authorId, avatarUrl, tweetText, tweetId } = event;

      // Skip bot's own tweets to prevent loops
      if (authorHandle && authorHandle.toLowerCase() === botUsername) {
        continue;
      }

      console.log(`📩 Processing Reply/Mention from @${authorHandle} (${tweetId}): "${tweetText}"`);

      // Clean prompt by removing bot @mentions
      const cleanPrompt = tweetText.replace(/@\w+/gi, '').trim() || tweetText.trim() || 'Summoned via PokéPump Reply';

      // 1. Generate / Hatch Pokemon
      const hatched = await getRandomCuratedPokemon(authorHandle, cleanPrompt);
      hatched.tweetId = tweetId;
      hatched.replyPrompt = cleanPrompt;

      // In-memory store
      pokemonStore.unshift(hatched);

      // 2. Persist to Database (PostgreSQL / Prisma)
      const db = getPrisma();
      if (db) {
        try {
          // Upsert Trainer User
          const dbUser = await db.user.upsert({
            where: { twitterHandle: authorHandle.toLowerCase() },
            update: {
              twitterId: authorId || undefined,
              avatarUrl: avatarUrl || undefined
            },
            create: {
              twitterHandle: authorHandle.toLowerCase(),
              twitterId: authorId || undefined,
              avatarUrl: avatarUrl || undefined
            }
          });

          // Create Pokemon Record
          await db.pokemon.create({
            data: {
              id: hatched.id,
              pokedexId: hatched.pokedexId,
              number: hatched.number,
              name: hatched.name,
              species: hatched.species,
              type: hatched.type as any,
              secondaryType: hatched.secondaryType ? (hatched.secondaryType as any) : null,
              level: hatched.level,
              exp: hatched.exp,
              hp: hatched.stats.hp,
              attack: hatched.stats.attack,
              defense: hatched.stats.defense,
              specialAttack: hatched.stats.specialAttack,
              specialDefense: hatched.stats.specialDefense,
              speed: hatched.stats.speed,
              powerScore: hatched.powerScore,
              rarity: hatched.rarity as any,
              tweetId: tweetId,
              replyPrompt: tweetText,
              artworkUrl: hatched.artworkUrl,
              spriteUrl: hatched.spriteUrl,
              showdownUrl: hatched.showdownUrl,
              cryUrl: hatched.cryUrl,
              height: hatched.height,
              weight: hatched.weight,
              baseExperience: hatched.baseExperience,
              ownerId: dbUser.id
            }
          });

          // Create Activity Log
          await db.activityLog.create({
            data: {
              type: 'born',
              title: `${hatched.name} Hatched!`,
              description: `@${authorHandle} spawned a Level ${hatched.level} ${hatched.name} (Power: ${hatched.powerScore})`,
              metadata: {
                pokemonId: hatched.id,
                tweetId,
                handle: authorHandle
              }
            }
          });

          console.log(`✅ Successfully saved @${authorHandle}'s ${hatched.name} to Database!`);
        } catch (dbError: any) {
          console.error('Error saving webhook Pokemon to Database:', dbError.message);
        }
      }
    }

    return NextResponse.json({ status: 'ok', received: true, processed: events.length }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing Twitter Webhook Event:', error);
    return NextResponse.json({ status: 'error', message: error?.message || 'Unknown error' }, { status: 500 });
  }
}
