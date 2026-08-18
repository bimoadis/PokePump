'use client';

import React from 'react';
import { DashboardMetrics } from '@pokepump/shared';

interface HeroSectionProps {
  metrics?: DashboardMetrics;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  metrics = {
    totalPokemonBorn: 12842,
    totalTrainers: 8421,
    totalBattlesHeld: 3215,
    totalRepliesPumped: 67892,
  },
}) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Copy & CTAs */}
          <div className="hero-content">
            <h1>
              Where Every <span className="accent">Reply</span> Creates a Pokémon
              <span className="period">.</span>
            </h1>
            <p>
              PokéPump is a community-driven universe where Pokémon are born from replies on X.
              Discover them, train them, and watch them battle to become the strongest!
            </p>

            <div className="hero-actions">
              <a href="#collection" className="btn btn-primary" id="hero-cta-explore">
                Explore Pokémon →
              </a>
              <a href="#schedule" className="btn btn-secondary" id="hero-cta-matches">
                View Upcoming Matches 📅
              </a>
            </div>

            {/* Floating Frosted Stats Row */}
            <div className="hero-stats-card">
              <div className="stat-item">
                <div className="stat-icon" style={{ background: 'var(--brand-500)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="3" y1="12" x2="9" y2="12" />
                    <line x1="15" y1="12" x2="21" y2="12" />
                  </svg>
                </div>
                <div className="stat-meta">
                  <b>{metrics.totalPokemonBorn.toLocaleString()}</b>
                  <span>Pokémon Born</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: '#2563EB' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="stat-meta">
                  <b>{metrics.totalTrainers.toLocaleString()}</b>
                  <span>Trainers</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: '#EAB308' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="stat-meta">
                  <b>{metrics.totalBattlesHeld.toLocaleString()}</b>
                  <span>Battles Held</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ background: '#8B5CF6' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="stat-meta">
                  <b>{metrics.totalRepliesPumped.toLocaleString()}</b>
                  <span>Replies Pumped</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Space (Translucent viewport for bg backdrop) */}
          <div className="hero-visual-wrap" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
