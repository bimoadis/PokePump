import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { PokemonEntity, simulateTurnBasedBattle } from '@pokepump/shared';
import { generatePokemonCardSvg } from '@pokepump/renderer';
import { fetchPokemonFromPokeApi, getRandomCuratedPokemon } from './services/pokeapi.service.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-Memory Seed Storage preloaded with authentic PokéAPI data
let pokemonDatabase: PokemonEntity[] = [];

// Preload initial curated iconic Pokémon
async function seedInitialPokeApiData() {
  const seeds = [
    { id: 6, handle: 'cryptomaster', prompt: 'Summon the flame dragon from kanto!' },
    { id: 25, handle: 'volt_trainer', prompt: 'Speed spark electric mascot' },
    { id: 94, handle: 'phantom_x', prompt: 'Shadow ghost lurking in dark' },
    { id: 9, handle: 'aqua_lord', prompt: 'Hydro cannons ready for battle' },
    { id: 3, handle: 'flora_dev', prompt: 'Giant blooming solar defender' },
    { id: 150, handle: 'psychic_king', prompt: 'Genetically engineered legendary' },
    { id: 448, handle: 'aura_fighter', prompt: 'Steel aura fighter with max combat drive' },
    { id: 130, handle: 'sea_emperor', prompt: 'Raging leviathan dragon of the deep' },
    { id: 143, handle: 'lazy_pump', prompt: 'Heavyweight defender tank' },
    { id: 197, handle: 'moonlight_x', prompt: 'Dark moon night guardian' },
    { id: 384, handle: 'sky_lord', prompt: 'Emerald ozone dragon god' },
    { id: 149, handle: 'dragon_tamer', prompt: 'Speedy dragon hurricane deliverer' }
  ];

  for (const s of seeds) {
    try {
      const p = await fetchPokemonFromPokeApi(s.id, s.handle, s.prompt);
      pokemonDatabase.push(p);
    } catch (e) {
      console.error(`Failed to preload Pokemon #${s.id}:`, e);
    }
  }
}

seedInitialPokeApiData();

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'PokéPump API Gateway (PokéAPI Backed)', timestamp: new Date().toISOString() });
});

// Dashboard Metrics
app.get('/api/stats', (req, res) => {
  res.json({
    totalPokemonBorn: 12842 + pokemonDatabase.length,
    totalTrainers: 8421,
    totalBattlesHeld: 3215,
    totalRepliesPumped: 67892
  });
});

// Pokémon Endpoints
app.get('/api/pokemon', (req, res) => {
  const { type, search } = req.query;
  let result = [...pokemonDatabase];

  if (type && type !== 'all') {
    result = result.filter((p) => p.type === type || p.secondaryType === type);
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.number.includes(q) ||
        p.species.toLowerCase().includes(q) ||
        p.creatorHandle.toLowerCase().includes(q)
    );
  }

  res.json(result);
});

app.get('/api/pokemon/:id', (req, res) => {
  const pokemon = pokemonDatabase.find((p) => p.id === req.params.id || p.number === req.params.id || String(p.pokedexId) === req.params.id);
  if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
  res.json(pokemon);
});

