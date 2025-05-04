import request from '../request'
import { phoneCaptchaType, phoneLoginType, smsResponseType } from './type'

// 验证码登陆的数据
export interface captchaLoginApi {
  success: boolean
  data: phoneLoginType[]
  msg: string
}

export default {
  // 发送短信验证码
  async postCaptcha(data: any): Promise<smsResponseType> {
    return request({
      url: '/kacat-cornerstone-system/sms/validate',
      method: 'post',
      data
    })
  },

  // 手机号,验证码登录
  async loginByCaptcha(data: phoneCaptchaType): Promise<captchaLoginApi> {
    return request({
      url: '/kacat-cornerstone-system/auth/merchant/sms',
      method: 'post',
      data
    })
  },
  // 一键登录请求接口
  async loginBuOneButton(data: { code: string; appid: string }) {
    return request({
      url: '/kacat-cornerstone-system/auth/merchant/miniapp',
      method: 'post',
      data
    })
  },
  // 绑定用户手机号
  async bindPhone(data: { appid: string; openid: string; code: string }) {
    return request({
      // url: '/kacat-cornerstone-system/auth/merchant/bind',
      url: '/kacat-cornerstone-wechat-wap/m/direct/miniapp/bind',
      method: 'post',
      data
    })
  },
  // 查询是否支持密码登录,不支持则跳转密码设置页面
  async checkPasswordLogin(phone: string) {
    return request({
      url: '/kacat-cornerstone-system/auth/account/password-auth?phone=' + phone,
      method: 'get'
    })
  },
  // 手机号密码登录
  async loginByPassword(data: { phone: string; password: string }) {
    return request({
      url: '/kacat-cornerstone-system/auth/merchant/account',
      method: 'post',
      data
    })
  },
  // 重置密码
  async resetPassword(data: { phone: string; newPassword: string; id: string; value: string }) {
    return request({
      url: '/kacat-cornerstone-system/auth/account/password-reset',
      method: 'post',
      data
    })
  }
}
