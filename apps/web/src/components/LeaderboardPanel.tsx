'use client';

import React, { useState } from 'react';
import {
  IconCrown,
  IconMedalSilver,
  IconMedalBronze,
  IconEggHatch,
  IconSwords,
  IconLevelUp,
  IconSparkle
} from './icons/CustomIcons';

export const LeaderboardPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trainers' | 'monsters'>('trainers');

  return (
    <section className="section-wrap" id="leaderboard">
      <div className="container">
        <div className="community-layout-grid">
          {/* Leaderboard Tile */}
          <div className="panel-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Leaderboard</h3>
                <span style={{ fontSize: '12px', color: 'var(--pp-red)', fontWeight: 700 }}>Season 1</span>
              </div>

              <div className="panel-tabs">
                <button
                  className={`tab-button ${activeTab === 'trainers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('trainers')}
                >
                  Top Trainers
                </button>
                <button
                  className={`tab-button ${activeTab === 'monsters' ? 'active' : ''}`}
                  onClick={() => setActiveTab('monsters')}
                >
                  Top Pokémon
                </button>
              </div>

              {activeTab === 'trainers' ? (
                <div className="rank-list">
                  <div className="rank-row top-1">
                    <span className="rank-badge rank-1">
                      <IconCrown size={15} color="#D97706" />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
                    </div>
                    <h5>@volt_trainer</h5>
                    <span className="score-val">14,890 PTS</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge rank-2">
                      <IconMedalSilver size={15} />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard" />
                    </div>
                    <h5>@cryptomaster</h5>
                    <span className="score-val">12,450 PTS</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge rank-3">
                      <IconMedalBronze size={15} />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="Gengar" />
                    </div>
                    <h5>@phantom_x</h5>
                    <span className="score-val">10,920 PTS</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge">4</span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo" />
                    </div>
                    <h5>@psychic_king</h5>
                    <span className="score-val">9,340 PTS</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge">5</span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="Venusaur" />
                    </div>
                    <h5>@flora_dev</h5>
                    <span className="score-val">8,710 PTS</span>
                  </div>
                </div>
              ) : (
                <div className="rank-list">
                  <div className="rank-row top-1">
                    <span className="rank-badge rank-1">
                      <IconCrown size={15} color="#D97706" />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo" />
                    </div>
                    <h5>Mewtwo #0150</h5>
                    <span className="score-val">3,950 PWR</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge rank-2">
                      <IconMedalSilver size={15} />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" alt="Rayquaza" />
                    </div>
                    <h5>Rayquaza #0384</h5>
                    <span className="score-val">3,820 PWR</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge rank-3">
                      <IconMedalBronze size={15} />
                    </span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard" />
                    </div>
                    <h5>Charizard #0006</h5>
                    <span className="score-val">2,890 PWR</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge">4</span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" alt="Lucario" />
                    </div>
                    <h5>Lucario #0448</h5>
                    <span className="score-val">2,820 PWR</span>
                  </div>

                  <div className="rank-row">
                    <span className="rank-badge">5</span>
                    <div className="avatar-sm">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="Gengar" />
                    </div>
                    <h5>Gengar #0094</h5>
                    <span className="score-val">2,750 PWR</span>
                  </div>
                </div>
              )}
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '16px' }}>
              View Complete Rankings →
            </button>
          </div>

          {/* Live Activity Stream Tile */}
          <div className="panel-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Live Activity</h3>
                <span style={{ fontSize: '12px', color: 'var(--pp-success)', fontWeight: 700 }}>● Live Stream</span>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon-bubble" style={{ color: 'var(--pp-red)', background: 'var(--pp-rarity-legendary-bg)' }}>
                    <IconEggHatch size={18} color="var(--pp-red)" />
                  </div>
                  <div className="activity-content">
                    <h5>New Pokémon Born!</h5>
                    <p>
                      <b>Charizard #0006</b> hatched from @cryptomaster
                    </p>
                  </div>
                  <span className="activity-time-stamp">2m ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon-bubble" style={{ color: 'var(--pp-type-water)', background: 'var(--pp-rarity-rare-bg)' }}>
                    <IconSwords size={18} color="var(--pp-type-water)" />
                  </div>
                  <div className="activity-content">
                    <h5>Battle Victory</h5>
                    <p>
                      <b>Blastoise</b> defeated Gengar in Arena 1
                    </p>
                  </div>
                  <span className="activity-time-stamp">6m ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon-bubble" style={{ color: 'var(--pp-type-electric)', background: 'var(--pp-rarity-new-bg)' }}>
                    <IconLevelUp size={18} color="var(--pp-success)" />
                  </div>
                  <div className="activity-content">
                    <h5>Level Up</h5>
                    <p>
                      <b>Pikachu</b> reached Level 25 (+24 PWR)
                    </p>
                  </div>
                  <span className="activity-time-stamp">11m ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon-bubble" style={{ color: 'var(--pp-type-psychic)', background: 'var(--pp-rarity-epic-bg)' }}>
                    <IconSparkle size={18} color="var(--pp-type-psychic)" />
                  </div>
                  <div className="activity-content">
                    <h5>Legendary Discovered</h5>
                    <p>
                      <b>Mewtwo #0150</b> summoned by @psychic_king
                    </p>
                  </div>
                  <span className="activity-time-stamp">24m ago</span>
                </div>
              </div>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '16px' }}>
              Inspect Event Logs →
            </button>
          </div>

          {/* Community Call to Action Card */}
          <div className="community-cta-card">
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pp-text-muted)', fontWeight: 800 }}>
                COMMUNITY DRIVEN
              </span>
              <h2 style={{ marginTop: '8px' }}>
                Join the Pokémon Battle Revolution.
              </h2>
              <p>
                Every reply on X sparks an authentic Pokémon from the official Pokédex. Build your dream squad, defeat opponents in automated confrontations, and claim the championship crown!
              </p>
            </div>

            <a
              href="https://x.com/PokePump"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-btn"
            >
              <span>Reply to @PokePump on X</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
