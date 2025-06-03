import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

import './setup'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*setTimeout(() => {
  document.getElementById('app')?.setAttribute('data-mounted', 'true')
})*/
