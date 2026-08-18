'use client';

import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <Link href="/" className="brand-logo" id="nav-brand-logo">
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

          <ul className="nav-links">
            <li>
              <Link href="/" className="active" id="nav-link-home">
                Home
              </Link>
            </li>
            <li>
              <a href="#collection" id="nav-link-pokemon">
                Pokémon
              </a>
            </li>
            <li>
              <a href="#born" id="nav-link-born">
                Born From X
              </a>
            </li>
            <li>
              <a href="#battles" id="nav-link-battles">
                Battles
              </a>
            </li>
            <li>
              <a href="#schedule" id="nav-link-schedule">
                Schedule
              </a>
            </li>
            <li>
              <a href="#leaderboard" id="nav-link-leaderboard">
                Leaderboard
              </a>
            </li>
          </ul>

          <a
            className="follow-x-btn"
            href="https://x.com/PokePump"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-follow-btn"
          >
            <span>Follow on X</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};
