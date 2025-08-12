<template>
  <!-- Card List -->
  <div
    v-for="(card, index) in cards"
    class="border-gold relative mt-[1px] flex h-5 cursor-pointer rounded-2xl"
    :class="{ hidden: card === cards[index - 1] }"
    :style="{
      filter:
        context === 'CARDS' && playerStore.isMaxInDeck(card) && useStateStore().currentState === STATES.DECK
          ? 'brightness(0.4)'
          : '',
    }"
    @mouseenter="emit('popoverShow', $event, card.image)"
    @mouseleave="emit('popoverHide', $event)"
    @click="clicked(card, $event)"
  >
    <!-- Mana Crystal -->
    <img
      src="https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_mana_68x68_@2x-b6ecc2a45a3440ac6cba07297306fbb64d9a224bc12a281224a091aaf92a73da2d0036e6eed920f74a957660354bfafe7831fc291aad49867d04b427737c6e3a.png"
      class="absolute z-10 -ms-2 h-5"
    />
    <!-- Mana Cost -->
    <div
      class="text-shadow absolute z-10 -ms-[2px] mt-[1px] text-center text-sm font-bold"
      :class="{ '-ms-[3.5px]': card.manaCost > 9 }"
    >
      {{ card.manaCost }}
    </div>
    <div class="relative h-4.5 w-full overflow-hidden rounded-2xl font-bold">
      <!-- Image -->
      <img
        v-if="card.cropImage"
        :src="card.cropImage"
        alt="card image"
        class="absolute -ms-5 h-full w-full object-cover"
        style="filter: brightness(0.7)"
      />

      <div class="text-shadow relative z-10 ms-4 flex justify-between text-sm">
        <!-- Name -->
        <div class="w-40">
          {{ card.name }}
        </div>
        <!-- Amount & Rarity -->
        <div class="h-full w-5 border-l-1 pe-0.5 text-center" :class="rarityColor(card.rarityId)">
          {{ card === cards[index + 1] ? 2 : 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { usePlayerStore } from '@/store/playerStore'
import { useStateStore } from '@/store/stateStore'
import type { HearthstoneCard, RarityId } from '@/types/types'
import { RARITY_ID, STATES } from '@/utils/constants'

/* Emits */
const emit = defineEmits<{
  (e: 'clicked', card: HearthstoneCard, event: any): void
  (e: 'popoverShow', event: any, image: string): void
  (e: 'popoverHide', event: any): void
}>()

/* Props */
defineProps<{
  cards: HearthstoneCard[]
  context?: 'CARDS'
}>()

/* Const */
const playerStore = usePlayerStore()

/* Functions */
function clicked(card: HearthstoneCard, event: any): void {
  emit('clicked', card, event)
}

function rarityColor(rarity: RarityId): string {
  switch (rarity) {
    case RARITY_ID.COMMON:
      return 'bg-common'
    case RARITY_ID.RARE:
      return 'bg-rare'
    case RARITY_ID.EPIC:
      return 'bg-epic'
    case RARITY_ID.LEGENDARY:
      return 'bg-legendary'
    default:
      return ''
  }
}
</script>
