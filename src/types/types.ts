import type { CLASSES, EVENTS, RARITY_ID } from '@/utils/constants'

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
}

export type ClassKey = keyof typeof CLASSES
export type Class = (typeof CLASSES)[ClassKey]

export type RarityIdKey = keyof typeof RARITY_ID
export type RarityId = (typeof RARITY_ID)[RarityIdKey]

export type EventKey = keyof typeof EVENTS
export type Event = (typeof EVENTS)[EventKey]

export type QueryParam = {
  key: keyof HearthstoneCard | 'page'
  value: string | number | boolean
}
