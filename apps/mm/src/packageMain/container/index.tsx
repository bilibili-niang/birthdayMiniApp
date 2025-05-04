import './style.scss'
import { defineComponent, onMounted, ref } from 'vue'
import { BasePage, Spin } from '@kacat/core'
import CustomTabbar from '../../components/common/customTabbar'
import { useGlobalStore } from '../../stores'
import Store from 'src/pages/store/index'
import Mine from 'src/pages/mine/index'
import { useUserStore } from '@kacat/core'

definePageConfig({
  navigationStyle: 'custom',
  disableScroll: true,
  navigationBarTitleText: 'container'
})

export default defineComponent({
  name: 'Container',
  setup() {
    const coreStore = useUserStore()
    const store = useGlobalStore()
    const isLoading = ref(false)
    const init = async () => {
      store.checkData()
      isLoading.value = false
      coreStore.getUserLocation()
    }

    onMounted(() => init())

    return () => {
      return (
        <BasePage
          navigator={{
            title: '',
            immersive: true,
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="#F1F3FB"
        >
          {isLoading.value && (
            <>
              <div class="loading-skeleton">
                <Spin />
              </div>
            </>
          )}
          {!isLoading.value && <>{store.$state.currentIndex === '0' && <Store />}</>}
          {!isLoading.value && <>{store.$state.currentIndex === '1' && <Mine />}</>}
          <img
            src="https://pic.imgdb.cn/item/662e1c560ea9cb1403579e43.png"
            class="hidePicture"
            alt="提前加载,在其他页面会用上"
          />
          <CustomTabbar />
        </BasePage>
      )
    }
  }
})
