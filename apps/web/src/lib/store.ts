import { PokemonEntity, AirdropRegistrationEntity } from '@pokepump/shared';

// Global in-memory storage for serverless edge / node runtime in Next.js
declare global {
  var __pokepump_db: PokemonEntity[] | undefined;
  var __pokepump_airdrops: AirdropRegistrationEntity[] | undefined;
}

export const pokemonStore: PokemonEntity[] = globalThis.__pokepump_db || [];
if (!globalThis.__pokepump_db) globalThis.__pokepump_db = pokemonStore;

export const airdropStore: AirdropRegistrationEntity[] = globalThis.__pokepump_airdrops || [
  {
    id: 'airdrop-init-1',
    campaign: 'PIKACHU_100K_SPIN',
    twitterHandle: 'volt_trainer',
    walletAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    pokemonId: 'pokedex-25',
    status: 'ELIGIBLE',
    createdAt: new Date().toISOString()
  }
];
if (!globalThis.__pokepump_airdrops) globalThis.__pokepump_airdrops = airdropStore;
