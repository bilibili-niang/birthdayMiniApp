import { defineComponent, onMounted, ref } from 'vue'
import { Button, Input, List, ListItem, ListItemSubtitle, ListItemTitle, vuetify } from '@pkg/ui'
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

// 封装浏览器数据库的读写方法
const localStorageKey = 'translationHistory'

function saveToLocalStorage(newRecord: any) {
  let history = readFromLocalStorage()
  if (!history) {
    history = []
  }

  // 去重：如果新记录的关键字已存在，则移除旧记录
  history = history.filter(record => record.query !== newRecord.query)

  // 添加新记录到数组开头
  history.unshift(newRecord)
  localStorage.setItem(localStorageKey, JSON.stringify(history))
}

function readFromLocalStorage(): any[] | null {
  const data = localStorage.getItem(localStorageKey)
  return data ? JSON.parse(data) : null
}

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {

    const query = ref('局部变量')
    const data = ref([] as string[])
    const history = ref([] as any[])
    const isLoading = ref(false)

    console.log('vuetify')
    console.log(vuetify)
    // vuetify.useTheme()


    vuetify.createVuetify({
      theme: {
        defaultTheme: 'dark', // 'light' | 'dark' | 'system'
      },
    })


    // 从 localStorage 读取所有查询记录并在页面加载时回显
    onMounted(() => {
      init()
    })

    const init = () => {

      const savedHistory = readFromLocalStorage()
      if (savedHistory) {
        history.value = savedHistory
        if (savedHistory.length > 0) {
          const lastRecord = savedHistory[savedHistory.length - 1]
          query.value = lastRecord.query
          data.value = lastRecord.translation
        }
      }
    }

    const handleQuery = () => {
      if (query.value) {
        isLoading.value = true
        $transform({
          keyword: query.value
        })
          .then(res => {
            if (res.success && res.data && Array.isArray(res.data.translation)) {
              // 使用toCamelCase函数处理每个翻译结果
              const translation = res.data.translation.map(item => toCamelCase(item))
              data.value = translation

              // 保存查询结果到 localStorage
              saveToLocalStorage({
                query: query.value,
                translation: translation
              })

              // 更新历史记录
              history.value = readFromLocalStorage() || []

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
                onClick={handleQuery}
              >
                查询
              </Button>
            </div>

            <div class="flex flex-col">
              {data.value.map(p => (
                <div class="">{p}</div>
              ))}
              {isLoading.value && (
                <div>
                  加载中...
                </div>
              )}
            </div>
            {history.value?.length > 0 && (
              <div class="mt-4 pa-3 rounded-lg bg-grey-lighten-5 elevation-2">
                <div class="flex-row flex justify-between">
                  <h3 class="text-h6 mb-2">历史查询记录</h3>
                  <Button
                    onClick={() => {
                      localStorage.removeItem(localStorageKey)
                      setTimeout(init, 500)
                    }}
                  >
                    清除一下
                  </Button>
                </div>
                <List>
                  {history.value.map((record, index) => (
                    <ListItem key={index} class="mb-2">
                      <ListItemTitle>{record.query}</ListItemTitle>
                      <ListItemSubtitle>{record.translation.join(', ')}</ListItemSubtitle>
                    </ListItem>
                  ))}
                </List>
              </div>
            )}

          </div>
        </div>
      )
    }
  }
})
