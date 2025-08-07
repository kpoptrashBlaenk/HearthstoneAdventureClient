import type { HearthstoneCard } from '@/types/types'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    cards: [] as HearthstoneCard[],
  }),
  actions: {
    setCards(cards: HearthstoneCard[]) {
      this.cards = cards
    },

    groupByClass(): Record<string, HearthstoneCard[]> {
      return this.cards.reduce((result: Record<string, HearthstoneCard[]>, card: HearthstoneCard) => {
        const key = card.classId.toString()
        if (!result[key]) result[key] = []
        result[key].push(card)
        return result
      }, {})
    },
  },
})
