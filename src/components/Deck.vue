<template>
  <!-- Popover -->
  <CardPopover ref="cardPopoverRef" />
  <Card>
    <template #content>
      <div class="flex flex-col justify-center gap-5">
        <div>
          <CardList
            :cards="playerStore.deck"
            @clicked="playerStore.removeFromDeck"
            @popoverShow="cardPopoverRef?.popoverShow"
            @popoverHide="cardPopoverRef?.popoverHide"
          >
          </CardList>
        </div>
        <Button raised :disabled="!playerStore.deckFull()" @click="next()">
          <span class="font-semibold">{{ playerStore.deckFull() ? 'Next' : `${playerStore.deck.length}/30` }}</span>
        </Button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
/* Import */
import { usePlayerStore } from '@/store/playerStore'
import type { CardPopoverRef } from '@/types/types'
import { Button, Card } from 'primevue'
import { ref } from 'vue'
import CardList from './partials/CardList.vue'
import CardPopover from './partials/CardPopover.vue'

/* Emits */
const emit = defineEmits(['next'])

/* Const */
const cardPopoverRef = ref<CardPopoverRef>()
const playerStore = usePlayerStore()

/* Function */
function next(): void {
  if (playerStore.deckFull()) emit('next')
}
</script>
