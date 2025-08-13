<template>
  <div class="flex flex-col">
    <Button class="text-3xl" raised @click="next()">Skip</Button>

    <div class="mt-3 grid justify-center">
      <div
        v-for="card in chooseCards"
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
const chooseCards = ref<HearthstoneCard[]>([])
const toast = useToast()

/* Lifecycle Hooks */
onBeforeMount(() => {
  refresh()
})

function refresh(): void {
  const cards = globalStore.events.cards
  const cardsToDiscover: HearthstoneCard[] = []

  for (let i = 0; i < 1; i++) {
    const card = cards[Math.floor(Math.random() * cards.length)]

    if (cardsToDiscover.includes(card)) {
      i--
      continue
    }

    cardsToDiscover.push(card)
  }

  chooseCards.value = sortCards(cardsToDiscover)
}

function next(card?: HearthstoneCard): void {
  // Check if card can be taken
  if (card && playerStore.ownMaxCopies(card)) {
    errorToast(toast, `You can't take that card!`)
    return
  }

  // Add card to deck
  if (card) playerStore.addToCards(card)

  emit('next')
}
</script>
