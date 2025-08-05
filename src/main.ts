import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import { ToastService } from 'primevue'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(ToastService)

app.mount('#app')
