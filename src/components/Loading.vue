<template>
  <div class="p-5">
    <ProgressSpinner style="height: 200px; width: 200px" strokeWidth="3" animationDuration="3s" />
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { ProgressSpinner } from 'primevue'
import { onMounted } from 'vue'

/* Emits */
const emit = defineEmits(['next'])

/* Lifecycle Hooks */
onMounted(async () => {
  await useCardStore().init()

  emit('next')
})
</script>
