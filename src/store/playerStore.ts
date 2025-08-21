import type { HearthstoneCard } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { cardPrice, isMaxRunes, sortCards } from '@/utils/functions'
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

    buyCard(card: HearthstoneCard, cost: number): void {
      if (this.gold < cost) return

      this.gold -= cost
      this.addToCards(card)

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
      const maxCards = this.ownMaxCopies(card)

      if (wasBought || noGold || maxCards) return false

      return true
    },
    sellCard(card: HearthstoneCard): void {
      this.gold += cardPrice(card, 'cards')
      this.cards.splice(this.cards.indexOf(card), 1)

      // If card was bought, remove it from bought, if not, add it to sold
      if (this.boughtCards.includes(card)) {
        this.boughtCards.splice(this.boughtCards.indexOf(card), 1)
      } else {
        this.soldCards.push(card)
      }

      this.cards = sortCards(this.cards)
    },
    ownMaxCopies(card: HearthstoneCard): boolean {
      return this.cards.filter((c) => c.id === card.id).length >= (card.rarityId === RARITY_ID.LEGENDARY ? 1 : 2)
    },
    addToCards(card: HearthstoneCard): void {
      this.cards.push(card)
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

      // If deck has only multiClass as class cards
      if (this.deck.every((c) => !c.classId)) {
        const multiClasses = this.deck.filter((c) => c.classId === null).flatMap((c) => c.multiClassIds ?? [])
        if (
          card.classId === null ? card.multiClassIds.some((cl) => multiClasses.includes(cl)) : multiClasses.includes(card.classId)
        )
          return true
      }

      // If deck has class cards
      if (this.deck.some((c) => c.classId === card.classId || card.multiClassIds.includes(c.classId))) return true

      return false
    },
    isMaxInDeck(card: HearthstoneCard): boolean {
      return this.cards.filter((c) => c.id === card.id).length <= this.deck.filter((c) => c.id === card.id).length
    },
    deckFull(): boolean {
      return this.deck.length >= 30
    },
    isMaxRunes(card: HearthstoneCard): boolean {
      if (!card.runeCost) {
        return false
      }

      // Set initial runes
      let runeCost = {
        frost: 0,
        unholy: 0,
        blood: 0,
      }
      this.deck.forEach((card) => {
        if (card.runeCost) {
          runeCost.frost = Math.max(runeCost.frost, card.runeCost.frost)
          runeCost.unholy = Math.max(runeCost.unholy, card.runeCost.unholy)
          runeCost.blood = Math.max(runeCost.blood, card.runeCost.blood)
        }
      })

      return isMaxRunes(card, runeCost)
    },
  },
})
