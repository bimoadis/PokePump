import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getRandomCuratedPokemon } from '@/lib/pokeapi';
import { pokemonStore } from '@/lib/store';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | null = null;
try {
  if (process.env.DATABASE_URL) {
    prisma = new PrismaClient();
  }
} catch (e) {
  console.warn('Prisma client init warning in webhook:', e);
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

// 2. POST Handler for incoming Twitter Account Activity Events (Mentions, Replies, etc.)
export async function POST(request: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    // Handle tweet_create_events (User replies/mentions bot)
    if (body && body.tweet_create_events && Array.isArray(body.tweet_create_events)) {
      for (const tweet of body.tweet_create_events) {
        const authorHandle = tweet.user?.screen_name;
        const authorId = tweet.user?.id_str;
        const tweetText = tweet.text || '';
        const tweetId = tweet.id_str;

        // Skip bot's own tweets to prevent infinite loop
        const botUsername = (process.env.X_BOT_USERNAME || '@getPokePump').replace('@', '').toLowerCase();
        if (authorHandle && authorHandle.toLowerCase() === botUsername) {
          continue;
        }

        console.log(`📩 Incoming Tweet from @${authorHandle} (${tweetId}): ${tweetText}`);

        // 1. Generate / Hatch Pokemon for this user
        const hatched = await getRandomCuratedPokemon(authorHandle, tweetText);
        hatched.tweetId = tweetId;
        
        // Add to in-memory store
        pokemonStore.unshift(hatched);

        // 2. Persist to PostgreSQL Database if Prisma is available
        if (prisma) {
          try {
            // Find or create User
            const dbUser = await prisma.user.upsert({
              where: { twitterHandle: authorHandle.toLowerCase() },
              update: {
                twitterId: authorId || undefined,
                avatarUrl: tweet.user?.profile_image_url_https || undefined
              },
              create: {
                twitterHandle: authorHandle.toLowerCase(),
                twitterId: authorId || undefined,
                avatarUrl: tweet.user?.profile_image_url_https || undefined
              }
            });

            // Create Pokemon record
            await prisma.pokemon.create({
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
            await prisma.activityLog.create({
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
    }

    return NextResponse.json({ status: 'ok', received: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing Twitter Webhook Event:', error);
    return NextResponse.json({ status: 'error', message: error?.message || 'Unknown error' }, { status: 500 });
  }
}
