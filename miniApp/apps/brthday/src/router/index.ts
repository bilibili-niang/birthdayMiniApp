import Taro from '@tarojs/taro'
import { useGlobalStore } from '../stores'
import {
  buildUrl,
} from '@kacat/core'

/** 返回主界面（Tab栏页） */
export const backToIndex = (tabKey?: string, force = false) => {
  if (tabKey) {
    useGlobalStore().toggleTab(tabKey)
  }
  const url = buildUrl('/packageMain/index', {
    tabKey: tabKey
  })
  if (process.env.TARO_ENV !== 'h5') {
    if (force) {
      Taro.reLaunch({
        url: url
      })
      return
    }
    try {
      Taro.navigateBack({
        delta: 100,
        fail: err => {
          console.log(err.errMsg)
          Taro.redirectTo({
            url: url
          })
        }
      })
    } catch (err) {}
  } else {
    // FIXME 这里可能会造成首页重新渲染？
    Taro.redirectTo({
      url: url
    })
  }
}

// reLaunch 商铺列表页面
export const reLaunchToStoreSelector = () => {
  Taro.reLaunch({
    url: '/packageMain/index'
  })
}

// 回到登录页
export const goPageIndex = () => {
  Taro.reLaunch({
    url: '/pages/index'
  })
}
// 重启到首页
export const reLaunchToContainer = (id?: string) => {
  Taro.reLaunch({
    url: `/packageMain/container/index?id=${id}`
  })
}

// 跳转页面容器
export const jumpToPageContainer = (id?: string) => {
  Taro.navigateTo({
    url: `/packageMain/container/index?id=${id}`
  })
}
/**
 * 跳转核销页面,可能传一个参数,也可能不传
 * @param id {string | null}
 * 传入id则为扫码进入,不传则为输码核销
 */
export const jumpToWriteOff = (id?: string) => {
  if (id) {
    Taro.navigateTo({
      url: `/packageMain/writeOff/index?id=${id}&type=scan`
    })
  } else {
    Taro.navigateTo({
      url: '/packageMain/writeOff/index?type=input'
    })
  }
}

/**
 * 跳转核销记录
 */
export const goTOWriteOffPage = () => {
  Taro.navigateTo({
    url: '/packageMain/writeOffRecord/index'
  })
}

/**
 * 跳转校验成功页面
 */
export const goToSuccessPage = (id?: string) => {
  if (!id) {
    return void 0
  } else {
    Taro.navigateTo({
      url: `/packageB/confirmSuccess/index?id=${id}`
    })
  }
}

// 前往密码重置
export const goToResetPassword = (phone: string | null) => {
  Taro.navigateTo({
    url: '/packageB/passwordReset/index?phone=' + phone
  })
}
