import { uuid } from '@kacat/utils'
import Taro, { usePageScroll } from '@tarojs/taro'
import { computed, defineComponent } from 'vue'
import { useAppStore } from '../../stores'
import { storeToRefs } from 'pinia'
import { clamp, throttle } from 'lodash-es'

export default defineComponent({
  name: '',
  props: {
    threshold: {
      type: Number,
      default: 0.15
    }
  },
  emits: {
    reach: () => true
  },
  setup(props, { emit }) {
    const id = `scroll-anchor-${uuid()}`

    const { systemInfo } = storeToRefs(useAppStore())

    const offset = computed(() => {
      return systemInfo.value.windowHeight + systemInfo.value.windowHeight * clamp(props.threshold, 0, 0.5)
    })

    const query = Taro.createSelectorQuery()
      .in(Taro.getCurrentInstance().page!)
      .select('#' + id)
      .boundingClientRect()

    usePageScroll(() => {
      query.exec(res => {
        check(res[0].top)
      })
    })

    const check = throttle((top: number) => {
      if (top <= offset.value) {
        emit('reach')
      }
    }, 100)

    return () => {
      return <div id={id} class="c_scroll-anchor"></div>
    }
  }
})
