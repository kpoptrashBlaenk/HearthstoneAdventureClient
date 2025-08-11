<template>
  <div class="flex">
    <div
      v-for="(index, event) in globalStore.events.max"
      class="border-gold h-5 w-10"
      :class="index <= globalStore.events.current ? 'bg-purple-light' : 'bg-purple-dark'"
    ></div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'

/* Const */
const globalStore = useGlobalStore()
</script>
