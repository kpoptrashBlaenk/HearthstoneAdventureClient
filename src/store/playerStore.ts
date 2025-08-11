import type { HearthstoneCard } from '@/types/types'
import { RARITY_ID } from '@/utils/constants'
import { sortCards } from '@/utils/functions'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    cards: [] as HearthstoneCard[],
    boughtCards: [] as HearthstoneCard[],
    soldCards: [] as HearthstoneCard[],
    gold: 20,
  }),
  actions: {
    buyCard(card: HearthstoneCard, cost: number): void {
      if (this.gold < cost) return

      this.gold -= cost
      this.cards.push(card)

      // If card was sold, remove it from sold, if not, add it to bought
      if (this.soldCards.includes(card)) {
        this.soldCards.splice(this.soldCards.indexOf(card), 1)
      } else {
        this.boughtCards.push(card)
      }

      this.cards = sortCards(this.cards)
    },

    groupByClass(): Record<string, HearthstoneCard[]> {
      return this.cards.reduce((result: Record<string, HearthstoneCard[]>, card: HearthstoneCard) => {
        const key = card.classId.toString()
        if (!result[key]) result[key] = []
        result[key].push(card)
        return result
      }, {})
    },

    isBuyable(card: HearthstoneCard, cost: number): boolean {
      const wasBought = this.boughtCards.filter((boughtCard) => boughtCard.id === card.id).length >= 1
      const noGold = this.gold < cost
      const maxCards = this.cards.filter((c) => c.id === card.id).length >= (card.rarityId === RARITY_ID.LEGENDARY ? 1 : 2)

      if (wasBought || noGold || maxCards) return false

      return true
    },

    resetBoughtCards(): void {
      this.boughtCards = []
    },

    resetSoldCards(): void {
      this.soldCards = []
    },

    sellCard(card: HearthstoneCard): void {
      this.gold += 5
      this.cards.splice(this.cards.indexOf(card), 1)

      // If card was bought, remove it from bought, if not, add it to sold
      if (this.boughtCards.includes(card)) {
        this.boughtCards.splice(this.boughtCards.indexOf(card), 1)
      } else {
        this.soldCards.push(card)
      }

      this.cards = sortCards(this.cards)
    },

    setCards(cards: HearthstoneCard[]) {
      this.cards = sortCards(cards)
    },
  },
})
