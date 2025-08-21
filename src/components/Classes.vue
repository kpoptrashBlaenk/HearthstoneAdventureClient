<template>
  <div class="flex flex-col justify-center">
    <!-- Grid -->
    <div class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <!-- Classes -->
      <div
        v-for="cl in classes.filter((cl) => cl.id !== CLASSES.NEUTRAL.id)"
        class="col relative cursor-pointer rounded-md transition-transform duration-150 active:scale-90"
      >
        <img :src="cl.image" :class="{ 'drop-shadow-gold': selectedClasses.includes(cl) }" @click="selectClass(cl)" />
        <div class="absolute right-0 bottom-5 w-2/3 text-xs font-bold">
          {{ cl.name }}
        </div>
      </div>
    </div>

    <!-- Continue -->
    <Button class="mx-auto mt-5" raised :disabled="selectedClasses.length !== globalStore.classes.number" @click="go()">
      Continue
    </Button>
  </div>

  <!-- Toast -->
  <Toast />
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import type { Class } from '@/types/types'
import { CLASSES } from '@/utils/constants'
import { errorToast } from '@/utils/functions'
import { Button, Toast, useToast } from 'primevue'
import { ref } from 'vue'

/* Emit */
const emit = defineEmits(['next'])

/* Const */
const classes = ref<Class[]>(Object.values(CLASSES))
const globalStore = useGlobalStore()
const selectedClasses = ref<Class[]>([])
const toast = useToast()

/* Functions */
function go(): void {
  // If selected classes not equal to classes number
  if (selectedClasses.value.length !== globalStore.classes.number) {
    errorToast(toast, `Selected classes doesn't match selected number of classes`)
    return
  }

  globalStore.setClasses(selectedClasses.value)
  emit('next')
}

function selectClass(cl: Class): void {
  // Remove class if already selected
  const classSelectedIndex = selectedClasses.value?.findIndex((c) => c === cl)
  if (classSelectedIndex > -1) {
    selectedClasses.value.splice(classSelectedIndex, 1)
    return
  }

  // Check if selected classes full
  if (selectedClasses.value.length >= globalStore.classes.number) {
    errorToast(
      toast,
      `You can't choose more than ${globalStore.classes.number} ${globalStore.classes.number === 1 ? 'class' : 'classes'}`,
    )
    return
  }

  selectedClasses.value.push(cl)
}
</script>
