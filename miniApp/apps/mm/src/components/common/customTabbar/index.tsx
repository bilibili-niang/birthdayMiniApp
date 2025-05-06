// 商家核销项目才用的tabBar
import './style.scss'
import { TabBar } from '@kacat/core'
import { defineComponent } from 'vue'
import { useGlobalStore } from '../../../stores'

export default defineComponent({
  name: 'CustomTabbar',
  setup() {
    const store = useGlobalStore()
    const tabBarChange = (key: string) => {
      store.updateTabIndex(key)
    }

    return () => {
      return (
        <div class="customTabbar w-percent100">
          <TabBar
            tabs={[
              {
                key: '0',
                text: '工作台',
                icon: 'https://pic.imgdb.cn/item/664724abd9c307b7e91ba15e.png',
                activeIcon: 'https://pic.imgdb.cn/item/664724b8d9c307b7e91bafaa.png'
              },
              {
                key: '1',
                text: '我的',
                icon: 'https://pic.imgdb.cn/item/664724c5d9c307b7e91bbc6b.png',
                activeIcon: 'https://pic.imgdb.cn/item/664724d0d9c307b7e91bc857.png'
              }
            ]}
            onChange={tabBarChange}
            current={store.$state.currentIndex}
          ></TabBar>
        </div>
      )
    }
  }
})
