import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { pokemonStore } from '@/lib/store';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');

  try {
    const dbPokemons = await prisma.pokemon.findMany({
      include: {
        owner: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit ? parseInt(limit, 10) : undefined,
    });

    let result: any[] = dbPokemons.map((p) => ({
      id: p.id,
      pokedexId: p.pokedexId,
      number: p.number,
      name: p.name,
      species: p.species,
      type: p.type,
      secondaryType: p.secondaryType || null,
      level: p.level,
      exp: p.exp,
      stats: {
        hp: p.hp,
        attack: p.attack,
        defense: p.defense,
        specialAttack: p.specialAttack,
        specialDefense: p.specialDefense,
        speed: p.speed,
      },
      powerScore: p.powerScore,
      rarity: p.rarity,
      tweetId: p.tweetId,
      replyPrompt: p.replyPrompt || null,
      creatorHandle: p.owner?.twitterHandle || 'trainer',
      artworkUrl: p.artworkUrl,
      spriteUrl: p.spriteUrl,
      showdownUrl: p.showdownUrl,
      cryUrl: p.cryUrl,
      height: p.height,
      weight: p.weight,
      baseExperience: p.baseExperience,
      createdAt: p.createdAt.toISOString(),
    }));

    // If DB is empty, provide the in-memory fallback
    if (result.length === 0 && pokemonStore.length > 0) {
      result = pokemonStore.map((p) => ({
        ...p,
        secondaryType: p.secondaryType || null,
        replyPrompt: p.replyPrompt || null,
      }));
    }

    if (type && type !== 'all') {
      result = result.filter((p) => p.type === type || p.secondaryType === type);
    }

    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.number.toLowerCase().includes(q) ||
          p.species.toLowerCase().includes(q) ||
          (p.creatorHandle && p.creatorHandle.toLowerCase().includes(q))
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching hatched pokemons:', error);
    return NextResponse.json(pokemonStore);
  }
}
