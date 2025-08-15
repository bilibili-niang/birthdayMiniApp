import { defineComponent, ref } from 'vue'
import { Button, Input } from '@pkg/ui'
import { jumpBack } from '@/router/jump'
import { $transform } from '@/api'

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {

    const query = ref('局部变量')
    const data = ref({})

    const isLoading = ref(false)

    return () => {
      return (
        <div class="flex">
          <div class="flex w-75 mr-auto ml-auto   p-3 flex-col">
            <div class="flex flex-row items-center mt-3 mb-3">
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
                class="mr-3 ml-3"
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
                    isLoading.value = true
                    $transform({
                        keyword: query.value
                      }
                    )
                      .then(res => {
                        if (res.success) {
                          data.value = res.data
                          console.log('data.value:')
                          console.log(data.value)
                        }
                      })
                      .finally(() => {
                        isLoading.value = false
                      })
                  }
                }}
              >
                查询
              </Button>
            </div>

            <div class="flex flex-col ">
              {(data.value?.translation || []).map(p => {
                return <div class="">{p}</div>
              })}
              {isLoading.value ?
                <div>
                  加载中...
                </div>
                : ''
              }
            </div>

          </div>
        </div>
      )
    }
  }
})
