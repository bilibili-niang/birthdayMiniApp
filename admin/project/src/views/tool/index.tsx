import { defineComponent, ref } from 'vue'
import { Button, Input } from '@pkg/ui'
import { jumpBack } from '@/router/jump'

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {

    const query = ref('局部变量')

    return () => {
      return (
        <div class="grid grid-cols-3 gap-3">
          <div/>
          <div class="flex bg-blue-200 p-3">
            <Button
              class="mr-2"
              variant="outlined"
              onClick={() => {
                jumpBack()
              }}
            >
              back
            </Button>

            <Input
              v-model={query.value}
              label={'请输入中/英文'}
            >
            </Input>
            <Button
              variant="outlined"
              onClick={() => {
                if (query.value) {
                  console.log('query.value:')
                  console.log(query.value)
                }
              }}
            >
              查询
            </Button>

          </div>
          <div/>
        </div>
      )
    }
  }
})
