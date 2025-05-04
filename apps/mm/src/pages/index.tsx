import { ref, defineComponent } from 'vue'
import LoginSelector from './loginSelector'
import Taro from '@tarojs/taro'
import { reLaunchToIndex } from '../router'
import { Spin } from '@kacat/core'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const isLoading = ref(true)
    const init = async () => {
      const localStoreData = Taro.getStorageSync('storeData')
      if (localStoreData) {
        reLaunchToIndex()
      } else {
        isLoading.value = false
      }
    }

    // 初始化页面逻辑
    init()
    return () => {
      if (isLoading.value) {
        return (
          <div class="loadingContainer">
            <Spin />
          </div>
        )
      } else {
        return <LoginSelector />
      }
    }
  }
})
