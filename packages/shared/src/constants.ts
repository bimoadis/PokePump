import { PokemonType } from './types.js';

export const TYPE_ADVANTAGE_MATRIX: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  normal: { rock: 0.5, ghost: 0.0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2.0, ice: 2.0, bug: 2.0, rock: 0.5, dragon: 0.5, steel: 2.0 },
  water: { fire: 2.0, water: 0.5, grass: 0.5, ground: 2.0, rock: 2.0, dragon: 0.5 },
  grass: { fire: 0.5, water: 2.0, grass: 0.5, poison: 0.5, ground: 2.0, flying: 0.5, bug: 0.5, rock: 2.0, dragon: 0.5, steel: 0.5 },
  electric: { water: 2.0, electric: 0.5, grass: 0.5, ground: 0.0, flying: 2.0, dragon: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2.0, ice: 0.5, ground: 2.0, flying: 2.0, dragon: 2.0, steel: 0.5 },
  fighting: { normal: 2.0, ice: 2.0, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2.0, ghost: 0.0, dark: 2.0, steel: 2.0, fairy: 0.5 },
  poison: { grass: 2.0, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0.0, fairy: 2.0 },
  ground: { fire: 2.0, electric: 2.0, grass: 0.5, poison: 2.0, flying: 0.0, bug: 0.5, rock: 2.0, steel: 2.0 },
  flying: { electric: 0.5, grass: 2.0, fighting: 2.0, bug: 2.0, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2.0, poison: 2.0, psychic: 0.5, dark: 0.0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2.0, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2.0, ghost: 0.5, dark: 2.0, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2.0, ice: 2.0, fighting: 0.5, ground: 0.5, flying: 2.0, bug: 2.0, steel: 0.5 },
  ghost: { normal: 0.0, psychic: 2.0, ghost: 2.0, dark: 0.5 },
  dragon: { dragon: 2.0, steel: 0.5, fairy: 0.0 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2.0, rock: 2.0, steel: 0.5, fairy: 2.0 },
  dark: { fighting: 0.5, psychic: 2.0, ghost: 2.0, dark: 0.5, fairy: 0.5 },
  fairy: { fire: 0.5, fighting: 2.0, poison: 0.5, dragon: 2.0, dark: 2.0, steel: 0.5 }
};

export const TYPE_COLORS: Record<PokemonType, { hex: string; soft: string; border: string }> = {
  normal: { hex: '#9FA19F', soft: '#F4F4F4', border: 'rgba(159, 161, 159, 0.25)' },
  fire: { hex: '#E65A36', soft: '#FFF2ED', border: 'rgba(230, 90, 54, 0.25)' },
  water: { hex: '#3B8AE4', soft: '#EEF6FF', border: 'rgba(59, 138, 228, 0.25)' },
  grass: { hex: '#5EA843', soft: '#F0F8EC', border: 'rgba(94, 168, 67, 0.25)' },
  electric: { hex: '#E5A51A', soft: '#FFF9E6', border: 'rgba(229, 165, 26, 0.3)' },
  ice: { hex: '#5DBCCF', soft: '#EBF8FA', border: 'rgba(93, 188, 207, 0.25)' },
  fighting: { hex: '#E03020', soft: '#FDEEEB', border: 'rgba(224, 48, 32, 0.25)' },
  poison: { hex: '#9241CC', soft: '#F5ECFA', border: 'rgba(146, 65, 204, 0.25)' },
  ground: { hex: '#9E6D38', soft: '#F7F1EB', border: 'rgba(158, 109, 56, 0.25)' },
  flying: { hex: '#82A5F5', soft: '#F0F4FE', border: 'rgba(130, 165, 245, 0.25)' },
  psychic: { hex: '#D14B92', soft: '#FCEDF5', border: 'rgba(209, 75, 146, 0.25)' },
  bug: { hex: '#91A119', soft: '#F4F6E8', border: 'rgba(145, 161, 25, 0.25)' },
  rock: { hex: '#857F70', soft: '#F4F2EC', border: 'rgba(133, 127, 112, 0.25)' },
  ghost: { hex: '#8043C4', soft: '#F6EEFC', border: 'rgba(128, 67, 196, 0.25)' },
  dragon: { hex: '#5060E1', soft: '#EEF0FD', border: 'rgba(80, 96, 225, 0.25)' },
  steel: { hex: '#60A1B8', soft: '#EEF6F8', border: 'rgba(96, 161, 184, 0.25)' },
  dark: { hex: '#433E4D', soft: '#ECEAEF', border: 'rgba(67, 62, 77, 0.25)' },
  fairy: { hex: '#EE70AC', soft: '#FDF0F6', border: 'rgba(238, 112, 172, 0.25)' }
};

export const POKEDEX_CURATED_SEED = [
  { id: 25, name: 'Pikachu', type: 'electric' as PokemonType, secondaryType: null },
  { id: 6, name: 'Charizard', type: 'fire' as PokemonType, secondaryType: 'flying' as PokemonType },
  { id: 94, name: 'Gengar', type: 'ghost' as PokemonType, secondaryType: 'poison' as PokemonType },
  { id: 9, name: 'Blastoise', type: 'water' as PokemonType, secondaryType: null },
  { id: 3, name: 'Venusaur', type: 'grass' as PokemonType, secondaryType: 'poison' as PokemonType },
  { id: 150, name: 'Mewtwo', type: 'psychic' as PokemonType, secondaryType: null },
  { id: 448, name: 'Lucario', type: 'fighting' as PokemonType, secondaryType: 'steel' as PokemonType },
  { id: 130, name: 'Gyarados', type: 'water' as PokemonType, secondaryType: 'flying' as PokemonType },
  { id: 143, name: 'Snorlax', type: 'normal' as PokemonType, secondaryType: null },
  { id: 197, name: 'Umbreon', type: 'dark' as PokemonType, secondaryType: null },
  { id: 384, name: 'Rayquaza', type: 'dragon' as PokemonType, secondaryType: 'flying' as PokemonType },
  { id: 149, name: 'Dragonite', type: 'dragon' as PokemonType, secondaryType: 'flying' as PokemonType }
];
