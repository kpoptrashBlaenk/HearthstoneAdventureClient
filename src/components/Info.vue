<template>
  <div class="p-card w-full p-2">
    <div class="flex justify-around text-lg">
      <div>Round: {{ globalStore.events.round }}-{{ globalStore.events.current }}/{{ globalStore.events.max }}</div>
      <div>Health: {{ globalStore.health.current }}/{{ globalStore.health.max }}</div>
      <div>Gold: {{ playerStore.gold }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'

/* Const */
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
</script>
