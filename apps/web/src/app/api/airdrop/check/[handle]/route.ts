import { NextResponse } from 'next/server';
import { airdropStore, pokemonStore } from '@/lib/store';

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  const handle = params.handle.replace(/^@/, '').toLowerCase();
  const registration = airdropStore.find((r) => r.twitterHandle.toLowerCase() === handle);
  const pikachu = pokemonStore.find(
    (p) =>
      p.creatorHandle.toLowerCase().replace(/^@/, '') === handle &&
      (p.pokedexId === 25 || p.name.toLowerCase() === 'pikachu')
  );

  return NextResponse.json({
    twitterHandle: handle,
    isRegistered: !!registration,
    ownsPikachu: !!pikachu,
    entry: registration || null
  });
}
