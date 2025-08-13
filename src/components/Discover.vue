<template>
  <div class="flex flex-col">
    <Button class="text-3xl" raised @click="next()">Skip</Button>

    <div
      class="mt-3 grid justify-center md:grid-cols-2 lg:grid-cols-3"
      :class="[`duration-${TRANSITION_DURATION}`, { 'opacity-0': transition }]"
    >
      <div
        v-for="card in discoverCards"
        v-tooltip="{ value: card.flavorText, escape: false }"
        class="relative -mt-4 w-40 transition-transform duration-200 ease-in-out"
        :class="[
          playerStore.isMaxInDeck(card)
            ? 'drop-shadow-gold cursor-pointer hover:scale-105 active:scale-110'
            : 'cursor-default grayscale-100',
          card.cardTypeId === CARD_TYPE_ID.LOCATION ? 'p-3' : '',
        ]"
        @click="next(card)"
      >
        <img :src="card.image" class="h-full object-contain" />
      </div>
    </div>
  </div>

  <Toast />
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import { type HearthstoneCard } from '@/types/types'
import { CARD_TYPE_ID } from '@/utils/constants'
import { errorToast, sortCards } from '@/utils/functions'
import { Button, Toast, useToast } from 'primevue'
import { onBeforeMount, ref } from 'vue'

/* Emits */
const emit = defineEmits(['next'])

/* Const */
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
const refreshed = ref<boolean>(false)
const discoverCards = ref<HearthstoneCard[]>([])
const toast = useToast()
const transition = ref<boolean>(false)
const TRANSITION_DURATION = 200

/* Lifecycle Hooks */
onBeforeMount(() => {
  refresh()
})

function refresh(): void {
  const cards = globalStore.events.cards
  const cardsToDiscover: HearthstoneCard[] = []

  for (let i = 0; i < 3; i++) {
    const card = cards[Math.floor(Math.random() * cards.length)]

    if (cardsToDiscover.includes(card)) {
      i--
      continue
    }

    cardsToDiscover.push(card)
  }

  discoverCards.value = sortCards(cardsToDiscover)
}

function next(card?: HearthstoneCard): void {
  // Check if card can be taken
  if (card && playerStore.ownMaxCopies(card)) {
    errorToast(toast, `You can't take that card!`)
    return
  }

  // Add card to deck
  if (card) playerStore.addToCards(card)

  // If it's the first card, then refresh
  if (!refreshed.value) {
    transition.value = true
    setTimeout(() => (transition.value = false), TRANSITION_DURATION)
    refreshed.value = true
    refresh()
    return
  }

  emit('next')
}
</script>
