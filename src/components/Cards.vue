<template>
  <!-- Popover -->
  <CardPopover ref="cardPopoverRef" />

  <div class="mt-3 flex flex-wrap justify-center gap-5">
    <!-- Card Lists -->
    <Card v-for="[classId, cards] in Object.entries(cardStore.groupByClass(playerStore.cards))">
      <!-- Title -->
      <template #title>
        <div class="flex items-center">
          <img
            v-if="parseInt(classId) !== CLASSES.NEUTRAL.id"
            class="h-7"
            :src="`icons/${getClassById(parseInt(classId)).name}.webp`"
          />
          <div :class="{ 'ms-3': parseInt(classId) !== CLASSES.NEUTRAL.id }" class="text-2xl">
            {{ getClassById(parseInt(classId)).name }}
          </div>
        </div>
      </template>
      <!-- Content -->
      <template #content>
        <CardList
          :cards="cards"
          :context="'CARDS'"
          @clicked="clicked"
          @popoverShow="cardPopoverRef?.popoverShow"
          @popoverHide="cardPopoverRef?.popoverHide"
        />
      </template>
    </Card>
  </div>

  <Toast />
</template>

<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import { useStateStore } from '@/store/stateStore'
import { type CardPopoverRef, type Class, type HearthstoneCard } from '@/types/types'
import { CLASSES, STATES } from '@/utils/constants'
import { EVENT_TYPES } from '@/utils/events'
import { classQueryParams, errorToast, getClassById } from '@/utils/functions'
import { Card, Toast, useToast } from 'primevue'
import { ref } from 'vue'
import CardList from './partials/CardList.vue'
import CardPopover from './partials/CardPopover.vue'

/* Emits */
defineEmits(['next']) // Unused, only here to avoid warning that component has no @next

/* Const */
const cardPopoverRef = ref<CardPopoverRef>()
const cardStore = useCardStore()
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
const stateStore = useStateStore()
const toast = useToast()

/* Functions */
function clicked(card: HearthstoneCard, event: any): void {
  // Sell card if shop
  if (globalStore.events.type === EVENT_TYPES.SHOP) {
    // Check if a deck needs this card
    const checkSellable = (cl: Class): boolean => {
      const copy = [...playerStore.cards]
      copy.splice(copy.indexOf(card), 1)
      const sellable = cardStore.filter(copy, classQueryParams([cl]), 'some').length >= 30

      if (!sellable) {
        errorToast(toast, `You need this card for your ${cl.name} deck`)
      }

      return sellable
    }

    if (card.classId === CLASSES.NEUTRAL.id) {
      for (const cl of globalStore.classes.classes) {
        if (!checkSellable(cl)) return
      }
    } else {
      const cl = getClassById(card.classId)
      if (!checkSellable(cl)) return
    }

    cardPopoverRef.value?.popoverHide(event)
    playerStore.sellCard(card)
    return
  }

  // Add card to deck if deck
  if (stateStore.currentState === STATES.DECK) {
    playerStore.deckFull() || playerStore.isMaxInDeck(card) || !playerStore.isDeckClass(card)
      ? errorToast(toast, `Can't add this card to the deck`)
      : playerStore.addToDeck(card)
  }
}
</script>
