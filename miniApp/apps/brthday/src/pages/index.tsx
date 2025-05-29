import './index.scss'
import { defineComponent, ref } from 'vue'
import { BasePage, Spin, TabBar } from '@kacat/core'
import useAction from '../hooks/useAction'
import { storeToRefs } from 'pinia'
import * as stores from '../stores'
import { useGlobalStore } from '../stores'
import { homeKey, minePage, pageConfig } from '../constants/pages'
import Mine from '../packageMain/mine/index'
import Home from '../packageMain/home/index'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'IndexPage',
  setup() {
    console.log('stores', stores)
    console.log('userStore', userStore)
    const appStore = useGlobalStore()

    const { tabs, currentTab, loadedTab } = storeToRefs(appStore)
    const isLoading = ref(true)
    // const userStore = userStore()
    // const { loginStatus } = storeToRefs(userStore)
    const init = () => {

      // console.log('loginStatus', loginStatus)

      setTimeout(() => {
        isLoading.value = false
      }, 700)
    }
    const onTabChange = (key: string, keyIndex: number, item: any) => {
      if (item?.action && item?.actionEnable) {
        useAction(item.action)
        return void 0
      } else {
        appStore.toggleTab(key)
      }
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
          backgroundColor="rgba(255, 255, 255, 1)"
        >
          这里是首页
          {currentTab.value == minePage && <Mine/>}
          {currentTab.value == homeKey && <Home/>}
          <TabBar
            tabs={pageConfig}
            color="black"
            current={currentTab.value}
            onChange={onTabChange}
            onAction={useAction}
          />
        </BasePage>
      }
    }
  }
})
