import { defineComponent } from 'vue'
import { Button } from '@pkg/ui'
import { jumpToTool } from '@/router/jump'

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div class="grid grid-cols-4 gap-4">
          <div>
            1
          </div>
          <div>
            2
          </div>

          <Button
            variant="outlined"
            onClick={() => {
              jumpToTool()
            }}
          >
            看看工具
          </Button>
        </div>
      )
    }
  }
})
