<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="mx-auto my-auto max-w-11/12 transition-all duration-300 ease-in-out">
      <Card class="h-full w-full">
        <template #title>
          <div class="border-b-1">{{ cardTitle }}</div>
        </template>
        <template #content>
          <div class="transition-opacity duration-400 ease-in-out">
            <component :is="cardContent" @next="stateSetter()" />
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
const cardTitle = ref<string>('Start')
const cardContent = shallowRef<Component>()
const cardStore = useCardStore()
const stateStore = useStateStore()

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

  cardTitle.value = title
  cardContent.value = module.default
}
</script>
