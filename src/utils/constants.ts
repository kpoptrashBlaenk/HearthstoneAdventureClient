import type {
  CardSetIdKey,
  CardTypeIdKey,
  ClassDeckIdsKey,
  ClassKey,
  FactionIdKey,
  KeywordIdKey,
  MinionTypeIdKey,
  RarityIdKey,
  SpellSchoolIdKey,
} from '@/types/types'

export const CLASSES = {
  DEATH_KNIGHT: {
    id: 1,
    name: 'Death Knight',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_deathknight-877876336b73f9f34a4fb35929614b77c8743310aed55a6981db2e02f0b4c48a595a5428f00036d1972cf955c70e8709b196a82fe8d3391e4fc99046f215db4f.png',
  },
  DEMON_HUNTER: {
    id: 14,
    name: 'Demon Hunter',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_demonhunter-0c117e1eb40c92f3156352ef3b07de82321bb8dc4ea6629445beef3722aa4c623257a803b71f511bdf8e3734586abf4f68eb5975708b4d2e76f27cbed8b38f72.png',
  },
  DRUID: {
    id: 2,
    name: 'Druid',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_druid-617a7e9ddd3ccb801cc5de8e8896ac2243d16dfe0063ee735e86b093bd8cec4d123bd5945b0bfe3150c968904b3dd2b3e8ec9337dce59e937dabbaa6692e716c.png',
  },
  HUNTER: {
    id: 3,
    name: 'Hunter',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_hunter-704bdf9b2198c0ab867edd71df4cd5221c14d40199bac0ce43fdc90be9e0ed25178cecb2fbd795ff42478251db97903e63e365a6d446f3a9f12aea9093a6c575.png',
  },
  MAGE: {
    id: 4,
    name: 'Mage',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_mage-d1cbb187de507978f25cf95e54e357660819979baa01de215c0c1aa30964c2befa740cdff4ea812b29d81b1b5d89d8697c8e9ee3f47596671ba3f3e3e0f9e5dd.png',
  },
  PALADIN: {
    id: 5,
    name: 'Paladin',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_paladin-f9de941bd0f39e204d4defeea0a0c1e626adfc3b4156324837adaa665d51cc45f1c97316aa654c165288d5facb624b341de9ca05e1ec5dd5b2cb17fa4de6cbee.png',
  },
  PRIEST: {
    id: 6,
    name: 'Priest',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_priest-c7046e19996b87e2c6b6700b63565ee07c921ccce37fbe8b2e3b3913a95f04353e80a4118e9893dee29682e319b5ee893e07700476d7be5e16ed465dd8bca58d.png',
  },
  ROGUE: {
    id: 7,
    name: 'Rogue',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_rogue-3f3a2a2dea07c21da713c9ff70dbba65df408fc7cd8bae41892000be39710a1d16770c5b3aa4b44521f83191ac5ca3308c1ba312ffc568b1c7a7e7e8ad47a9c7.png',
  },
  SHAMAN: {
    id: 8,
    name: 'Shaman',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_shaman-2b270028958eeb0dacc67ce4b4b8de9750391edb3fbe7fc33a11fb0c8a3cd70c0a0dcffc5b946f51cc63c1ba262efaa041893a01225591c75178579d13be16fb.png',
  },
  WARLOCK: {
    id: 9,
    name: 'Warlock',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warlock-3db872b8621aac7750ee4f6b9a27509e5548a52d7b87f7c477515ad615863e7977a44179367378b93fa907983ae053184eeeda019f3a658adb0f5428c545a611.png',
  },
  WARRIOR: {
    id: 10,
    name: 'Warrior',
    image:
      'https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warrior-e7f6b014158051c3b6f03af80448f5a312351594e0084d78c95f780eadbd897a9f7c7d828e278ea4bedaefe0addf1f99da43c2be4a63b4d659fd86427f61391f.png',
  },
  NEUTRAL: { id: 12, name: 'Neutral', image: '' },
}
export const CLASS_KEYS = Object.keys(CLASSES) as ClassKey[]

export const CLASS_DECK_IDS = {
  WARRIOR: 7,
  SHAMAN: 1066,
  ROGUE: 930,
  PALADIN: 671,
  HUNTER: 31,
  DRUID: 274,
  WARLOCK: 893,
  MAGE: 637,
  PRIEST: 813,
  DEMON_HUNTER: 56550,
  DEATH_KNIGHT: 78065,
}
export const CLASS_DECK_IDS_KEYS = Object.keys(CLASS_DECK_IDS) as ClassDeckIdsKey[]

