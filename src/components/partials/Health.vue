<template>
  <div class="relative py-1">
    <img
      src="https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_health_68x68_@2x-741dbd5879b51f555cb381efb446bfcf9ac4c87a7a3ea7dc758cf88af53ce9444b897d26fe27f40d0bfa0d17d03ec508e916948d236cec16724fa89d6fbfa4e2.png"
      class="h-14"
    />
    <div class="text-shadow absolute inset-0 top-4 left-0 flex items-center justify-center text-3xl font-bold">
      {{ globalStore.health.current }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'

/* Const */
const globalStore = useGlobalStore()
</script>
