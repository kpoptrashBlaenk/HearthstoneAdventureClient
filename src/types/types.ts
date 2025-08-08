import type { CLASSES, EVENT_TYPES, RARITY_ID } from '@/utils/constants'

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

export type ClassesValues = (typeof CLASSES)[keyof typeof CLASSES]

export type RarityValues = (typeof RARITY_ID)[keyof typeof RARITY_ID]

export type Event = {
  id: string
  image: string
  tooltip: string
  type: keyof typeof EVENT_TYPES
}

export type QueryParam = {
  key: keyof HearthstoneCard | 'page'
  value: string
}
