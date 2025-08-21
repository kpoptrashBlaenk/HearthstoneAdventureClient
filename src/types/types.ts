import type CardPopover from '@/components/partials/CardPopover.vue'
import type {
  CARD_SET_ID,
  CARD_TYPE_ID,
  CLASS_DECK_IDS,
  CLASSES,
  FACTION_ID,
  KEYWORD_ID,
  MINION_TYPE_ID,
  RARITY_ID,
  SPELL_SCHOOL_ID,
} from '@/utils/constants'
import type { EVENT_TYPES, EVENTS } from '@/utils/events'

export type HearthstoneCard = {
  id: number
  collectible: number
  slug: string
  classId: number
  multiClassIds: number[]
  spellSchoolId: number
  cardTypeId: number
  cardSetId: number
  rarityId: number
  artistName: string
  manaCost: number
  name: string
  text: string
  image: string
  imageGold: string
  flavorText: string
  cropImage: string
  childIds: number[]
  keywordIds: number[]
  isZilliaxFunctionalModule: boolean
  isZilliaxCosmeticModule: boolean
  minionTypeId: number
  factionId: number
  runeCost: {
    frost: number
    unholy: number
    blood: number
  }
}

export type ClassKey = keyof typeof CLASSES
export type Class = (typeof CLASSES)[ClassKey]

export type ClassDeckIdsKey = keyof typeof CLASS_DECK_IDS
export type ClassDeckIds = (typeof CLASS_DECK_IDS)[ClassDeckIdsKey]

export type RarityIdKey = keyof typeof RARITY_ID
export type RarityId = (typeof RARITY_ID)[RarityIdKey]

export type EventKey = keyof typeof EVENTS
export type Event = (typeof EVENTS)[EventKey]

export type EventTypeKey = keyof typeof EVENT_TYPES
export type EventType = (typeof EVENT_TYPES)[EventTypeKey]

export type QueryParam = {
  key: string
  value: string | number | boolean | string[]
}

export type KeywordIdKey = keyof typeof KEYWORD_ID
export type KeywordId = (typeof KEYWORD_ID)[KeywordIdKey]

export type CardSetIdKey = keyof typeof CARD_SET_ID
export type CardSetId = (typeof CARD_SET_ID)[CardSetIdKey]

export type CardTypeIdKey = keyof typeof CARD_TYPE_ID
export type CardTypeId = (typeof CARD_TYPE_ID)[CardTypeIdKey]

export type SpellSchoolIdKey = keyof typeof SPELL_SCHOOL_ID
export type SpellSchoolId = (typeof SPELL_SCHOOL_ID)[SpellSchoolIdKey]

export type MinionTypeIdKey = keyof typeof MINION_TYPE_ID
export type MinionTypeId = (typeof MINION_TYPE_ID)[MinionTypeIdKey]

export type FactionIdKey = keyof typeof FACTION_ID
export type FactionId = (typeof FACTION_ID)[FactionIdKey]

export interface CardPopoverRef extends InstanceType<typeof CardPopover> {
  popoverShow(event: any, image: string): void
  popoverHide(event: any): void
}
