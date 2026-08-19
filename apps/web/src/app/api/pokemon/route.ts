import { NextResponse } from 'next/server';
import { pokemonStore } from '@/lib/store';
import { fetchPokemonFromPokeApi } from '@/lib/pokeapi';

// Prepopulate initial Pokemons if store is empty
async function ensureInitialData() {
  if (pokemonStore.length === 0) {
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
        pokemonStore.push(p);
      } catch (e) {
        console.error('Seed error:', e);
      }
    }
  }
}

export async function GET(request: Request) {
  await ensureInitialData();
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const search = searchParams.get('search');

  let result = [...pokemonStore];

  if (type && type !== 'all') {
    result = result.filter((p) => p.type === type || p.secondaryType === type);
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.number.includes(q) ||
        p.species.toLowerCase().includes(q) ||
        p.creatorHandle.toLowerCase().includes(q)
    );
  }

  return NextResponse.json(result);
}
