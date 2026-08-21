'use client';

import React, { useEffect, useState } from 'react';
import { IconBolt, IconTrainers, IconSwords, IconChatBubble } from './icons/CustomIcons';

const HERO_CHARACTERS = [
  {
    id: 1,
    src: '/hero-character-1.png',
    alt: 'PokéPump Character 1',
    name: 'Volt Mascot',
    type: 'Electric'
  },
  {
    id: 2,
    src: '/hero-character-2.png',
    alt: 'PokéPump Character 2',
    name: 'Inferno Beast',
    type: 'Fire'
  },
  {
    id: 3,
    src: '/hero-character-3.png',
    alt: 'PokéPump Character 3',
    name: 'Shadow Phantom',
    type: 'Ghost'
  }
];

export const HeroSection: React.FC = () => {
  const [stats, setStats] = useState({
    totalPokemonBorn: 12842,
    totalTrainers: 8421,
    totalBattlesHeld: 3215,
    totalRepliesPumped: 67892,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch('/api/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Failed to load hero stats:', err);
      }
    }

    loadStats();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Heading, Description, CTA, Stats Bar */}
          <div className="hero-content">
            <h1>
              Where Every Reply <br />
              Creates a <span className="accent"><span className="brand-poke">Poké</span>mon</span>
              <span className="period">.</span>
            </h1>

            <p>
              PokéPump is an interactive universe where authentic Pokémon are generated directly from tweets and replies on X via PokéAPI. Collect, level up, and battle with your custom Pokémon!
            </p>

            <div className="hero-actions">
              <a
                href="https://x.com/getPokePump"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="hero-reply-btn"
              >
                <span>Reply on X to Spawn</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#collection" className="btn btn-secondary" id="hero-explore-btn">
                Explore Collection ↓
              </a>
            </div>

            {/* 4 Key Stat Metrics Card with Custom SVG Icons */}
            <div className="hero-stats-card">
              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-fire) 0%, var(--pp-danger) 100%)' }}>
                  <IconBolt size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>{stats.totalPokemonBorn.toLocaleString()}</b>
                  <span>Pokémon Born</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-flying) 0%, var(--pp-info) 100%)' }}>
                  <IconTrainers size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>{stats.totalTrainers.toLocaleString()}</b>
                  <span>Trainers</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-electric) 0%, var(--pp-warning) 100%)' }}>
                  <IconSwords size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>{stats.totalBattlesHeld.toLocaleString()}</b>
                  <span>Battles</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-grass) 0%, var(--pp-success) 100%)' }}>
                  <IconChatBubble size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>{stats.totalRepliesPumped.toLocaleString()}</b>
                  <span>Replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container with 3 Characters Lined Up Side-by-Side */}
          <div className="hero-visual-wrap">
            {/* Ambient Background Aura */}
            <div className="hero-stage-aura" aria-hidden="true" />

            {/* Side-by-Side Character Lineup Stage */}
            <div className="hero-lineup-container">
              {HERO_CHARACTERS.map((char, index) => {
                return (
                  <div
                    key={char.id}
                    className={`hero-lineup-item item-${index + 1}`}
                  >
                    <img
                      src={char.src}
                      alt={char.alt}
                      className="hero-lineup-img"
                    />
                    <div className="hero-char-shadow" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
