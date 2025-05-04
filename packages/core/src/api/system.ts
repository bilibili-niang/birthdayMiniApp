import dayjs from 'dayjs'
import request from './request'
import { RequestPagination } from './request'
import { useAppStore } from '../stores'

/** 获取服务器时间 */
export const getServerTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: dayjs().format('YYYY-MM-DD HH:mm:ss')
        // data: dayjs(new Date().getTime() + 6 * 1000).format('YYYY-MM-DD HH:mm:ss')
      })
    })
  })
  return request({
    url: '/getTime',
    method: 'get',
    timeout: 3000
  })
}

/** 获取业务字典 */
export const $getBizDict = (params: RequestPagination<{ code: string }>) => {
  return request({
    url: '/kacat-cornerstone-system/dict-biz/dictionary',
    params: {
      ...params,
      merchant_id: useAppStore().merchantId
    },
    withMerchantId: true
  })
}

export const $getOpenAppId = () => {
  return request({
    url: '/kacat-cornerstone-wechat-wap/m/open/offiaccount/appid',
    method: 'get',
    params: {
      merchantId: useAppStore().merchantId,
      scene: process.env.TARO_APP_SCENE
    }
  })
}

export const $getShortLinkContent = (code: string) => {
  return request<string>({
    url: `/kacat-cornerstone-system/short-url/origin/${code}`
  })
}
