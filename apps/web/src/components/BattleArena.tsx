'use client';

import React from 'react';
import { IconEye, IconChatBubble } from './icons/CustomIcons';

export const BattleArena: React.FC = () => {
  return (
    <section className="section-wrap" id="battles">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Battle Arena & Matches</h2>
            <p>Real-time autonomous confrontations where community Pokémon fight for supremacy.</p>
          </div>
        </div>

        <div className="battle-layout-grid">
          {/* Live Arena Card */}
          <div className="battle-arena-card">
            <div className="arena-top-row">
              <span className="badge-live">
                <span className="pulse-dot" /> LIVE ARENA
              </span>
              <span style={{ fontSize: '12px', color: 'var(--neutral-500)', fontWeight: 600 }}>
                Round 3 / 5
              </span>
            </div>

            <div className="vs-arena-stage">
              <div className="fighter-box">
                <div className="fighter-art-wrap bg-fire-soft">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                    alt="Charizard"
                  />
                </div>
                <h4>Charizard</h4>
                <div className="fighter-sub">Lv. 36 • @cryptomaster</div>
                <div className="fighter-power" style={{ color: 'var(--type-fire)' }}>
                  2,890 PWR
                </div>
              </div>

              <div className="vs-brand-center">VS</div>

              <div className="fighter-box">
                <div className="fighter-art-wrap bg-water-soft">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                    alt="Blastoise"
                  />
                </div>
                <h4>Blastoise</h4>
                <div className="fighter-sub">Lv. 36 • @aqua_lord</div>
                <div className="fighter-power" style={{ color: 'var(--type-water)' }}>
                  2,780 PWR
                </div>
              </div>
            </div>

            <div className="power-comparison-bar">
              <div className="bar-fire" style={{ width: '51%' }} />
              <div className="bar-water" style={{ width: '49%' }} />
            </div>

            <div className="arena-footer-row">
              <div className="spectator-count" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconEye size={16} color="var(--neutral-600)" />
                <span>1,420 Spectators</span>
              </div>
              <button className="btn btn-primary" style={{ height: '36px', padding: '0 16px', fontSize: '12.5px' }}>
                <span>Cheer with Reply</span>
                <IconChatBubble size={14} color="#FFFFFF" />
              </button>
            </div>
          </div>

          {/* Schedule Column */}
          <div className="schedule-card" id="schedule">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Upcoming Matches</h3>
                <span style={{ fontSize: '12px', color: 'var(--brand-500)', fontWeight: 700 }}>Auto-Scheduled</span>
              </div>

              <div className="match-row-item">
                <div className="match-time-col">
                  14:00 <span>Today</span>
                </div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Pikachu</h5>
                    <span>Lv. 25 • #0025</span>
                  </div>
                </div>
                <div className="match-vs-divider">VS</div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="Gengar" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Gengar</h5>
                    <span>Lv. 32 • #0094</span>
                  </div>
                </div>
                <span className="status-pill">Next</span>
              </div>

              <div className="match-row-item">
                <div className="match-time-col">
                  14:30 <span>Today</span>
                </div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" alt="Lucario" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Lucario</h5>
                    <span>Lv. 38 • #0448</span>
                  </div>
                </div>
                <div className="match-vs-divider">VS</div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Mewtwo</h5>
                    <span>Lv. 70 • #0150</span>
                  </div>
                </div>
                <span className="status-pill">Queued</span>
              </div>

              <div className="match-row-item">
                <div className="match-time-col">
                  15:00 <span>Today</span>
                </div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" alt="Rayquaza" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Rayquaza</h5>
                    <span>Lv. 75 • #0384</span>
                  </div>
                </div>
                <div className="match-vs-divider">VS</div>
                <div className="match-fighter-side">
                  <div className="avatar-sm">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" alt="Dragonite" />
                  </div>
                  <div className="match-fighter-info">
                    <h5>Dragonite</h5>
                    <span>Lv. 55 • #0149</span>
                  </div>
                </div>
                <span className="status-pill">Queued</span>
              </div>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '16px' }}>
              View Full Tournament Schedule →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
