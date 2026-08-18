import { PokemonStats, PokemonType, RarityGrade } from './types.js';
import { TYPE_ADVANTAGE_MATRIX } from './constants.js';

export function calculateBaseStatTotal(stats: PokemonStats): number {
  return stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed;
}

export function determineRarityGrade(bst: number, isLegendary = false): RarityGrade {
  if (isLegendary || bst >= 580) return 'LEGENDARY';
  if (bst >= 500) return 'EPIC';
  if (bst >= 400) return 'RARE';
  return 'COMMON';
}

export function calculatePowerScore(stats: PokemonStats, level = 1): number {
  const weighted =
    stats.hp * 0.15 +
    stats.attack * 0.25 +
    stats.defense * 0.15 +
    stats.specialAttack * 0.25 +
    stats.specialDefense * 0.10 +
    stats.speed * 0.10;
  const levelMultiplier = 1 + (level - 1) * 0.06;
  return Math.round(weighted * levelMultiplier * 10);
}

export function calculateExpRequirement(level: number): number {
  return Math.floor(100 * Math.pow(level, 1.45));
}

export function getTypeMultiplier(
  attackerType: PokemonType,
  defenderPrimary: PokemonType,
  defenderSecondary?: PokemonType | null
): number {
  const matrix = TYPE_ADVANTAGE_MATRIX[attackerType];
  if (!matrix) return 1.0;

  const mult1 = matrix[defenderPrimary] ?? 1.0;
  const mult2 = defenderSecondary ? matrix[defenderSecondary] ?? 1.0 : 1.0;
  return mult1 * mult2;
}

export function simulateTurnBasedBattle(
  fighter1: { stats: PokemonStats; type: PokemonType; secondaryType?: PokemonType | null; level: number; name: string },
  fighter2: { stats: PokemonStats; type: PokemonType; secondaryType?: PokemonType | null; level: number; name: string }
): { winnerIndex: 1 | 2; log: string[]; finalRatio: number } {
  let hp1 = fighter1.stats.hp * 10 * (1 + fighter1.level * 0.05);
  let hp2 = fighter2.stats.hp * 10 * (1 + fighter2.level * 0.05);

  const mult1 = getTypeMultiplier(fighter1.type, fighter2.type, fighter2.secondaryType);
  const mult2 = getTypeMultiplier(fighter2.type, fighter1.type, fighter1.secondaryType);

  const log: string[] = [];

  for (let turn = 1; turn <= 12; turn++) {
    // Fighter 1 attacks (mix of physical and special)
    const atkPower1 = Math.max(fighter1.stats.attack, fighter1.stats.specialAttack);
    const defPower2 = Math.max(fighter2.stats.defense, fighter2.stats.specialDefense);
    const dmg1 = Math.max(12, (atkPower1 * 2.2 - defPower2 * 0.8) * mult1 * (0.9 + Math.random() * 0.2));
    hp2 -= dmg1;
    if (hp2 <= 0) {
      log.push(`${fighter1.name} used ${fighter1.type.toUpperCase()} STRIKE! Dealt ${Math.round(dmg1)} DMG.`);
      return { winnerIndex: 1, log, finalRatio: 100 };
    }

    // Fighter 2 attacks
    const atkPower2 = Math.max(fighter2.stats.attack, fighter2.stats.specialAttack);
    const defPower1 = Math.max(fighter1.stats.defense, fighter1.stats.specialDefense);
    const dmg2 = Math.max(12, (atkPower2 * 2.2 - defPower1 * 0.8) * mult2 * (0.9 + Math.random() * 0.2));
    hp1 -= dmg2;
    if (hp1 <= 0) {
      log.push(`${fighter2.name} countered with ${fighter2.type.toUpperCase()} SURGE! Dealt ${Math.round(dmg2)} DMG.`);
      return { winnerIndex: 2, log, finalRatio: 0 };
    }
  }

  const ratio = Math.round((Math.max(0, hp1) / (Math.max(1, hp1) + Math.max(1, hp2))) * 100);
  return {
    winnerIndex: hp1 >= hp2 ? 1 : 2,
    log,
    finalRatio: ratio
  };
}
