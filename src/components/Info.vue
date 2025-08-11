<template>
  <div class="p-card w-full">
    <div class="flex items-center justify-start gap-10 ps-10 text-2xl">
      <Health />
      <Damage />
      <Round />

      <Gold />
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import Damage from './partials/Damage.vue'
import Gold from './partials/Gold.vue'
import Health from './partials/Health.vue'
import Round from './partials/Round.vue'
</script>
