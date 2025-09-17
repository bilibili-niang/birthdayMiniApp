import { defineComponent } from 'vue'
import { Button } from '@pkg/ui'
import { useCrud } from '@pkg/core'

export default defineComponent({
  name: 'HomeLogin',
  setup() {
    const {
      onCreate
    } = useCrud({
      title: '商品',

    })

    return () => (
      <div class="flex flex-col items-center w-full">
        useCrud:
        <Button
          onClick={onCreate}
        >
          onCreate

        </Button>

      </div>
    )
  },
})
