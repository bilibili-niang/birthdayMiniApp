import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import Taro from '@tarojs/taro'
import { goPageIndex } from '../router'
import { phoneLoginType, storeDataType } from '../api/user/type'
import { oneStoreType } from './types'
import { goodsDataType } from '../api/stores/type'
import store from '../api/stores/index'

export const useGlobalStore = defineStore('store-global', () => {
  const appid = 'wxd6da8519cfe92dd8'

  // 存储用来展示的用户信息,每个用户信息在商户里
  const userInfo = ref<phoneLoginType[] | null>(null)

  // 用户选择的商户 merchantId !!
  const selectedStore = shallowRef<string | null>(null)

  // 商户的二级信息,请求卡券信息,核销卡券需要用到
  const storeInfo = shallowRef<storeDataType | null>(null)

  // 当前选择的tabBar
  const currentIndex = ref<string>('0')

  // 存储用户信息
  const updateUserInfo = (userObj: phoneLoginType[]) => {
    userInfo.value = userObj
  }
  // 要二次核销的商品信息
  const confirmGoodsInfo = ref<goodsDataType>({} as goodsDataType)
  // 核销选择的一家店铺
  const confirmStore = ref<oneStoreType>({} as oneStoreType)

  // 退出登录
  const logout = () => {
    userInfo.value = null
    // 清除token
    Taro.clearStorageSync()
    goPageIndex()
  }

  // 更新已选择的商户id
  const updateSelectedStore = (item: string) => {
    selectedStore.value = item
  }

  // 更新/写入商户的二级信息
  const updateStoreInfo = (obj: storeDataType) => {
    storeInfo.value = obj
  }

  // 对当前store中的信息检查,确保数据正确
  /**
   * 检查 userInfo , selectedStore 这两个获取当前用户展示的信息,头像,昵称
   * 检查 storeInfo 用来核销卡券
   */
  const checkData = () => {
    // 一次性获取所有本地存储项，避免重复调用 Taro.getStorageSync
    const storageItems = {
      token: Taro.getStorageSync('token') as phoneLoginType[] | null,
      storeId: Taro.getStorageSync('storeId') as string | null,
      storeData: Taro.getStorageSync('storeData') as storeDataType | null
    }

    // 检查并更新各状态值
    if (!userInfo.value && storageItems.token) {
      userInfo.value = storageItems.token
    }
    if (!selectedStore.value && storageItems.storeId) {
      selectedStore.value = storageItems.storeId
    }
    if (!storeInfo.value && storageItems.storeData) {
      storeInfo.value = storageItems.storeData
    }

    // 将Blade-Auth的验证信息写入local,核销记录页面需要用
    // 到这里,storeInfo数据一定是完整的
    storeInfo.value?.access_token && Taro.setStorageSync('Blade-Auth', storeInfo.value?.access_token)
    // 若仍有状态值为空，则清空本地存储并跳转至登录页
    if (!userInfo.value || !selectedStore.value || !storeInfo.value) {
      Taro.clearStorageSync()
      console.log('回去登录')
      goPageIndex()
      return false
    } else {
      return true
    }
  }

  // 更新tabbar
  const updateTabIndex = (index: string) => {
    currentIndex.value = index
  }
  // 更新商品信息:
  const updateGoodsInfo = (obj: any) => {
    confirmGoodsInfo.value = obj
  }
  // 更新核销选择的店铺
  const updateConfirmStore = (obj: any) => {
    confirmStore.value = obj
  }
  // 用户点击了更换店铺,移除本地存储的店铺信息,再请求最新的店铺信息
  // ai的,可能会崩
  const updateUserinfoByRemote = async () => {
    try {
      const res: any = await store.getStoreList()
      if (res.success) {
        Taro.setStorageSync('token', res.data)
        updateUserInfo(res.data)
        // 返回获取到的数据给调用方
        return res
      } else {
        // 这里可能会失败，但是不要紧
        console.log(res)
      }
    } catch (e) {
      // 这里也可能会失败，但是不要紧
      console.log(e)
    }
  }

  return {
    userInfo,
    selectedStore,
    storeInfo,
    currentIndex,
    confirmGoodsInfo,
    updateUserInfo,
    confirmStore,
    appid,
    updateConfirmStore,
    logout,
    updateSelectedStore,
    updateStoreInfo,
    checkData,
    updateTabIndex,
    updateGoodsInfo,
    updateUserinfoByRemote
  }
})

