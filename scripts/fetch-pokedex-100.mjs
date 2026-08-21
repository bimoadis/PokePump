import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function determineRarity(bst, id) {
  if (id === 144 || id === 145 || id === 146 || id === 150 || id === 151 || bst >= 580) return 'LEGENDARY';
  if (bst >= 500) return 'EPIC';
  if (bst >= 400) return 'RARE';
  return 'COMMON';
}

function calculatePowerScore(stats) {
  const weighted =
    stats.hp * 0.15 +
    stats.attack * 0.25 +
    stats.defense * 0.15 +
    stats.specialAttack * 0.25 +
    stats.specialDefense * 0.10 +
    stats.speed * 0.10;
  return Math.round(weighted * 10);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch #${id}: ${res.status}`);
  }
  const data = await res.json();

  const statsMap = {};
  data.stats.forEach((s) => {
    statsMap[s.stat.name] = s.base_stat;
  });

  const baseStats = {
    hp: statsMap['hp'] || 50,
    attack: statsMap['attack'] || 50,
    defense: statsMap['defense'] || 50,
    specialAttack: statsMap['special-attack'] || 50,
    specialDefense: statsMap['special-defense'] || 50,
    speed: statsMap['speed'] || 50,
  };

  const bst = baseStats.hp + baseStats.attack + baseStats.defense + baseStats.specialAttack + baseStats.specialDefense + baseStats.speed;
  const powerScore = calculatePowerScore(baseStats);
  const rarity = determineRarity(bst, data.id);

  const primaryType = data.types[0]?.type.name;
  const secondaryType = data.types[1]?.type.name || null;

  const artworkUrl =
    data.sprites.other['official-artwork']?.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

  const spriteUrl =
    data.sprites.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;

  // Format clean display name
  let name = capitalize(data.name);
  if (data.name === 'nidoran-f') name = 'Nidoran♀';
  else if (data.name === 'nidoran-m') name = 'Nidoran♂';
  else if (data.name === 'mr-mime') name = 'Mr. Mime';
  else if (data.name === 'farfetchd') name = "Farfetch'd";

  return {
    pokedexId: data.id,
    number: `#${String(data.id).padStart(4, '0')}`,
    name,
    species: data.name,
    type: primaryType,
    secondaryType,
    baseStats,
    basePowerScore: powerScore,
    rarity,
    artworkUrl,
    spriteUrl,
  };
}

async function main() {
  console.log('Fetching Pokémon #1 to #100 from PokéAPI...');
  const pokemonList = [];

  // Batch in chunks of 10 for speed and politeness
  const BATCH_SIZE = 10;
  for (let i = 1; i <= 100; i += BATCH_SIZE) {
    const batchPromises = [];
    for (let j = i; j < i + BATCH_SIZE && j <= 100; j++) {
      batchPromises.push(fetchPokemon(j));
    }
    const batchResults = await Promise.all(batchPromises);
    pokemonList.push(...batchResults);
    console.log(`Fetched Pokémon #${i} - #${Math.min(i + BATCH_SIZE - 1, 100)} (${pokemonList.length}/100)`);
  }

  const catalogContent = `import { PokemonType, RarityGrade } from '@pokepump/shared';

export interface CatalogPokemon {
  pokedexId: number;
  number: string;
  name: string;
  species: string;
  type: PokemonType;
  secondaryType: PokemonType | null;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  basePowerScore: number;
  rarity: RarityGrade;
  artworkUrl: string;
  spriteUrl: string;
}

export const ALL_POKEDEX_CATALOG: CatalogPokemon[] = ${JSON.stringify(pokemonList, null, 2)};
`;

  const targetPath = path.resolve(__dirname, '../apps/web/src/lib/pokedexCatalog.ts');
  fs.writeFileSync(targetPath, catalogContent, 'utf-8');
  console.log(`Successfully generated ${pokemonList.length} Pokémon catalog at ${targetPath}`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
