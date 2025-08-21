<template>
  <div class="relative py-2">
    <img :src="'icons/gold.png'" />
    <div class="text-shadow absolute inset-0 top-0.5 flex items-center justify-center text-3xl font-bold">
      {{ playerStore.gold }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { usePlayerStore } from '@/store/playerStore'

/* Const */
const playerStore = usePlayerStore()
</script>
