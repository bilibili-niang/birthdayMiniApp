import { useAppStore } from '../../stores'
import request from '../request'

/**
 * 修改用户个人资料
 * @param params.nickname - 昵称
 * @param params.avatar - 头像链接
 * @returns
 */
export const requestUpdateUserProfile = (params: { nickname: string; avatar: string }) => {
  return request({
    url: 'kacat-cornerstone-auth-wap/m/me/updateUserInfo',
    method: 'put',
    data: {
      name: params.nickname,
      avatar: params.avatar
    }
  })
}

/** 获取微信绑定 openid */
export const $getWechatOpenId = (appid: string) => {
  return request({
    url: `/kacat-cornerstone-wechat-wap/m/wechat/${appid}/userOpenid`,
    method: 'get'
  })
}

/** 绑定微信账户 */
export const $bindWechat = (appid: string, code: string) => {
  return request({
    url: useAppStore().isDirectWeapp
      ? 'kacat-cornerstone-wechat-wap/m/direct/miniapp/authBind'
      : 'kacat-cornerstone-wechat-wap/m/open/miniapp/authBind',
    method: 'post',
    data: {
      appid,
      code
    }
  })
}
