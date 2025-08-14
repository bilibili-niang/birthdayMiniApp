import { request } from '@/api/request'
import { TRANSLATE_APP_KEY, weatherKeyForGaode } from '@/constant'

export const $transform = (value: string) => {
  const salt = (new Date).getTime()

  const curtime = Math.round(new Date().getTime() / 1000)

  return request({
    url: 'https://openapi.youdao.com/api',
    method: 'post',
    data: {
      q: value,
      from: 'zh-CHS',
      to: 'en',
      appKey: TRANSLATE_APP_KEY,
      key: weatherKeyForGaode,
      signType: 'v3',
      curtime: Math.round(new Date().getTime() / 1000),
      salt
    }
  })
}