'use client';

import React, { useState } from 'react';
import { PokemonType } from '@pokepump/shared';

interface CollectionItem {
  id: string;
  pokedexId: number;
  number: string;
  name: string;
  type: PokemonType;
  secondaryType?: PokemonType | null;
  level: number;
  artworkUrl: string;
}

const AUTHENTIC_COLLECTION: CollectionItem[] = [
  {
    id: '1',
    pokedexId: 6,
    number: '#0006',
    name: 'Charizard',
    type: 'fire',
    secondaryType: 'flying',
    level: 36,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  },
  {
    id: '2',
    pokedexId: 25,
    number: '#0025',
    name: 'Pikachu',
    type: 'electric',
    secondaryType: null,
    level: 25,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    id: '3',
    pokedexId: 94,
    number: '#0094',
    name: 'Gengar',
    type: 'ghost',
    secondaryType: 'poison',
    level: 32,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
  },
  {
    id: '4',
    pokedexId: 9,
    number: '#0009',
    name: 'Blastoise',
    type: 'water',
    secondaryType: null,
    level: 36,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
  },
  {
    id: '5',
    pokedexId: 3,
    number: '#0003',
    name: 'Venusaur',
    type: 'grass',
    secondaryType: 'poison',
    level: 34,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
  },
  {
    id: '6',
    pokedexId: 150,
    number: '#0150',
    name: 'Mewtwo',
    type: 'psychic',
    secondaryType: null,
    level: 70,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
  },
  {
    id: '7',
    pokedexId: 448,
    number: '#0448',
    name: 'Lucario',
    type: 'fighting',
    secondaryType: 'steel',
    level: 38,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
  },
  {
    id: '8',
    pokedexId: 130,
    number: '#0130',
    name: 'Gyarados',
    type: 'water',
    secondaryType: 'flying',
    level: 35,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
  },
  {
    id: '9',
    pokedexId: 143,
    number: '#0143',
    name: 'Snorlax',
    type: 'normal',
    secondaryType: null,
    level: 30,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
  },
  {
    id: '10',
    pokedexId: 197,
    number: '#0197',
    name: 'Umbreon',
    type: 'dark',
    secondaryType: null,
    level: 28,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
  },
  {
    id: '11',
    pokedexId: 384,
    number: '#0384',
    name: 'Rayquaza',
    type: 'dragon',
    secondaryType: 'flying',
    level: 75,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
  },
  {
    id: '12',
    pokedexId: 149,
    number: '#0149',
    name: 'Dragonite',
    type: 'dragon',
    secondaryType: 'flying',
    level: 55,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
  },
];

export const CollectionGrid: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filtered = AUTHENTIC_COLLECTION.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase()) ||
      String(item.pokedexId).includes(search);
    const matchesType =
      selectedType === 'all' || item.type === selectedType || item.secondaryType === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="section-wrap" id="collection">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Pokémon Collection</h2>
            <p>Explore discovered Pokémon across all 18 elemental categories backed by PokéAPI.</p>
          </div>
        </div>

        <div className="filter-bar">
          <div className="filter-input-wrap">
            <span className="filter-search-icon">🔍</span>
            <input
              type="text"
              className="filter-input"
              placeholder="Search Pokémon by name, #id, or Pokédex number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="filter-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All 18 Types</option>
            <option value="fire">🔥 Fire</option>
            <option value="water">💧 Water</option>
            <option value="grass">🌿 Grass</option>
            <option value="electric">⚡ Electric</option>
            <option value="ghost">👻 Ghost</option>
            <option value="psychic">🔮 Psychic</option>
            <option value="fighting">🥊 Fighting</option>
            <option value="dragon">🐉 Dragon</option>
            <option value="dark">🌑 Dark</option>
            <option value="steel">⚙️ Steel</option>
            <option value="fairy">✨ Fairy</option>
            <option value="ice">❄️ Ice</option>
            <option value="rock">🪨 Rock</option>
            <option value="ground">🏜️ Ground</option>
            <option value="flying">🦅 Flying</option>
            <option value="poison">☠️ Poison</option>
            <option value="bug">🐛 Bug</option>
            <option value="normal">⚪ Normal</option>
          </select>
        </div>

        <div className="collection-grid">
          {filtered.map((item) => (
            <div key={item.id} className="mini-card">
              <div className="mini-card-head">
                <span style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 700 }}>
                  {item.number}
                </span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 800, color: `var(--type-${item.type})` }}>
                  {item.type}
                </span>
              </div>

              <div className={`art-container bg-${item.type}-soft`}>
                <img src={item.artworkUrl} alt={item.name} loading="lazy" />
              </div>

              <div className="mini-card-meta">
                <h4>{item.name}</h4>
                <span className="lv">Lv. {item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
