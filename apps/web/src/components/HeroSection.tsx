'use client';

import React from 'react';
import { IconBolt, IconTrainers, IconSwords, IconChatBubble } from './icons/CustomIcons';

export const HeroSection: React.FC = () => {
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

          {/* Right Column: Hero Visual Container */}
          <div className="hero-visual-wrap" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
