<template>
  <div class="flex flex-col">
    <Button class="text-3xl" :disabled="playerStore.gold < 2 || refreshed" @click="refreshButton()">
      <div class="relative -me-1 -mt-0.5">
        <img class="h-5" :src="'icons/gold.png'" />
        <div class="text-shadow absolute inset-0 top-0.5 flex items-center justify-center text-sm font-bold">2</div>
      </div>
      <span> Refresh </span>
    </Button>

    <div
      class="mt-3 grid justify-center md:grid-cols-2 lg:grid-cols-3"
      :class="[`duration-${TRANSITION_DURATION}`, { 'opacity-0': transition }]"
    >
      <div
        v-for="card in [...shopCards, ...playerStore.soldCards]"
        v-tooltip="{ value: card.flavorText, escape: false }"
        class="relative -mt-4 w-40 transition-transform duration-200 ease-in-out"
        :class="[
          playerStore.isBuyable(card, cardPrice(card, 'shop'))
            ? 'drop-shadow-gold cursor-pointer hover:scale-105 active:scale-110'
            : 'cursor-default grayscale-100',
          card.cardTypeId === CARD_TYPE_ID.LOCATION ? 'p-3' : '',
        ]"
        @click="buy(card, cardPrice(card, 'shop'))"
      >
        <img :src="card.image" class="h-full object-contain" />
        <img :src="'icons/gold.webp'" class="absolute top-3 right-3 h-10" />
        <div class="text-shadow absolute top-5.5 right-6.5 text-center text-2xl font-bold">{{ cardPrice(card, 'shop') }}</div>
      </div>
    </div>
    <Button raised @click="next()"><span class="text-2xl font-semibold">Next</span></Button>
  </div>

  <Toast />
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import { type HearthstoneCard } from '@/types/types'
import { CARD_TYPE_ID } from '@/utils/constants'
import { cardPrice, errorToast, sortCards } from '@/utils/functions'
import { Button, Toast, useToast } from 'primevue'
import { onBeforeMount, ref } from 'vue'

/* Emits */
const emit = defineEmits(['next'])

/* Const */
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
const refreshed = ref<boolean>(false)
const shopCards = ref<HearthstoneCard[]>([])
const toast = useToast()
const transition = ref<boolean>(false)
const TRANSITION_DURATION = 200

/* Lifecycle Hooks */
onBeforeMount(() => {
  refresh()
})

/* Functions */
function buy(card: HearthstoneCard, cost: number): void {
  if (!playerStore.isBuyable(card, cost)) {
    errorToast(toast, `You can't buy that card!`)
    return
  }

  playerStore.buyCard(card, cost)
}

function refresh(): void {
  const cards = globalStore.events.cards
  const cardsToSell: HearthstoneCard[] = []

  for (let i = 0; i < 6; i++) {
    const card = cards[Math.floor(Math.random() * cards.length)]

    if (cardsToSell.includes(card)) {
      i--
      continue
    }

    cardsToSell.push(card)
  }

  shopCards.value = sortCards(cardsToSell)
}

function refreshButton(): void {
  if (playerStore.gold < 2 || refreshed.value) {
    errorToast(toast, `You can't refresh!`)
    return
  }

  transition.value = true
  setTimeout(() => (transition.value = false), TRANSITION_DURATION)

  playerStore.gold -= 2
  refreshed.value = true
  refresh()
}

function next(): void {
  emit('next')
}
</script>
