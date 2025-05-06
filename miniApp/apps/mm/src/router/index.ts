import Taro from '@tarojs/taro'

/**
 * 跳转登录页
 * @param type
 * @example
 * password 密码登录
 * phone 手机验证码登录
 */
export const goToLogin = (type?: 'phone' | 'password') => {
  Taro.navigateTo({
    url: `/packageMain/login/index?type=${type || 'phone'}`
  })
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
// reluanch 首页
export const reLaunchToIndex = () => {
  Taro.reLaunch({
    url: '/packageMain/container/index'
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
/**
 * 选择店铺之后的核销跳转
 */
export const goConfirmSecond = () => {
  Taro.navigateTo({
    url: '/packageB/confirmSecond/index'
  })
}

// 前往密码重置
export const goToResetPassword = (phone: string | null) => {
  Taro.navigateTo({
    url: '/packageB/passwordReset/index?phone=' + phone
  })
}

// 微店的商户选择
export const goToMerchantSelector = () => {
  Taro.navigateTo({
    url: '/packageMain/storeSelector/index'
  })
}

// TODO 运动馆商户的选择
