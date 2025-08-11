<template>
  <div class="p-card w-full">
    <div class="flex items-center justify-start gap-20 ps-10 text-lg">
      <div>Round: {{ globalStore.events.round }}-{{ globalStore.events.current }}/{{ globalStore.events.max }}</div>
      <div class="flex items-center gap-3">Health: <Health /></div>
      <div>Gold: {{ playerStore.gold }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import Health from './partials/Health.vue'

/* Const */
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
</script>
