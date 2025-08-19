import { defineComponent, ref } from 'vue'
import { Button, Input } from '@pkg/ui'
import { jumpBack } from '@/router/jump'
import { $transform } from '@/api'

// 添加一个辅助函数来转换字符串到驼峰格式
function toCamelCase(str: string) {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {

    const query = ref('局部变量')
    const data = ref([])

    const isLoading = ref(false)

    const handleQuery = () => {
      if (query.value) {
        console.log('query.value:')
        console.log(query.value)
        isLoading.value = true
        $transform({
          keyword: query.value
        })
          .then(res => {
            if (res.success && res.data && Array.isArray(res.data.translation)) {
              // 使用toCamelCase函数处理每个翻译结果
              data.value = res.data.translation.map(item => toCamelCase(item))
              console.log('data.value:')
              console.log(data.value)
            } else {
              console.error('Invalid response from API:', res)
            }
          })
          .catch(err => {
            console.error('Error in translation:', err)
          })
          .finally(() => {
            isLoading.value = false
          })
      }
    }

    return () => {
      return (
        <div class="flex">
          <div class="flex w-75 mr-auto ml-auto p-3 flex-col">
            <div class="flex flex-row items-center mt-3 mb-3">
              <Button
                class="mr-2"
                variant="outlined"
                onClick={jumpBack}
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
                onClick={handleQuery}
              >
                查询
              </Button>
            </div>

            <div class="flex flex-col ">
              {data.value.map(p => (
                <div class="">{p}</div>
              ))}
              {isLoading.value && (
                <div>
                  加载中...
                </div>
              )}
            </div>

          </div>
        </div>
      )
    }
  }
})
