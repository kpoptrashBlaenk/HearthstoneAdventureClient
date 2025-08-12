<template>
  <!-- Popover -->
  <CardPopover ref="cardPopoverRef" />
  <Card>
    <template #content>
      <div class="flex flex-col justify-center gap-5">
        <Button raised> Copy Deck Code </Button>
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
import type { CardPopoverRef } from '@/types/types'
import { Button, Card } from 'primevue'
import { ref } from 'vue'
import CardPopover from './partials/CardPopover.vue'

/* Emits */
const emit = defineEmits(['next'])

/* Const */
const cardPopoverRef = ref<CardPopoverRef>()
const globalStore = useGlobalStore()

/* Functions */
function next(win: boolean): void {
  globalStore.changeHealth(win ? 'opponent' : 'player', -globalStore.events.round)

  emit('next')
}
</script>
