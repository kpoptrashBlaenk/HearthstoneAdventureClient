<template>
  <div class="flex items-center gap-3">
    Health:
    <div class="pb-2" style="width: 70px">
      <Chart type="doughnut" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
/* Import */
import { useGlobalStore } from '@/store/globalStore'
import { Chart as ChartJS, type ChartData, type ChartOptions, type Plugin } from 'chart.js'
import Chart from 'primevue/chart'
import { computed, ref } from 'vue'

/* Const */
const globalStore = useGlobalStore()
const centerTextPlugin: Plugin = {
  id: 'healthText',
  afterDraw(chart) {
    const { ctx, width, height } = chart
    ctx.save()
    ctx.font = 'bold 20px "Baloo 2"'
    ctx.fillStyle = getDocumentPropertyValue('--beige')
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(globalStore.health.current.toString(), width / 2, height / 2 + 8)
    ctx.restore()
  },
}
ChartJS.register(centerTextPlugin)
const chartData = computed<ChartData>(() => ({
  datasets: [
    {
      data: [globalStore.health.current, globalStore.health.max - globalStore.health.current],
      backgroundColor: ['#ff0000', getDocumentPropertyValue('--brown-dark')],
      borderColor: getDocumentPropertyValue('--gold-dark'),
    },
  ],
}))
const chartOptions = ref<ChartOptions>({
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
})

/* Functions */
function getDocumentPropertyValue(value: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(value)
}
</script>
