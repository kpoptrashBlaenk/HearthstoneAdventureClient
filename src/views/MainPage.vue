<template>
  <div class="flex h-[98vh] w-[98vw] items-center justify-center">
    <div class="my-auto flex items-center gap-30">
      <!-- Base Card -->
      <Card
        class="h-full transition-opacity ease-in-out"
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
          <div class="border-b-1">{{ eventCardTitle }}</div>
        </template>
        <template #content>
          <div class="h-full">
            <component :is="eventCardContent" @next="stateSetter()" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { useStateStore } from '@/store/stateStore'
import { STATES } from '@/utils/constants'
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
const stateStore = useStateStore()
const TRANSITION_DURATION = 200

/* Lifecycle Hooks */
onMounted(() => {
  // ### FOR TESTING ONLY: ###
  stateStore.setClassesState()

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
    swtichBaseComponent('BasicDeck', 'Your Cards')
    switchEventComponent('StartEvent', 'Start')
    stateStore.setBasicDeckState()
    return
  }

  if (stateStore.currentState === STATES.BASIC_DECK) {
    switchEventComponent('StartEvent', 'Events')
    stateStore.setEventState()
    return
  }
}

async function swtichBaseComponent(component: string, title: string): Promise<void> {
  const module = await import(`../components/${component}.vue`)

  baseTransition.value = true

  setTimeout(() => {
    baseCardTitle.value = title
    baseCardContent.value = module.default
    baseTransition.value = false
  }, TRANSITION_DURATION)
}

async function switchEventComponent(component: string, title: string): Promise<void> {
  const module = await import(`../components/${component}.vue`)

  eventTransition.value = true

  setTimeout(() => {
    eventCardTitle.value = title
    eventCardContent.value = module.default
    eventTransition.value = false
  }, TRANSITION_DURATION)
}
</script>
