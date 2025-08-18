<template>
  <div class="mx-auto mt-2 flex h-[98vh] w-[98vw] flex-col items-center gap-5 p-0">
    <Info v-if="showInfo" />
    <div class="flex h-full w-full items-center justify-center">
      <div class="mx-1 my-auto flex items-start gap-10">
        <!-- Base Card -->
        <Card
          v-if="baseCardContent"
          class="transition-opacity ease-in-out"
          :class="[`duration-${TRANSITION_DURATION}`, { 'opacity-0': baseTransition }]"
        >
          <template #title>
            <div class="border-b-1">{{ baseCardTitle }}</div>
          </template>
          <template #content>
            <component :is="baseCardContent" @next="stateSetter()" />
          </template>
        </Card>

        <!-- Event Card -->
        <Card
          v-if="eventCardContent"
          class="transition-opacity ease-in-out"
          :class="[`duration-${TRANSITION_DURATION}`, { 'opacity-0': eventTransition }]"
        >
          <template #title>
            <div v-html="eventCardTitle" class="border-b-1"></div>
          </template>
          <template #content>
            <div class="h-full">
              <component :is="eventCardContent" @next="stateSetter()" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import Info from '@/components/Info.vue'
import { useCardStore } from '@/store/cardStore'
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import { useStateStore } from '@/store/stateStore'
import { STATES } from '@/utils/constants'
import { EVENT_TYPES } from '@/utils/events'
import { Card } from 'primevue'
import { onMounted, ref, shallowRef, type Component } from 'vue'

/* Const */
const baseCardContent = shallowRef<Component>()
const baseCardTitle = ref<string>('Start')
const baseTransition = ref<boolean>(false)
const cardStore = useCardStore()
const eventCardContent = shallowRef<Component>()
const eventCardTitle = ref<string>('Start')
const eventTransition = ref<boolean>(false)
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
const showInfo = ref<boolean>(false)
const stateStore = useStateStore()
const TRANSITION_DURATION = 200

/* Lifecycle Hooks */
onMounted(() => {
  cardStore.init()
  stateSetter()
})

/* Functions */
function stateSetter(): void {
  if (stateStore.currentState === STATES.START) {
    swtichBaseComponent('Settings', 'Settings')
    stateStore.setSettingsState()
    return
  }

  if (stateStore.currentState === STATES.SETTINGS) {
    swtichBaseComponent('Classes', 'Classes')
    stateStore.setClassesState()
    return
  }

  if (stateStore.currentState === STATES.CLASSES) {
    playerStore.setCards(cardStore.createBasicDeck(globalStore.classes.classes))
    cardStore.groupByClass(playerStore.cards)
    swtichBaseComponent('Cards', 'Your Cards')
    switchEventComponent('StartEvent', 'Start')
    showInfo.value = true
    stateStore.setBasicDeckState()
    return
  }

  if (stateStore.currentState === STATES.BASIC_DECK) {
    checkEndRound(() => {
      switchEventComponent('Events', 'Events')
      stateStore.setEventState()
    })
    return
  }

  if (stateStore.currentState === STATES.EVENT) {
    switch (globalStore.events.type) {
      case EVENT_TYPES.SHOP:
        switchEventComponent('Shop', globalStore.events.event?.tooltips.SHOP)
        stateStore.setShopState()
        break
      case EVENT_TYPES.DISCOVER:
        switchEventComponent('Discover', globalStore.events.event?.tooltips.DISCOVER)
        stateStore.setDiscoverState()
        break
      case EVENT_TYPES.CHOOSE:
        switchEventComponent('Choose', globalStore.events.event?.tooltips.CHOOSE)
        stateStore.setChooseState()
        break
      case EVENT_TYPES.GET:
        switchEventComponent('Get', globalStore.events.event?.tooltips.GET)
        stateStore.setGetState()
        break
      default:
        console.error(`globalStore.event.type not found: ${globalStore.events.type}`)
    }
    return
  }

  if (
    stateStore.currentState === STATES.SHOP ||
    stateStore.currentState === STATES.DISCOVER ||
    stateStore.currentState === STATES.CHOOSE ||
    stateStore.currentState === STATES.GET
  ) {
    playerStore.resetSoldCards()
    playerStore.resetBoughtCards()
    checkEndRound(() => {
      switchEventComponent('Events', 'Events')
      stateStore.setEventState()
    })
    return
  }

  if (stateStore.currentState === STATES.DECK) {
    switchEventComponent('Battle', 'Battle')
    swtichBaseComponent(undefined, undefined)
    stateStore.setBattleState()
    return
  }

  if (stateStore.currentState === STATES.BATTLE) {
    if (globalStore.health.player.current <= 0 || globalStore.health.opponent.current <= 0) {
      switchEventComponent('Ending', globalStore.health.player.current <= 0 ? 'Defeat!' : 'Victory!')
      return
    }

    checkEndRound(() => {
      switchEventComponent('Events', 'Events')
      swtichBaseComponent('Cards', 'Your Cards')
      stateStore.setEventState()
    })
    return
  }
}

async function swtichBaseComponent(component?: string, title?: string): Promise<void> {
  const module = component ? await import(`../components/${component}.vue`) : undefined

  baseTransition.value = true

  setTimeout(() => {
    baseCardTitle.value = title ?? ''
    baseCardContent.value = module?.default ?? undefined
    baseTransition.value = false
  }, TRANSITION_DURATION)
}

async function switchEventComponent(component?: string, title?: string): Promise<void> {
  const module = component ? await import(`../components/${component}.vue`) : undefined

  eventTransition.value = true

  setTimeout(() => {
    eventCardTitle.value = title ?? ''
    eventCardContent.value = module?.default ?? undefined
    eventTransition.value = false
  }, TRANSITION_DURATION)
}

function checkEndRound(callback: () => void): void {
  if (globalStore.isEndRound()) {
    switchEventComponent('Deck', 'Your Deck')
    stateStore.setDeckState()
    return
  }

  callback()
}
</script>
