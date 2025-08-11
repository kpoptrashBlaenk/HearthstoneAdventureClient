import type { ClassKey, EventKey, EventType, RarityIdKey } from '@/types/types'

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

export const RARITY_ID = {
  COMMON: 1,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5,
}
export const RARITY_ID_KEYS = Object.keys(CLASSES) as RarityIdKey[]

export const EVENTS = {
  BARTENDER_BOB: {
    id: 1,
    image: 'bartender_bob',
    tooltip: 'offers a shop with any card!',
    type: 'SHOP',
  },
  BARTENDER_ROBERTA: {
    id: 2,
    image: 'bartender_roberta',
    tooltip: 'offers a shop with any card!',
    type: 'SHOP',
  },
  SPARKLE: {
    id: 3,
    image: 'sparkle',
    tooltip: 'offers a shop with any card!',
    type: 'SHOP',
  },
}
export const EVENT_KEYS = Object.keys(CLASSES) as EventKey[]

export const EVENT_TYPES = {
  SHOP: 'SHOP',
}
export const EVENT_TYPE_KEYS = Object.keys(CLASSES) as EventType[]

export const STATES = {
  START: 'START',
  SETTINGS: 'SETTINGS',
  CLASSES: 'CLASSES',
  BASIC_DECK: 'BASIC_DECK',
  EVENT: 'EVENT',
  SHOP: 'SHOP',
}
