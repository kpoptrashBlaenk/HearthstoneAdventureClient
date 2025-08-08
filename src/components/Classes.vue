<template>
  <div class="flex flex-col justify-center">
    <!-- Grid -->
    <div class="mt-3 grid grid-cols-6 gap-5">
      <!-- Classes -->
      <div
        v-for="cl in classes.filter((cl) => cl.id !== CLASSES.NEUTRAL.id)"
        :class="{ 'shadow-gold': selectedClasses.includes(cl) }"
        class="col h-32 w-32 cursor-pointer rounded-md bg-gray-200 transition-transform duration-150 active:scale-90"
        @click="selectClass(cl)"
      />
    </div>

    <!-- Continue -->
    <Button class="mx-auto mt-5" raised :disabled="selectedClasses.length !== globalStore.classes.number" @click="go()"
      >Continue</Button
    >
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
  if (selectedClasses.value.length >= 3) {
    errorToast(
      toast,
      `You can't choose more than ${globalStore.classes.number} ${globalStore.classes.number === 1 ? 'class' : 'classes'}`,
    )
    return
  }

  selectedClasses.value.push(cl)
}
</script>
