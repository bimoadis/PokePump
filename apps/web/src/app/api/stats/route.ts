import { NextResponse } from 'next/server';
import { pokemonStore } from '@/lib/store';

export async function GET() {
  return NextResponse.json({
    totalPokemonBorn: 12842 + pokemonStore.length,
    totalTrainers: 8421,
    totalBattlesHeld: 3215,
    totalRepliesPumped: 67892
  });
}
