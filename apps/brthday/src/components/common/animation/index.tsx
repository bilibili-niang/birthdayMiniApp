import './style.scss'
import { ref, defineComponent, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'Animation',
  props: {
    // 动画执行的延迟时间
    delay: {
      type: Number,
      default: 0
    },
    // 是否开启动画
    able: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const startStyle = ref<string | null>(null)
    let timerId: ReturnType<typeof setTimeout> | null = null // 新增：声明定时器ID变量
    const init = () => {
      if (props.delay === 0) {
        startStyle.value = 'startAnimation'
      } else {
        timerId = setTimeout(() => {
          startStyle.value = 'startAnimation'
        }, props.delay)
      }
    }

    init()
    // 新增：在组件卸载前清理定时器
    onBeforeUnmount(() => {
      if (timerId !== null) {
        clearTimeout(timerId)
        timerId = null
      }
    })

    return () => {
      return <div class={['animationContainer', props.able && startStyle.value]}>{slots?.default?.()}</div>
    }
  }
})
