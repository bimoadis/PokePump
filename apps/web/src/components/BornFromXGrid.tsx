'use client';

import React from 'react';
import { PokemonEntity } from '@pokepump/shared';

interface BornFromXGridProps {
  pokemons?: PokemonEntity[];
}

const AUTHENTIC_POKEMON_DEFAULTS: PokemonEntity[] = [
  {
    id: 'p-006',
    pokedexId: 6,
    number: '#0006',
    name: 'Charizard',
    species: 'charizard',
    type: 'fire',
    secondaryType: 'flying',
    level: 36,
    exp: 4800,
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    powerScore: 2890,
    rarity: 'EPIC',
    tweetId: 'tw-184201',
    creatorHandle: 'cryptomaster',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    showdownUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p-025',
    pokedexId: 25,
    number: '#0025',
    name: 'Pikachu',
    species: 'pikachu',
    type: 'electric',
    secondaryType: null,
    level: 25,
    exp: 2400,
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    powerScore: 1850,
    rarity: 'RARE',
    tweetId: 'tw-184202',
    creatorHandle: 'volt_trainer',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    showdownUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p-094',
    pokedexId: 94,
    number: '#0094',
    name: 'Gengar',
    species: 'gengar',
    type: 'ghost',
    secondaryType: 'poison',
    level: 32,
    exp: 3900,
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    powerScore: 2750,
    rarity: 'EPIC',
    tweetId: 'tw-184203',
    creatorHandle: 'phantom_x',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    showdownUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p-150',
    pokedexId: 150,
    number: '#0150',
    name: 'Mewtwo',
    species: 'mewtwo',
    type: 'psychic',
    secondaryType: null,
    level: 70,
    exp: 15000,
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    powerScore: 3950,
    rarity: 'LEGENDARY',
    tweetId: 'tw-184204',
    creatorHandle: 'psychic_king',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    showdownUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p-448',
    pokedexId: 448,
    number: '#0448',
    name: 'Lucario',
    species: 'lucario',
    type: 'fighting',
    secondaryType: 'steel',
    level: 38,
    exp: 5100,
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    powerScore: 2820,
    rarity: 'EPIC',
    tweetId: 'tw-184205',
    creatorHandle: 'flora_dev',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    showdownUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/448.gif',
    createdAt: new Date().toISOString(),
  },
];

export const BornFromXGrid: React.FC<BornFromXGridProps> = ({
  pokemons = AUTHENTIC_POKEMON_DEFAULTS,
}) => {
  return (
    <section className="section-wrap" id="born">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Born From X</h2>
            <p>Authentic Pokémon generated directly from community replies on X via PokéAPI.</p>
          </div>
          <a href="#collection" className="link-action">
            View All Born Pokémon →
          </a>
        </div>

        <div className="pokemon-cards-grid">
          {pokemons.map((pokemon) => {
            const bgClass = `bg-${pokemon.type}-soft`;
            return (
              <div key={pokemon.id} className="pokemon-card">
                <div className="pokemon-card-head">
                  <span className="pokemon-card-num">{pokemon.number}</span>
                  <span className={`badge badge-${pokemon.rarity.toLowerCase()}`}>{pokemon.rarity}</span>
                </div>

                <div className={`pokemon-card-image-area ${bgClass}`}>
                  <img
                    src={pokemon.artworkUrl}
                    alt={pokemon.name}
                    className="pokemon-artwork-img"
                    loading="lazy"
                  />
                </div>

                <div className="pokemon-card-title-row">
                  <h3>{pokemon.name}</h3>
                  <span className="lvl-tag">Lv. {pokemon.level}</span>
                </div>

                <div className="type-pill-group">
                  <div className="type-pill">
                    <span>●</span> {pokemon.type.toUpperCase()}
                  </div>
                  {pokemon.secondaryType && (
                    <div className="type-pill" style={{ opacity: 0.9 }}>
                      <span>●</span> {pokemon.secondaryType.toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="stat-bars-group">
                  <div className="stat-bar-row">
                    <span className="stat-label">HP</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${Math.min(100, (pokemon.stats.hp / 140) * 100)}%`, background: '#22C55E' }} />
                    </div>
                    <span className="stat-val">{pokemon.stats.hp}</span>
                  </div>

                  <div className="stat-bar-row">
                    <span className="stat-label">ATK</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${Math.min(100, (pokemon.stats.attack / 140) * 100)}%`, background: '#EF4444' }} />
                    </div>
                    <span className="stat-val">{pokemon.stats.attack}</span>
                  </div>

                  <div className="stat-bar-row">
                    <span className="stat-label">DEF</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${Math.min(100, (pokemon.stats.defense / 140) * 100)}%`, background: '#3B82F6' }} />
                    </div>
                    <span className="stat-val">{pokemon.stats.defense}</span>
                  </div>

                  <div className="stat-bar-row">
                    <span className="stat-label">SpA</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${Math.min(100, (pokemon.stats.specialAttack / 140) * 100)}%`, background: '#A855F7' }} />
                    </div>
                    <span className="stat-val">{pokemon.stats.specialAttack}</span>
                  </div>

                  <div className="stat-bar-row">
                    <span className="stat-label">SPD</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${Math.min(100, (pokemon.stats.speed / 140) * 100)}%`, background: '#F59E0B' }} />
                    </div>
                    <span className="stat-val">{pokemon.stats.speed}</span>
                  </div>
                </div>

                <div className="pokemon-card-footer">
                  <span>Bred by <b>@{pokemon.creatorHandle}</b></span>
                  <span>⚡ <b>{pokemon.powerScore}</b></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
