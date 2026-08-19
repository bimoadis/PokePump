'use client';

import React from 'react';

export const AboutFlow: React.FC = () => {
  return (
    <section className="section-wrap" id="about">
      <div className="container">
        <div className="about-hero-card">
          <div className="about-content-left">
            <h2 className="about-title">
              About <span className="brand-poke">Poké</span>Pump
            </h2>
            <p className="about-desc">
              PokéPump turns community interaction into a living Pokémon universe.<br className="desktop-br" />
              Reply to @PokePump on X and you might be the reason<br className="desktop-br" />
              a new Pokémon is born!
            </p>

            <div className="about-horizontal-flow">
              {/* Step 1: Reply */}
              <div className="flow-node">
                <div className="flow-circle-icon icon-reply">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                    <defs>
                      <linearGradient id="chatGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-info)" />
                        <stop offset="1" stopColor="var(--pp-gradient-end)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M21 7C12.7157 7 6 12.82 6 20C6 23.715 7.79979 27.054 10.742 29.406L9.5 35.375L15.939 32.548C17.514 32.845 19.215 33 21 33C29.2843 33 36 27.18 36 20C36 12.82 29.2843 7 21 7Z"
                      fill="url(#chatGrad)"
                    />
                    <circle cx="14.5" cy="20" r="2.2" fill="var(--pp-text-inverse)" />
                    <circle cx="21" cy="20" r="2.2" fill="var(--pp-text-inverse)" />
                    <circle cx="27.5" cy="20" r="2.2" fill="var(--pp-text-inverse)" />
                  </svg>
                </div>
                <h4 className="flow-step-title">Reply</h4>
                <p className="flow-step-sub">
                  Reply to<br />@PokePump on X
                </p>
              </div>

              <div className="flow-arrow" aria-hidden="true">→</div>

              {/* Step 2: Pokémon Born */}
              <div className="flow-node">
                <div className="flow-circle-icon icon-born">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                    <defs>
                      <linearGradient id="eggGrad" x1="21" y1="6" x2="21" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-type-fairy)" />
                        <stop offset="1" stopColor="var(--pp-red)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M21 6C14 6 9.5 15.5 9.5 24C9.5 30.627 14.649 36 21 36C27.351 36 32.5 30.627 32.5 24C32.5 15.5 28 6 21 6Z"
                      fill="url(#eggGrad)"
                    />
                    <circle cx="21" cy="27" r="4.2" fill="var(--pp-red-active)" />
                    <ellipse cx="16" cy="13" rx="1.8" ry="3.5" transform="rotate(-25 16 13)" fill="var(--pp-text-inverse)" opacity="0.45" />
                  </svg>
                </div>
                <h4 className="flow-step-title">Pokémon Born</h4>
                <p className="flow-step-sub">
                  A brand new Pokémon<br />is born from your reply!
                </p>
              </div>

              <div className="flow-arrow" aria-hidden="true">→</div>

              {/* Step 3: Stats */}
              <div className="flow-node">
                <div className="flow-circle-icon icon-stats">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                    <defs>
                      <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-type-grass)" />
                        <stop offset="1" stopColor="var(--pp-success)" />
                      </linearGradient>
                      <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-type-grass)" />
                        <stop offset="1" stopColor="var(--pp-success)" />
                      </linearGradient>
                    </defs>
                    <rect x="9" y="23" width="6" height="11" rx="2" fill="url(#barGrad1)" />
                    <rect x="18" y="16" width="6" height="18" rx="2" fill="url(#barGrad2)" />
                    <rect x="27" y="9" width="6" height="25" rx="2" fill="url(#barGrad2)" />
                  </svg>
                </div>
                <h4 className="flow-step-title">Stats</h4>
                <p className="flow-step-sub">
                  It comes with unique<br />stats and abilities.
                </p>
              </div>

              <div className="flow-arrow" aria-hidden="true">→</div>

              {/* Step 4: Battle */}
              <div className="flow-node">
                <div className="flow-circle-icon icon-battle">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                    <defs>
                      <linearGradient id="swGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-type-fighting)" />
                        <stop offset="1" stopColor="var(--pp-danger)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11 31L27.5 14.5M27.5 14.5L25.5 12.5L20 18L24 22Z"
                      stroke="url(#swGrad)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="url(#swGrad)"
                    />
                    <line x1="8.5" y1="33.5" x2="13.5" y2="28.5" stroke="url(#swGrad)" strokeWidth="3" strokeLinecap="round" />
                    <line x1="12" y1="26" x2="17" y2="31" stroke="url(#swGrad)" strokeWidth="2.5" strokeLinecap="round" />

                    <path
                      d="M31 31L14.5 14.5M14.5 14.5L16.5 12.5L22 18L18 22Z"
                      stroke="url(#swGrad)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="url(#swGrad)"
                    />
                    <line x1="33.5" y1="33.5" x2="28.5" y2="28.5" stroke="url(#swGrad)" strokeWidth="3" strokeLinecap="round" />
                    <line x1="30" y1="26" x2="25" y2="31" stroke="url(#swGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="flow-step-title">Battle</h4>
                <p className="flow-step-sub">
                  Your Pokémon enters<br />the arena to battle.
                </p>
              </div>

              <div className="flow-arrow" aria-hidden="true">→</div>

              {/* Step 5: Champion */}
              <div className="flow-node">
                <div className="flow-circle-icon icon-champion">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                    <defs>
                      <linearGradient id="crGrad" x1="0" y1="8" x2="0" y2="34" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--pp-type-electric)" />
                        <stop offset="1" stopColor="var(--pp-warning)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 28L10.5 14L16.5 20.5L21 11L25.5 20.5L31.5 14L34 28Z"
                      fill="url(#crGrad)"
                      stroke="var(--pp-warning)"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <rect x="8" y="28" width="26" height="3.5" rx="1.5" fill="var(--pp-warning)" />
                    <circle cx="21" cy="10" r="1.8" fill="var(--pp-text-inverse)" />
                    <circle cx="10.5" cy="13" r="1.5" fill="var(--pp-text-inverse)" />
                    <circle cx="31.5" cy="13" r="1.5" fill="var(--pp-text-inverse)" />
                  </svg>
                </div>
                <h4 className="flow-step-title">Champion</h4>
                <p className="flow-step-sub">
                  Only the strongest<br />become legends!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Glowing Incubator Visual */}
          <div className="about-incubator-right">
            <img
              src="/about-incubator.png"
              alt="Incubating Pokémon Egg"
              className="incubator-graphic-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
