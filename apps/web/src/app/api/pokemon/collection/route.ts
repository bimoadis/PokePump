import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ALL_POKEDEX_CATALOG, CatalogPokemon } from '@/lib/pokedexCatalog';
import { pokemonStore } from '@/lib/store';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const rarity = searchParams.get('rarity');
    const status = searchParams.get('status'); // 'all' | 'hatched' | 'unhatched'
    const search = searchParams.get('search');
    const sort = searchParams.get('sort'); // 'newest' | 'highest_power' | 'pokedex'

    // 1. Fetch hatched Pokémon from DB (with fallback to in-memory store)
    let hatchedPokemons: any[] = [];
    try {
      hatchedPokemons = await prisma.pokemon.findMany({
        include: {
          owner: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (dbErr) {
      console.warn('DB query failed, fallback to in-memory store:', dbErr);
      hatchedPokemons = pokemonStore.map((p) => ({
        ...p,
        owner: { twitterHandle: p.creatorHandle },
      }));
    }

    // 2. Build map of hatched Pokémon grouped by pokedexId
    const hatchedByPokedexId = new Map<number, any[]>();
    hatchedPokemons.forEach((p) => {
      const list = hatchedByPokedexId.get(p.pokedexId) || [];
      list.push(p);
      hatchedByPokedexId.set(p.pokedexId, list);
    });

    // 3. Map over catalog to build full collection items
    const catalogPokedexIds = new Set(ALL_POKEDEX_CATALOG.map((c) => c.pokedexId));

    const collectionItems = ALL_POKEDEX_CATALOG.map((cat: CatalogPokemon) => {
      const hatchedList = hatchedByPokedexId.get(cat.pokedexId) || [];
      const isHatched = hatchedList.length > 0;
      const primaryHatched = isHatched ? hatchedList[0] : null;

      return {
        id: primaryHatched ? primaryHatched.id : `catalog-${cat.pokedexId}`,
        pokedexId: cat.pokedexId,
        number: cat.number,
        name: primaryHatched ? primaryHatched.name : cat.name,
        species: cat.species,
        type: (primaryHatched?.type || cat.type) as string,
        secondaryType: (primaryHatched?.secondaryType ?? cat.secondaryType) as string | null,
        level: primaryHatched ? primaryHatched.level : 1,
        powerScore: primaryHatched ? primaryHatched.powerScore : cat.basePowerScore,
        rarity: (primaryHatched?.rarity || cat.rarity) as string,
        artworkUrl: primaryHatched?.artworkUrl || cat.artworkUrl,
        spriteUrl: primaryHatched?.spriteUrl || cat.spriteUrl,
        isHatched,
        hatchedCount: hatchedList.length,
        isNew: primaryHatched ? (Date.now() - new Date(primaryHatched.createdAt).getTime() < 86400000 * 3) : false,
        creatorHandle: primaryHatched?.owner?.twitterHandle || primaryHatched?.creatorHandle || null,
        createdAt: primaryHatched?.createdAt || null,
      };
    });

    // 4. Also append any hatched Pokémon from DB that weren't in the default catalog
    hatchedPokemons.forEach((p) => {
      if (!catalogPokedexIds.has(p.pokedexId)) {
        collectionItems.push({
          id: p.id,
          pokedexId: p.pokedexId,
          number: p.number,
          name: p.name,
          species: p.species,
          type: p.type,
          secondaryType: p.secondaryType || null,
          level: p.level,
          powerScore: p.powerScore,
          rarity: p.rarity,
          artworkUrl: p.artworkUrl,
          spriteUrl: p.spriteUrl,
          isHatched: true,
          hatchedCount: 1,
          isNew: true,
          creatorHandle: p.owner?.twitterHandle || p.creatorHandle || null,
          createdAt: p.createdAt,
        });
      }
    });

    // 5. Apply Filters
    let result = collectionItems;

    if (type && type !== 'all') {
      result = result.filter(
        (item) => item.type.toLowerCase() === type.toLowerCase() || item.secondaryType?.toLowerCase() === type.toLowerCase()
      );
    }

    if (rarity && rarity !== 'all') {
      result = result.filter(
        (item) => item.rarity.toLowerCase() === rarity.toLowerCase()
      );
    }

    if (status && status !== 'all') {
      if (status === 'hatched' || status === 'available') {
        result = result.filter((item) => item.isHatched);
      } else if (status === 'unhatched' || status === 'not_hatched') {
        result = result.filter((item) => !item.isHatched);
      }
    }

    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.number.toLowerCase().includes(q) ||
          String(item.pokedexId).includes(q) ||
          item.species.toLowerCase().includes(q)
      );
    }

    // 6. Apply Sorting
    if (sort === 'highest_power') {
      result.sort((a, b) => b.powerScore - a.powerScore);
    } else if (sort === 'newest') {
      // Hatched first, sorted by newest hatch date, then unhatched by pokedexId
      result.sort((a, b) => {
        if (a.isHatched && !b.isHatched) return -1;
        if (!a.isHatched && b.isHatched) return 1;
        if (a.isHatched && b.isHatched) {
          const dateA = new Date(a.createdAt || 0).getTime();
          const dateB = new Date(b.createdAt || 0).getTime();
          return dateB - dateA;
        }
        return a.pokedexId - b.pokedexId;
      });
    } else {
      // Default pokedex order
      result.sort((a, b) => a.pokedexId - b.pokedexId);
    }

    return NextResponse.json({
      total: result.length,
      totalHatched: collectionItems.filter((i) => i.isHatched).length,
      totalUnhatched: collectionItems.filter((i) => !i.isHatched).length,
      items: result,
    });
  } catch (error) {
    console.error('Error fetching collection:', error);
    return NextResponse.json({ error: 'Failed to fetch collection' }, { status: 500 });
  }
}
