import { defineComponent, h, onMounted } from 'vue'
import { Button } from '@pkg/ui'
import { useCrud } from '@pkg/core'
import './index.scss'

// 创建一个简单的函数式按钮组件
const SimpleButton = (props: any, { slots }: any) => {
  return h(
    'button',
    {
      class: 'simple-button',
      onClick: props.onClick
    },
    slots.default?.()
  )
}

// 定义 useCrud 的选项类型
interface CrudOptions {
  title: string;
  schema: any; // 根据实际需要定义 schema 类型
}

export default defineComponent({
  name: 'HomeLogin',
  setup() {
    // 提供必要的 useCrud 选项
    const crudOptions: CrudOptions = {
      title: '商品',
      schema: {} // 添加一个空的 schema 对象
    }

    const { onCreate } = useCrud(crudOptions)

    onMounted(() => {
      console.group('Button 组件调试信息')
      console.log('Button 组件对象:', Button)
      console.log('Button 类型:', typeof Button)
      console.log('Button 属性:', Object.keys(Button || {}))
      console.log('Vue 版本:', (window as any).Vue?.version)
      console.log('Is Button a function?', typeof Button === 'function')
      console.log('Is Button.render a function?', typeof (Button as any)?.render === 'function')
      console.log('Is Button.template a string?', typeof (Button as any)?.template === 'string')
      console.groupEnd()
    })

    return () => (
      <div class="home-container">
        <h2>按钮组件测试</h2>

        {/* 测试 1: 使用 @pkg/ui 的 Button */}
        <div class="test-case">
          <h3>1. @pkg/ui 的 Button 组件</h3>
          <div class="button-wrapper">
            <Button>
              测试
            </Button>
            {h(Button as any, {
              onClick: () => console.log('UI Button clicked'),
              class: 'test-button'
            }, () => 'UI 按钮')}
          </div>
        </div>

        {/* 测试 2: 使用原生 button */}
        <div class="test-case">
          <h3>2. 原生 button 元素</h3>
          <div class="button-wrapper">
            <button
              class="native-button"
              onClick={() => console.log('Native button clicked')}
            >
              原生按钮
            </button>
          </div>
        </div>

        {/* 测试 3: 使用内联函数式组件 */}
        <div class="test-case">
          <h3>3. 内联函数式组件</h3>
          <div class="button-wrapper">
            {h('button', {
              class: 'inline-button',
              onClick: () => console.log('Inline button clicked')
            }, '内联按钮')}
          </div>
        </div>

        {/* 测试 4: 使用预定义的函数式组件 */}
        <div class="test-case">
          <h3>4. 预定义的函数式组件</h3>
          <div class="button-wrapper">
            <SimpleButton onClick={() => console.log('Simple button clicked')}>
              简单按钮
            </SimpleButton>
          </div>
        </div>
      </div>
    )
  },
})
