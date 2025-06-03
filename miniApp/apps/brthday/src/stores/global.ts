import { defineStore } from 'pinia'
import { useTabBar } from '@kacat/core'
import { computed, ref } from 'vue'
import pkg from '../../package.json'
import Taro from '@tarojs/taro'
import { uuid } from '@kacat/utils'

const useGlobalStore = defineStore('store-global', () => {
  /** 当前版本号，取自 package.json "version" */
  const version = pkg.version

  /** 启动页完成加载后默认重定向路由 */
  const launchRedirect = ref('/packageMain/index')
  /** 设置启动页重定向路由（可能通过分享等途径进入，需要返回该页面） */
  const setLaunchRedirect = (url: string) => {
    // 避免卡在启动页无法重定向
    if (url.includes('pages/launch')) return void 0
    launchRedirect.value = url.startsWith('/') ? url : `/${url}`
  }
  /** 重定向到入口页（最初打开页面的链接） */
  const redirectToLaunchRedirect = () => {
    Taro.redirectTo({
      url: launchRedirect.value
    })
  }

  /** 首页 Tab 配置 */
  const indexTabConfig = ref()
  const getIndexTabs = () => {
    console.log('获取导航栏配置')
  }

  /**
   * TabBar 切换控制
   * 存在 action 则说明是跳转function
   * */
  const { tabs, currentTab, loadedTab, toggleTab } = useTabBar({
    // const { tabs, currentTab, loadedTab } = useTabBar({
    current: 'home',
    tabs: computed(
      () =>
        indexTabConfig.value?.list.map(item => {
          if (!item) return {}
          return {
            key: item.page?.id || uuid(),
            text: item.text,
            icon: item.icon.normal?.url,
            activeIcon: item.icon.active?.url,
            action: item?.action || false,
            actionEnable: item?.actionEnable
          }
        }) ?? []
    )
  })

  return {
    version,
    launchRedirect,
    setLaunchRedirect,
    redirectToLaunchRedirect,
    getIndexTabs,
    tabs,
    currentTab,
    loadedTab,
    toggleTab
  }
})

export default useGlobalStore
