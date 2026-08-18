'use client';

import React from 'react';
import { PokemonType, RarityGrade } from '@pokepump/shared';

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

const BORN_CREATURES_DATA: BornCreature[] = [
  {
    id: 'b-1',
    number: '#01284',
    name: 'Flarecub',
    type: 'fire',
    level: 5,
    badgeText: 'NEW',
    badgeType: 'new-red',
    stats: { hp: 45, atk: 62, def: 48, spd: 66 },
    creatorHandle: 'PokeMaster',
    timeAgo: '2m ago',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    id: 'b-2',
    number: '#01283',
    name: 'Leafin',
    type: 'grass',
    level: 7,
    badgeText: 'NEW',
    badgeType: 'new-green',
    stats: { hp: 60, atk: 55, def: 58, spd: 72 },
    creatorHandle: 'TrainerD',
    timeAgo: '5m ago',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    id: 'b-3',
    number: '#01282',
    name: 'Aquadot',
    type: 'water',
    level: 6,
    badgeText: 'RARE',
    badgeType: 'rare',
    stats: { hp: 52, atk: 50, def: 53, spd: 60 },
    creatorHandle: 'PokeFan',
    timeAgo: '8m ago',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    id: 'b-4',
    number: '#01281',
    name: 'Sparkit',
    type: 'electric',
    level: 4,
    badgeText: 'EPIC',
    badgeType: 'epic',
    stats: { hp: 40, atk: 63, def: 40, spd: 76 },
    creatorHandle: 'VoltReply',
    timeAgo: '12m ago',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    id: 'b-5',
    number: '#01280',
    name: 'Shadowisp',
    type: 'ghost',
    level: 5,
    badgeText: 'LEGENDARY',
    badgeType: 'legendary',
    stats: { hp: 55, atk: 70, def: 40, spd: 70 },
    creatorHandle: 'NightOwl',
    timeAgo: '15m ago',
    artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
  },
];

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
  return (
    <section className="section-wrap" id="born">
      <div className="container">
        {/* Section Header */}
        <div className="born-section-header">
          <div>
            <h2 className="born-title">Born From X</h2>
            <p className="born-subtitle">
              Every reply has a chance to create something legendary.
            </p>
          </div>
          <a href="#collection" className="born-view-all-link">
            <span>View All</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 5-Card Grid matching reference design */}
        <div className="born-cards-grid">
          {BORN_CREATURES_DATA.map((creature) => {
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
                          width: `${Math.min(100, (creature.stats.hp / 80) * 100)}%`,
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
                          width: `${Math.min(100, (creature.stats.atk / 80) * 100)}%`,
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
                          width: `${Math.min(100, (creature.stats.def / 80) * 100)}%`,
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
                          width: `${Math.min(100, (creature.stats.spd / 80) * 100)}%`,
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
      </div>
    </section>
  );
};
