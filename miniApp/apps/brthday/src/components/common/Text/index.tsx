import './style.scss'
import { defineComponent, computed } from 'vue'
import { withUnit } from '../../../utils'

export default defineComponent({
  name: 'Text',
  props: {
    size: {
      type: [Number, String], // 允许size为Number或String类型
      default: 17
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,1)'
    },
    weight: {
      type: Number,
      default: 400
    },
    width: {
      type: String,
      default: 'fit-content'
    },
    oneRow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const textStyle = computed(() => {
      const { color = 'rgba(0,0,0,1)', weight = 400, size = '17px', width = 'fit-content' } = props
      // 新增: 处理size，确保传入数字时直接使用，传入带'px'的字符串时去除'px'
      let fontSizeValue = typeof size === 'number' ? size : Number(size.replace('px', ''))
      return {
        color: color,
        fontWeight: weight,
        // 使用处理后的fontSizeValue
        fontSize: withUnit(fontSizeValue),
        width: width
      }
    })

    return () => (
      <div class={['text', props.oneRow && 'oneRow']} style={textStyle.value}>
        {slots.default?.()}
      </div>
    )
  }
})
