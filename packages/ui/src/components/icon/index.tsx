import { defineComponent } from 'vue'
import './style.scss'
import './icon.scss'

export default defineComponent({
  name: 'kacat-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => {
      return <div class={['kacat-icon iconfont icon', `icon-${props.name}`]}>{slots.default?.()}</div>
    }
  }
})
