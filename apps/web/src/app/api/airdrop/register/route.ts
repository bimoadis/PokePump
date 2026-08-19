import { NextResponse } from 'next/server';
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

    // Check duplicate
    const existing = airdropStore.find(
      (r) => r.campaign === campaign && (r.twitterHandle.toLowerCase() === cleanHandle || r.walletAddress === cleanWallet)
    );

    if (existing) {
      if (existing.twitterHandle.toLowerCase() === cleanHandle) {
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
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'An internal server error occurred.'
    }, { status: 500 });
  }
}
