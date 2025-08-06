import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    cards: [] as any,
  }),
  actions: {},
})
