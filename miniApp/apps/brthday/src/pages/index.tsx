import './index.scss'
import { ref, defineComponent } from 'vue'
import { BasePage, Spin, TabBar } from '@kacat/core'
import useAction from '../hooks/useAction'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../stores'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const appStore = useGlobalStore()

    const { tabs, currentTab, loadedTab } = storeToRefs(appStore)
    const isLoading = ref(true)
    const init = () => {
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    }
    const onTabChange = (key: string, keyIndex: number, item: any) => {
      console.log('key',key)
      if (item?.action && item?.actionEnable) {
        useAction(item.action)
        return
      } else {
        console.log('key')
        console.log(key)
        appStore.toggleTab(key)
      }
      console.log('currentTab.value', currentTab.value)
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
          currentTab:
          {currentTab.value}
          <TabBar
            tabs={[
              {
                key: '0',
                text: '联系人',
                icon: 'https://pic1.imgdb.cn/item/682371c558cb8da5c8f0ba0a.png',
                activeIcon: '',
                actionEnable: true
              },
              {
                key: 'home',
                text: '我的',
                icon: 'https://pic1.imgdb.cn/item/682371eb58cb8da5c8f0ba1e.png',
                activeIcon: '',
                actionEnable: true
              }
            ]}
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
