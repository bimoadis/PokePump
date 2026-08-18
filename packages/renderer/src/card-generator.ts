import { PokemonEntity, TYPE_COLORS } from '@pokepump/shared';

export interface CardRenderOptions {
  width?: number;
  height?: number;
}

export function generatePokemonCardSvg(pokemon: PokemonEntity, options: CardRenderOptions = {}): string {
  const width = options.width || 420;
  const height = options.height || 590;
  const theme = TYPE_COLORS[pokemon.type] || TYPE_COLORS.normal;
  const secTheme = pokemon.secondaryType ? TYPE_COLORS[pokemon.secondaryType] : null;

  return `
<svg width="${width}" height="${height}" viewBox="0 0 420 590" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Card Background Surface -->
  <rect width="420" height="590" rx="16" fill="#FFFFFF"/>
  <rect x="1" y="1" width="418" height="588" rx="15" stroke="#E6E5F0" stroke-width="2"/>

  <!-- Top Accent Header Banner -->
  <path d="M0 16C0 7.16344 7.16344 0 16 0H404C412.837 0 420 7.16344 420 16V80H0V16Z" fill="${theme.soft}"/>

  <!-- Header Pokédex Number & Level Badge -->
  <text x="24" y="46" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-weight="800" font-size="14" fill="#6B7280">${pokemon.number}</text>
  <rect x="310" y="30" width="86" height="24" rx="4" fill="${theme.hex}"/>
  <text x="353" y="46" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-weight="800" font-size="11" fill="#FFFFFF" text-anchor="middle">LVL ${pokemon.level}</text>

  <!-- Creature Display Stage with Radial Glow -->
  <rect x="24" y="90" width="372" height="236" rx="8" fill="${theme.soft}" stroke="${theme.border}" stroke-width="1.5"/>
  <circle cx="210" cy="208" r="76" fill="${theme.hex}" opacity="0.2"/>

  <!-- Official PokéAPI Artwork Image -->
  <image href="${pokemon.artworkUrl}" x="105" y="98" width="210" height="210" preserveAspectRatio="xMidYMid meet" />

  <!-- Name & Power Score -->
  <text x="24" y="356" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-weight="800" font-size="23" fill="#0D0B18">${pokemon.name}</text>
  <text x="396" y="356" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-weight="800" font-size="19" fill="#E03F36" text-anchor="end">${pokemon.powerScore} PWR</text>

  <!-- Type Badges (Primary + Optional Secondary) -->
  <rect x="24" y="370" width="68" height="20" rx="4" fill="${theme.soft}" stroke="${theme.border}"/>
  <text x="58" y="384" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#0D0B18" text-anchor="middle">${pokemon.type.toUpperCase()}</text>
  ${
    secTheme && pokemon.secondaryType
      ? `
  <rect x="98" y="370" width="68" height="20" rx="4" fill="${secTheme.soft}" stroke="${secTheme.border}"/>
  <text x="132" y="384" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#0D0B18" text-anchor="middle">${pokemon.secondaryType.toUpperCase()}</text>
  `
      : ''
  }

  <!-- Stat Bars (HP, ATK, DEF, SpATK, SPD) -->
  <!-- HP -->
  <text x="24" y="420" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6B7280">HP</text>
  <rect x="62" y="413" width="288" height="7" rx="3.5" fill="#EEEDF5"/>
  <rect x="62" y="413" width="${Math.min(288, (pokemon.stats.hp / 140) * 288)}" height="7" rx="3.5" fill="#22C55E"/>
  <text x="396" y="420" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D0B18" text-anchor="end">${pokemon.stats.hp}</text>

  <!-- ATK -->
  <text x="24" y="444" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6B7280">ATK</text>
  <rect x="62" y="437" width="288" height="7" rx="3.5" fill="#EEEDF5"/>
  <rect x="62" y="437" width="${Math.min(288, (pokemon.stats.attack / 140) * 288)}" height="7" rx="3.5" fill="#EF4444"/>
  <text x="396" y="444" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D0B18" text-anchor="end">${pokemon.stats.attack}</text>

  <!-- DEF -->
  <text x="24" y="468" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6B7280">DEF</text>
  <rect x="62" y="461" width="288" height="7" rx="3.5" fill="#EEEDF5"/>
  <rect x="62" y="461" width="${Math.min(288, (pokemon.stats.defense / 140) * 288)}" height="7" rx="3.5" fill="#3B82F6"/>
  <text x="396" y="468" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D0B18" text-anchor="end">${pokemon.stats.defense}</text>

  <!-- Sp. ATK -->
  <text x="24" y="492" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6B7280">SpA</text>
  <rect x="62" y="485" width="288" height="7" rx="3.5" fill="#EEEDF5"/>
  <rect x="62" y="485" width="${Math.min(288, (pokemon.stats.specialAttack / 140) * 288)}" height="7" rx="3.5" fill="#A855F7"/>
  <text x="396" y="492" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D0B18" text-anchor="end">${pokemon.stats.specialAttack}</text>

  <!-- SPD -->
  <text x="24" y="516" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6B7280">SPD</text>
  <rect x="62" y="509" width="288" height="7" rx="3.5" fill="#EEEDF5"/>
  <rect x="62" y="509" width="${Math.min(288, (pokemon.stats.speed / 140) * 288)}" height="7" rx="3.5" fill="#F59E0B"/>
  <text x="396" y="516" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D0B18" text-anchor="end">${pokemon.stats.speed}</text>

  <!-- Footer Provenance & Branding -->
  <line x1="24" y1="544" x2="396" y2="544" stroke="#EEEDF5" stroke-width="1"/>
  <text x="24" y="567" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="#9CA3AF">Bred by @${pokemon.creatorHandle}</text>
  <text x="396" y="567" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#E03F36" text-anchor="end">POKÉPUMP</text>
</svg>
`.trim();
}
