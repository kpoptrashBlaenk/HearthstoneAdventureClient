<template>
  <!-- Popover -->
  <CardPopover ref="cardPopoverRef" />
  <Card>
    <template #content>
      <div class="flex flex-col justify-center gap-5">
        <Button @click="copyDeckCode()" raised> {{ copied ? 'Deck Code Copied' : 'Copy Deck Code' }} </Button>
        <div class="flex justify-between">
          <Button style="background-color: green" raised @click="next(true)">Win</Button>
          <Button style="background-color: red" raised @click="next(false)">Loss</Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { usePlayerStore } from '@/store/playerStore'
import type { CardPopoverRef } from '@/types/types'
import { CLASS_DECK_IDS, CLASSES } from '@/utils/constants'
import { getClassById } from '@/utils/functions'
import { encode } from 'deckstrings'
import { Button, Card } from 'primevue'
import { ref } from 'vue'
import CardPopover from './partials/CardPopover.vue'

/* Emits */
const emit = defineEmits(['next'])

/* Const */
const cardPopoverRef = ref<CardPopoverRef>()
const copied = ref<boolean>(false)
const globalStore = useGlobalStore()

/* Functions */
function next(win: boolean): void {
  globalStore.changeHealth(win ? 'opponent' : 'player', -globalStore.events.round)

  emit('next')
}

function copyDeckCode(): void {
  // get deck
  const playerDeck = usePlayerStore().deck

  // cards
  const cards = new Map<number, number>()
  playerDeck.forEach((card) => {
    cards.set(card.id, (cards.get(card.id) || 0) + 1)
  })

  // heroes (class)
  const filteredByClass = playerDeck.filter((card) => card.classId && card.classId !== CLASSES.NEUTRAL.id)
  const hero =
    filteredByClass.length === 0
      ? CLASS_DECK_IDS.DEATH_KNIGHT
      : //@ts-ignore
        CLASS_DECK_IDS[Object.entries(CLASSES).find(([key, value]) => value === getClassById(filteredByClass[0].classId))![0]]

  // create deck code
  const deckCode = encode({
    cards: Array.from(cards.entries()),
    heroes: [hero],
    format: 2, // 2 for standard
  })

  // copy deck code
  navigator.clipboard.writeText(deckCode)

  // set button text
  copied.value = true
  setTimeout(() => (copied.value = false), 3000)
}
</script>
