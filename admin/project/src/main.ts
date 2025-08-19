import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/common.scss'
import './styles/theme.scss'
import './styles/tailwindcss.css'
import vuetify from '@/plugins/index'
import App from './App'
import router from './router'
import './setup'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')