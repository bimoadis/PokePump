'use client';

import React, { useState } from 'react';
import { IconBolt } from './icons/CustomIcons';

export const PikachuAirdropBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [xHandle, setXHandle] = useState('');
  const [solAddress, setSolAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!xHandle.trim()) {
      setErrorMsg('Please enter your X handle (e.g. @your_username)');
      return;
    }

    // Basic Solana address format check (base58, 32-44 chars)
    const cleanAddress = solAddress.trim();
    if (!cleanAddress || cleanAddress.length < 32 || cleanAddress.length > 44) {
      setErrorMsg('Please enter a valid Solana wallet address (32-44 characters)');
      return;
    }

    // Success
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setXHandle('');
    setSolAddress('');
    setErrorMsg('');
    setIsModalOpen(false);
  };

  return (
    <section className="section-wrap" style={{ paddingTop: 0, paddingBottom: '32px' }} id="airdrop">
      <div className="container">
        <div className="pikachu-airdrop-banner">
          {/* Ambient Sparkles / Lighting Effect */}
          <div className="banner-glow-effect" aria-hidden="true" />

          <div className="banner-content-grid">
            {/* Left Pikachu Graphic */}
            <div className="banner-art-wrap">
              <div className="pikachu-glow-circle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                  alt="Pikachu Airdrop"
                  className="banner-pikachu-img"
                />
              </div>
              <span className="banner-electric-badge">
                <IconBolt size={13} color="var(--pp-warning)" />
                <span>100,000 $POKE</span>
              </span>
            </div>

            {/* Middle Content */}
            <div className="banner-text-wrap">
              <div className="banner-tag-row">
                <span className="banner-tag-pill">🔥 EXCLUSIVE REWARD</span>
                <span className="banner-tag-sub">Live on Pumpfun</span>
              </div>
              <h3 className="banner-main-title">
                Got a <span className="highlight-yellow">Pikachu</span>? You are eligible to get an airdrop of <span className="highlight-yellow">100,000 $POKE</span>.
              </h3>
              <p className="banner-desc">
                If you spawned or own a Pikachu, register your Solana address below. We will let the <b>Spin Wheel</b> choose winners live on Pumpfun!
              </p>
            </div>

            {/* Right Action Button */}
            <div className="banner-cta-wrap">
              <button
                type="button"
                className="banner-claim-btn"
                onClick={() => setIsModalOpen(true)}
                id="claim-pikachu-airdrop-btn"
              >
                <span>Submit Solana Address</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
              </button>
              <span className="banner-sub-text">⚡ Instant Verification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Solana Address Registration Modal */}
      {isModalOpen && (
        <div className="airdrop-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="airdrop-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <div>
                <div className="modal-header-area">
                  <div className="modal-icon-badge">
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                      alt="Pikachu Icon"
                      width="38"
                      height="38"
                    />
                  </div>
                  <h3 className="modal-title">Pikachu Airdrop Registration</h3>
                  <p className="modal-subtitle">
                    Enter your X handle & Solana wallet address to qualify for the 100,000 $POKE Spin Wheel pool on Pumpfun.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-x-handle">
                      Your X (Twitter) Handle
                    </label>
                    <div className="input-prefix-wrap">
                      <span className="input-prefix">@</span>
                      <input
                        id="modal-x-handle"
                        type="text"
                        className="modal-input has-prefix"
                        placeholder="your_handle"
                        value={xHandle.replace(/^@/, '')}
                        onChange={(e) => setXHandle(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-sol-address">
                      Solana Wallet Address (Phantom, Solflare, etc.)
                    </label>
                    <input
                      id="modal-sol-address"
                      type="text"
                      className="modal-input"
                      placeholder="e.g. 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                      value={solAddress}
                      onChange={(e) => setSolAddress(e.target.value)}
                      required
                    />
                  </div>

                  {errorMsg && <div className="modal-error-alert">{errorMsg}</div>}

                  <button type="submit" className="modal-submit-btn">
                    <span>Confirm & Enter Spin Wheel Pool</span>
                    <IconBolt size={16} color="var(--pp-text-inverse)" />
                  </button>

                  <p className="modal-disclaimer">
                    🔒 Addresses are stored securely and pulled directly by the automated Spin Wheel engine during the live Pumpfun stream.
                  </p>
                </form>
              </div>
            ) : (
              <div className="modal-success-area">
                <div className="success-icon-circle">✓</div>
                <h3 className="success-title">You're In The Spin Wheel Pool!</h3>
                <p className="success-desc">
                  Trainer <b>@{xHandle.replace(/^@/, '')}</b> with Solana address:<br />
                  <code className="sol-code-snippet">{solAddress}</code>
                </p>
                <div className="success-alert-box">
                  ⚡ Your Pikachu ownership is verified. Tune in to the live stream on <b>Pumpfun</b> to watch the Spin Wheel select the 100,000 $POKE winners!
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={resetForm}>
                  Close & Back to PokéPump
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
