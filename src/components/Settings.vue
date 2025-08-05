<template>
  <div class="flex flex-col justify-center">
    <!-- Number of Classes -->
    <Slider v-model="classNumber" :min="1" :max="100" :step="1" id="classNumberSlider" class="mt-5 mb-2" />
    <label for="classNumberSlider">{{ roundClassesNumber() }} {{ roundClassesNumber() === 1 ? 'Class' : 'Classes' }}</label>

    <!-- Number of Player Health -->
    <IftaLabel class="mt-3">
      <InputNumber v-model="healthNumber" id="playerHealthNumberInput" />
      <label for="playerHealthNumberInput">Player Health</label>
    </IftaLabel>

    <!-- Number of Events -->
    <IftaLabel class="mt-5">
      <InputNumber v-model="eventsNumber" id="eventNumberInput" />
      <label for="eventNumberInput">Amount of Events</label>
    </IftaLabel>

    <!-- Start -->
    <Button class="mt-4" raised @click="start()">Start</Button>

    <!-- Toast -->
    <Toast />
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { errorToast } from '@/utils/functions'
import { Button, IftaLabel, InputNumber, Slider, Toast, useToast } from 'primevue'
import { ref } from 'vue'

/* Const */
const classNumber = ref<number>(30)
const eventsNumber = ref<number>(7)
const globalStore = useGlobalStore()
const healthNumber = ref<number>(15)
const toast = useToast()

/* Functions */
function roundClassesNumber(): number {
  return Math.ceil(classNumber.value / 10)
}

function start(): void {
  // Set classes number
  if (classNumber.value && roundClassesNumber() <= 10 && roundClassesNumber() >= 1) {
    globalStore.setClassesNumber(roundClassesNumber())
  } else {
    errorToast(toast, `Class number not valid: ${roundClassesNumber()}`)
  }

  // Set health
  if (healthNumber.value) {
    globalStore.setHealth(healthNumber.value)
  } else {
    errorToast(toast, `Health not valid: ${healthNumber.value}`)
  }

  // Set events number
  if (eventsNumber.value) {
    globalStore.setEvents(eventsNumber.value)
  } else {
    errorToast(toast, `Events number not valid: ${eventsNumber.value}`)
  }
}
</script>
