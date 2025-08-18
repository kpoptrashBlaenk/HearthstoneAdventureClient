import type { Class, HearthstoneCard, QueryParam } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { classQueryParams, fetchCards, isMaxRunes } from '@/utils/functions'
import { defineStore } from 'pinia'
import { useGlobalStore } from './globalStore'

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [] as HearthstoneCard[],
  }),
  actions: {
    async init(): Promise<void> {
      let cards = JSON.parse(localStorage.getItem('cards')!)
      const today = new Date().toISOString().slice(0, 10)

      if (!cards || cards.date !== today) {
        cards = await fetchCards()
        this.cacheCards(cards)
      }

      this.cards = cards
    },

    async cacheCards(cards: HearthstoneCard[]): Promise<void> {
      const today = new Date().toISOString().slice(0, 10)
      localStorage.setItem(
        'cards',
        JSON.stringify({
          date: today,
          cards,
        }),
      )
    },

    filter(cards: HearthstoneCard[], params: QueryParam[], check: 'every' | 'some' = 'every'): HearthstoneCard[] {
      // Filter all cards
      return cards.filter((card) => {
        // Return where all params fit
        return params[check]((param) => {
          // If classId but it's null, check for multiClassIds
          const paramKey = param.key === 'classId' && card.classId === null ? 'multiClassIds' : param.key

          const cardValue = card[paramKey as keyof HearthstoneCard]

          // If searching in array
          if (Array.isArray(cardValue)) {
            return cardValue.map((v) => v).includes(param.value as number)
          }

          // If searching in name or text
          if (paramKey === 'name' || paramKey === 'text') {
            const searchValues = Array.isArray(param.value) ? param.value : [param.value]
            return searchValues.every((val) => (cardValue as string).toLowerCase().includes((val as string).toLowerCase()))
          }

          if (paramKey === 'runeCost' && cardValue) {
            //@ts-ignore
            return cardValue[param.value] > 0
          }

          // If searching in string/number/boolean
          return cardValue === param.value
        })
      })
    },

    createBasicDeck(classes: Class[]): HearthstoneCard[] {
      let cards: HearthstoneCard[] = []

      // For death knight only
      let runeCost = {
        frost: 0,
        unholy: 0,
        blood: 0,
      }

      // Filter for all classes
      const filtered = this.filter(this.cards, classQueryParams(classes), 'some')

      const checkMaxClass = (card: HearthstoneCard, amount: number): boolean => {
        return cards.filter((c) => c.classId === card.classId).length >= amount
      }

      const checkMaxRarity = (card: HearthstoneCard, value: number, amount: number): boolean => {
        return card.rarityId === value && cards.filter((card) => card.rarityId === value).length >= amount
      }

      const checkMaxRunes = (card: HearthstoneCard): boolean => {
        if (!card.runeCost) {
          return false
        }

        // If not exceeding too much, apply
        if (!isMaxRunes(card, runeCost)) {
          runeCost.frost = Math.max(runeCost.frost, card.runeCost.frost)
          runeCost.unholy = Math.max(runeCost.unholy, card.runeCost.unholy)
          runeCost.blood = Math.max(runeCost.blood, card.runeCost.blood)
          return false
        }

        return true
      }

      // 10 for each class, +20 for neutrals to get to 20
      for (let i = 0; i < classes.length * 10 + 20; i++) {
        const randomIndex = Math.floor(Math.random() * filtered.length)
        const randomCard = filtered[randomIndex]

        const isDuplicate =
          cards.filter((card) => card.id === randomCard.id).length >= (randomCard.rarityId === RARITY_ID.LEGENDARY ? 1 : 2)
        const isMaxClass = checkMaxClass(randomCard, randomCard.classId === CLASSES.NEUTRAL.id ? 20 : 10)
        const isMaxCommon = checkMaxRarity(randomCard, RARITY_ID.COMMON, 10 + 4 * classes.length)
        const isMaxRare = checkMaxRarity(randomCard, RARITY_ID.RARE, 6 + 3 * classes.length)
        const isMaxEpic = checkMaxRarity(randomCard, RARITY_ID.EPIC, 2 + 2 * classes.length)
        const isMaxLegendary = checkMaxRarity(randomCard, RARITY_ID.LEGENDARY, 2 + 1 * classes.length)
        const isMaxRunes = checkMaxRunes(randomCard)

        if (isDuplicate || isMaxClass || isMaxCommon || isMaxRare || isMaxEpic || isMaxLegendary || isMaxRunes) {
          filtered.splice(randomIndex, 1)
          i--
          continue
        }

        cards.push(randomCard)
      }

      // Clear unnecessary cards because multi class cards
      classes.forEach((cl) => {
        const classCards = this.filter(cards, [{ key: 'classId', value: cl.id }])

        if (classCards.length > 10) {
          let multi = true
          while (multi) {
            const randomClassCard = classCards[Math.floor(Math.random() * classCards.length)]

            if (randomClassCard.classId) {
              cards.splice(cards.indexOf(randomClassCard), 1)
              multi = false
            }
          }
        }
      })

      return cards
    },

    groupByClass(cards: HearthstoneCard[]): Record<string, HearthstoneCard[]> {
      // Create class array
      const classes = [...useGlobalStore().classes.classes.map((cl) => cl.id), CLASSES.NEUTRAL.id]

      // ForAll
      return cards.reduce((result: Record<string, HearthstoneCard[]>, card: HearthstoneCard) => {
        // Set ids of the card
        const classIds: number[] = card.classId !== null ? [card.classId] : (card.multiClassIds ?? [])

        // For each class
        for (const id of classIds) {
          // If class not part of classes then ignore
          if (!classes.includes(id)) continue

          // Set object key to id and check if it already exists, then set it to empty array
          const key = id.toString()
          if (!result[key]) result[key] = []
          // Add card to array
          result[key].push(card)
        }

        return result
      }, {})
    },
  },
})
