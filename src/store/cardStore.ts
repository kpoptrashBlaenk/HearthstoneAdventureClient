import type { ClassesValues, HearthstoneCard, QueryParam } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { fetchCards } from '@/utils/functions'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [] as HearthstoneCard[],
  }),
  actions: {
    async init(): Promise<void> {
      let cards = JSON.parse(localStorage.getItem('cards')!)

      if (!cards) {
        cards = await fetchCards()
        this.cacheCards(cards)
      }

      this.cards = cards
    },

    async cacheCards(cards: HearthstoneCard[]): Promise<void> {
      localStorage.setItem('cards', JSON.stringify(cards))
    },

    filter(cards: HearthstoneCard[], params: QueryParam[], check: 'every' | 'some' = 'every'): HearthstoneCard[] {
      // Filter all cards
      return cards.filter((card) => {
        // Return where all params fit
        return params[check]((param) => {
          const cardValue = card[param.key as keyof HearthstoneCard]

          // If searching for null
          if (param.value === 'null') {
            return cardValue === null
          }

          // If searching in array
          if (Array.isArray(cardValue)) {
            return cardValue.map((v) => v.toString()).includes(param.value)
          }

          // If searching for class id, include neutral
          if (param.key === 'classId') {
            return cardValue?.toString() === param.value
          }

          // If searching in string/number/boolean
          return cardValue?.toString() === param.value
        })
      })
    },

    createBasicDeck(classes: ClassesValues[]): HearthstoneCard[] {
      let cards: HearthstoneCard[] = []
      const params = classes.map((cl) => ({
        key: 'classId' as keyof HearthstoneCard,
        value: cl.id,
      }))

      // Filter for all classes
      const filtered = this.filter(this.cards, [...params, { key: 'classId', value: CLASSES.NEUTRAL.id }], 'some')

      const checkMax = (card: HearthstoneCard, key: keyof HearthstoneCard, value: string, amount: number): boolean => {
        return card[key].toString() === value && cards.filter((card) => card[key].toString() === value).length >= amount
      }

      // 10 for each class, +20 for neutrals to get to 20
      for (let i = 0; i < classes.length * 10 + 20; i++) {
        const randomIndex = Math.floor(Math.random() * filtered.length)
        const randomCard = filtered[randomIndex]

        const isDuplicate =
          cards.filter((card) => card.id === randomCard.id).length >=
          (randomCard.rarityId.toString() === RARITY_ID.LEGENDARY ? 1 : 2)
        const isMaxClass = checkMax(
          randomCard,
          'classId',
          randomCard.classId.toString(),
          randomCard.classId.toString() === CLASSES.NEUTRAL.id ? 20 : 10,
        )
        const isMaxCommon = checkMax(randomCard, 'rarityId', RARITY_ID.COMMON, 10 + 4 * classes.length)
        const isMaxRare = checkMax(randomCard, 'rarityId', RARITY_ID.RARE, 6 + 3 * classes.length)
        const isMaxEpic = checkMax(randomCard, 'rarityId', RARITY_ID.EPIC, 2 + 2 * classes.length)
        const isMaxLegendary = checkMax(randomCard, 'rarityId', RARITY_ID.LEGENDARY, 2 + 1 * classes.length)

        if (isDuplicate || isMaxClass || isMaxCommon || isMaxRare || isMaxEpic || isMaxLegendary) {
          filtered.splice(randomIndex, 1)
          i--
          continue
        }

        cards.push(randomCard)
      }

      return cards.sort((a, b) => {
        if (a.manaCost !== b.manaCost) return a.manaCost - b.manaCost
        return a.name.localeCompare(b.name)
      })
    },
  },
})
