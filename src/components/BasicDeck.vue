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
          <img v-if="classId !== CLASSES.NEUTRAL.id" class="h-7" :src="`icons/${getClassById(classId).name}.webp`" />
          <div :class="{ 'ms-3': classId !== CLASSES.NEUTRAL.id }" class="text-2xl">{{ getClassById(classId).name }}</div>
        </div>
      </template>
      <!-- Content -->
      <template #content>
        <div
          v-for="(card, index) in cards"
          class="border-gold relative mt-[1px] flex h-5 cursor-pointer rounded-2xl"
          :class="{ hidden: card === cards[index - 1] }"
          @mouseenter="togglePopover($event, card.image)"
          @mouseleave="togglePopover($event, card.image)"
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
              <div class="h-full w-5 border-l-1 pe-0.5 text-center" :class="rarityColor(card.rarityId.toString())">
                {{ card === cards[index + 1] ? 2 : 1 }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useCardStore } from '@/store/cardStore'
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import type { RarityValues } from '@/types/types'
import { CLASSES, RARITY_ID } from '@/utils/constants'
import { getClassById } from '@/utils/functions'
import { Card, Popover } from 'primevue'
import { onMounted, ref } from 'vue'

/* Const */
const cardPopoverRef = ref()
const cardPreviewUrl = ref<string>()
const cardStore = useCardStore()
const globalStore = useGlobalStore()
const playerStore = usePlayerStore()

/* Lifecycle Hooks */
onMounted(() => {
  playerStore.setCards(cardStore.createBasicDeck(globalStore.classes.classes))
  playerStore.groupByClass()
})

/* Functions */
function togglePopover(event: any, image: string): void {
  cardPreviewUrl.value = image
  cardPopoverRef.value.toggle(event)
}

function rarityColor(rarity: RarityValues): string {
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
