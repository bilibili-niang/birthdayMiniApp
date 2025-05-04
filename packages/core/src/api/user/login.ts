import { useAppStore } from '../../stores'
import request from '../request'
import urlParse from 'url-parse'

/** 微信授权登录 */
export const wxAuthLogin = (code: string) => {
  return request({
    url: useAppStore().isDirectWeapp
      ? '/kacat-cornerstone-wechat-wap/m/direct/miniapp/login'
      : '/kacat-cornerstone-wechat-wap/m/open/miniapp/login',
    method: 'POST',
    ignoreLogin: true,
    data: {
      appid: useAppStore().appId,
      code
    }
  })
}

/** 绑定微信号 */
export const wxBind = (openId: string, code: string) => {
  return request({
    url: useAppStore().isDirectWeapp
      ? '/kacat-cornerstone-wechat-wap/m/direct/miniapp/bind'
      : '/kacat-cornerstone-wechat-wap/m/open/miniapp/bind',
    method: 'POST',
    ignoreLogin: true,
    data: {
      appid: useAppStore().appId,
      openid: openId,
      code
    }
  })
}

/** 微信授权后使用 token 直接登录 */
export const loginWithToken = (token: string) => {
  const appStore = useAppStore()
  return request({
    url: '/blade-auth/oauth/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic bTptX3NlY3JldA=='
    },
    ignoreLogin: true,
    data: {
      /** 授权类型，直接登录时固定为 direct */
      grant_type: 'direct',
      /** 授权范围，前台接口时固定为 m */
      scope: 'm',
      scene: process.env.TARO_APP_SCENE,
      /** 商户id */
      merchantId: appStore.merchantId,
      merchant_id: appStore.merchantId,
      /** 直接登录码 */
      direct_token: token
    }
  })
}

export const WX_OAUTH_KEY = 'wx_oauth'

/** 获取公众号授权链接 */
export const $getWxOauthURL = (redirectUrl: string, scope = 'snsapi_base') => {
  const type = process.env.TARO_APP_DIRECT_WEAPP === 'true' ? 'direct' : 'open'
  const appid = useAppStore().appId

  const url = urlParse(redirectUrl, true)
  url.query[WX_OAUTH_KEY] = 'true'

  return request({
    url: `/kacat-cornerstone-wechat-wap/m/${type}/offiaccount/${appid}/authorizerUrl`,
    method: 'get',
    params: {
      redirectUrl: encodeURIComponent(url.toString()),
      scope
    }
  })
}

/** 微信公众号授权登录 */
export const $postWxOauthLogin = (code: string) => {
  const type = process.env.TARO_APP_DIRECT_WEAPP === 'true' ? 'direct' : 'open'
  const appid = useAppStore().appId
  return request<{
    /**
     * 状态
     *
     * 1：获取成功，前往登录
     *
     * 2：未绑定，请先进行绑定
     */
    status: 1 | 2
    openid: string
    /** 直接登录码，使用 loginWithToken 进行登录 */
    directToken: string
    msg: string
  }>({
    url: `/kacat-cornerstone-wechat-wap/m/${type}/offiaccount/login`,
    method: 'post',
    data: {
      appid,
      code
    }
  })
}

/** 微信公众号授权绑定手机号 */
export const $postWxOauthBind = (options: { openid: string; phone: string; smsId: string; value: string }) => {
  const type = process.env.TARO_APP_DIRECT_WEAPP === 'true' ? 'direct' : 'open'
  const appid = useAppStore().appId
  return request({
    url: `/kacat-cornerstone-wechat-wap/m/${type}/offiaccount/bind`,
    method: 'post',
    data: {
      appid,
      ...options
    }
  })
}
