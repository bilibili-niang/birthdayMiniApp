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
        <div class="flex flex-row w-full">
          <div class="flex flex-row bg-red-50 ml-auto mr-auto w-75">
            <Button
              variant="outlined"
              onClick={() => {
                jumpToTool()
              }}
            >
              看看工具
            </Button>
          </div>
        </div>
      )
    }
  }
})
