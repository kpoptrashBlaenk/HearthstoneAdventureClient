import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import HsPreset from './assets/theme'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: HsPreset } })
app.component('Button', Button)

app.mount('#app')
