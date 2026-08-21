'use client';

import React, { useEffect, useState } from 'react';
import { PokemonType } from '@pokepump/shared';

interface BornCreature {
  id: string;
  number: string;
  name: string;
  type: PokemonType;
  level: number;
  badgeText: string;
  badgeType: 'new-red' | 'new-green' | 'rare' | 'epic' | 'legendary';
  stats: {
    hp: number;
    atk: number;
    def: number;
    spd: number;
  };
  creatorHandle: string;
  timeAgo: string;
  artworkUrl: string;
}

const TYPE_DOT_ICONS: Record<PokemonType, string> = {
  fire: '🔥',
  water: '💧',
  grass: '🌿',
  electric: '⚡',
  ghost: '🔮',
  psychic: '✨',
  dragon: '🐉',
  dark: '🌑',
  normal: '⚪',
  fighting: '🥊',
  flying: '🦅',
  poison: '☠️',
  ground: '🏜️',
  rock: '🪨',
  bug: '🐛',
  steel: '⚙️',
  ice: '❄️',
  fairy: '🌸',
};

export const BornFromXGrid: React.FC = () => {
  const [creatures, setCreatures] = useState<BornCreature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRecentHatched() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/pokemon?limit=10');
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          const mapped: BornCreature[] = data.map((p: any) => {
            const isLegendary = p.rarity === 'LEGENDARY';
            const isEpic = p.rarity === 'EPIC';
            const isRare = p.rarity === 'RARE';

            let badgeText = 'NEW';
            let badgeType: BornCreature['badgeType'] = 'new-red';
            if (isLegendary) {
              badgeText = 'LEGENDARY';
              badgeType = 'legendary';
            } else if (isEpic) {
              badgeText = 'EPIC';
              badgeType = 'epic';
            } else if (isRare) {
              badgeText = 'RARE';
              badgeType = 'rare';
            }

            return {
              id: p.id,
              number: p.number || `#${String(p.pokedexId).padStart(4, '0')}`,
              name: p.name,
              type: (p.type || 'normal') as PokemonType,
              level: p.level || 1,
              badgeText,
              badgeType,
              stats: {
                hp: p.stats?.hp || 50,
                atk: p.stats?.attack || 50,
                def: p.stats?.defense || 50,
                spd: p.stats?.speed || 50,
              },
              creatorHandle: (p.creatorHandle || 'trainer').replace(/^@/, ''),
              timeAgo: formatTimeAgo(p.createdAt),
              artworkUrl:
                p.artworkUrl ||
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.pokedexId}.png`,
            };
          });

          setCreatures(mapped);
        }
      } catch (err) {
        console.error('Failed to load recent hatched creatures from DB:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadRecentHatched();
  }, []);

  return (
    <section className="section-wrap" id="born">
      <div className="container">
        {/* Section Header */}
        <div className="born-section-header">
          <div>
            <h2 className="born-title">Born From X</h2>
            <p className="born-subtitle">
              Authentic Pokémon hatched live from real user replies and tweets on X.
            </p>
          </div>
          <a href="#collection" className="born-view-all-link">
            <span>View All in Collection</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--pp-text-muted)', fontSize: '14px' }}>
            Loading hatched Pokémon from database...
          </div>
        ) : creatures.length === 0 ? (
          /* Empty DB State */
          <div
            style={{
              background: 'var(--pp-bg-surface)',
              border: '1px dashed var(--pp-border-strong)',
              borderRadius: 'var(--pp-radius-lg)',
              padding: '48px 24px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🥚</div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--pp-text-primary)', marginBottom: '8px' }}>
              No Pokémon Born from X Yet
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--pp-text-secondary)', maxWidth: '460px', margin: '0 auto 20px' }}>
              Be the very first trainer to hatch a Pokémon! Reply to <b>@getPokePump</b> on X to summon your companion.
            </p>
            <a
              href="https://x.com/getPokePump"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Reply on X to Hatch</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        ) : (
          /* Real DB Hatched Cards Grid */
          <div className="born-cards-grid">
            {creatures.map((creature) => {
              return (
                <div key={creature.id} className="born-creature-card">
                  {/* Header: Badge & Number */}
                  <div className="born-card-top-row">
                    <span className={`born-badge-pill badge-${creature.badgeType}`}>
                      {creature.badgeText}
                    </span>
                    <span className="born-card-number">{creature.number}</span>
                  </div>

                  {/* Main Artwork Stage */}
                  <div className="born-artwork-stage">
                    <img
                      src={creature.artworkUrl}
                      alt={creature.name}
                      className="born-creature-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Name & Level */}
                  <div className="born-name-row">
                    <h3 className="born-creature-name">{creature.name}</h3>
                    <span className="born-creature-level">Lv. {creature.level}</span>
                  </div>

                  {/* Type Label with Icon */}
                  <div className="born-type-row" style={{ color: `var(--pp-type-${creature.type}-text)` }}>
                    <span className="born-type-symbol">{TYPE_DOT_ICONS[creature.type] || '●'}</span>
                    <span className="born-type-text">{creature.type.toUpperCase()}</span>
                  </div>

                  {/* 4 Themed Stat Bars (HP, ATK, DEF, SPD) */}
                  <div className="born-stats-block">
                    {/* HP */}
                    <div className="born-stat-item">
                      <span className="born-stat-label">HP</span>
                      <div className="born-stat-bar-track">
                        <div
                          className="born-stat-bar-fill"
                          style={{
                            width: `${Math.min(100, (creature.stats.hp / 140) * 100)}%`,
                            background: `var(--pp-type-${creature.type})`,
                          }}
                        />
                      </div>
                      <span className="born-stat-value">{creature.stats.hp}</span>
                    </div>

                    {/* ATK */}
                    <div className="born-stat-item">
                      <span className="born-stat-label">ATK</span>
                      <div className="born-stat-bar-track">
                        <div
                          className="born-stat-bar-fill"
                          style={{
                            width: `${Math.min(100, (creature.stats.atk / 140) * 100)}%`,
                            background: `var(--pp-type-${creature.type})`,
                          }}
                        />
                      </div>
                      <span className="born-stat-value">{creature.stats.atk}</span>
                    </div>

                    {/* DEF */}
                    <div className="born-stat-item">
                      <span className="born-stat-label">DEF</span>
                      <div className="born-stat-bar-track">
                        <div
                          className="born-stat-bar-fill"
                          style={{
                            width: `${Math.min(100, (creature.stats.def / 140) * 100)}%`,
                            background: `var(--pp-type-${creature.type})`,
                          }}
                        />
                      </div>
                      <span className="born-stat-value">{creature.stats.def}</span>
                    </div>

                    {/* SPD */}
                    <div className="born-stat-item">
                      <span className="born-stat-label">SPD</span>
                      <div className="born-stat-bar-track">
                        <div
                          className="born-stat-bar-fill"
                          style={{
                            width: `${Math.min(100, (creature.stats.spd / 140) * 100)}%`,
                            background: `var(--pp-type-${creature.type})`,
                          }}
                        />
                      </div>
                      <span className="born-stat-value">{creature.stats.spd}</span>
                    </div>
                  </div>

                  {/* Footer Provenance: User & X logo */}
                  <div className="born-card-footer">
                    <div className="born-creator-info">
                      <span className="born-creator-name">Born from <b>@{creature.creatorHandle}</b></span>
                      <span className="born-time-dim">{creature.timeAgo}</span>
                    </div>
                    <div className="born-x-logo" aria-label="X / Twitter">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

function formatTimeAgo(date: Date | string | undefined): string {
  if (!date) return 'Recently';
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
