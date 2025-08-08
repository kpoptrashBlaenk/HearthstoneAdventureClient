import { STATES } from '@/utils/constants'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({
    currentState: STATES.START,
  }),
  actions: {
    setStartState(): void {
      this.currentState = STATES.START
    },
    setSettingsState(): void {
      this.currentState = STATES.SETTINGS
    },
    setClassesState(): void {
      this.currentState = STATES.CLASSES
    },
    setBasicDeckState(): void {
      this.currentState = STATES.BASIC_DECK
    },
    setEventState(): void {
      this.currentState = STATES.EVENT
    },
  },
})
