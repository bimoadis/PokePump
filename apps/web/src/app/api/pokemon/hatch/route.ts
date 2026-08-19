import { NextResponse } from 'next/server';
import { pokemonStore } from '@/lib/store';
import { getRandomCuratedPokemon } from '@/lib/pokeapi';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { handle = 'anonymous', prompt = 'New reply on X' } = body;
    const pokemon = await getRandomCuratedPokemon(handle.replace('@', ''), prompt);
    pokemonStore.unshift(pokemon);
    return NextResponse.json(pokemon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to hatch pokemon' }, { status: 500 });
  }
}
