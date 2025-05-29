import { defineComponent } from 'vue'
import { BasePage } from '@kacat/core'

definePageConfig({
  enableShareAppMessage: true,
  navigationStyle: 'custom',
  disableScroll: true
})

export default defineComponent({
  name: 'Mine',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <BasePage
          useScrollView
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(255, 255, 255, 1)"
        >

          <div class="page-mine">
            我的

          </div>
        </BasePage>
      )
    }
  }
})
