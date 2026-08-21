import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

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

    // Generate HMAC SHA-256 hash using Twitter Consumer Secret
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
    const body = await request.json();

    // Handle tweet_create_events (User replies/mentions bot)
    if (body.tweet_create_events && Array.isArray(body.tweet_create_events)) {
      for (const tweet of body.tweet_create_events) {
        const authorHandle = tweet.user?.screen_name;
        const tweetText = tweet.text;
        const tweetId = tweet.id_str;

        console.log(`📩 Incoming Tweet from @${authorHandle} (${tweetId}): ${tweetText}`);
        // Game / Bot logic can trigger monster hatching or battle here
      }
    }

    // Always respond 200 OK immediately to acknowledge receipt
    return NextResponse.json({ status: 'ok', received: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing Twitter Webhook Event:', error);
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
