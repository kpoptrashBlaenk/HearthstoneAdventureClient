<template>
  <div class="flex-column mt-3 h-full justify-center px-10">
    <img
      v-for="event in events"
      :src="`events/${event.image}.webp`"
      class="drop-shadow-gold -mt-5 w-40 cursor-pointer object-cover transition-transform duration-200 ease-in-out hover:scale-110 active:scale-120"
      @click="emitNext(event)"
    />
  </div>
</template>
<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { type Event } from '@/types/types'
import { EVENTS } from '@/utils/constants'
import { onBeforeMount, ref } from 'vue'

/* Emit */
const emit = defineEmits(['next'])

/* Const */
const events = ref<Event[]>([])
const globalStore = useGlobalStore()

/* Lifecycle Hooks */
onBeforeMount(() => {
  for (let i = 0; i < 3; i++) {
    const event = EVENTS[Math.floor(Math.random() * EVENTS.length)]

    if (events.value.includes(event)) {
      i--
      continue
    }

    events.value.push(event)
  }
})

/* Functions */
function emitNext(event: Event): void {
  globalStore.setEvent(event)
  globalStore.incrementEvent()
  emit('next')
}
</script>
