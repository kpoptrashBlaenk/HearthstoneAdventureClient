<template>
  <div v-if="transitioning" ref="previewRef" class="pointer-events-none absolute z-0 opacity-0">
    <Card>
      <template #title>
        <div class="border-b-1">{{ cardTitle }}</div>
      </template>
      <template #content>
        <div>
          <component :is="cardContentBeforeAnimation" @next="stateSetter()" />
        </div>
      </template>
    </Card>
  </div>

  <div class="z-10 flex h-full w-full">
    <div
      class="mx-auto my-auto transition-all duration-300 ease-in-out"
      :style="{
        height: rect.height + 'px',
        width: rect.width + 'px',
      }"
    >
      <Card class="h-full w-full">
        <template #title>
          <div class="border-b-1" :class="{ 'opacity-0': transitioning }">{{ cardTitle }}</div>
        </template>
        <template #content>
          <div :class="{ 'opacity-0': transitioning }" class="transition-opacity duration-300 ease-in-out">
            <component :is="cardContent" @next="stateSetter()" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useStateStore } from '@/store/stateStore'
import { STATES } from '@/utils/constants'
import { fetchCards } from '@/utils/functions'
import { Card } from 'primevue'
import { nextTick, onMounted, ref, shallowRef, type Component } from 'vue'

/* Const */
const cardTitle = ref<string>('Start')
const cardContent = shallowRef<Component>()
const cardContentBeforeAnimation = shallowRef<Component>()
const previewRef = ref<HTMLElement>()
const rect = ref<any>({ height: 0, width: 0 })
const stateStore = useStateStore()
const transitioning = ref<boolean>(true)

/* Lifecycle Hooks */
onMounted(async () => {
  stateSetter()

  const cards = await fetchCards()
  console.log(cards)
})

/* Functions */
function stateSetter(): void {
  if (stateStore.currentState === STATES.START) {
    swtichComponent('Settings')
    stateStore.setSettingsState()
    return
  }

  if (stateStore.currentState === STATES.SETTINGS) {
    swtichComponent('Classes')
    stateStore.setClassesState()
    return
  }

  if (stateStore.currentState === STATES.CLASSES) {
    return
  }
}

async function swtichComponent(name: string): Promise<void> {
  const module = await import(`../components/${name}.vue`)

  cardContentBeforeAnimation.value = module.default
  transitioning.value = true

  await nextTick()

  rect.value = previewRef.value?.getBoundingClientRect()

  setTimeout(() => {
    cardTitle.value = name
    cardContent.value = module.default
    transitioning.value = false
  }, 300)
}
</script>
