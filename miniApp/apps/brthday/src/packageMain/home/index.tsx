import { defineComponent } from 'vue'
import { BasePage } from '@kacat/core'

definePageConfig({
  enableShareAppMessage: true,
  navigationStyle: 'custom',
  disableScroll: true
})

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (


        <BasePage
          useScrollView
          navigator={{
            title: '列表',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(255, 255, 255, 1)"
        >

          <div class="home-page">
            home
          </div>
        </BasePage>
      )
    }
  }
})
