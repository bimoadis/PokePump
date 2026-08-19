import { NextResponse } from 'next/server';
import { pokemonStore } from '@/lib/store';

export async function GET() {
  const f1 = pokemonStore[0] || null;
  const f2 = pokemonStore[3] || null;

  return NextResponse.json([
    {
      id: 'bt-101',
      fighter1: f1,
      fighter2: f2,
      power1: f1?.powerScore || 2400,
      power2: f2?.powerScore || 2100,
      status: 'LIVE',
      scheduledTime: 'LIVE NOW',
      spectatorsCount: 1420
    }
  ]);
}
