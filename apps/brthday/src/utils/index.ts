// 工具
import Taro from '@tarojs/taro'
import { customRef, Ref } from 'vue'
import { phoneLoginType } from '../api/user/type'
import { stores } from '../api'
import { useGlobalStore } from '../stores'
import { reLaunchToContainer } from '../router'

const store = useGlobalStore()

// 单位换算
export function withUnit(value: number) {
  return Taro.pxTransform(value)
}

/**
 * 创建一个防抖的ref,抄
 * @param value
 * @param delay
 * import { useDebouncedRef } from './debouncedRef'
 * const text = useDebouncedRef('hello')
 */
export function useDebouncedRef<T>(value: T, delay = 200): Ref<T> {
  let timeoutId: NodeJS.Timeout | null = null
  return customRef<T>((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: T) {
        clearTimeout(timeoutId!)
        timeoutId = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
export const onBack = () => {
  const pages = Taro.getCurrentPages().filter(item => item.route !== 'pages/launch')
  if (pages.length > 1) {
    Taro.navigateBack({
      delta: 1,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
        reLaunchToContainer()
      }
    })
  } else {
    reLaunchToContainer()
  }
}

// 选择商铺逻辑,多个页面用
export const getItemChooseStore = async (item: phoneLoginType) => {
  Taro.setStorageSync('storeId', item.id)
  store.updateSelectedStore(item.id)
  // 获取信息并存到本地
  await stores
    .getMerchantInfo({
      grant_type: 'merchant_direct',
      scope: 'cs',
      direct_token: item?.directToken
    })
    .then(res => {
      if (res.access_token) {
        store.updateStoreInfo(res)
        Taro.setStorageSync('storeData', res)
      }
      reLaunchToContainer()
    })
    .catch(e => {
      // 弹窗
      Taro.showToast({
        title: e.response.data.error_description || '获取商家信息错误',
        icon: 'none'
      })
    })
}
