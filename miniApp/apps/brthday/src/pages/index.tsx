import './index.scss'
import { defineComponent, ref } from 'vue'
import { BasePage, Spin, TabBar, useModal } from '@kacat/core'
import useAction from '../hooks/useAction'
import { storeToRefs } from 'pinia'
import { useGlobalStore, userStore } from '../stores'
import { homeKey, minePage, pageConfig } from '../constants/pages'
import Mine from '../packageMain/mine/index'
import Home from '../packageMain/home/index'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'IndexPage',
  setup() {

    const appStoreEle = useGlobalStore()
    const userStoreEle = userStore()
    const { loginStatus } = (userStoreEle)
    const login = () => {
      console.log('loginStatus.value', loginStatus.value)
      if (!loginStatus.value) {
        useModal({
          title: '请登录',
          height: '100%',
          closeable: false,
          maskCloseableValue: false,
          onClose: () => 0,
          content: () => {
            return <div class="login-content">
              登录一下
            </div>
          }
        })
      }
    }

    const { tabs, currentTab, loadedTab } = storeToRefs(appStoreEle)
    const isLoading = ref(true)
    const init = () => {
      setTimeout(() => {
        login()
        isLoading.value = false
      }, 700)
    }
    const onTabChange = (key: string, keyIndex: number, item: any) => {
      console.log(loginStatus)
      if (item?.action && item?.actionEnable) {
        useAction(item.action)
        return void 0
      } else {
        appStoreEle.toggleTab(key)
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
          onClick={() => {
            login()
          }}
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
