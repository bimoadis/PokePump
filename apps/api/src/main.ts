import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
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
  const pokemon = await getRandomCuratedPokemon(handle.replace('@', ''), prompt);
  pokemonDatabase.unshift(pokemon);
  res.status(201).json(pokemon);
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

app.listen(PORT, () => {
  console.log(`⚡ PokéPump API running with PokéAPI integration on http://localhost:${PORT}`);
});
