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
          <div class="flex flex-row ml-auto mr-auto w-75 pt-5">
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
