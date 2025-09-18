import { onMounted } from 'vue'
import useAppStore from '../stores/app'
import useBasicLayoutStore from '../stores/basic-layout'
import urlParse from 'url-parse'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const onMessage = (e: MessageEvent) => {
  if (e.data['Blade-Auth']) {
    localStorage.setItem('Blade-Auth', e.data['Blade-Auth'])
  }

  if (e.data.theme) {
    useAppStore().setTheme(e.data.theme)
  }

  if (typeof e.data.pageOnly === 'boolean') {
    useBasicLayoutStore().pageOnly = e.data.pageOnly
  }
}

const link = urlParse(window.location.href, true)
if (link.query.ba) {
  localStorage.setItem('Blade-Auth', link.query.ba)
}

window.addEventListener('message', onMessage)

//

if (!import.meta.env.DEV) {
  try {
    const metaTag = document.createElement('meta')
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy')
    metaTag.setAttribute('content', 'upgrade-insecure-requests')
    document.head.prepend(metaTag)
  } catch (err) {
    console.error('插入 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 失败')
  }
}
