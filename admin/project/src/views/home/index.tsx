import { defineComponent } from 'vue'
import { Button } from '@pkg/ui'

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div>
          首页
          <Button variant="outlined">
            Button
          </Button>
        </div>
      )
    }
  }
})
