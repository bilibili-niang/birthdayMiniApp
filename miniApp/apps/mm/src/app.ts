import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@kacat/styles'
import './app.scss'
import Taro from '@tarojs/taro'
import setup from './setup'

if (process.env.TARO_ENV === 'h5' && location.href.includes('debug=true')) {
  import('vconsole').then(res => {
    new res.default()
  })
}

const App = createApp({
  onError(err: any) {
    console.log(err)
  }
})

Taro.onPageNotFound(() => {
  Taro.reLaunch({ url: 'pages/404' })
})

App.use(createPinia())

setup()

export default App
