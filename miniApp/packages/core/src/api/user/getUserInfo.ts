import Taro from '@tarojs/taro'
import request, { PaginationData } from '../request'
import { ResponseBody } from '../types'

export interface UserInfo {
  /**
   * 账号
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  id: string
  /**
   * 名称
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 真实名称
   */
  realName: string
  /**
   * 状态 0 禁用、1 启用，默认 1
   */
  status: 0 | 1
}

const getUserInfo = (): ResponseBody<UserInfo> => {
  return request({
    url: '/kacat-cornerstone-auth-wap/m/me',
    method: 'GET',
    headers: {
      'Blade-Auth': Taro.getStorageSync('Blade-Auth')
    }
  })
}

export default getUserInfo

/** 获取个人资料 */
export const $getUserProfile = () => {
  return request({
    url: '/kacat-cornerstone-auth-wap/m/userInfo',
    withMerchantId: true,
    withScene: true
  })
}

/** 更新个人资料 */
export const $updateUserProfile = (payload: Record<string, any>) => {
  return request({
    url: '/kacat-cornerstone-auth-wap/m/userInfo',
    method: 'put',
    withMerchantId: true,
    withScene: true,
    data: {
      infoContent: payload
    }
  })
}

/** 获取个人资料字段配置 */
export const $getUserProfileSettingsConfig = () => {
  return request<IUserProfileSettingsConfig>({
    url: '/kacat-cornerstone-auth-wap/m/userInfoSetting',
    withMerchantId: true,
    withScene: true
  })
}

export interface IUserProfileSettingsConfig {
  status: number
  content: {
    id: string
    key: string
    modifiable: number
    name: string
    required: number
    scene: string
    sort: number
    status: number
  }[]
}
