import { NextResponse } from 'next/server';
import { airdropStore } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const campaign = searchParams.get('campaign') || 'PIKACHU_100K_SPIN';
  const pool = airdropStore.filter((r) => r.campaign === campaign);

  return NextResponse.json({
    campaign,
    totalEntries: pool.length,
    poolSizePoke: 100000,
    entries: pool
  });
}
