import type { Class, Event } from '@/types/types'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    classes: {
      number: 0,
      classes: [] as Class[],
    },
    health: {
      current: 0,
      max: 0,
    },
    events: {
      round: 1,
      event: null as Event | null,
      current: 0,
      max: 0,
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
      this.health.current = value
      this.health.max = value
    },
    changeHealth(value: number): void {
      this.health.current += value
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
    incrementRound(): void {
      if (this.events.current === this.events.max) {
        this.resetEvents()
        return
      }

      this.events.current++
    },
    resetEvents(): void {
      this.events.round++
      this.events.current = 0
    },
  },
})
