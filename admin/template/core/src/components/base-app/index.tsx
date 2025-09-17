import { defineComponent, ref } from 'vue'
import { ConfigProvider } from '@kacat/ui'
import './style.scss'

import Settings from '../../views/settings'
import { PREFIX_CLS } from '@kacat/config'

import zhCN from 'ant-design-vue/es/locale/zh_CN'
import emitter from '../../utils/emitter'

export default defineComponent({
  name: 'BaseApp',
  setup(props, { slots }) {
    return () => {
      return (
        <ConfigProvider prefixCls={PREFIX_CLS} locale={zhCN}>
          <div class={`${PREFIX_CLS}-base-app`}>{slots.default?.()}</div>
          <Settings />
          <Progress />
        </ConfigProvider>
      )
    }
  }
})

const progress = ref(1)

export const AppProgress = {
  start: () => {
    progress.value = 0
  },
  done: () => {
    progress.value = 1
  }
}

const Progress = defineComponent({
  setup() {
    return () => {
      return (
        <div class={['base-app-progress', progress.value >= 1 && 'base-app-progress--done']}>
          <div class="base-app-progress__bar"></div>
        </div>
      )
    }
  }
})
