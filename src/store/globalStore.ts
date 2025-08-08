import type { Class, Event } from '@/types/types'
import { CLASSES } from '@/utils/constants'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    classes: {
      number: 1,
      classes: [CLASSES.ROGUE] as Class[],
    },
    health: 15,
    events: {
      event: null as Event | null,
      current: 0,
      max: 5,
    },
  }),

  actions: {
    // Classes
    setClassesNumber(value: number): void {
      this.classes.number = value
    },
    setClasses(classes: Class[]): void {
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
    setEvent(value: Event): void {
      this.events.event = value
    },
    incrementEvent(): void {
      if (this.events.current === this.events.max) {
        this.resetEvents()
        return
      }

      this.events.current++
    },
    resetEvents(): void {
      this.events.current = 0
    },
  },
})
