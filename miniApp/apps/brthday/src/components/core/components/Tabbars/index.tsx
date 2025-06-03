import { defineComponent } from 'vue'
import type { PropType } from 'vue'

definePageConfig({
  enableShareAppMessage: true,
  navigationStyle: 'custom',
  disableScroll: true
})

export default defineComponent({
  name: 'TabBars',
  props: {
    item: {
      type: Array as PropType<any[]>,
      required: true
    }
  },
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div class="tab-bars">
          tabs
        </div>
      )
    }
  }
})
