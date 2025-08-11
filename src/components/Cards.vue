<template>
  <CardPopover />
  <div class="mt-3 flex flex-wrap justify-center gap-5">
    <!-- Card Lists -->
    <Card v-for="[classId, cards] in Object.entries(playerStore.groupByClass())">
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
          @clicked="sellCard"
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
import { type CardPopoverRef, type Class, type HearthstoneCard } from '@/types/types'
import { CLASSES, EVENT_TYPES } from '@/utils/constants'
import { classQueryParams, errorToast, getClassById } from '@/utils/functions'
import { Card, Toast, useToast } from 'primevue'
import { onBeforeMount, ref } from 'vue'
import CardList from './partials/CardList.vue'
import CardPopover from './partials/CardPopover.vue'

/* Emits */
defineEmits(['next']) // Unused, only here to avoid warning that component has no @next

/* Const */
const cardPopoverRef = ref<CardPopoverRef>()
const cardStore = useCardStore()
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()
const toast = useToast()

/* Lifecycle Hooks */
onBeforeMount(() => {
  playerStore.setCards(cardStore.createBasicDeck(globalStore.classes.classes))
  playerStore.groupByClass()
})

/* Functions */

function sellCard(card: HearthstoneCard, event: any): void {
  // Check if shop
  if (globalStore.events.event?.type !== EVENT_TYPES.SHOP) return

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
}
</script>
