<template>
  <div class="flex h-full w-full">
    <Card class="mx-auto my-auto">
      <template #title>
        <div class="border-b-1">{{ cardTitle }}</div>
      </template>
      <template #content>
        <component :is="cardContent" @next="stateSetter()" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { Card } from 'primevue'
import { onMounted, ref, shallowRef, type Component } from 'vue'

/* Const */
const cardTitle = ref<string>('')
const cardContent = shallowRef<Component>()

/* Lifecycle Hooks */
onMounted(() => {
  stateSetter()
})

/* Functions */
function stateSetter(): void {}

function switchToSettings(): void {
  cardTitle.value = 'Settings'
  import('../components/Settings.vue').then((module) => {
    cardContent.value = module.default
  })
}

function switchToClasses(): void {
  cardTitle.value = 'Classes'
  import('../components/Classes.vue').then((module) => {
    cardContent.value = module.default
  })
}
</script>
