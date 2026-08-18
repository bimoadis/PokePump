import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutFlow } from '@/components/AboutFlow';
import { PikachuAirdropBanner } from '@/components/PikachuAirdropBanner';
import { BornFromXGrid } from '@/components/BornFromXGrid';
import { CollectionGrid } from '@/components/CollectionGrid';
import { BattleArena } from '@/components/BattleArena';
import { LeaderboardPanel } from '@/components/LeaderboardPanel';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutFlow />
        <PikachuAirdropBanner />
        <BornFromXGrid />
        <CollectionGrid />
        <BattleArena />
        <LeaderboardPanel />
      </main>
      <Footer />
    </>
  );
}
