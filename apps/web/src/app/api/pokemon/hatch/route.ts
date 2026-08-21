import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { pokemonStore } from '@/lib/store';
import { getRandomCuratedPokemon } from '@/lib/pokeapi';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { handle = 'anonymous', prompt = 'New reply on X' } = body;
    const cleanHandle = handle.trim().replace(/^@/, '').toLowerCase();

    if (!cleanHandle) {
      return NextResponse.json({ error: 'Twitter handle is required' }, { status: 400 });
    }

    // 1. Check if this X account already hatched a Pokémon in DB
    try {
      const existingUserWithPokemon = await prisma.user.findUnique({
        where: { twitterHandle: cleanHandle },
        include: { pokemons: true },
      });

      if (existingUserWithPokemon && existingUserWithPokemon.pokemons.length > 0) {
        const owned = existingUserWithPokemon.pokemons[0];
        return NextResponse.json(
          {
            success: false,
            error: `Account @${cleanHandle} has already hatched a Pokémon (${owned.name} ${owned.number}). Each X account can only hatch 1 Pokémon!`,
            alreadyHatched: true,
            pokemon: owned,
          },
          { status: 400 }
        );
      }
    } catch (dbErr) {
      console.warn('DB check fallback to memory store:', dbErr);
    }

    // 2. Check in-memory store
    const existingInStore = pokemonStore.find(
      (p) => p.creatorHandle.toLowerCase().replace(/^@/, '') === cleanHandle
    );
    if (existingInStore) {
      return NextResponse.json(
        {
          success: false,
          error: `Account @${cleanHandle} has already hatched a Pokémon (${existingInStore.name} ${existingInStore.number}). Each X account can only hatch 1 Pokémon!`,
          alreadyHatched: true,
          pokemon: existingInStore,
        },
        { status: 400 }
      );
    }

    // 3. Hatch new Pokémon
    const pokemon = await getRandomCuratedPokemon(cleanHandle, prompt);
    pokemonStore.unshift(pokemon);

    // 4. Save to Database
    try {
      const user = await prisma.user.upsert({
        where: { twitterHandle: cleanHandle },
        update: {},
        create: {
          twitterHandle: cleanHandle,
          role: 'TRAINER',
        },
      });

      await prisma.pokemon.create({
        data: {
          id: pokemon.id,
          pokedexId: pokemon.pokedexId,
          number: pokemon.number,
          name: pokemon.name,
          species: pokemon.species,
          type: pokemon.type as any,
          secondaryType: pokemon.secondaryType ? (pokemon.secondaryType as any) : null,
          level: pokemon.level,
          exp: pokemon.exp,
          hp: pokemon.stats.hp,
          attack: pokemon.stats.attack,
          defense: pokemon.stats.defense,
          specialAttack: pokemon.stats.specialAttack,
          specialDefense: pokemon.stats.specialDefense,
          speed: pokemon.stats.speed,
          powerScore: pokemon.powerScore,
          rarity: pokemon.rarity as any,
          tweetId: pokemon.tweetId,
          replyPrompt: pokemon.replyPrompt,
          artworkUrl: pokemon.artworkUrl,
          spriteUrl: pokemon.spriteUrl,
          showdownUrl: pokemon.showdownUrl,
          cryUrl: pokemon.cryUrl,
          height: pokemon.height,
          weight: pokemon.weight,
          baseExperience: pokemon.baseExperience,
          ownerId: user.id,
        },
      });

      await prisma.activityLog.create({
        data: {
          type: 'born',
          title: `${pokemon.name} Hatched!`,
          description: `@${cleanHandle} hatched a Level ${pokemon.level} ${pokemon.name} (Power: ${pokemon.powerScore})`,
          metadata: {
            pokemonId: pokemon.id,
            handle: cleanHandle,
          },
        },
      });
    } catch (saveErr) {
      console.error('Error saving hatched Pokemon to DB:', saveErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Successfully hatched ${pokemon.name}!`,
        pokemon,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to hatch pokemon' }, { status: 500 });
  }
}
