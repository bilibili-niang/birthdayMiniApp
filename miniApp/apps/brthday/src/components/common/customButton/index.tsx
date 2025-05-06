import { defineComponent, computed } from 'vue'
import './style.scss'
import 'src/style/common.scss'
import { withUnit } from 'src/utils'

export default defineComponent({
  name: 'CustomButton',
  props: {
    // default | mini
    size: {
      type: [String, Number],
      default: 'default'
    },
    // 点击时的自定义类名,如需加入点击效果,在style.scss/common.scss中加
    clickedColor: {
      type: String,
      default: 'customButtonTargetClicked'
    },
    background: {
      type: String,
      default: '#627CFF'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    borderColor: {
      type: String,
      default: '#627CFF'
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    weight: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 50
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const buttonStyle = computed(() => {
      const { background, color, weight, height } = props
      return {
        background,
        color,
        fontWeight: weight,
        height: withUnit(height),
        border: `1px solid ${props.borderColor}`
      }
    })
    const clicked = () => {
      props.onClick()
    }

    return () => {
      return (
        <div class={['customButton', props.disabled && 'disabledBtn']} onClick={clicked}>
          <div
            class="customButtonTarget row w-percent100 just-content-center align-items-center"
            style={buttonStyle.value}
          >
            {slots?.default?.()}
          </div>
        </div>
      )
    }
  }
})
