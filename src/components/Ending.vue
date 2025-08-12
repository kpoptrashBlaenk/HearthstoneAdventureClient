<template>
  <div class="flex flex-col gap-4">
    <div
      class="text-center text-2xl whitespace-pre-line"
      v-html="messages[win ? 'win' : 'loss'][Math.floor(Math.random())]"
    ></div>
    <Button class="mx-auto" raised @click="reload()">Restart</Button>
  </div>
</template>
<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { Button } from 'primevue'
import { ref } from 'vue'

/* Const */
const globalStore = useGlobalStore()
const messages = {
  win: ["<i>hears ''Victory!'' in the voice of Athena from Overwatch</i>\n<b>MHM, NUT</b>"],
  loss: ["<b>You Won!</b>\nYou see that?\nI <b>lied</b> because I'm a <b>liar</b>.\nThat's what I do, you <b>lost</b> dude."],
}
const win = ref<boolean>(globalStore.health.opponent.current <= 0)

// Functions
function reload(): void {
  window.location.reload()
}
</script>
