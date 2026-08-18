'use client';

import React, { useState } from 'react';
import { PokemonType, RarityGrade } from '@pokepump/shared';
import { IconSearch } from './icons/CustomIcons';

interface CollectionItem {
  id: string;
  pokedexId: number;
  number: string;
  name: string;
  type: PokemonType;
  secondaryType?: PokemonType | null;
  level: number;
  powerScore: number;
  rarity: RarityGrade;
  isNew?: boolean;
  artworkUrl: string;
}

const COLLECTION_DATA: CollectionItem[] = [
  {
    id: '1',
    pokedexId: 4,
    number: '#0004',
    name: 'Charmander',
    type: 'fire',
    secondaryType: null,
    level: 5,
    powerScore: 620,
    rarity: 'COMMON',
    isNew: true,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    id: '2',
    pokedexId: 1,
    number: '#0001',
    name: 'Bulbasaur',
    type: 'grass',
    secondaryType: 'poison',
    level: 7,
    powerScore: 640,
    rarity: 'COMMON',
    isNew: true,
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    id: '3',
    pokedexId: 7,
    number: '#0007',
    name: 'Squirtle',
    type: 'water',
    secondaryType: null,
    level: 6,
    powerScore: 630,
    rarity: 'COMMON',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    id: '4',
    pokedexId: 25,
    number: '#0025',
    name: 'Pikachu',
    type: 'electric',
    secondaryType: null,
    level: 4,
    powerScore: 590,
    rarity: 'RARE',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    id: '5',
    pokedexId: 94,
    number: '#0094',
    name: 'Gengar',
    type: 'ghost',
    secondaryType: 'poison',
    level: 5,
    powerScore: 890,
    rarity: 'EPIC',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
  },
  {
    id: '6',
    pokedexId: 175,
    number: '#0175',
    name: 'Togepi',
    type: 'fairy',
    secondaryType: null,
    level: 3,
    powerScore: 480,
    rarity: 'RARE',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png',
  },
  {
    id: '7',
    pokedexId: 74,
    number: '#0074',
    name: 'Geodude',
    type: 'rock',
    secondaryType: 'ground',
    level: 6,
    powerScore: 610,
    rarity: 'COMMON',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
  },
  {
    id: '8',
    pokedexId: 6,
    number: '#0006',
    name: 'Charizard',
    type: 'fire',
    secondaryType: 'flying',
    level: 36,
    powerScore: 2890,
    rarity: 'EPIC',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  },
  {
    id: '9',
    pokedexId: 9,
    number: '#0009',
    name: 'Blastoise',
    type: 'water',
    secondaryType: null,
    level: 36,
    powerScore: 2780,
    rarity: 'EPIC',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
  },
  {
    id: '10',
    pokedexId: 150,
    number: '#0150',
    name: 'Mewtwo',
    type: 'psychic',
    secondaryType: null,
    level: 70,
    powerScore: 3950,
    rarity: 'LEGENDARY',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
  },
  {
    id: '11',
    pokedexId: 448,
    number: '#0448',
    name: 'Lucario',
    type: 'fighting',
    secondaryType: 'steel',
    level: 38,
    powerScore: 2820,
    rarity: 'EPIC',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
  },
  {
    id: '12',
    pokedexId: 384,
    number: '#0384',
    name: 'Rayquaza',
    type: 'dragon',
    secondaryType: 'flying',
    level: 75,
    powerScore: 3820,
    rarity: 'LEGENDARY',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
  },
  {
    id: '13',
    pokedexId: 197,
    number: '#0197',
    name: 'Umbreon',
    type: 'dark',
    secondaryType: null,
    level: 28,
    powerScore: 2150,
    rarity: 'RARE',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
  },
  {
    id: '14',
    pokedexId: 130,
    number: '#0130',
    name: 'Gyarados',
    type: 'water',
    secondaryType: 'flying',
    level: 35,
    powerScore: 2680,
    rarity: 'EPIC',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
  }
];

export const CollectionGrid: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'highest_power'>('newest');

  const filtered = COLLECTION_DATA.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase()) ||
      String(item.pokedexId).includes(search);
    const matchesType =
      selectedType === 'all' || item.type === selectedType || item.secondaryType === selectedType;
    const matchesRarity =
      selectedRarity === 'all' || item.rarity.toLowerCase() === selectedRarity.toLowerCase();
    const matchesLevel =
      selectedLevel === 'all' ||
      (selectedLevel === '1-10' && item.level <= 10) ||
      (selectedLevel === '11-30' && item.level > 10 && item.level <= 30) ||
      (selectedLevel === '31+' && item.level > 30);

    return matchesSearch && matchesType && matchesRarity && matchesLevel;
  });

  return (
    <section className="section-wrap" id="collection">
      <div className="container">
        {/* Main Section Card */}
        <div className="collection-feature-container">
          {/* Header Row */}
          <div className="collection-header-row">
            <div>
              <h2 className="collection-main-title">Pokémon Collection</h2>
              <p className="collection-main-subtitle">
                Explore all Pokémon born from the PokéPump community.
              </p>
            </div>

            <div className="collection-sort-wrap">
              <button
                type="button"
                className="sort-btn-pill"
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'highest_power' : 'newest')}
              >
                <span>Sort by: {sortOrder === 'newest' ? 'Newest' : 'Highest Power'}</span>
              </button>
            </div>
          </div>

          {/* Filter Toolbar Row */}
          <div className="collection-filters-toolbar">
            <div className="filter-search-box">
              <input
                type="text"
                className="filter-search-field"
                placeholder="Search Pokémon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="search-field-icon">
                <IconSearch size={16} color="var(--pp-text-muted)" />
              </span>
            </div>

            <select
              className="filter-dropdown-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="ghost">Ghost</option>
              <option value="psychic">Psychic</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="steel">Steel</option>
              <option value="ice">Ice</option>
              <option value="fairy">Fairy</option>
            </select>

            <select
              className="filter-dropdown-select"
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
            >
              <option value="all">All Rarities</option>
              <option value="common">Common</option>
              <option value="rare">Rare</option>
              <option value="epic">Epic</option>
              <option value="legendary">Legendary</option>
            </select>

            <select
              className="filter-dropdown-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="in_battle">In Battle</option>
              <option value="champion">Champion</option>
            </select>

            <select
              className="filter-dropdown-select"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="1-10">Level 1 - 10</option>
              <option value="11-30">Level 11 - 30</option>
              <option value="31+">Level 31+</option>
            </select>
          </div>

          {/* Cards Grid */}
          <div className="collection-cards-grid">
            {filtered.map((item) => (
              <div key={item.id} className="collection-creature-card">
                {/* Top Badge: NEW / Type / Rarity */}
                <div className="creature-card-badge-row">
                  {item.isNew ? (
                    <span className="card-badge-pill badge-pill-red">NEW</span>
                  ) : item.rarity === 'EPIC' || item.rarity === 'LEGENDARY' ? (
                    <span className={`pp-tag pp-tag--${item.type}`}>
                      {item.type}
                    </span>
                  ) : (
                    <span className={`pp-tag pp-tag--${item.type}`}>
                      {item.type}
                    </span>
                  )}
                </div>

                {/* Creature Artwork Stage */}
                <div className="creature-card-art-stage">
                  <img
                    src={item.artworkUrl}
                    alt={item.name}
                    className="creature-artwork-image"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Info Row */}
                <div className="creature-card-meta-bottom">
                  <h4 className="creature-name-text">{item.name}</h4>
                  <div className="creature-sub-row">
                    <span className="creature-level-label">Lv. {item.level}</span>
                    <span className="creature-number-dim">{item.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