// SVG Card Rendering Endpoint
app.get('/api/pokemon/:id/card.svg', (req, res) => {
  const pokemon = pokemonDatabase.find((p) => p.id === req.params.id || p.number === req.params.id || String(p.pokedexId) === req.params.id);
  if (!pokemon) return res.status(404).send('Not found');
  const svg = generatePokemonCardSvg(pokemon);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

// Hatch Pokémon from PokéAPI via Tweet / Prompt
app.post('/api/pokemon/hatch', async (req, res) => {
  const { handle = 'anonymous', prompt = 'New reply on X' } = req.body;
  const cleanHandle = handle.replace(/^@/, '').trim().toLowerCase();

  // Enforce 1 X Account = 1 Pokémon rule
  const existing = pokemonDatabase.find(
    (p) => p.creatorHandle.toLowerCase().replace(/^@/, '') === cleanHandle
  );

  if (existing) {
    return res.status(400).json({
      success: false,
      error: `Account @${cleanHandle} has already hatched a Pokémon (${existing.name} #${existing.number}). Each X account can only hatch 1 Pokémon!`,
      alreadyHatched: true,
      pokemon: existing,
    });
  }

  const pokemon = await getRandomCuratedPokemon(cleanHandle, prompt);
  pokemonDatabase.unshift(pokemon);
  res.status(201).json({
    success: true,
    message: `Successfully hatched ${pokemon.name}!`,
    pokemon,
  });
});

// Battle Simulation Endpoint
app.post('/api/battles/simulate', (req, res) => {
  const { fighter1Id, fighter2Id } = req.body;
  const f1 = pokemonDatabase.find((p) => p.id === fighter1Id || String(p.pokedexId) === fighter1Id);
  const f2 = pokemonDatabase.find((p) => p.id === fighter2Id || String(p.pokedexId) === fighter2Id);

  if (!f1 || !f2) return res.status(400).json({ error: 'Invalid fighter IDs' });

  const result = simulateTurnBasedBattle(f1, f2);
  res.json({
    fighter1: f1,
    fighter2: f2,
    winner: result.winnerIndex === 1 ? f1 : f2,
    log: result.log,
    finalRatio: result.finalRatio
  });
});

app.get('/api/battles', (req, res) => {
  const f1 = pokemonDatabase[0] || null;
  const f2 = pokemonDatabase[3] || null;
  res.json([
    {
      id: 'bt-101',
      fighter1: f1,
      fighter2: f2,
      power1: f1?.powerScore || 2400,
      power2: f2?.powerScore || 2100,
      status: 'LIVE',
      scheduledTime: 'LIVE NOW',
      spectatorsCount: 1420
    }
  ]);
});

// In-Memory Airdrop Store fallback
let airdropRegistrations: Array<{
  id: string;
  campaign: string;
  twitterHandle: string;
  walletAddress: string;
  pokemonId?: string | null;
  status: string;
  createdAt: string;
}> = [
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

// Helper: Validate Solana Address format (Base58, 32-44 characters)
function isValidSolanaAddress(address: string): boolean {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address.trim());
}

// Airdrop Registration Endpoint
app.post('/api/airdrop/register', async (req, res) => {
  try {
    const { twitterHandle, walletAddress, campaign = 'PIKACHU_100K_SPIN' } = req.body;

    if (!twitterHandle || typeof twitterHandle !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Please enter your X (Twitter) handle.'
      });
    }

    const cleanHandle = twitterHandle.trim().replace(/^@/, '').toLowerCase();
    const cleanWallet = (walletAddress || '').trim();

    if (!cleanHandle) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Twitter handle.'
      });
    }

    if (!isValidSolanaAddress(cleanWallet)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Solana wallet address. Please provide a valid 32-44 character Base58 address.'
      });
    }

    // Check if user has already registered for this campaign
    const existingRegistration = airdropRegistrations.find(
      (r) =>
        r.campaign === campaign &&
        (r.twitterHandle.toLowerCase() === cleanHandle || r.walletAddress === cleanWallet)
    );

    if (existingRegistration) {
      if (existingRegistration.twitterHandle.toLowerCase() === cleanHandle) {
        return res.status(409).json({
          success: false,
          error: `Twitter handle @${cleanHandle} is already registered in the Spin Wheel pool.`
        });
      }
      return res.status(409).json({
        success: false,
        error: `Solana wallet address ${cleanWallet.slice(0, 4)}...${cleanWallet.slice(-4)} is already registered.`
      });
    }

    // Verify if the user owns or spawned a Pikachu (pokedexId 25 or species 'pikachu')
    // We search our database of hatched Pokemon
    const userPikachu = pokemonDatabase.find(
      (p) =>
        p.creatorHandle.toLowerCase().replace(/^@/, '') === cleanHandle &&
        (p.pokedexId === 25 || p.name.toLowerCase() === 'pikachu' || p.species.toLowerCase() === 'pikachu')
    );

    // If user doesn't own one yet, let's also check if user has ANY hatched Pokemon
    // If not owning Pikachu specifically, we allow registration if they are a trainer or we grant them eligible entry
    const eligiblePokemon = userPikachu || pokemonDatabase.find(
      (p) => p.creatorHandle.toLowerCase().replace(/^@/, '') === cleanHandle
    );

    const newEntry = {
      id: `airdrop-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      campaign,
      twitterHandle: cleanHandle,
      walletAddress: cleanWallet,
      pokemonId: eligiblePokemon ? eligiblePokemon.id : 'pokedex-25',
      status: 'ELIGIBLE',
      createdAt: new Date().toISOString()
    };

    airdropRegistrations.push(newEntry);

    return res.status(201).json({
      success: true,
      message: 'Registration successful! You have entered the 100,000 $POKE Spin Wheel Pool.',
      entry: newEntry,
      eligiblePokemon: eligiblePokemon || null
    });
  } catch (error: any) {
    console.error('Airdrop registration error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your registration.'
    });
  }
});

// Airdrop Pool Endpoint (for Pumpfun Live Stream Spin Wheel)
app.get('/api/airdrop/spin-pool', (req, res) => {
  const { campaign = 'PIKACHU_100K_SPIN' } = req.query;
  const pool = airdropRegistrations.filter((r) => r.campaign === campaign);
  res.json({
    campaign,
    totalEntries: pool.length,
    poolSizePoke: 100000,
    entries: pool
  });
});

// Airdrop Eligibility Check Endpoint
app.get('/api/airdrop/check/:handle', (req, res) => {
  const handle = req.params.handle.replace(/^@/, '').toLowerCase();
  const registration = airdropRegistrations.find((r) => r.twitterHandle.toLowerCase() === handle);
  const pikachu = pokemonDatabase.find(
    (p) =>
      p.creatorHandle.toLowerCase().replace(/^@/, '') === handle &&
      (p.pokedexId === 25 || p.name.toLowerCase() === 'pikachu')
  );

  res.json({
    twitterHandle: handle,
    isRegistered: !!registration,
    ownsPikachu: !!pikachu,
    entry: registration || null
  });
});

// Twitter / X CRC & Webhook Handler (supports both /api/webhook/twitter and /api/webhook/x)
const handleWebhookCrc = (req: express.Request, res: express.Response) => {
  const crcToken = req.query.crc_token as string;
  if (!crcToken) {
    return res.status(400).json({ error: 'Missing crc_token query parameter' });
  }

  const consumerSecret = process.env.X_CONSUMER_SECRET || '';
  const hmac = crypto.createHmac('sha256', consumerSecret).update(crcToken).digest('base64');

  res.status(200).json({
    response_token: `sha256=${hmac}`
  });
};

const handleWebhookEvent = (req: express.Request, res: express.Response) => {
  console.log('📩 Incoming X (Twitter) Webhook payload:', req.body);
  res.status(200).json({ status: 'ok', received: true });
};

app.get('/api/webhook/twitter', handleWebhookCrc);
app.get('/api/webhook/x', handleWebhookCrc);
app.post('/api/webhook/twitter', handleWebhookEvent);
app.post('/api/webhook/x', handleWebhookEvent);

app.listen(PORT, () => {
  console.log(`⚡ PokéPump API running with PokéAPI integration on http://localhost:${PORT}`);
});
