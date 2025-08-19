<template>
  <div class="mt-5 flex flex-wrap justify-center">
    <img
      v-for="(event, index) in events"
      v-tooltip.top="{
        value:
          eventCards[index].length >= 24
            ? event.tooltips.SHOP
            : eventCards[index].length >= 12
              ? event.tooltips.DISCOVER
              : eventCards[index].length >= 8
                ? event.tooltips.CHOOSE
                : event.tooltips.GET,
        escape: false,
      }"
      :src="`events/${event.image}.webp`"
      class="-mt-5 w-40 cursor-pointer object-cover transition-transform duration-200 ease-in-out hover:scale-110 active:scale-120"
      :class="
        eventCards[index].length >= 24
          ? 'drop-shadow-common'
          : eventCards[index].length >= 12
            ? 'drop-shadow-rare'
            : eventCards[index].length >= 8
              ? 'drop-shadow-epic'
              : 'drop-shadow-legendary'
      "
      @click="emitNext(index)"
    />
  </div>
</template>
<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { useGlobalStore } from '@/store/globalStore'
import { type Event, type HearthstoneCard, type QueryParam } from '@/types/types'
import { EVENTS } from '@/utils/events'
import { classQueryParams, getClassById } from '@/utils/functions'
import { onBeforeMount, ref } from 'vue'

/* Emit */
const emit = defineEmits(['next'])

/* Const */
const cardStore = useCardStore()
const eventCards = ref<HearthstoneCard[][]>([])
const events = ref<Event[]>([])
const globalStore = useGlobalStore()

/* Lifecycle Hooks */
onBeforeMount(() => {
  for (let i = 0; i < 3; i++) {
    // Get random event
    const eventsArray = Object.values(EVENTS)
    const event = eventsArray[Math.floor(Math.random() * eventsArray.length)]

    if (event.bucket.classes && !event.bucket.classes.some((cl) => globalStore.classes.classes.some((c) => c.id === cl))) {
      i--
      continue
    }

    // Filter event cards
    const bucketParamCards = cardStore.filter(cardStore.cards, event.bucket.params as QueryParam[], 'some')
    const whatever = classQueryParams(event.bucket.classes?.map((id) => getClassById(id as number)))
    const bucketClassesCards = cardStore.filter(
      bucketParamCards,
      classQueryParams(event.bucket.classes?.map((id) => getClassById(id))),
      'some',
    )
    const playerClassesCards = cardStore.filter(bucketClassesCards, classQueryParams(globalStore.classes.classes), 'some')

    // Check if not duplicate and enough cards
    if (events.value.includes(event) || playerClassesCards.length <= 0) {
      i--
      continue
    }

    events.value.push(event)
    eventCards.value.push(playerClassesCards)
  }
})

/* Functions */
function emitNext(index: number): void {
  globalStore.setEvent(events.value[index], eventCards.value[index])
  emit('next')
}
</script>
