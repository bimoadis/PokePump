'use client';

import React, { useState, useEffect } from 'react';
import { PokemonType, RarityGrade } from '@pokepump/shared';
import { IconSearch } from './icons/CustomIcons';

interface CollectionItem {
  id: string;
  pokedexId: number;
  number: string;
  name: string;
  species: string;
  type: PokemonType;
  secondaryType?: PokemonType | null;
  level: number;
  powerScore: number;
  rarity: RarityGrade;
  isNew?: boolean;
  isHatched: boolean;
  hatchedCount?: number;
  creatorHandle?: string | null;
  artworkUrl: string;
  spriteUrl?: string;
  createdAt?: string | null;
}

export const CollectionGrid: React.FC = () => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortOrder, setSortOrder] = useState<'pokedex' | 'highest_power' | 'newest'>('pokedex');
  const [totalHatched, setTotalHatched] = useState(0);

  useEffect(() => {
    async function fetchCollection() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/pokemon/collection');
        if (!res.ok) throw new Error('Failed to fetch collection');
        const data = await res.json();
        if (data.items) {
          setCollection(data.items);
          setTotalHatched(data.totalHatched || 0);
        }
      } catch (err) {
        console.error('Error loading collection:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollection();
  }, []);

  const filtered = collection.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase()) ||
      String(item.pokedexId).includes(search) ||
      item.species?.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      selectedType === 'all' || item.type === selectedType || item.secondaryType === selectedType;

    const matchesRarity =
      selectedRarity === 'all' || item.rarity.toLowerCase() === selectedRarity.toLowerCase();

    const matchesStatus =
      selectedStatus === 'all' ||
      (selectedStatus === 'hatched' && item.isHatched) ||
      (selectedStatus === 'unhatched' && !item.isHatched);

    const matchesLevel =
      selectedLevel === 'all' ||
      (!item.isHatched && selectedLevel === 'all') ||
      (selectedLevel === '1-10' && item.isHatched && item.level <= 10) ||
      (selectedLevel === '11-30' && item.isHatched && item.level > 10 && item.level <= 30) ||
      (selectedLevel === '31+' && item.isHatched && item.level > 30);

    return matchesSearch && matchesType && matchesRarity && matchesStatus && matchesLevel;
  });

  // Apply sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'highest_power') {
      return b.powerScore - a.powerScore;
    }
    if (sortOrder === 'newest') {
      if (a.isHatched && !b.isHatched) return -1;
      if (!a.isHatched && b.isHatched) return 1;
      if (a.isHatched && b.isHatched) {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      }
      return a.pokedexId - b.pokedexId;
    }
    return a.pokedexId - b.pokedexId;
  });

  return (
    <section className="section-wrap" id="collection">
      <div className="container">
        {/* Main Section Card */}
        <div className="collection-feature-container">
          {/* Header Row */}
          <div className="collection-header-row">
            <div>
              <h2 className="collection-main-title">
                <span className="brand-poke">Poké</span>mon Collection
              </h2>
              <p className="collection-main-subtitle">
                Explore all Pokémon in the PokéPump universe. Unhatched species can be summoned by replying on X!
              </p>
            </div>

            <div className="collection-sort-wrap" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '6px 12px',
                  borderRadius: 'var(--pp-radius-pill)',
                  background: 'var(--pp-rarity-new-bg)',
                  color: 'var(--pp-success)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                }}
              >
                {totalHatched} / {collection.length} Hatched
              </div>

              <button
                type="button"
                className="sort-btn-pill"
                onClick={() => {
                  if (sortOrder === 'pokedex') setSortOrder('highest_power');
                  else if (sortOrder === 'highest_power') setSortOrder('newest');
                  else setSortOrder('pokedex');
                }}
              >
                <span>
                  Sort: {sortOrder === 'pokedex' ? 'Pokédex #' : sortOrder === 'highest_power' ? 'Highest Power' : 'Newest Hatched'}
                </span>
              </button>
            </div>
          </div>

          {/* Filter Toolbar Row */}
          <div className="collection-filters-toolbar">
            <div className="filter-search-box">
              <input
                type="text"
                className="filter-search-field"
                placeholder="Search Pokémon or #..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="search-field-icon">
                <IconSearch size={16} color="var(--pp-text-muted)" />
              </span>
            </div>

            <select
              className="filter-dropdown-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="hatched">Hatched Only</option>
              <option value="unhatched">Not Hatched</option>
            </select>

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
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--pp-text-muted)' }}>
              Loading Pokémon Collection...
            </div>
          ) : sorted.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--pp-text-muted)' }}>
              No Pokémon found matching your filter criteria.
            </div>
          ) : (
            <div className="collection-cards-grid">
              {sorted.map((item) => {
                const isHatched = item.isHatched;

                return (
                  <div
                    key={item.id || item.pokedexId}
                    className={`collection-creature-card ${!isHatched ? 'is-unhatched' : ''}`}
                    title={!isHatched ? `${item.name} has not been hatched yet. Reply on X to spawn!` : `${item.name} Lv. ${item.level}`}
                  >
                    {/* Top Badge Row */}
                    <div className="creature-card-badge-row">
                      {isHatched ? (
                        item.isNew ? (
                          <span className="card-badge-pill badge-pill-red">NEW</span>
                        ) : (
                          <span className={`pp-tag pp-tag--${item.type}`}>
                            {item.type}
                          </span>
                        )
                      ) : (
                        <span className="card-badge-pill badge-pill-unhatched">
                          UNHATCHED
                        </span>
                      )}

                      {isHatched && item.rarity === 'LEGENDARY' && (
                        <span className="card-badge-pill badge-pill-red">★ LEGEND</span>
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

                      {/* Prominent Centered Label for Unhatched Pokémon */}
                      {!isHatched && (
                        <div className="unhatched-center-label">
                          NOT HATCHED
                        </div>
                      )}
                    </div>

                    {/* Bottom Info Row */}
                    <div className="creature-card-meta-bottom">
                      <h4 className="creature-name-text">{item.name}</h4>
                      <div className="creature-sub-row">
                        {isHatched ? (
                          <span className="creature-level-label">Lv. {item.level}</span>
                        ) : (
                          <span className="creature-level-label" style={{ color: 'var(--pp-text-muted)', fontSize: '10px' }}>
                            Unhatched
                          </span>
                        )}
                        <span className="creature-number-dim">{item.number}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
