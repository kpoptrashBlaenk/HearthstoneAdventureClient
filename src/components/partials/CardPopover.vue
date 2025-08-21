<template>
  <Popover ref="cardPopoverRef" placement="right">
    <img :src="cardPreviewUrl" class="h-80" />
  </Popover>
</template>

<script setup lang="ts">
/* Import */
import { Popover } from 'primevue'
import { ref } from 'vue'

/* Expose */
defineExpose({
  popoverShow,
  popoverHide,
})

/* Const */
const cardPopoverRef = ref()
const cardPreviewUrl = ref<string>()

/* Functions */
function popoverShow(event: any, image: string): void {
  cardPreviewUrl.value = image
  cardPopoverRef.value.show(event)
}

function popoverHide(event: any): void {
  cardPopoverRef.value.hide(event)
}
</script>
