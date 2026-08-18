export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type RarityGrade = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface PokemonEntity {
  id: string;
  pokedexId: number;
  number: string;
  name: string;
  species: string;
  type: PokemonType;
  secondaryType?: PokemonType | null;
  level: number;
  exp: number;
  stats: PokemonStats;
  powerScore: number;
  rarity: RarityGrade;
  tweetId: string;
  replyPrompt?: string;
  creatorHandle: string;
  artworkUrl: string;
  spriteUrl?: string;
  showdownUrl?: string;
  cryUrl?: string;
  height?: number;
  weight?: number;
  baseExperience?: number;
  createdAt: string;
}

export interface BattleMatchEntity {
  id: string;
  fighter1: PokemonEntity;
  fighter2: PokemonEntity;
  power1: number;
  power2: number;
  winnerId?: string;
  status: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
  scheduledTime: string;
  spectatorsCount: number;
}

export interface LeaderboardTrainer {
  rank: number;
  trainerHandle: string;
  avatarUrl?: string;
  score: number;
  totalMonsters: number;
  winStreak: number;
}

export interface ActivityFeedItem {
  id: string;
  type: 'born' | 'battle_win' | 'level_up' | 'rank_up';
  title: string;
  description: string;
  timeAgo: string;
  icon: string;
  metadata?: Record<string, unknown>;
}

export interface DashboardMetrics {
  totalPokemonBorn: number;
  totalTrainers: number;
  totalBattlesHeld: number;
  totalRepliesPumped: number;
}

export interface PokeApiRawStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokeApiRawType {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

export interface PokeApiPokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokeApiRawType[];
  stats: PokeApiRawStat[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
      showdown?: {
        front_default: string;
      };
    };
  };
  cries?: {
    latest?: string;
  };
}
