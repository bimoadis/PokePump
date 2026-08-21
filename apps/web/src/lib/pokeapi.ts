import {
  PokemonEntity,
  PokemonStats,
  PokemonType,
  PokeApiPokemonResponse,
  calculateBaseStatTotal,
  calculatePowerScore,
  determineRarityGrade
} from '@pokepump/shared';
import { ALL_POKEDEX_CATALOG } from './pokedexCatalog';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const cache = new Map<string, PokemonEntity>();

export async function fetchPokemonFromPokeApi(
  identifier: string | number,
  creatorHandle = 'community_trainer',
  replyPrompt?: string
): Promise<PokemonEntity> {
  const key = String(identifier).toLowerCase();
  if (cache.has(key)) {
    const cached = cache.get(key)!;
    return {
      ...cached,
      id: `p-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      creatorHandle,
      replyPrompt: replyPrompt || cached.replyPrompt,
      createdAt: new Date().toISOString()
    };
  }

  // Find in deck catalog
  const catalogItem = ALL_POKEDEX_CATALOG.find(
    (c) => c.pokedexId === Number(identifier) || c.species.toLowerCase() === key || c.name.toLowerCase() === key
  );

  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/${key}`);
    if (!response.ok) {
      throw new Error(`PokéAPI responded with status: ${response.status}`);
    }

    const data = (await response.json()) as PokeApiPokemonResponse;

    const statsMap: Record<string, number> = {};
    data.stats.forEach((s) => {
      statsMap[s.stat.name] = s.base_stat;
    });

    const stats: PokemonStats = {
      hp: statsMap['hp'] || 50,
      attack: statsMap['attack'] || 50,
      defense: statsMap['defense'] || 50,
      specialAttack: statsMap['special-attack'] || 50,
      specialDefense: statsMap['special-defense'] || 50,
      speed: statsMap['speed'] || 50
    };

    const primaryType = data.types[0]?.type.name as PokemonType;
    const secondaryType = data.types[1]?.type.name ? (data.types[1].type.name as PokemonType) : null;
    const bst = calculateBaseStatTotal(stats);
    const powerScore = calculatePowerScore(stats, 1);
    const rarity = determineRarityGrade(bst, data.id === 150 || data.id === 151 || data.id === 384);

    const artworkUrl =
      data.sprites.other['official-artwork']?.front_default ||
      data.sprites.front_default ||
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    const showdownUrl = data.sprites.other.showdown?.front_default;
    const cryUrl = data.cries?.latest;

    const entity: PokemonEntity = {
      id: `p-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      pokedexId: data.id,
      number: `#${String(data.id).padStart(4, '0')}`,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      species: data.name,
      type: primaryType,
      secondaryType,
      level: 1,
      exp: 0,
      stats,
      powerScore,
      rarity,
      tweetId: `tw-${Date.now()}`,
      replyPrompt: replyPrompt || `Hatched from PokéAPI #${data.id}`,
      creatorHandle,
      artworkUrl,
      spriteUrl: data.sprites.front_default,
      showdownUrl,
      cryUrl,
      height: data.height,
      weight: data.weight,
      baseExperience: data.base_experience,
      createdAt: new Date().toISOString()
    };

    cache.set(key, entity);
    cache.set(String(data.id), entity);
    cache.set(data.name.toLowerCase(), entity);

    return entity;
  } catch (error) {
    console.error(`Error fetching Pokémon ${identifier} from PokéAPI, fallback to catalog:`, error);
    if (catalogItem) {
      return {
        id: `p-${Date.now()}`,
        pokedexId: catalogItem.pokedexId,
        number: catalogItem.number,
        name: catalogItem.name,
        species: catalogItem.species,
        type: catalogItem.type,
        secondaryType: catalogItem.secondaryType,
        level: 1,
        exp: 0,
        stats: catalogItem.baseStats,
        powerScore: catalogItem.basePowerScore,
        rarity: catalogItem.rarity,
        tweetId: `tw-${Date.now()}`,
        replyPrompt: replyPrompt || `Hatched from PokéPump Deck #${catalogItem.pokedexId}`,
        creatorHandle,
        artworkUrl: catalogItem.artworkUrl,
        spriteUrl: catalogItem.spriteUrl,
        createdAt: new Date().toISOString()
      };
    }

    return {
      id: `p-${Date.now()}`,
      pokedexId: 25,
      number: '#0025',
      name: 'Pikachu',
      species: 'pikachu',
      type: 'electric',
      secondaryType: null,
      level: 1,
      exp: 0,
      stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
      powerScore: 1450,
      rarity: 'RARE',
      tweetId: `tw-${Date.now()}`,
      replyPrompt: replyPrompt || 'Fallback Electric Pet',
      creatorHandle,
      artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      createdAt: new Date().toISOString()
    };
  }
}

/**
 * Hatch ONLY a Pokémon that exists in the active Deck (#0001 to #0100)
 */
export async function getRandomCuratedPokemon(creatorHandle = 'trainer', prompt?: string): Promise<PokemonEntity> {
  const randomCatalogItem = ALL_POKEDEX_CATALOG[Math.floor(Math.random() * ALL_POKEDEX_CATALOG.length)];
  return fetchPokemonFromPokeApi(randomCatalogItem.pokedexId, creatorHandle, prompt);
}
