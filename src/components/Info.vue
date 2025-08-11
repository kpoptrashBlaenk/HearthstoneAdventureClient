<template>
  <div class="p-card w-full">
    <div class="flex items-center justify-start gap-10 ps-10 text-2xl">
      <Round />
      <Health />
      <div>Gold: {{ playerStore.gold }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import Health from './partials/Health.vue'
import Round from './partials/Round.vue'

/* Const */
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
</script>
