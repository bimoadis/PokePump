import { PokemonType, RarityGrade } from '@pokepump/shared';

export interface CatalogPokemon {
  pokedexId: number;
  number: string;
  name: string;
  species: string;
  type: PokemonType;
  secondaryType: PokemonType | null;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  basePowerScore: number;
  rarity: RarityGrade;
  artworkUrl: string;
  spriteUrl: string;
}

export const ALL_POKEDEX_CATALOG: CatalogPokemon[] = [
  {
    "pokedexId": 1,
    "number": "#0001",
    "name": "Bulbasaur",
    "species": "bulbasaur",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "basePowerScore": 536,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "pokedexId": 2,
    "number": "#0002",
    "name": "Ivysaur",
    "species": "ivysaur",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60
    },
    "basePowerScore": 680,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    "pokedexId": 3,
    "number": "#0003",
    "name": "Venusaur",
    "species": "venusaur",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "basePowerScore": 880,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "pokedexId": 4,
    "number": "#0004",
    "name": "Charmander",
    "species": "charmander",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "basePowerScore": 518,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "pokedexId": 5,
    "number": "#0005",
    "name": "Charmeleon",
    "species": "charmeleon",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "basePowerScore": 679,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "pokedexId": 6,
    "number": "#0006",
    "name": "Charizard",
    "species": "charizard",
    "type": "fire",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "basePowerScore": 902,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "pokedexId": 7,
    "number": "#0007",
    "name": "Squirtle",
    "species": "squirtle",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43
    },
    "basePowerScore": 516,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "pokedexId": 8,
    "number": "#0008",
    "name": "Wartortle",
    "species": "wartortle",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58
    },
    "basePowerScore": 667,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "pokedexId": 9,
    "number": "#0009",
    "name": "Blastoise",
    "species": "blastoise",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78
    },
    "basePowerScore": 871,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    "pokedexId": 10,
    "number": "#0010",
    "name": "Caterpie",
    "species": "caterpie",
    "type": "bug",
    "secondaryType": null,
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45
    },
    "basePowerScore": 310,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    "pokedexId": 11,
    "number": "#0011",
    "name": "Metapod",
    "species": "metapod",
    "type": "bug",
    "secondaryType": null,
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30
    },
    "basePowerScore": 325,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    "pokedexId": 12,
    "number": "#0012",
    "name": "Butterfree",
    "species": "butterfree",
    "type": "bug",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70
    },
    "basePowerScore": 653,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    "pokedexId": 13,
    "number": "#0013",
    "name": "Weedle",
    "species": "weedle",
    "type": "bug",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50
    },
    "basePowerScore": 313,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    "pokedexId": 14,
    "number": "#0014",
    "name": "Kakuna",
    "species": "kakuna",
    "type": "bug",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35
    },
    "basePowerScore": 328,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    "pokedexId": 15,
    "number": "#0015",
    "name": "Beedrill",
    "species": "beedrill",
    "type": "bug",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75
    },
    "basePowerScore": 650,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    "pokedexId": 16,
    "number": "#0016",
    "name": "Pidgey",
    "species": "pidgey",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56
    },
    "basePowerScore": 411,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    "pokedexId": 17,
    "number": "#0017",
    "name": "Pidgeotto",
    "species": "pidgeotto",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    },
    "basePowerScore": 573,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    "pokedexId": 18,
    "number": "#0018",
    "name": "Pidgeot",
    "species": "pidgeot",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101
    },
    "basePowerScore": 783,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    "pokedexId": 19,
    "number": "#0019",
    "name": "Rattata",
    "species": "rattata",
    "type": "normal",
    "secondaryType": null,
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72
    },
    "basePowerScore": 407,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    "pokedexId": 20,
    "number": "#0020",
    "name": "Raticate",
    "species": "raticate",
    "type": "normal",
    "secondaryType": null,
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97
    },
    "basePowerScore": 667,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    "pokedexId": 21,
    "number": "#0021",
    "name": "Spearow",
    "species": "spearow",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70
    },
    "basePowerScore": 434,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    "pokedexId": 22,
    "number": "#0022",
    "name": "Fearow",
    "species": "fearow",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100
    },
    "basePowerScore": 734,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    "pokedexId": 23,
    "number": "#0023",
    "name": "Ekans",
    "species": "ekans",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55
    },
    "basePowerScore": 478,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    "pokedexId": 24,
    "number": "#0024",
    "name": "Arbok",
    "species": "arbok",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    },
    "basePowerScore": 753,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    "pokedexId": 25,
    "number": "#0025",
    "name": "Pikachu",
    "species": "pikachu",
    "type": "electric",
    "secondaryType": null,
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "basePowerScore": 515,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    "pokedexId": 26,
    "number": "#0026",
    "name": "Raichu",
    "species": "raichu",
    "type": "electric",
    "secondaryType": null,
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110
    },
    "basePowerScore": 813,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    "pokedexId": 27,
    "number": "#0027",
    "name": "Sandshrew",
    "species": "sandshrew",
    "type": "ground",
    "secondaryType": null,
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40
    },
    "basePowerScore": 510,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    "pokedexId": 28,
    "number": "#0028",
    "name": "Sandslash",
    "species": "sandslash",
    "type": "ground",
    "secondaryType": null,
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65
    },
    "basePowerScore": 760,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    "pokedexId": 29,
    "number": "#0029",
    "name": "Nidoran♀",
    "species": "nidoran-f",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41
    },
    "basePowerScore": 459,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    "pokedexId": 30,
    "number": "#0030",
    "name": "Nidorina",
    "species": "nidorina",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56
    },
    "basePowerScore": 609,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    "pokedexId": 31,
    "number": "#0031",
    "name": "Nidoqueen",
    "species": "nidoqueen",
    "type": "poison",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76
    },
    "basePowerScore": 844,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    "pokedexId": 32,
    "number": "#0032",
    "name": "Nidoran♂",
    "species": "nidoran-m",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50
    },
    "basePowerScore": 462,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    "pokedexId": 33,
    "number": "#0033",
    "name": "Nidorino",
    "species": "nidorino",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65
    },
    "basePowerScore": 615,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    "pokedexId": 34,
    "number": "#0034",
    "name": "Nidoking",
    "species": "nidoking",
    "type": "poison",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "basePowerScore": 864,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    "pokedexId": 35,
    "number": "#0035",
    "name": "Clefairy",
    "species": "clefairy",
    "type": "fairy",
    "secondaryType": null,
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35
    },
    "basePowerScore": 540,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    "pokedexId": 36,
    "number": "#0036",
    "name": "Clefable",
    "species": "clefable",
    "type": "fairy",
    "secondaryType": null,
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60
    },
    "basePowerScore": 815,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    "pokedexId": 37,
    "number": "#0037",
    "name": "Vulpix",
    "species": "vulpix",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65
    },
    "basePowerScore": 475,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    "pokedexId": 38,
    "number": "#0038",
    "name": "Ninetales",
    "species": "ninetales",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100
    },
    "basePowerScore": 815,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    "pokedexId": 39,
    "number": "#0039",
    "name": "Jigglypuff",
    "species": "jigglypuff",
    "type": "normal",
    "secondaryType": "fairy",
    "baseStats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20
    },
    "basePowerScore": 473,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    "pokedexId": 40,
    "number": "#0040",
    "name": "Wigglytuff",
    "species": "wigglytuff",
    "type": "normal",
    "secondaryType": "fairy",
    "baseStats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45
    },
    "basePowerScore": 760,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    "pokedexId": 41,
    "number": "#0041",
    "name": "Zubat",
    "species": "zubat",
    "type": "poison",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55
    },
    "basePowerScore": 395,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    "pokedexId": 42,
    "number": "#0042",
    "name": "Golbat",
    "species": "golbat",
    "type": "poison",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90
    },
    "basePowerScore": 745,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    "pokedexId": 43,
    "number": "#0043",
    "name": "Oddish",
    "species": "oddish",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30
    },
    "basePowerScore": 558,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    "pokedexId": 44,
    "number": "#0044",
    "name": "Gloom",
    "species": "gloom",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "basePowerScore": 685,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    "pokedexId": 45,
    "number": "#0045",
    "name": "Vileplume",
    "species": "vileplume",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50
    },
    "basePowerScore": 855,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    "pokedexId": 46,
    "number": "#0046",
    "name": "Paras",
    "species": "paras",
    "type": "bug",
    "secondaryType": "grass",
    "baseStats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25
    },
    "basePowerScore": 503,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    "pokedexId": 47,
    "number": "#0047",
    "name": "Parasect",
    "species": "parasect",
    "type": "bug",
    "secondaryType": "grass",
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30
    },
    "basePowerScore": 708,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    "pokedexId": 48,
    "number": "#0048",
    "name": "Venonat",
    "species": "venonat",
    "type": "bug",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45
    },
    "basePowerScore": 503,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    "pokedexId": 49,
    "number": "#0049",
    "name": "Venomoth",
    "species": "venomoth",
    "type": "bug",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90
    },
    "basePowerScore": 748,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    "pokedexId": 50,
    "number": "#0050",
    "name": "Diglett",
    "species": "diglett",
    "type": "ground",
    "secondaryType": null,
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95
    },
    "basePowerScore": 418,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    "pokedexId": 51,
    "number": "#0051",
    "name": "Dugtrio",
    "species": "dugtrio",
    "type": "ground",
    "secondaryType": null,
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "basePowerScore": 693,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    "pokedexId": 52,
    "number": "#0052",
    "name": "Meowth",
    "species": "meowth",
    "type": "normal",
    "secondaryType": null,
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "basePowerScore": 455,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    "pokedexId": 53,
    "number": "#0053",
    "name": "Persian",
    "species": "persian",
    "type": "normal",
    "secondaryType": null,
    "baseStats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115
    },
    "basePowerScore": 705,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    "pokedexId": 54,
    "number": "#0054",
    "name": "Psyduck",
    "species": "psyduck",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    },
    "basePowerScore": 545,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    "pokedexId": 55,
    "number": "#0055",
    "name": "Golduck",
    "species": "golduck",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85
    },
    "basePowerScore": 845,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
    "pokedexId": 56,
    "number": "#0056",
    "name": "Mankey",
    "species": "mankey",
    "type": "fighting",
    "secondaryType": null,
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70
    },
    "basePowerScore": 515,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
    "pokedexId": 57,
    "number": "#0057",
    "name": "Primeape",
    "species": "primeape",
    "type": "fighting",
    "secondaryType": null,
    "baseStats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "basePowerScore": 765,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
    "pokedexId": 58,
    "number": "#0058",
    "name": "Growlithe",
    "species": "growlithe",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60
    },
    "basePowerScore": 610,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
    "pokedexId": 59,
    "number": "#0059",
    "name": "Arcanine",
    "species": "arcanine",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95
    },
    "basePowerScore": 955,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
    "pokedexId": 60,
    "number": "#0060",
    "name": "Poliwag",
    "species": "poliwag",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "basePowerScore": 475,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
    "pokedexId": 61,
    "number": "#0061",
    "name": "Poliwhirl",
    "species": "poliwhirl",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "basePowerScore": 623,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
    "pokedexId": 62,
    "number": "#0062",
    "name": "Poliwrath",
    "species": "poliwrath",
    "type": "water",
    "secondaryType": "fighting",
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70
    },
    "basePowerScore": 850,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
    "pokedexId": 63,
    "number": "#0063",
    "name": "Abra",
    "species": "abra",
    "type": "psychic",
    "secondaryType": null,
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90
    },
    "basePowerScore": 518,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
    "pokedexId": 64,
    "number": "#0064",
    "name": "Kadabra",
    "species": "kadabra",
    "type": "psychic",
    "secondaryType": null,
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105
    },
    "basePowerScore": 668,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
    "pokedexId": 65,
    "number": "#0065",
    "name": "Alakazam",
    "species": "alakazam",
    "type": "psychic",
    "secondaryType": null,
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120
    },
    "basePowerScore": 828,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
    "pokedexId": 66,
    "number": "#0066",
    "name": "Machop",
    "species": "machop",
    "type": "fighting",
    "secondaryType": null,
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "basePowerScore": 538,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
    "pokedexId": 67,
    "number": "#0067",
    "name": "Machoke",
    "species": "machoke",
    "type": "fighting",
    "secondaryType": null,
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45
    },
    "basePowerScore": 705,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
    "pokedexId": 68,
    "number": "#0068",
    "name": "Machamp",
    "species": "machamp",
    "type": "fighting",
    "secondaryType": null,
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55
    },
    "basePowerScore": 883,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    "pokedexId": 69,
    "number": "#0069",
    "name": "Bellsprout",
    "species": "bellsprout",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40
    },
    "basePowerScore": 560,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
    "pokedexId": 70,
    "number": "#0070",
    "name": "Weepinbell",
    "species": "weepinbell",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55
    },
    "basePowerScore": 710,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
    "pokedexId": 71,
    "number": "#0071",
    "name": "Victreebel",
    "species": "victreebel",
    "type": "grass",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70
    },
    "basePowerScore": 870,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
    "pokedexId": 72,
    "number": "#0072",
    "name": "Tentacool",
    "species": "tentacool",
    "type": "water",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "basePowerScore": 508,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
    "pokedexId": 73,
    "number": "#0073",
    "name": "Tentacruel",
    "species": "tentacruel",
    "type": "water",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "basePowerScore": 813,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
    "pokedexId": 74,
    "number": "#0074",
    "name": "Geodude",
    "species": "geodude",
    "type": "rock",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20
    },
    "basePowerScore": 535,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
    "pokedexId": 75,
    "number": "#0075",
    "name": "Graveler",
    "species": "graveler",
    "type": "rock",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35
    },
    "basePowerScore": 685,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
    "pokedexId": 76,
    "number": "#0076",
    "name": "Golem",
    "species": "golem",
    "type": "rock",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "basePowerScore": 863,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
    "pokedexId": 77,
    "number": "#0077",
    "name": "Ponyta",
    "species": "ponyta",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90
    },
    "basePowerScore": 688,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
    "pokedexId": 78,
    "number": "#0078",
    "name": "Rapidash",
    "species": "rapidash",
    "type": "fire",
    "secondaryType": null,
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105
    },
    "basePowerScore": 838,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
    "pokedexId": 79,
    "number": "#0079",
    "name": "Slowpoke",
    "species": "slowpoke",
    "type": "water",
    "secondaryType": "psychic",
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15
    },
    "basePowerScore": 550,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
    "pokedexId": 80,
    "number": "#0080",
    "name": "Slowbro",
    "species": "slowbro",
    "type": "water",
    "secondaryType": "psychic",
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "basePowerScore": 855,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
    "pokedexId": 81,
    "number": "#0081",
    "name": "Magnemite",
    "species": "magnemite",
    "type": "electric",
    "secondaryType": "steel",
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45
    },
    "basePowerScore": 568,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
    "pokedexId": 82,
    "number": "#0082",
    "name": "Magneton",
    "species": "magneton",
    "type": "electric",
    "secondaryType": "steel",
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70
    },
    "basePowerScore": 808,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
    "pokedexId": 83,
    "number": "#0083",
    "name": "Farfetch'd",
    "species": "farfetchd",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60
    },
    "basePowerScore": 653,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
    "pokedexId": 84,
    "number": "#0084",
    "name": "Doduo",
    "species": "doduo",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75
    },
    "basePowerScore": 530,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
    "pokedexId": 85,
    "number": "#0085",
    "name": "Dodrio",
    "species": "dodrio",
    "type": "normal",
    "secondaryType": "flying",
    "baseStats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110
    },
    "basePowerScore": 790,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
    "pokedexId": 86,
    "number": "#0086",
    "name": "Seel",
    "species": "seel",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45
    },
    "basePowerScore": 520,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
    "pokedexId": 87,
    "number": "#0087",
    "name": "Dewgong",
    "species": "dewgong",
    "type": "water",
    "secondaryType": "ice",
    "baseStats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70
    },
    "basePowerScore": 770,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
    "pokedexId": 88,
    "number": "#0088",
    "name": "Grimer",
    "species": "grimer",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25
    },
    "basePowerScore": 570,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
    "pokedexId": 89,
    "number": "#0089",
    "name": "Muk",
    "species": "muk",
    "type": "poison",
    "secondaryType": null,
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50
    },
    "basePowerScore": 845,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
    "pokedexId": 90,
    "number": "#0090",
    "name": "Shellder",
    "species": "shellder",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40
    },
    "basePowerScore": 535,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
    "pokedexId": 91,
    "number": "#0091",
    "name": "Cloyster",
    "species": "cloyster",
    "type": "water",
    "secondaryType": "ice",
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70
    },
    "basePowerScore": 910,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
    "pokedexId": 92,
    "number": "#0092",
    "name": "Gastly",
    "species": "gastly",
    "type": "ghost",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80
    },
    "basePowerScore": 543,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    "pokedexId": 93,
    "number": "#0093",
    "name": "Haunter",
    "species": "haunter",
    "type": "ghost",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95
    },
    "basePowerScore": 698,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
    "pokedexId": 94,
    "number": "#0094",
    "name": "Gengar",
    "species": "gengar",
    "type": "ghost",
    "secondaryType": "poison",
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110
    },
    "basePowerScore": 853,
    "rarity": "EPIC",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    "pokedexId": 95,
    "number": "#0095",
    "name": "Onix",
    "species": "onix",
    "type": "rock",
    "secondaryType": "ground",
    "baseStats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70
    },
    "basePowerScore": 595,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
    "pokedexId": 96,
    "number": "#0096",
    "name": "Drowzee",
    "species": "drowzee",
    "type": "psychic",
    "secondaryType": null,
    "baseStats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42
    },
    "basePowerScore": 517,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
    "pokedexId": 97,
    "number": "#0097",
    "name": "Hypno",
    "species": "hypno",
    "type": "psychic",
    "secondaryType": null,
    "baseStats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67
    },
    "basePowerScore": 780,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
    "pokedexId": 98,
    "number": "#0098",
    "name": "Krabby",
    "species": "krabby",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50
    },
    "basePowerScore": 580,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
    "pokedexId": 99,
    "number": "#0099",
    "name": "Kingler",
    "species": "kingler",
    "type": "water",
    "secondaryType": null,
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75
    },
    "basePowerScore": 830,
    "rarity": "RARE",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
    "pokedexId": 100,
    "number": "#0100",
    "name": "Voltorb",
    "species": "voltorb",
    "type": "electric",
    "secondaryType": null,
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100
    },
    "basePowerScore": 503,
    "rarity": "COMMON",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  }
];
