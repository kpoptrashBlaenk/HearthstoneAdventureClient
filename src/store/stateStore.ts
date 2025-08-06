import { STATES } from '@/utils/constants'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({
    currentState: STATES.START,
  }),
  actions: {
    setStartState() {
      this.currentState = STATES.START
    },
    setSettingsState() {
      this.currentState = STATES.SETTINGS
    },
    setClassesState() {
      this.currentState = STATES.CLASSES
    },
  },
})
