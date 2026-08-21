import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { airdropStore, pokemonStore } from '@/lib/store';

function isValidSolanaAddress(address: string): boolean {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { twitterHandle, walletAddress, campaign = 'PIKACHU_100K_SPIN' } = body;

    if (!twitterHandle || typeof twitterHandle !== 'string') {
      return NextResponse.json({ success: false, error: 'Please enter your X (Twitter) handle.' }, { status: 400 });
    }

    const cleanHandle = twitterHandle.trim().replace(/^@/, '').toLowerCase();
    const cleanWallet = (walletAddress || '').trim();

    if (!cleanHandle) {
      return NextResponse.json({ success: false, error: 'Invalid Twitter handle.' }, { status: 400 });
    }

    if (!isValidSolanaAddress(cleanWallet)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid Solana wallet address. Please provide a valid 32-44 character Base58 address.'
      }, { status: 400 });
    }

    // Try DB registration
    try {
      // 1. Find or create user
      let user = await prisma.user.findFirst({
        where: {
          OR: [
            { twitterHandle: cleanHandle },
            { walletAddress: cleanWallet },
          ]
        }
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            twitterHandle: cleanHandle,
            walletAddress: cleanWallet,
            role: 'TRAINER',
          }
        });
      } else if (!user.walletAddress) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { walletAddress: cleanWallet }
        });
      }

      // 2. Check if already registered
      const existingReg = await prisma.airdropRegistration.findFirst({
        where: {
          campaign,
          OR: [
            { twitterHandle: cleanHandle },
            { walletAddress: cleanWallet },
          ]
        }
      });

      if (existingReg) {
        if (existingReg.twitterHandle.toLowerCase() === cleanHandle) {
          return NextResponse.json({
            success: false,
            error: `Twitter handle @${cleanHandle} is already registered in the Spin Wheel pool.`
          }, { status: 409 });
        }
        return NextResponse.json({
          success: false,
          error: `Solana wallet address ${cleanWallet.slice(0, 4)}...${cleanWallet.slice(-4)} is already registered.`
        }, { status: 409 });
      }

      // 3. Find if user owns a hatched Pokemon in DB
      const userPokemon = await prisma.pokemon.findFirst({
        where: { ownerId: user.id }
      });

      const newRegistration = await prisma.airdropRegistration.create({
        data: {
          campaign,
          userId: user.id,
          twitterHandle: cleanHandle,
          walletAddress: cleanWallet,
          pokemonId: userPokemon ? userPokemon.id : 'pokedex-25',
          status: 'ELIGIBLE',
        }
      });

      return NextResponse.json({
        success: true,
        message: 'Registration successful! You have entered the 100,000 $POKE Spin Wheel Pool.',
        entry: newRegistration,
        eligiblePokemon: userPokemon || null
      }, { status: 201 });
    } catch (dbErr) {
      console.warn('Database write failed, falling back to memory store:', dbErr);
      // Fallback
      const existing = airdropStore.find(
        (r) => r.campaign === campaign && (r.twitterHandle.toLowerCase() === cleanHandle || r.walletAddress === cleanWallet)
      );

      if (existing) {
        return NextResponse.json({
          success: false,
          error: `Twitter handle @${cleanHandle} is already registered in the Spin Wheel pool.`
        }, { status: 409 });
      }

      const eligiblePokemon = pokemonStore.find(
        (p) => p.creatorHandle.toLowerCase().replace(/^@/, '') === cleanHandle
      );

      const newEntry = {
        id: `airdrop-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        campaign,
        twitterHandle: cleanHandle,
        walletAddress: cleanWallet,
        pokemonId: eligiblePokemon ? eligiblePokemon.id : 'pokedex-25',
        status: 'ELIGIBLE' as const,
        createdAt: new Date().toISOString()
      };

      airdropStore.push(newEntry);

      return NextResponse.json({
        success: true,
        message: 'Registration successful! You have entered the 100,000 $POKE Spin Wheel Pool.',
        entry: newEntry,
        eligiblePokemon: eligiblePokemon || null
      }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'An internal server error occurred.'
    }, { status: 500 });
  }
}
