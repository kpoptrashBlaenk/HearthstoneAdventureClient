import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    classes: {
      number: 0 as number,
      classes: [] as string[],
    },
    health: 0 as number,
    events: {
      current: 0 as number,
      max: 0 as number,
    },
  }),

  actions: {
    // Classes
    setClassesNumber(value: number) {
      this.classes.number = value
    },
    setClasses(classes: string[]) {
      this.classes.classes = classes
    },

    // Health
    setHealth(value: number) {
      this.health = value
    },
    changeHealth(value: number) {
      this.health += value
    },

    // Events
    setEvents(value: number) {
      this.events.max = value
    },
    incrementEvent() {
      this.events.current++
    },
    resetEvents() {
      this.events.current = 0
    },
  },
})
