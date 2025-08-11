<template>
  <div class="relative -ms-10 py-1">
    <img
      src="https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_attack_68x68_@2x-1066d56a16f56fed8f03f610b2c85783a03a9490631d81578a5840cb4220ce569d0f23c1906262ee4928880f3d4e98ef86362f73e8294d7415741ee3f1acfb39.png"
      class="h-14"
    />
    <div class="text-shadow absolute inset-0 top-4 left-2 flex items-center justify-center text-3xl font-bold">
      {{ globalStore.events.round }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'

/* Const */
const globalStore = useGlobalStore()
</script>
