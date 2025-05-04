import { ref, defineComponent } from 'vue'
import { BasePage, Spin } from '@kacat/core'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const isLoading = ref(true)
    const init = () => {
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    }

    init()
    return () => {
      if (isLoading.value) {
        return (
          <div class="loadingContainer">
            <Spin/>
          </div>
        )
      } else {
        return <BasePage
          useScrollView
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(241, 243, 251, 1)"
        >
          这里是首页

        </BasePage>
      }
    }
  }
})
