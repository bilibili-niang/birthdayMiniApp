import request, { getMerchantId } from './request'
import { useAppStore } from '../stores'
import { ref } from 'vue'

export * from './system'
export * from './pay'
export * from './user'
export * from './other'
export * from './coupon'

export const $getMerchantId = appId => {
  return request({
    url: `/kacat-cornerstone-wechat-wap/m/open/miniapp/${appId}/merchantId`
  })
}
// 获取小程序码
export const $getWxacodeUnlimit = (config: { page: string; scene: string; env: string }) => {
  // 直连 / 开放
  const type = useAppStore().isDirectWeapp ? 'direct' : 'open'
  return request({
    url: `/kacat-cornerstone-wechat-wap/m/${type}/miniapp/${useAppStore().appId}/qrcode`,
    params: {
      ...config
    },
    withMerchantId: true
  })
}

/** 获取微信公众号jssdk配置参数 */
export const $getWechatJsSDKConfig = () => {
  let appId: string = ''
  try {
    appId = useAppStore().appId!
  } catch (err) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $getWechatJsSDKConfig().then(resolve).catch(reject)
      }, 100)
    })
  }

  const type = useAppStore().isDirectWeapp ? 'direct' : 'open'

  const url = window.location.href.split('#')[0]

  console.log('获取wx参数链接：', url)

  const _url = [url.split('?')[0], encodeURIComponent(url.split('?')[1])].filter(i => !!i).join('?')

  return request({
    url: `/kacat-cornerstone-wechat-wap/m/${type}/offiaccount/${appId}/jsconfig`,
    method: 'get',
    withMerchantId: true,
    params: {
      url: _url
    }
  })
}

let cacheCityData: any = null

export const $getCities = async () => {
  if (cacheCityData) {
    return Promise.resolve(cacheCityData)
  }
  if (process.env.TARO_ENV === 'h5' && process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      import('../constants/cities.json')
        .then(res => {
          resolve(res.default)
        })
        .catch(reject)
    })
  }
  return request({
    url: 'https://dev-cdn.kacat.cn/upload/4d10704b373d48203c83fa830d4780d5.json',
    method: 'get'
  }).then(res => {
    cacheCityData = res
    return res
  })
}

export const $getIndustry = async () => {
  if (standardIndustryData.value?.length > 0) {
    return Promise.resolve(standardIndustryData.value)
  }
  if (process.env.TARO_ENV === 'h5' && process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      import('../constants/industries.json')
        .then(res => {
          standardIndustryData.value = res.default as unknown as IndustryNode[]
          resolve(res.default)
        })
        .catch(reject)
    })
  }
  return request({
    url: 'https://dev-cdn.kacat.cn/upload/facd14a057ca74abd08ccb84bf28cc97.json',
    method: 'get'
  }).then(res => {
    standardIndustryData.value = res as unknown as IndustryNode[]
    return res
  })
}

interface IndustryNode {
  code: string
  name: string
  children?: IndustryNode[]
}

/** 标准行业数据 */
export const standardIndustryData = ref<IndustryNode[]>([])

export const getIndustryName = (code: string) => {
  let industryPath = (code || '').split(',')
  if (industryPath.length === 1) {
    const list: string[] = []
    for (let i = 2; i <= code.length; i++) {
      list.push(code.slice(0, i))
    }
    const prefix = standardIndustryData.value.find(item => item.children?.find(child => child.code === list[0]))?.code
    industryPath = [prefix!, ...list]
  }

  try {
    let target: IndustryNode | undefined = { code: '', name: '', children: standardIndustryData.value }
    while (industryPath.length > 0) {
      const k = industryPath.shift()
      target = target?.children?.find(item => item.code === k)
    }
    return target?.name
  } catch (err) {
    console.log(err, standardIndustryData.value)
    return ''
  }
}
