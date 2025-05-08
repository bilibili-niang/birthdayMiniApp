import './index.scss'
import { ref, defineComponent } from 'vue'
import { BasePage, Spin, TabBar } from '@kacat/core'
import useAction from '../hooks/useAction'

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
    const onTabChange = (key: string, keyIndex: number, item: any) => {
      if (item?.action && item?.actionEnable) {
        useAction(item.action)
        return
      } else {
        console.log(key)
      }
    }
    const currentTab = ref(0)

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
            immersive: true,
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(241, 243, 251, 1)"
        >
          这里是首页
          <TabBar
            tabs={[
              {
                key: 0,
                text: '联系人',
                icon: 'indexHome',
                activeIcon: '',
                actionEnable: true
              },
              {
                key: 1,
                text: '我的',
                icon: 'a-accountcircle',
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
