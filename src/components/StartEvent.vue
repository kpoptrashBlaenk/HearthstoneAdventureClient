<template>
  <div class="flex-column mt-3 h-full justify-center gap-5 p-10">
    <img
      :src="'events/start.png'"
      class="drop-shadow-gold h-40 w-40 cursor-pointer object-cover transition-transform duration-200 ease-in-out hover:scale-110 active:scale-120"
      @click="emit('next')"
    />
  </div>
</template>
<script setup lang="ts">
/* Emit */
const emit = defineEmits(['next'])
</script>
