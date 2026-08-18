import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo">
              <div className="logo-saw-icon-wrap" aria-hidden="true">
                <img
                  src="/logo.png"
                  alt="PokéPump"
                  className="logo-saw-icon-img"
                />
              </div>
              <span className="brand-logo-text">
                POKE<span className="brand-red">PUMP</span>
              </span>
            </Link>
            <p>
              PokéPump is an interactive universe where authentic Pokémon are generated directly from tweets and replies on X via PokéAPI.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Ecosystem</h4>
            <a href="#born">Born From X</a>
            <a href="#collection">Collection</a>
            <a href="#battles">Battle Arena</a>
            <a href="#schedule">Schedule</a>
          </div>

          <div className="footer-links-col">
            <h4>Community</h4>
            <a href="https://x.com/PokePump" target="_blank" rel="noopener noreferrer">
              Official X / Twitter
            </a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#activity">Live Stream</a>
          </div>

          <div className="footer-links-col">
            <h4>Developers</h4>
            <a href="/api/stats">API Metrics</a>
            <a href="/api/pokemon">Pokémon Endpoints</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Monorepo Docs
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© 2026 PokéPump Platform. All rights reserved.</span>
          <span>Powered by Next.js 14 & PokéAPI Integration</span>
        </div>
      </div>
    </footer>
  );
};
