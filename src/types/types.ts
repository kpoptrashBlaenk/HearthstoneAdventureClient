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

export type QueryParam = {
  key: string
  value: string
}
