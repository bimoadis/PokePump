import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'PokéPump Unified Serverless Engine (Vercel Ready)',
    timestamp: new Date().toISOString()
  });
}
