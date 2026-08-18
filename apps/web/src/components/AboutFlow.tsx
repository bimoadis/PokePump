import React from 'react';

export const AboutFlow: React.FC = () => {
  return (
    <section className="section-wrap">
      <div className="container">
        <div className="surface-card-feature">
          <h2>About PokéPump</h2>
          <p style={{ marginTop: '8px', fontSize: '15px' }}>
            PokéPump turns community interaction into a living monster universe. Reply to @PokePump on X and you might be the reason a new creature is born!
          </p>

          <div className="about-flow-grid">
            <div className="flow-step-card">
              <div className="step-icon-bubble" style={{ background: 'var(--type-water-soft)', color: 'var(--type-water)' }}>
                💬
              </div>
              <h3>1. Reply</h3>
              <p>Reply to @PokePump on X to ignite the spark.</p>
            </div>

            <div className="flow-step-card">
              <div className="step-icon-bubble" style={{ background: 'var(--brand-100)', color: 'var(--brand-500)' }}>
                🥚
              </div>
              <h3>2. Monster Born</h3>
              <p>A brand new creature hatches directly from your post.</p>
            </div>

            <div className="flow-step-card">
              <div className="step-icon-bubble" style={{ background: 'var(--type-grass-soft)', color: 'var(--type-grass)' }}>
                📈
              </div>
              <h3>3. Stats</h3>
              <p>Generated with unique types, base stats, and rarity.</p>
            </div>

            <div className="flow-step-card">
              <div className="step-icon-bubble" style={{ background: 'var(--type-electric-soft)', color: 'var(--type-electric)' }}>
                ⚔️
              </div>
              <h3>4. Battle</h3>
              <p>Enters the automatic battle arena for community matches.</p>
            </div>

            <div className="flow-step-card">
              <div className="step-icon-bubble" style={{ background: 'var(--type-ghost-soft)', color: 'var(--type-ghost)' }}>
                👑
              </div>
              <h3>5. Champion</h3>
              <p>Climb leaderboard ranks and earn legendary status.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
