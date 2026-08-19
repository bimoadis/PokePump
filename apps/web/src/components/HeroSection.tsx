'use client';

import React from 'react';
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
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Auto-alternate characters every 3.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_CHARACTERS.length);
    }, 3500);
    return () => clearInterval(timer);
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
                href="https://x.com/PokePump"
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
              <a href="#born" className="btn btn-secondary" id="hero-explore-btn">
                Explore Born Pokémon ↓
              </a>
            </div>

            {/* 4 Key Stat Metrics Card with Custom SVG Icons */}
            <div className="hero-stats-card">
              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-fire) 0%, var(--pp-danger) 100%)' }}>
                  <IconBolt size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>12.8K+</b>
                  <span>Pokémon Born</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-flying) 0%, var(--pp-info) 100%)' }}>
                  <IconTrainers size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>8.4K+</b>
                  <span>Trainers</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-electric) 0%, var(--pp-warning) 100%)' }}>
                  <IconSwords size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>3.2K+</b>
                  <span>Battles</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'linear-gradient(135deg, var(--pp-type-grass) 0%, var(--pp-success) 100%)' }}>
                  <IconChatBubble size={18} color="var(--pp-text-inverse)" />
                </div>
                <div className="stat-meta">
                  <b>67.8K+</b>
                  <span>Replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container with 3 Dynamic Alternating Characters */}
          <div className="hero-visual-wrap">
            {/* Ambient Background Aura */}
            <div className="hero-stage-aura" aria-hidden="true" />

            {/* Alternating Character Stage */}
            <div className="hero-character-stage">
              {HERO_CHARACTERS.map((char, index) => {
                const isActive = index === activeIdx;
                const isPrev = index === (activeIdx - 1 + HERO_CHARACTERS.length) % HERO_CHARACTERS.length;
                const isNext = index === (activeIdx + 1) % HERO_CHARACTERS.length;

                let positionClass = 'char-hidden';
                if (isActive) positionClass = 'char-active';
                else if (isPrev) positionClass = 'char-left';
                else if (isNext) positionClass = 'char-right';

                return (
                  <div
                    key={char.id}
                    className={`hero-char-figure ${positionClass}`}
                    onClick={() => setActiveIdx(index)}
                  >
                    <img
                      src={char.src}
                      alt={char.alt}
                      className="hero-char-img"
                    />
                  </div>
                );
              })}
            </div>

            {/* Interactive Carousel Indicator Dots */}
            <div className="hero-char-indicators">
              {HERO_CHARACTERS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`hero-char-dot ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Show character ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
