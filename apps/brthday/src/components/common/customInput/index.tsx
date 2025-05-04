import { defineComponent, ref } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = ref('')
    const changeTrigger = () => emit('update:modelValue', inputValue.value)

    const init = () => {
      inputValue.value = props.modelValue
    }

    init()
    return () => {
      return (
        <div class="customInput">
          <div class="leftBlock"></div>
          <div class="inputBlock">
            <input class="input" type="text" value={inputValue.value} onChange={changeTrigger} />
          </div>
          <div class="rightBlock"></div>
        </div>
      )
    }
  }
})
