import type { EventKey, EventType } from '@/types/types'
import { BUCKETS } from './buckets'
import { CLASSES } from './constants'

export const EVENTS = {
  ALL: {
    image: 'TB_BaconShopBob',
    bucket: BUCKETS.ALL.ALL,
    tooltips: {
      SHOP: 'Open a shop with all cards!',
      DISCOVER: 'Discover 2 cards!',
      CHOOSE: 'Choose 1 of 2 cards!',
      GET: 'Get a random card!',
    },
  },
  TAUNT: {
    image: 'TB_BaconShop_HERO_95',
    bucket: BUCKETS.KEYWORD_IDS.TAUNT,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Taunt</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Taunt</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Taunt</i></b> cards!',
      GET: 'Get a random <b><i>Taunt</i></b> card!',
    },
  },
  SPELL_DAMAGE: {
    image: 'TB_BaconShop_HERO_58',
    bucket: BUCKETS.KEYWORD_IDS.SPELL_DAMAGE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Spell Damage</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Spell Damage</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Spell Damage</i></b> cards!',
      GET: 'Get a random <b><i>Spell Damage</i></b> card!',
    },
  },
  DIVINE_SHIELD: {
    image: 'TB_BaconShop_HERO_15',
    bucket: BUCKETS.KEYWORD_IDS.DIVINE_SHIELD,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Divine Shield</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Divine Shield</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Divine Shield</i></b> cards!',
      GET: 'Get a random <b><i>Divine Shield</i></b> card!',
    },
  },
  SECRET: {
    image: 'TB_BaconShop_HERO_21',
    bucket: BUCKETS.KEYWORD_IDS.SECRET,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Secret</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Secret</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Secret</i></b> cards!',
      GET: 'Get a random <b><i>Secret</i></b> card!',
    },
  },
  STEALTH: {
    image: 'HERO_02be',
    bucket: BUCKETS.KEYWORD_IDS.STEALTH,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Stealth</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Stealth</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Stealth</i></b> cards!',
      GET: 'Get a random <b><i>Stealth</i></b> card!',
    },
  },
  BATTLECRY: {
    image: 'TB_BaconShop_HERO_23',
    bucket: BUCKETS.KEYWORD_IDS.BATTLECRY,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Battlecry</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Battlecry</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Battlecry</i></b> cards!',
      GET: 'Get a random <b><i>Battlecry</i></b> card!',
    },
  },
  FREEZE: {
    image: 'BG22_HERO_004',
    bucket: BUCKETS.KEYWORD_IDS.FREEZE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Freeze</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Freeze</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Freeze</i></b> cards!',
      GET: 'Get a random <b><i>Freeze</i></b> card!',
    },
  },
  DEATHRATTLE: {
    image: 'TB_BaconShop_HERO_93',
    bucket: BUCKETS.KEYWORD_IDS.DEATHRATTLE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Deathrattle</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Deathrattle</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Deathrattle</i></b> cards!',
      GET: 'Get a random <b><i>Deathrattle</i></b> card!',
    },
  },
  COMBO: {
    image: 'TB_BaconShop_HERO_01',
    bucket: BUCKETS.KEYWORD_IDS.COMBO,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Combo</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Combo</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Combo</i></b> cards!',
      GET: 'Get a random <b><i>Combo</i></b> card!',
    },
  },
  OVERLOAD: {
    image: 'BG27_HERO_801',
    bucket: BUCKETS.KEYWORD_IDS.OVERLOAD,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Overload</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Overload</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Overload</i></b> cards!',
      GET: 'Get a random <b><i>Overload</i></b> card!',
    },
  },
  DISCOVER: {
    image: 'BG28_HERO_400',
    bucket: BUCKETS.KEYWORD_IDS.DISCOVER,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Discover</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Discover</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Discover</i></b> cards!',
      GET: 'Get a random <b><i>Discover</i></b> card!',
    },
  },
  QUEST: {
    image: 'TB_BaconShop_HERO_41',
    bucket: BUCKETS.KEYWORD_IDS.QUEST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Quest</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Quest</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Quest</i></b> cards!',
      GET: 'Get a random <b><i>Quest</i></b> card!',
    },
  },
  LIFESTEAL: {
    image: 'BG24_HERO_100',
    bucket: BUCKETS.KEYWORD_IDS.LIFESTEAL,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Lifesteal</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Lifesteal</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Lifesteal</i></b> cards!',
      GET: 'Get a random <b><i>Lifesteal</i></b> card!',
    },
  },
  RUSH: {
    image: 'HERO_10z',
    bucket: BUCKETS.KEYWORD_IDS.RUSH,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Rush</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Rush</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Rush</i></b> cards!',
      GET: 'Get a random <b><i>Rush</i></b> card!',
    },
  },
  REBORN: {
    image: 'HERO_11u_Arfus',
    bucket: BUCKETS.KEYWORD_IDS.REBORN,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Reborn</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Reborn</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Reborn</i></b> cards!',
      GET: 'Get a random <b><i>Reborn</i></b> card!',
    },
  },
  OUTCAST: {
    image: 'BG20_HERO_280',
    bucket: BUCKETS.KEYWORD_IDS.OUTCAST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Outcast</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Outcast</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Outcast</i></b> cards!',
      GET: 'Get a random <b><i>Outcast</i></b> card!',
    },
  },
  SPELLBURST: {
    image: 'TB_BaconShop_HERO_74',
    bucket: BUCKETS.KEYWORD_IDS.SPELLBURST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Spellburst</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Spellburst</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Spellburst</i></b> cards!',
      GET: 'Get a random <b><i>Spellburst</i></b> card!',
    },
  },
  TRADEABLE: {
    image: 'TB_BaconShop_HERO_10',
    bucket: BUCKETS.KEYWORD_IDS.TRADEABLE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Tradeable</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Tradeable</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Tradeable</i></b> cards!',
      GET: 'Get a random <b><i>Tradeable</i></b> card!',
    },
  },
  CORPSE: {
    image: 'TB_BaconShop_HERO_702',
    bucket: BUCKETS.KEYWORD_IDS.CORPSE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Corpse</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Corpse</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Corpse</i></b> cards!',
      GET: 'Get a random <b><i>Corpse</i></b> card!',
    },
  },
  ELUSIVE: {
    image: 'HERO_06r',
    bucket: BUCKETS.KEYWORD_IDS.ELUSIVE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Elusive</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Elusive</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Elusive</i></b> cards!',
      GET: 'Get a random <b><i>Elusive</i></b> card!',
    },
  },
  MINIATURIZE: {
    image: 'THD_034',
    bucket: BUCKETS.KEYWORD_IDS.MINIATURIZE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Miniaturize</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Miniaturize</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Miniaturize</i></b> cards!',
      GET: 'Get a random <b><i>Miniaturize</i></b> card!',
    },
  },
  TOURIST: {
    image: 'BG32_HERO_002',
    bucket: BUCKETS.KEYWORD_IDS.TOURIST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Tourist</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Tourist</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Tourist</i></b> cards!',
      GET: 'Get a random <b><i>Tourist</i></b> card!',
    },
  },
  IMBUE: {
    image: 'HERO_06f',
    bucket: BUCKETS.KEYWORD_IDS.IMBUE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Imbue</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Imbue</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Imbue</i></b> cards!',
      GET: 'Get a random <b><i>Imbue</i></b> card!',
    },
  },
  DARK_GIFT: {
    image: 'HERO_07az',
    bucket: BUCKETS.KEYWORD_IDS.DARK_GIFT,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Dark Gift</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Dark Gift</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Dark Gift</i></b> cards!',
      GET: 'Get a random <b><i>Dark Gift</i></b> card!',
    },
  },
  TEMPORARY: {
    image: 'HERO_07ag',
    bucket: BUCKETS.KEYWORD_IDS.TEMPORARY,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Temporary</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Temporary</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Temporary</i></b> cards!',
      GET: 'Get a random <b><i>Temporary</i></b> card!',
    },
  },
  STARSHIP: {
    image: 'BG31_HERO_006',
    bucket: BUCKETS.KEYWORD_IDS.STARSHIP,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Starship</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Starship</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Starship</i></b> cards!',
      GET: 'Get a random <b><i>Starship</i></b> card!',
    },
  },
  KINDRED: {
    image: 'HERO_02a',
    bucket: BUCKETS.KEYWORD_IDS.KINDRED,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Kindred</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Kindred</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Kindred</i></b> cards!',
      GET: 'Get a random <b><i>Kindred</i></b> card!',
    },
  },
  CORE: {
    image: 'TB_BaconShopBob_SKIN_AD',
    bucket: BUCKETS.CARD_SET_IDS.CORE,
    tooltips: {
      SHOP: 'Open a shop with cards from <b><i>the Core Set</i></b> !',
      DISCOVER: 'Discover 2 cards from <b><i>the Core Set</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards from <b><i>the Core Set</i></b> !',
      GET: 'Get a random card from <b><i>the Core Set</i></b> !',
    },
  },
  WHIZBANGS_WORKSHOP: {
    image: 'TB_BaconShopBob_SKIN_AJ',
    bucket: BUCKETS.CARD_SET_IDS.WHIZBANGS_WORKSHOP,
    tooltips: {
      SHOP: "Open a shop with cards from <b><i>Whizbang's Workshop</i></b> !",
      DISCOVER: "Discover 2 cards from <bWhizbang's Workshop></i></b> !",
      CHOOSE: "Choose 1 of 2 cards from <b><i>Whizbang's Workshop</i></b> !",
      GET: "Get a random card from <b><i>Whizbang's Workshop</i></b> !",
    },
  },
  PERILS_IN_PARADISE: {
    image: 'BG30_HERO_304',
    bucket: BUCKETS.CARD_SET_IDS.PERILS_IN_PARADISE,
    tooltips: {
      SHOP: 'Open a shop with cards from <b><i>Perlis in Paradise</i></b> !',
      DISCOVER: 'Discover 2 cards from <b><i>Perlis in Paradise</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards from <b><i>Perlis in Paradise</i></b> !',
      GET: 'Get a random card from <b><i>Perlis in Paradise</i></b> !',
    },
  },
  THE_GREAT_DARK_BEYOND: {
    image: 'BG31_HERO_003',
    bucket: BUCKETS.CARD_SET_IDS.THE_GREAT_DARK_BEYOND,
    tooltips: {
      SHOP: 'Open a shop with cards from <b><i>The Great Dark Beyond</i></b> !',
      DISCOVER: 'Discover 2 cards from <b><i>The Great Dark Beyond</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards from <b><i>The Great Dark Beyond</i></b> !',
      GET: 'Get a random card from <b><i>The Great Dark Beyond</i></b> !',
    },
  },
  EVENT: {
    image: 'TB_BaconShopBob_SKIN_O',
    bucket: BUCKETS.CARD_SET_IDS.EVENT,
    tooltips: {
      SHOP: 'Open a shop with cards from <b><i>the Event Set</i></b> !',
      DISCOVER: 'Discover 2 cards from <b><i>the Event Set</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards from <b><i>the Event Set</i></b> !',
      GET: 'Get a random card from <b><i>the Event Set</i></b> !',
    },
  },
  INTO_THE_EMERALD_DREAM: {
    image: 'TB_BaconShopBob_SKIN_AO',
    bucket: BUCKETS.CARD_SET_IDS.INTO_THE_EMERALD_DREAM,
    tooltips: {
      SHOP: 'Open a shop with cards from <b><i>Into the Emerald Dream</i></b> !',
      DISCOVER: 'Discover 2 cards from <b><i>Into the Emerald Dream</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards from <b><i>Into the Emerald Dream</i></b> !',
      GET: 'Get a random card from <b><i>Into the Emerald Dream</i></b> !',
    },
  },
  THE_LOST_CITY_OF_UNGORO: {
    image: 'BG33_HERO_001',
    bucket: BUCKETS.CARD_SET_IDS.THE_LOST_CITY_OF_UNGORO,
    tooltips: {
      SHOP: "Open a shop with cards from <b><i>The Lost City of Un'Goro</i></b> !",
      DISCOVER: "Discover 2 cards from <b><i>The Lost City of Un'Goro</i></b> !",
      CHOOSE: "Choose 1 of 2 cards from <b><i>The Lost City of Un'Goro</i></b> !",
      GET: "Get a random card from <b><i>The Lost City of Un'Goro</i></b> !",
    },
  },
  HERO: {
    image: 'TB_BaconShopBob_SKIN_Q3',
    bucket: BUCKETS.CARD_TYPE_IDS.HERO,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Kindred</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Kindred</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Kindred</i></b> cards!',
      GET: 'Get a random <b><i>Kindred</i></b> card!',
    },
  },
  MINION: {
    image: 'TB_BaconShopBob_SKIN_AA',
    bucket: BUCKETS.CARD_TYPE_IDS.MINION,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Minions</i></b> !',
      DISCOVER: 'Discover 2 <b><i>Minions</i></b> !',
      CHOOSE: 'Choose 1 of 2 <b><i>Minions</i></b> !',
      GET: 'Get a random <b><i>Minion</i></b>',
    },
  },
  SPELL: {
    image: 'TB_BaconShop_HERO_49',
    bucket: BUCKETS.CARD_TYPE_IDS.SPELL,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Spells</i></b> !',
      DISCOVER: 'Discover 2 <b><i>Spells</i></b> !',
      CHOOSE: 'Choose 1 of 2 <b><i>Spells</i></b> !',
      GET: 'Get a random <b><i>Spell</i></b>',
    },
  },
  WEAPON: {
    image: 'HERO_01bc',
    bucket: BUCKETS.CARD_TYPE_IDS.WEAPON,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Weapon</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Weapon</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Weapon</i></b> cards!',
      GET: 'Get a random <b><i>Weapon</i></b> card!',
    },
  },
  LOCATION: {
    image: 'TB_BaconShop_HERO_42',
    bucket: BUCKETS.CARD_TYPE_IDS.LOCATION,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Location</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Location</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Location</i></b> cards!',
      GET: 'Get a random <b><i>Location</i></b> card!',
    },
  },
  ARCANE: {
    image: 'HERO_08a',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.ARCANE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Arcane</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Arcane</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Arcane</i></b> cards!',
      GET: 'Get a random <b><i>Arcane</i></b> card!',
    },
  },
  FIRE: {
    image: 'TB_BaconShop_HERO_11',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.FIRE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Fire</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Fire</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Fire</i></b> cards!',
      GET: 'Get a random <b><i>Fire</i></b> card!',
    },
  },
  FROST: {
    image: 'TB_BaconShop_HERO_27',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.FROST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Frost</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Frost</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Frost</i></b> cards!',
      GET: 'Get a random <b><i>Frost</i></b> card!',
    },
  },
  NATURE: {
    image: 'BG20_HERO_242',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.NATURE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Nature</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Nature</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Nature</i></b> cards!',
      GET: 'Get a random <b><i>Nature</i></b> card!',
    },
  },
  HOLY: {
    image: 'BG21_HERO_000',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.HOLY,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Holy</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Holy</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Holy</i></b> cards!',
      GET: 'Get a random <b><i>Holy</i></b> card!',
    },
  },
  SHADOW: {
    image: 'BG20_HERO_282',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.SHADOW,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Shadow</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Shadow</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Shadow</i></b> cards!',
      GET: 'Get a random <b><i>Shadow</i></b> card!',
    },
  },
  FEL: {
    image: 'TB_BaconShop_HERO_59',
    bucket: BUCKETS.SPELL_SCHOOL_IDS.FEL,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Fel</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Fel</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Fel</i></b> cards!',
      GET: 'Get a random <b><i>Fel</i></b> card!',
    },
  },
  DRAENEI: {
    image: 'HERO_09at',
    bucket: BUCKETS.MINION_TYPE_IDS.DRAENEI,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Draenei</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Draenei</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Draenei</i></b> cards!',
      GET: 'Get a random <b><i>Draenei</i></b> card!',
    },
  },
  UNDEAD: {
    image: 'BG25_HERO_100',
    bucket: BUCKETS.MINION_TYPE_IDS.UNDEAD,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Undead</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Undead</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Undead</i></b> cards!',
      GET: 'Get a random <b><i>Undead</i></b> card!',
    },
  },
  MURLOC: {
    image: 'TB_BaconShop_HERO_55',
    bucket: BUCKETS.MINION_TYPE_IDS.MURLOC,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Murloc</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Murloc</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Murloc</i></b> cards!',
      GET: 'Get a random <b><i>Murloc</i></b> card!',
    },
  },
  DEMON: {
    image: 'TB_BaconShop_HERO_37',
    bucket: BUCKETS.MINION_TYPE_IDS.DEMON,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Demon</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Demon</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Demon</i></b> cards!',
      GET: 'Get a random <b><i>Demon</i></b> card!',
    },
  },
  MECH: {
    image: 'BG22_HERO_200',
    bucket: BUCKETS.MINION_TYPE_IDS.MECH,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Mech</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Mech</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Mech</i></b> cards!',
      GET: 'Get a random <b><i>Mech</i></b> card!',
    },
  },
  ELEMENTAL: {
    image: 'TB_BaconShop_HERO_78',
    bucket: BUCKETS.MINION_TYPE_IDS.ELEMENTAL,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Elemental</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Elemental</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Elemental</i></b> cards!',
      GET: 'Get a random <b><i>Elemental</i></b> card!',
    },
  },
  BEAST: {
    image: 'BG22_HERO_000',
    bucket: BUCKETS.MINION_TYPE_IDS.BEAST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Beast</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Beast</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Beast</i></b> cards!',
      GET: 'Get a random <b><i>Beast</i></b> card!',
    },
  },
  PIRATE: {
    image: 'TB_BaconShop_HERO_18',
    bucket: BUCKETS.MINION_TYPE_IDS.PIRATE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Pirate</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Pirate</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Pirate</i></b> cards!',
      GET: 'Get a random <b><i>Pirate</i></b> card!',
    },
  },
  DRAGON: {
    image: 'BG22_HERO_305',
    bucket: BUCKETS.MINION_TYPE_IDS.DRAGON,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Dragon</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Dragon</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Dragon</i></b> cards!',
      GET: 'Get a random <b><i>Dragon</i></b> card!',
    },
  },
  ZERG: {
    image: 'BG31_HERO_811',
    bucket: BUCKETS.FACTION_IDS.ZERG,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Zerg</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Zerg</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Zerg</i></b> cards!',
      GET: 'Get a random <b><i>Zerg</i></b> card!',
    },
  },
  TERRAN: {
    image: 'BG31_HERO_801',
    bucket: BUCKETS.FACTION_IDS.TERRAN,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Terran</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Terran</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Terran</i></b> cards!',
      GET: 'Get a random <b><i>Terran</i></b> card!',
    },
  },
  PROTOSS: {
    image: 'BG31_HERO_802',
    bucket: BUCKETS.FACTION_IDS.PROTOSS,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Protoss</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Protoss</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Protoss</i></b> cards!',
      GET: 'Get a random <b><i>Protoss</i></b> card!',
    },
  },
  DEATH_KNIGHT: {
    image: 'HERO_11',
    bucket: BUCKETS.CLASSES.DEATH_KNIGHT,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Death Knight</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Death Knight</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Death Knight</i></b> cards!',
      GET: 'Get a random <b><i>Death Knight</i></b> card!',
    },
  },
  DEMON_HUNTER: {
    image: 'HERO_10',
    bucket: BUCKETS.CLASSES.DEMON_HUNTER,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Demon Hunter</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Demon Hunter</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Demon Hunter</i></b> cards!',
      GET: 'Get a random <b><i>Demon Hunter</i></b> card!',
    },
  },
  DRUID: {
    image: 'HERO_06',
    bucket: BUCKETS.CLASSES.DRUID,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Druid</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Druid</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Druid</i></b> cards!',
      GET: 'Get a random <b><i>Druid</i></b> card!',
    },
  },
  HUNTER: {
    image: 'HERO_05',
    bucket: BUCKETS.CLASSES.HUNTER,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Hunter</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Hunter</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Hunter</i></b> cards!',
      GET: 'Get a random <b><i>Hunter</i></b> card!',
    },
  },
  MAGE: {
    image: 'HERO_08',
    bucket: BUCKETS.CLASSES.MAGE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Mage</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Mage</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Mage</i></b> cards!',
      GET: 'Get a random <b><i>Mage</i></b> card!',
    },
  },
  PALADIN: {
    image: 'HERO_04',
    bucket: BUCKETS.CLASSES.PALADIN,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Paladin</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Paladin</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Paladin</i></b> cards!',
      GET: 'Get a random <b><i>Paladin</i></b> card!',
    },
  },
  PRIEST: {
    image: 'HERO_09',
    bucket: BUCKETS.CLASSES.PRIEST,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Priest</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Priest</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Priest</i></b> cards!',
      GET: 'Get a random <b><i>Priest</i></b> card!',
    },
  },
  ROGUE: {
    image: 'HERO_03',
    bucket: BUCKETS.CLASSES.ROGUE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Rogue</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Rogue</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Rogue</i></b> cards!',
      GET: 'Get a random <b><i>Rogue</i></b> card!',
    },
  },
  SHAMAN: {
    image: 'HERO_02',
    bucket: BUCKETS.CLASSES.SHAMAN,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Shaman</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Shaman</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Shaman</i></b> cards!',
      GET: 'Get a random <b><i>Shaman</i></b> card!',
    },
  },
  WARLOCK: {
    image: 'HERO_07',
    bucket: BUCKETS.CLASSES.WARLOCK,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Warlock</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Warlock</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Warlock</i></b> cards!',
      GET: 'Get a random <b><i>Warlock</i></b> card!',
    },
  },
  WARRIOR: {
    image: 'HERO_01',
    bucket: BUCKETS.CLASSES.WARRIOR,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Warrior</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Warrior</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Warrior</i></b> cards!',
      GET: 'Get a random <b><i>Warrior</i></b> card!',
    },
  },
  NEUTRAL: {
    image: 'TB_BaconShopBob_SKIN_AL',
    bucket: BUCKETS.CLASSES.NEUTRAL,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Neutral</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Neutral</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Neutral</i></b> cards!',
      GET: 'Get a random <b><i>Neutral</i></b> card!',
    },
  },
  COMMON: {
    image: 'TB_BaconShopBob_SKIN_AK',
    bucket: BUCKETS.RARITY.COMMON,
    tooltips: {
      SHOP: 'Open a shop with <b><i>common</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>common</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>common</i></b> cards!',
      GET: 'Get a random <b><i>common</i></b> card!',
    },
  },
  RARE: {
    image: 'TB_BaconShopBob_SKIN_B',
    bucket: BUCKETS.RARITY.RARE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>rare</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>rare</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>rare</i></b> cards!',
      GET: 'Get a random <b><i>rare</i></b> card!',
    },
  },
  EPIC: {
    image: 'TB_BaconShopBob_SKIN_D',
    bucket: BUCKETS.RARITY.EPIC,
    tooltips: {
      SHOP: 'Open a shop with <b><i>epic</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>epic</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>epic</i></b> cards!',
      GET: 'Get a random <b><i>epic</i></b> card!',
    },
  },
  LEGENDARY: {
    image: 'TB_BaconShop_HERO_91',
    bucket: BUCKETS.RARITY.LEGENDARY,
    tooltips: {
      SHOP: 'Open a shop with <b><i>legendary</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>legendary</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>legendary</i></b> cards!',
      GET: 'Get a random <b><i>legendary</i></b> card!',
    },
  },
  DEAL_DAMAGE: {
    image: 'TB_BaconShop_HERO_29',
    bucket: BUCKETS.CUSTOM.DEAL_DAMAGE,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>deal damage</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>deal damage</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>deal damage</i></b> !',
      GET: 'Get a random card that <b><i>deals damage</i></b> !',
    },
  },
  MANA_CRYSTAL: {
    image: 'TB_BaconShop_HERO_53',
    bucket: BUCKETS.CUSTOM.MANA_CRYSTAL,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with Mana Crystals</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with Mana Crystals</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with Mana Crystals</i></b> !',
      GET: 'Get a random card that <b><i>interacts with Mana Crystals</i></b> !',
    },
  },
  HEAL: {
    image: 'BG20_HERO_101',
    bucket: BUCKETS.CUSTOM.HEAL,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>heal</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>heal</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>heal</i></b> !',
      GET: 'Get a random card that <b><i>heals</i></b> !',
    },
  },
  MANA_CHEAT: {
    image: 'BG21_HERO_010',
    bucket: BUCKETS.CUSTOM.MANA_CHEAT,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>cheat mana</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>cheat mana</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>cheat mana</i></b> !',
      GET: 'Get a random card that <b><i>cheats mana</i></b> !',
    },
  },
  BUFF: {
    image: 'HERO_05y',
    bucket: BUCKETS.CUSTOM.BUFF,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>buff</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>buff</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>buff</i></b> !',
      GET: 'Get a random card that <b><i>buffs</i></b> !',
    },
  },
  SHUFFLE_DECK: {
    image: 'DRGA_BOSS_29h',
    bucket: BUCKETS.CUSTOM.SHUFFLE_DECK,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>shuffle cards into the deck</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>shuffle cards into the deck</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>shuffle cards into the deck</i></b> !',
      GET: 'Get a random card that <b><i>shuffles cards into the deck</i></b> !',
    },
  },
  CAST_SPELL: {
    image: 'HERO_02ak',
    bucket: BUCKETS.CUSTOM.CAST_SPELL,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>that interact with casting spells</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>that interact with casting spells</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>that interact with casting spells</i></b> !',
      GET: 'Get a random card that <b><i>that interacts with casting spells</i></b> !',
    },
  },
  ARMOR: {
    image: 'HERO_01a',
    bucket: BUCKETS.CUSTOM.ARMOR,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with armor</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with armor</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with armor</i></b> !',
      GET: 'Get a random card that <b><i>interacts with armor</i></b> !',
    },
  },
  DRAW: {
    image: 'THD_028',
    bucket: BUCKETS.CUSTOM.DRAW,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>draw</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>draw</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>draw</i></b> !',
      GET: 'Get a random card that <b><i>draws</i></b> !',
    },
  },
  SUMMON: {
    image: 'HERO_08b',
    bucket: BUCKETS.CUSTOM.SUMMON,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>summon</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>summon</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>summon</i></b> !',
      GET: 'Get a random card that <b><i>summons</i></b> !',
    },
  },
  DIE: {
    image: 'TB_BaconShop_HERO_70',
    bucket: BUCKETS.CUSTOM.DIE,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with death</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with death</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with death</i></b> !',
      GET: 'Get a random card that <b><i>interacts with death</i></b> !',
    },
  },
  FROST_RUNE: {
    image: 'TB_BaconShop_HERO_Deathwhisper',
    bucket: BUCKETS.CUSTOM.FROST_RUNE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Frost Rune</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Frost Rune</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Frost Rune</i></b> cards!',
      GET: 'Get a random <b><i>Frost Rune</i></b> card!',
    },
  },
  UNHOLY_RUNE: {
    image: 'ICCA06_001',
    bucket: BUCKETS.CUSTOM.UNHOLY_RUNE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Unholy Rune</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Unholy Rune</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Unholy Rune</i></b> cards!',
      GET: 'Get a random <b><i>Unholy Rune</i></b> card!',
    },
  },
  BLOOD_RUNE: {
    image: 'HERO_11c',
    bucket: BUCKETS.CUSTOM.BLOOD_RUNE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Blood Rune</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Blood Rune</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Blood Rune</i></b> cards!',
      GET: 'Get a random <b><i>Blood Rune</i></b> card!',
    },
  },
  DESTROY: {
    image: 'BG23_HERO_201',
    bucket: BUCKETS.CUSTOM.DESTROY,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>destroy</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>destroy</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>destroy</i></b> !',
      GET: 'Get a random card that <b><i>destroys</i></b> !',
    },
  },
  DAMAGE_YOUR_HERO: {
    image: 'TB_BaconShop_HERO_25',
    bucket: BUCKETS.CUSTOM.DAMAGE_YOUR_HERO,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>damage your hero</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>damage your hero</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>damage your hero</i></b> !',
      GET: 'Get a random card that <b><i>damages your hero</i></b> !',
    },
  },
  CREWMATE: {
    image: 'HERO_10bb',
    bucket: BUCKETS.CUSTOM.CREWMATE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Crewmate</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Crewmate</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Crewmate</i></b> cards!',
      GET: 'Get a random <b><i>Crewmate</i></b> card!',
    },
  },
  CLASS: {
    image: 'BG23_HERO_305',
    bucket: BUCKETS.CUSTOM.CLASS,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>steal from another class</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>steal from another class</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>steal from another class</i></b> !',
      GET: 'Get a random card that <b><i>steal from another class</i></b> !',
    },
  },
  DAMAGED: {
    image: 'BG20_HERO_100',
    bucket: BUCKETS.CUSTOM.DAMAGED,

    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with damaged cards</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with damaged cards</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with damaged cards</i></b> !',
      GET: 'Get a random card that <b><i>interacts with damaged cards</i></b> !',
    },
  },
  TRANSFORM: {
    image: 'BG23_HERO_304',
    bucket: BUCKETS.CUSTOM.TRANSFORM,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Transform</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Transform</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Transform</i></b> cards!',
      GET: 'Get a random <b><i>Transform</i></b> card!',
    },
  },
  DRINK: {
    image: 'TB_BaconShopBob_SKIN_AC',
    bucket: BUCKETS.CUSTOM.DRINK,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Drink</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Drink</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Drink</i></b> cards!',
      GET: 'Get a random <b><i>Drink</i></b> card!',
    },
  },
  MAP: {
    image: 'TB_BaconShopBob_SKIN_AN',
    bucket: BUCKETS.CUSTOM.MAP,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Map</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Map</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Map</i></b> cards!',
      GET: 'Get a random <b><i>Map</i></b> card!',
    },
  },
  SMOLDERING: {
    image: 'TB_BaconShopBob_SKIN_AG',
    bucket: BUCKETS.CUSTOM.SMOLDERING,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Smoldering</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Smoldering</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Smoldering</i></b> cards!',
      GET: 'Get a random <b><i>Smoldering</i></b> card!',
    },
  },
  TYPE: {
    image: 'TB_BaconShop_HERO_33',
    bucket: BUCKETS.CUSTOM.TYPE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Minion Type</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Minion Type</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Minion Type</i></b> cards!',
      GET: 'Get a random <b><i>Minion Type</i></b> card!',
    },
  },
  CHOOSE_ONE: {
    image: 'HERO_06d',
    bucket: BUCKETS.CUSTOM.CHOOSE_ONE,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Choose One</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Choose One</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Choose One</i></b> cards!',
      GET: 'Get a random <b><i>Choose One</i></b> card!',
    },
  },
  TWO: {
    image: 'GILA_BOSS_59h',
    bucket: BUCKETS.CUSTOM.TWO,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with exactly 2 damage</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with exactly 2 damage</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with exactly 2 damage</i></b> !',
      GET: 'Get a random card that <b><i>interacts with exactly 2 damage</i></b> !',
    },
  },
  TREANT: {
    image: 'BG32_HERO_001',
    bucket: BUCKETS.CUSTOM.TREANT,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Treant</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Treant</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Treant</i></b> cards!',
      GET: 'Get a random <b><i>Treant</i></b> card!',
    },
  },
  ONE: {
    image: 'HERO_04c',
    bucket: BUCKETS.CUSTOM.ONE,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>interact with 1-Cost and 1-Mana cards</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>interact with 1-Costs and 1-Mana cards</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>interact with 1-Cost and 1-Mana cards</i></b> !',
      GET: 'Get a random card that <b><i>interacts with 1-Cost and 1-Mana cards</i></b> !',
    },
  },
  LEECH: {
    image: 'HERO_11g',
    bucket: BUCKETS.CUSTOM.LEECH,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Leech</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Leech</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Leech</i></b> cards!',
      GET: 'Get a random <b><i>Leech</i></b> card!',
    },
  },
  GORISHI: {
    image: 'HERO_10x',
    bucket: BUCKETS.CUSTOM.GORISHI,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Gorishi</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Gorishi</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Gorishi</i></b> cards!',
      GET: 'Get a random <b><i>Gorishi</i></b> card!',
    },
  },
  LIBRAM: {
    image: 'HERO_04l',
    bucket: BUCKETS.CUSTOM.LIBRAM,
    tooltips: {
      SHOP: 'Open a shop with <b><i>Libram</i></b> cards!',
      DISCOVER: 'Discover 2 <b><i>Libram</i></b> cards!',
      CHOOSE: 'Choose 1 of 2 <b><i>Libram</i></b> cards!',
      GET: 'Get a random <b><i>Libram</i></b> card!',
    },
  },
  HERO_HEALTH: {
    image: 'TB_BaconShop_HERO_56',
    bucket: BUCKETS.CUSTOM.HERO_HEALTH,
    tooltips: {
      SHOP: "Open a shop with cards that <b><i>interact with your hero's health</i></b> !",
      DISCOVER: "Discover 2 cards that <b><i>interact with your hero's health</i></b> !",
      CHOOSE: "Choose 1 of 2 cards that <b><i>interact with your hero's health</i></b> !",
      GET: "Get a random card that <b><i>interacts with your hero's health</i></b> !",
    },
  },
  ALL_MINIONS: {
    image: 'TB_BaconShop_HERO_72',
    bucket: BUCKETS.CUSTOM.ALL_MINIONS,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>target all minions</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>target all minions</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>target all minions</i></b> !',
      GET: 'Get a random card that <b><i>target all minions</i></b> !',
    },
  },
  RANDOM: {
    image: 'TB_BaconShop_HERO_35',
    bucket: BUCKETS.CUSTOM.RANDOM,
    tooltips: {
      SHOP: 'Open a shop with cards that <b><i>do random stuff</i></b> !',
      DISCOVER: 'Discover 2 cards that <b><i>do random stuff</i></b> !',
      CHOOSE: 'Choose 1 of 2 cards that <b><i>do random stuff</i></b> !',
      GET: 'Get a random card that <b><i>does random stuff</i></b> !',
    },
  },
}
export const EVENT_KEYS = Object.keys(CLASSES) as EventKey[]

export const EVENT_TYPES = {
  SHOP: 'SHOP',
  DISCOVER: 'DISCOVER',
  CHOOSE: 'CHOOSE',
  GET: 'GET',
}
export const EVENT_TYPE_KEYS = Object.keys(CLASSES) as EventType[]
