<template>
  <div class="mt-3 flex flex-wrap justify-center gap-5">
    <!-- Popover -->
    <Popover ref="cardPopoverRef" placement="right">
      <img :src="cardPreviewUrl" class="h-80" />
    </Popover>
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
        <div
          v-for="(card, index) in cards"
          class="border-gold relative mt-[1px] flex h-5 cursor-pointer rounded-2xl"
          :class="{ hidden: card === cards[index - 1] }"
          @mouseenter="popoverShow($event, card.image)"
          @mouseleave="popoverHide($event)"
          @click="sellCard(card, $event)"
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
    </Card>
  </div>

  <Toast />
</template>

<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import type { Class, HearthstoneCard, RarityId } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { classQueryParams, errorToast, getClassById } from '@/utils/functions'
import { Card, Popover, Toast, useToast } from 'primevue'
import { onBeforeMount, ref } from 'vue'

/* Emits */
defineEmits(['next']) // Unused, only here to avoid warning that component has no @next

/* Const */
const cardPopoverRef = ref()
const cardPreviewUrl = ref<string>()
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
function popoverShow(event: any, image: string): void {
  cardPreviewUrl.value = image
  cardPopoverRef.value.show(event)
}

function popoverHide(event: any): void {
  cardPopoverRef.value.hide(event)
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

function sellCard(card: HearthstoneCard, event: any): void {
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

  popoverHide(event)
  playerStore.sellCard(card)
}
</script>
