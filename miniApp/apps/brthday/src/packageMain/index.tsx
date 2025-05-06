// 微店的商户选择
import './style.scss'
import { defineComponent, } from 'vue'
import { BasePage, } from '@kacat/core'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'Index',
  setup() {

    return () => {
      return (
        <BasePage
          useScrollView
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(241, 243, 251, 1)"
        >

        </BasePage>
      )
    }
  }
})
