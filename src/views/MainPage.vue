<template>
  <div class="flex h-full w-full items-center justify-center">
    <div
      class="mx-auto my-auto max-w-11/12 transition-opacity ease-in-out"
      :class="[`duration-${TRANSITION_DURATION}`, { 'opacity-0': transition }]"
    >
      <Card class="h-full w-full">
        <template #title>
          <div class="border-b-1">{{ cardTitle }}</div>
        </template>
        <template #content>
          <component :is="cardContent" @next="stateSetter()" />
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
const cardTitle = ref<string>('Start')
const cardContent = shallowRef<Component>()
const cardStore = useCardStore()
const stateStore = useStateStore()
const transition = ref<boolean>(false)
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
    swtichComponent('Settings', 'Settings')
    stateStore.setSettingsState()
    return
  }

  if (stateStore.currentState === STATES.SETTINGS) {
    swtichComponent('Classes', 'Classes')
    stateStore.setClassesState()
    return
  }

  if (stateStore.currentState === STATES.CLASSES) {
    swtichComponent('BasicDeck', 'Basic Decks')
    stateStore.setBasicDeckState()
  }
}

async function swtichComponent(component: string, title: string): Promise<void> {
  const module = await import(`../components/${component}.vue`)

  transition.value = true

  setTimeout(() => {
    cardTitle.value = title
    cardContent.value = module.default
    transition.value = false
  }, TRANSITION_DURATION)
}
</script>
