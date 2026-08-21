'use client';

import React, { useEffect, useState } from 'react';
import { IconEye, IconChatBubble } from './icons/CustomIcons';

interface BattleFighter {
  id?: string;
  name: string;
  pokedexId?: number;
  number?: string;
  level?: number;
  type?: string;
  powerScore?: number;
  artworkUrl?: string;
  creatorHandle?: string;
}

interface BattleMatchData {
  id: string;
  fighter1: BattleFighter;
  fighter2: BattleFighter;
  power1: number;
  power2: number;
  status: string;
  scheduledTime: string;
  spectatorsCount: number;
}

export const BattleArena: React.FC = () => {
  const [battle, setBattle] = useState<BattleMatchData>({
    id: 'bt-101',
    fighter1: {
      name: 'Charizard',
      level: 36,
      type: 'fire',
      powerScore: 2890,
      artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      creatorHandle: 'cryptomaster',
    },
    fighter2: {
      name: 'Blastoise',
      level: 36,
      type: 'water',
      powerScore: 2780,
      artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
      creatorHandle: 'aqua_lord',
    },
    power1: 2890,
    power2: 2780,
    status: 'LIVE',
    scheduledTime: 'LIVE NOW',
    spectatorsCount: 1420,
  });

  const [cheered, setCheered] = useState(false);
  const [spectators, setSpectators] = useState(1420);

  useEffect(() => {
    async function loadBattles() {
      try {
        const res = await fetch('/api/battles');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setBattle(data[0]);
            if (data[0].spectatorsCount) {
              setSpectators(data[0].spectatorsCount);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load battle data:', err);
      }
    }

    loadBattles();
  }, []);

  const totalPower = (battle.power1 || 1000) + (battle.power2 || 1000);
  const f1Ratio = Math.round(((battle.power1 || 1000) / totalPower) * 100);
  const f2Ratio = 100 - f1Ratio;

  const handleCheer = () => {
    if (!cheered) {
      setCheered(true);
      setSpectators((prev) => prev + 1);
    }
  };

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
                <div className={`fighter-art-wrap bg-${battle.fighter1?.type || 'fire'}-soft`}>
                  <img
                    src={battle.fighter1?.artworkUrl || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'}
                    alt={battle.fighter1?.name || 'Fighter 1'}
                  />
                </div>
                <h4>{battle.fighter1?.name}</h4>
                <div className="fighter-sub">Lv. {battle.fighter1?.level || 36} • @{battle.fighter1?.creatorHandle || 'trainer'}</div>
                <div className="fighter-power" style={{ color: `var(--type-${battle.fighter1?.type || 'fire'})` }}>
                  {(battle.power1 || 2890).toLocaleString()} PWR
                </div>
              </div>

              <div className="vs-brand-center">VS</div>

              <div className="fighter-box">
                <div className={`fighter-art-wrap bg-${battle.fighter2?.type || 'water'}-soft`}>
                  <img
                    src={battle.fighter2?.artworkUrl || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'}
                    alt={battle.fighter2?.name || 'Fighter 2'}
                  />
                </div>
                <h4>{battle.fighter2?.name}</h4>
                <div className="fighter-sub">Lv. {battle.fighter2?.level || 36} • @{battle.fighter2?.creatorHandle || 'trainer'}</div>
                <div className="fighter-power" style={{ color: `var(--type-${battle.fighter2?.type || 'water'})` }}>
                  {(battle.power2 || 2780).toLocaleString()} PWR
                </div>
              </div>
            </div>

            <div className="power-comparison-bar">
              <div className="bar-fire" style={{ width: `${f1Ratio}%` }} />
              <div className="bar-water" style={{ width: `${f2Ratio}%` }} />
            </div>

            <div className="arena-footer-row">
              <div className="spectator-count" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconEye size={16} color="var(--neutral-600)" />
                <span>{spectators.toLocaleString()} Spectators</span>
              </div>
              <button
                className="btn btn-primary"
                style={{ height: '36px', padding: '0 16px', fontSize: '12.5px' }}
                onClick={handleCheer}
              >
                <span>{cheered ? 'Cheered! 🎉' : 'Cheer Fighter'}</span>
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

            <a href="#collection" className="btn btn-secondary" style={{ width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
              View All Combatants in Collection →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
