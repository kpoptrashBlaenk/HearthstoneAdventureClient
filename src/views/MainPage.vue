<template>
  <div class="flex h-full w-full">
    <Card class="mx-auto my-auto">
      <template #title><div class="border-b-1">Settings</div></template>
      <template #content>
        <Settings :is="cardContent" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
/* Import */
import Settings from '@/components/Settings.vue'
import { Card } from 'primevue'
import { ref, shallowRef } from 'vue'

/* Const */
const cardTitle = ref<string>('Settings')
const cardContent = shallowRef(Settings)

/* Functions */
function switchToSettings(): void {
  cardTitle.value = 'Settings'
  import('../components/Settings.vue').then((module) => {
    cardContent.value = module.default
  })
}
</script>
