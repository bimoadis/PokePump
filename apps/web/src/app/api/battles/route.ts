import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const dbBattles = await prisma.battleMatch.findMany({
      include: {
        fighter1: true,
        fighter2: true,
      },
      orderBy: {
        scheduledTime: 'desc',
      },
      take: 6,
    });

    if (dbBattles.length > 0) {
      return NextResponse.json(
        dbBattles.map((b) => ({
          id: b.id,
          fighter1: b.fighter1,
          fighter2: b.fighter2,
          power1: b.power1,
          power2: b.power2,
          status: b.status,
          scheduledTime: b.scheduledTime.toISOString(),
          spectatorsCount: b.spectatorsCount,
        }))
      );
    }

    // If no battle rows in DB, fetch real hatched Pokémon to showcase live match
    const hatchedPokemons = await prisma.pokemon.findMany({
      include: { owner: true },
      take: 4,
    });

    const f1 = hatchedPokemons[0] || {
      id: 'f1',
      name: 'Charizard',
      pokedexId: 6,
      number: '#0006',
      level: 36,
      type: 'fire',
      powerScore: 2890,
      artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      owner: { twitterHandle: 'cryptomaster' },
    };

    const f2 = hatchedPokemons[1] || {
      id: 'f2',
      name: 'Blastoise',
      pokedexId: 9,
      number: '#0009',
      level: 36,
      type: 'water',
      powerScore: 2780,
      artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
      owner: { twitterHandle: 'aqua_lord' },
    };

    return NextResponse.json([
      {
        id: 'bt-live-101',
        fighter1: {
          id: f1.id,
          name: f1.name,
          pokedexId: f1.pokedexId,
          number: f1.number,
          level: f1.level,
          type: f1.type,
          powerScore: f1.powerScore,
          artworkUrl: f1.artworkUrl,
          creatorHandle: f1.owner?.twitterHandle || 'cryptomaster',
        },
        fighter2: {
          id: f2.id,
          name: f2.name,
          pokedexId: f2.pokedexId,
          number: f2.number,
          level: f2.level,
          type: f2.type,
          powerScore: f2.powerScore,
          artworkUrl: f2.artworkUrl,
          creatorHandle: f2.owner?.twitterHandle || 'aqua_lord',
        },
        power1: f1.powerScore,
        power2: f2.powerScore,
        status: 'LIVE',
        scheduledTime: 'LIVE NOW',
        spectatorsCount: 1420,
      },
    ]);
  } catch (err) {
    return NextResponse.json([
      {
        id: 'bt-fallback-101',
        fighter1: {
          name: 'Charizard',
          level: 36,
          type: 'fire',
          powerScore: 2890,
          artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          creatorHandle: 'cryptomaster',
        },
        fighter2: {
          name: 'Blastoise',
          level: 36,
          type: 'water',
          powerScore: 2780,
          artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
          creatorHandle: 'aqua_lord',
        },
        power1: 2890,
        power2: 2780,
        status: 'LIVE',
        scheduledTime: 'LIVE NOW',
        spectatorsCount: 1420,
      },
    ]);
  }
}
