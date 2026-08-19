import { NextResponse } from 'next/server';
import { pokemonStore } from '@/lib/store';
import { simulateTurnBasedBattle } from '@pokepump/shared';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fighter1Id, fighter2Id } = body;

    const f1 = pokemonStore.find((p) => p.id === fighter1Id || String(p.pokedexId) === fighter1Id);
    const f2 = pokemonStore.find((p) => p.id === fighter2Id || String(p.pokedexId) === fighter2Id);

    if (!f1 || !f2) {
      return NextResponse.json({ error: 'Invalid fighter IDs' }, { status: 400 });
    }

    const result = simulateTurnBasedBattle(f1, f2);
    return NextResponse.json({
      fighter1: f1,
      fighter2: f2,
      winner: result.winnerIndex === 1 ? f1 : f2,
      log: result.log,
      finalRatio: result.finalRatio
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to simulate battle' }, { status: 500 });
  }
}
