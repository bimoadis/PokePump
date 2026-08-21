'use client';

import React, { useState, useEffect } from 'react';
import {
  IconCrown,
  IconMedalSilver,
  IconMedalBronze,
  IconEggHatch,
  IconSwords,
  IconLevelUp,
  IconSparkle
} from './icons/CustomIcons';

interface TrainerRank {
  handle: string;
  avatar: string;
  score: string;
  pokemonCount?: number;
}

interface MonsterRank {
  id: string;
  name: string;
  number: string;
  score: string;
  spriteUrl: string;
}

interface ActivityItem {
  id: string;
  type: string;
  title: string;
  description: string;
  iconType: string;
  timeAgo: string;
}

export const LeaderboardPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trainers' | 'monsters'>('trainers');
  const [trainers, setTrainers] = useState<TrainerRank[]>([
    { handle: 'volt_trainer', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', score: '14,890 PTS' },
    { handle: 'cryptomaster', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', score: '12,450 PTS' },
    { handle: 'phantom_x', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', score: '10,920 PTS' },
    { handle: 'psychic_king', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', score: '9,340 PTS' },
    { handle: 'flora_dev', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', score: '8,710 PTS' }
  ]);
  const [monsters, setMonsters] = useState<MonsterRank[]>([
    { id: 'm1', name: 'Mewtwo', number: '#0150', score: '3,950 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' },
    { id: 'm2', name: 'Rayquaza', number: '#0384', score: '3,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png' },
    { id: 'm3', name: 'Charizard', number: '#0006', score: '2,890 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 'm4', name: 'Lucario', number: '#0448', score: '2,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png' },
    { id: 'm5', name: 'Gengar', number: '#0094', score: '2,750 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' }
  ]);
  const [activities, setActivities] = useState<ActivityItem[]>([
    { id: 'a1', type: 'born', title: 'New Pokémon Born!', description: 'Charizard #0006 hatched from @cryptomaster', iconType: 'egg', timeAgo: '2m ago' },
    { id: 'a2', type: 'battle_win', title: 'Battle Victory', description: 'Blastoise defeated Gengar in Arena 1', iconType: 'swords', timeAgo: '6m ago' },
    { id: 'a3', type: 'level_up', title: 'Level Up', description: 'Pikachu reached Level 25 (+24 PWR)', iconType: 'levelup', timeAgo: '11m ago' },
    { id: 'a4', type: 'legendary', title: 'Legendary Discovered', description: 'Mewtwo #0150 summoned by @psychic_king', iconType: 'sparkle', timeAgo: '24m ago' }
  ]);

  useEffect(() => {
    async function loadLeaderboardAndActivities() {
      try {
        const [lbRes, actRes] = await Promise.all([
          fetch('/api/leaderboard'),
          fetch('/api/activities'),
        ]);

        if (lbRes.ok) {
          const lbData = await lbRes.json();
          if (lbData.trainers?.length) setTrainers(lbData.trainers);
          if (lbData.monsters?.length) setMonsters(lbData.monsters);
        }

        if (actRes.ok) {
          const actData = await actRes.json();
          if (Array.isArray(actData) && actData.length > 0) {
            setActivities(actData);
          }
        }
      } catch (err) {
        console.error('Failed to load leaderboard/activity data:', err);
      }
    }

    loadLeaderboardAndActivities();
  }, []);

  const renderActivityIcon = (iconType: string) => {
    switch (iconType) {
      case 'egg':
        return <IconEggHatch size={18} color="var(--pp-red)" />;
      case 'swords':
      case 'battle_win':
        return <IconSwords size={18} color="var(--pp-type-water)" />;
      case 'levelup':
      case 'level_up':
        return <IconLevelUp size={18} color="var(--pp-success)" />;
      case 'sparkle':
      case 'legendary':
      default:
        return <IconSparkle size={18} color="var(--pp-type-psychic)" />;
    }
  };

  return (
    <section className="section-wrap" id="leaderboard">
      <div className="container">
        <div className="community-layout-grid">
          {/* Leaderboard Tile */}
          <div className="panel-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Leaderboard</h3>
                <span style={{ fontSize: '12px', color: 'var(--pp-red)', fontWeight: 700 }}>Season 1 Live</span>
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
                  {trainers.map((t, idx) => (
                    <div key={t.handle} className={`rank-row ${idx === 0 ? 'top-1' : ''}`}>
                      <span className={`rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}`}>
                        {idx === 0 ? (
                          <IconCrown size={15} color="#D97706" />
                        ) : idx === 1 ? (
                          <IconMedalSilver size={15} />
                        ) : idx === 2 ? (
                          <IconMedalBronze size={15} />
                        ) : (
                          idx + 1
                        )}
                      </span>
                      <div className="avatar-sm">
                        <img src={t.avatar} alt={t.handle} />
                      </div>
                      <h5>@{t.handle}</h5>
                      <span className="score-val">{t.score}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rank-list">
                  {monsters.map((m, idx) => (
                    <div key={m.id || m.number} className={`rank-row ${idx === 0 ? 'top-1' : ''}`}>
                      <span className={`rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}`}>
                        {idx === 0 ? (
                          <IconCrown size={15} color="#D97706" />
                        ) : idx === 1 ? (
                          <IconMedalSilver size={15} />
                        ) : idx === 2 ? (
                          <IconMedalBronze size={15} />
                        ) : (
                          idx + 1
                        )}
                      </span>
                      <div className="avatar-sm">
                        <img src={m.spriteUrl} alt={m.name} />
                      </div>
                      <h5>{m.name} {m.number}</h5>
                      <span className="score-val">{m.score}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#collection" className="btn btn-secondary" style={{ width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
              View Collection Rankings →
            </a>
          </div>

          {/* Live Activity Stream Tile */}
          <div className="panel-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Live Activity</h3>
                <span style={{ fontSize: '12px', color: 'var(--pp-success)', fontWeight: 700 }}>● Live Stream</span>
              </div>

              <div className="activity-list">
                {activities.map((act) => (
                  <div key={act.id} className="activity-item">
                    <div
                      className="activity-icon-bubble"
                      style={{
                        background:
                          act.type === 'legendary'
                            ? 'var(--pp-rarity-legendary-bg)'
                            : act.type === 'battle_win'
                            ? 'var(--pp-rarity-rare-bg)'
                            : act.type === 'level_up'
                            ? 'var(--pp-rarity-new-bg)'
                            : 'var(--pp-rarity-legendary-bg)',
                      }}
                    >
                      {renderActivityIcon(act.iconType)}
                    </div>
                    <div className="activity-content">
                      <h5>{act.title}</h5>
                      <p>{act.description}</p>
                    </div>
                    <span className="activity-time-stamp">{act.timeAgo}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://x.com/getPokePump" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
              Inspect X Event Stream →
            </a>
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
              href="https://x.com/getPokePump"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-btn"
            >
              <span>Reply to @getPokePump on X</span>
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
