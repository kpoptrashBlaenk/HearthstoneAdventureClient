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
  DEATH_KNIGHT: { id: 1, name: 'Death Knight' },
  DEMON_HUNTER: { id: 14, name: 'Demon Hunter' },
  DRUID: { id: 2, name: 'Druid' },
  HUNTER: { id: 3, name: 'Hunter' },
  MAGE: { id: 4, name: 'Mage' },
  PALADIN: { id: 5, name: 'Paladin' },
  PRIEST: { id: 6, name: 'Priest' },
  ROGUE: { id: 7, name: 'Rogue' },
  SHAMAN: { id: 8, name: 'Shaman' },
  WARLOCK: { id: 9, name: 'Warlock' },
  WARRIOR: { id: 10, name: 'Warrior' },
  NEUTRAL: { id: 12, name: 'Neutral' },
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
