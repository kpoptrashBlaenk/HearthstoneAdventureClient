import type { Class, Event, EventType, HearthstoneCard } from '@/types/types'
import { EVENT_TYPES } from '@/utils/events'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    classes: {
      number: 0,
      classes: [] as Class[],
    },
    health: {
      player: {
        current: 0,
        max: 0,
      },
      opponent: {
        current: 0,
        max: 0,
      },
    },
    events: {
      round: 1,
      cards: [] as HearthstoneCard[],
      type: null as EventType | null,
      event: null as Event | null,
      current: -1,
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
      this.health.player.current = value
      this.health.player.max = value
      this.health.opponent.current = value
      this.health.opponent.max = value
    },
    changeHealth(player: 'player' | 'opponent', value: number): void {
      this.health[player].current = Math.max(0, this.health[player].current + value)
    },

    // Events
    setEvents(value: number): void {
      this.events.max = value
    },
    setEvent(value: Event, cards: HearthstoneCard[]): void {
      this.events.event = value
      this.events.cards = cards
      this.events.type =
        cards.length >= 24
          ? EVENT_TYPES.SHOP
          : cards.length >= 12
            ? EVENT_TYPES.DISCOVER
            : cards.length >= 8
              ? EVENT_TYPES.CHOOSE
              : EVENT_TYPES.GET
    },
    clearEvent(): void {
      this.incrementEvent()
      this.events.event = null
    },
    incrementEvent(): void {
      if (this.isEndRound()) {
        this.resetEvents()
        return
      }

      this.events.current++
    },
    isEndRound(): boolean {
      return this.events.current === this.events.max
    },
    resetEvents(): void {
      this.events.round++
      this.events.current = 0
    },
  },
})
