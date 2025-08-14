import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Demo',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div>
          这是tsx组件内容
        </div>
      )
    }
  }
})
