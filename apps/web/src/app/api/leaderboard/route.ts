import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Fetch top Pokémon by powerScore from DB
    const topPokemonDb = await prisma.pokemon.findMany({
      orderBy: {
        powerScore: 'desc',
      },
      take: 10,
    });

    // 2. Fetch trainers with their hatched Pokémon count and top power
    const trainersDb = await prisma.user.findMany({
      include: {
        pokemons: {
          orderBy: {
            powerScore: 'desc',
          },
        },
      },
      take: 10,
    });

    interface TrainerEntry {
      handle: string;
      avatar: string;
      score: string;
      pokemonCount?: number;
    }

    // Curated fallbacks for top trainers if DB has few users
    const defaultTopTrainers: TrainerEntry[] = [
      { handle: 'volt_trainer', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', score: '14,890 PTS', pokemonCount: 12 },
      { handle: 'cryptomaster', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', score: '12,450 PTS', pokemonCount: 9 },
      { handle: 'phantom_x', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', score: '10,920 PTS', pokemonCount: 8 },
      { handle: 'psychic_king', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', score: '9,340 PTS', pokemonCount: 6 },
      { handle: 'flora_dev', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', score: '8,710 PTS', pokemonCount: 5 }
    ];

    // Format DB trainers
    const formattedTrainers: TrainerEntry[] = trainersDb.map((t) => {
      const bestMon = t.pokemons[0];
      const totalPower = t.pokemons.reduce((acc, p) => acc + p.powerScore, 0);
      const points = totalPower * 10 + t.pokemons.length * 500;
      return {
        handle: t.twitterHandle,
        avatar: bestMon ? bestMon.spriteUrl || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${bestMon.pokedexId}.png` : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        score: `${points.toLocaleString()} PTS`,
        pokemonCount: t.pokemons.length,
      };
    });

    // Merge DB trainers with defaults ensuring unique handles
    const seenHandles = new Set(formattedTrainers.map((t) => t.handle.toLowerCase()));
    const finalTrainers = [...formattedTrainers];
    for (const def of defaultTopTrainers) {
      if (!seenHandles.has(def.handle.toLowerCase())) {
        finalTrainers.push(def);
        seenHandles.add(def.handle.toLowerCase());
      }
    }

    // Default top Pokémon fallbacks if DB has few
    const defaultTopMonsters = [
      { id: 'm1', name: 'Mewtwo', number: '#0150', score: '3,950 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' },
      { id: 'm2', name: 'Rayquaza', number: '#0384', score: '3,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png' },
      { id: 'm3', name: 'Charizard', number: '#0006', score: '2,890 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
      { id: 'm4', name: 'Lucario', number: '#0448', score: '2,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png' },
      { id: 'm5', name: 'Gengar', number: '#0094', score: '2,750 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' }
    ];

    const formattedMonsters = topPokemonDb.map((p) => ({
      id: p.id,
      name: p.name,
      number: p.number,
      score: `${p.powerScore.toLocaleString()} PWR`,
      spriteUrl: p.spriteUrl || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.pokedexId}.png`,
    }));

    const seenMonsterIds = new Set(formattedMonsters.map((m) => m.number));
    const finalMonsters = [...formattedMonsters];
    for (const def of defaultTopMonsters) {
      if (!seenMonsterIds.has(def.number)) {
        finalMonsters.push(def);
        seenMonsterIds.add(def.number);
      }
    }

    return NextResponse.json({
      trainers: finalTrainers.slice(0, 5),
      monsters: finalMonsters.slice(0, 5),
    });
  } catch (err) {
    console.error('Leaderboard error:', err);
    return NextResponse.json({
      trainers: [
        { handle: 'volt_trainer', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', score: '14,890 PTS' },
        { handle: 'cryptomaster', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', score: '12,450 PTS' },
        { handle: 'phantom_x', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', score: '10,920 PTS' },
        { handle: 'psychic_king', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', score: '9,340 PTS' },
        { handle: 'flora_dev', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', score: '8,710 PTS' }
      ],
      monsters: [
        { id: 'm1', name: 'Mewtwo', number: '#0150', score: '3,950 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' },
        { id: 'm2', name: 'Rayquaza', number: '#0384', score: '3,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png' },
        { id: 'm3', name: 'Charizard', number: '#0006', score: '2,890 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
        { id: 'm4', name: 'Lucario', number: '#0448', score: '2,820 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png' },
        { id: 'm5', name: 'Gengar', number: '#0094', score: '2,750 PWR', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' }
      ]
    });
  }
}
