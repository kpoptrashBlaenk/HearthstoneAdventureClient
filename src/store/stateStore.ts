import { STATES } from '@/utils/constants'
import { defineStore } from 'pinia'
import { useGlobalStore } from './globalStore'

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
      useGlobalStore().clearEvent()
      this.currentState = STATES.EVENT
    },
    setShopState(): void {
      this.currentState = STATES.SHOP
    },
    setDiscoverState(): void {
      this.currentState = STATES.DISCOVER
    },
    setChooseState(): void {
      this.currentState = STATES.CHOOSE
    },
    setGetState(): void {
      this.currentState = STATES.GET
    },
    setDeckState(): void {
      this.currentState = STATES.DECK
    },
    setBattleState(): void {
      this.currentState = STATES.BATTLE
    },
  },
})
