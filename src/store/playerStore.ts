import type { HearthstoneCard } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { sortCards } from '@/utils/functions'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    cards: [] as HearthstoneCard[],
    deck: [] as HearthstoneCard[],
    boughtCards: [] as HearthstoneCard[],
    soldCards: [] as HearthstoneCard[],
    gold: 20,
  }),
  actions: {
    setCards(cards: HearthstoneCard[]) {
      this.cards = sortCards(cards)
    },

    groupByClass(): Record<string, HearthstoneCard[]> {
      return this.cards.reduce((result: Record<string, HearthstoneCard[]>, card: HearthstoneCard) => {
        const key = card.classId.toString()
        if (!result[key]) result[key] = []
        result[key].push(card)
        return result
      }, {})
    },

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
    isBuyable(card: HearthstoneCard, cost: number): boolean {
      const wasBought = this.boughtCards.filter((boughtCard) => boughtCard.id === card.id).length >= 1
      const noGold = this.gold < cost
      const maxCards = this.cards.filter((c) => c.id === card.id).length >= (card.rarityId === RARITY_ID.LEGENDARY ? 1 : 2)

      if (wasBought || noGold || maxCards) return false

      return true
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

    resetBoughtCards(): void {
      this.boughtCards = []
    },
    resetSoldCards(): void {
      this.soldCards = []
    },

    addToDeck(card: HearthstoneCard): void {
      this.deck.push(card)
      this.deck = sortCards(this.deck)
    },
    removeFromDeck(card: HearthstoneCard): void {
      this.deck.splice(this.deck.indexOf(card), 1)
      this.deck = sortCards(this.deck)
    },
    isDeckClass(card: HearthstoneCard): boolean {
      // If empty, add
      if (this.deck.length === 0) return true

      // If neutral, add
      if (card.classId === CLASSES.NEUTRAL.id) return true

      // If deck is neutral, add
      if (this.deck.every((c) => c.classId === CLASSES.NEUTRAL.id)) return true

      // If any card inside has this class (with the other checks, it shouldn't be able to have more than 1 class inside), add
      if (this.deck.some((c) => c.classId === card.classId)) return true

      return false
    },
    isMaxInDeck(card: HearthstoneCard): boolean {
      return this.cards.filter((c) => c.id === card.id).length <= this.deck.filter((c) => c.id === card.id).length
    },
    deckFull(): boolean {
      return this.deck.length >= 30
    },
  },
})
