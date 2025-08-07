import type { ClassesValues } from '@/types/types'
import { CLASSES } from '@/utils/constants'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    classes: {
      number: 3,
      classes: [CLASSES.ROGUE] as ClassesValues[],
    },
    health: 15,
    events: {
      current: 0,
      max: 7,
    },
  }),

  actions: {
    // Classes
    setClassesNumber(value: number): void {
      this.classes.number = value
    },
    setClasses(classes: ClassesValues[]): void {
      this.classes.classes = classes
    },

    // Health
    setHealth(value: number): void {
      this.health = value
    },
    changeHealth(value: number): void {
      this.health += value
    },

    // Events
    setEvents(value: number): void {
      this.events.max = value
    },
    incrementEvent(): void {
      this.events.current++
    },
    resetEvents(): void {
      this.events.current = 0
    },
  },
})