export const RARITY_ID = {
  COMMON: 1,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5,
}
export const RARITY_ID_KEYS = Object.keys(CLASSES) as RarityIdKey[]

export const KEYWORD_ID = {
  TAUNT: 1,
  SPELL_DAMAGE: 2,
  FIRE_SPELL_DAMAGE: 102,
  DIVINE_SHIELD: 3,
  CHARGE: 4,
  SECRET: 5,
  STEALTH: 6,
  BATTLECRY: 8,
  FREEZE: 10,
  WINDFURY: 11,
  DEATHRATTLE: 12,
  COMBO: 13,
  OVERLOAD: 14,
  SILENCE: 15,
  IMMUNE: 17,
  DISCOVER: 21,
  QUEST: 31,
  POISONOUS: 32,
  LIFESTEAL: 38,
  RUSH: 53,
  REBORN: 78,
  OUTCAST: 86,
  SPELLBURST: 88,
  TRADEABLE: 97,
  CORPSE: 247,
  OVERHEAL: 256,
  ELUSIVE: 265,
  MINIATURIZE: 294,
  MINI: 295,
  GIGANTIFY: 301,
  ROGUE_TOURIST: 307,
  WARLOCK_TOURIST: 308,
  DEATH_KNIGHT_TOURIST: 309,
  SHAMAN_TOURIST: 310,
  DEMON_HUTNER_TOURIST: 311,
  PRIEST_TOURIST: 312,
  HUNTER_TOURIST: 313,
  WARRIOR_TOURIST: 314,
  DRUID_TOURIST: 315,
  MAGE_TOURIST: 316,
  PALADIN_TOURIST: 317,
  IMBUE: 318,
  DARK_GIFT: 319,
  TEMPORARY: 320,
  STARSHIP: 323,
  KINDRED: 351,
}
export const KEYWORD_ID_KEYS = Object.keys(KEYWORD_ID) as KeywordIdKey[]

export const CARD_SET_ID = {
  CORE: 1637,
  WHIZBANGS_WORKSHOP: 1897,
  PERILS_IN_PARADISE: 1905,
  THE_GREAT_DARK_BEYOND: 1935,
  EVENT: 1941,
  INTO_THE_EMERALD_DREAM: 1946,
  THE_LOST_CITY_OF_UNGORO: 1952,
}
export const CARD_SET_ID_KEYS = Object.keys(CARD_SET_ID) as CardSetIdKey[]

export const CARD_TYPE_ID = {
  HERO: 3,
  MINION: 4,
  SPELL: 5,
  WEAPON: 7,
  LOCATION: 39,
}
export const CARD_TYPE_ID_KEYS = Object.keys(CARD_SET_ID) as CardTypeIdKey[]

export const SPELL_SCHOOL_ID = {
  ARCANE: 1,
  FIRE: 2,
  FROST: 3,
  NATURE: 4,
  HOLY: 5,
  SHADOW: 6,
  FEL: 7,
}
export const SPELL_SCHOOL_ID_KEYS = Object.keys(CARD_SET_ID) as SpellSchoolIdKey[]

export const MINION_TYPE_ID = {
  DRAENEI: 2,
  UNDEAD: 11,
  MURLOC: 14,
  DEMON: 15,
  MECH: 17,
  ELEMENTAL: 18,
  BEAST: 20,
  TOTEM: 21,
  PIRATE: 23,
  DRAGON: 24,
  ALL: 26,
  QUILBOAR: 43,
  NAGA: 92,
}
export const MINION_TYPE_ID_KEYS = Object.keys(CARD_SET_ID) as MinionTypeIdKey[]

export const FACTION_ID = {
  ZERG: 3457,
  TERRAN: 3458,
  PROTOSS: 3469,
}
export const FACTION_ID_KEYS = Object.keys(CARD_SET_ID) as FactionIdKey[]

export const STATES = {
  START: 'START',
  LOADING: 'LOADING',
  SETTINGS: 'SETTINGS',
  CLASSES: 'CLASSES',
  BASIC_DECK: 'BASIC_DECK',
  EVENT: 'EVENT',
  SHOP: 'SHOP',
  DISCOVER: 'DISCOVER',
  CHOOSE: 'CHOOSE',
  GET: 'GET',
  DECK: 'DECK',
  BATTLE: 'BATTLE',
}
