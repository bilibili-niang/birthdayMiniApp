import Taro from '@tarojs/taro'
import axios, { AxiosError } from 'axios'
import { AuthorStr } from './config'

export type ResponseData<D> = {
  code: number
  success: boolean
  data: D
  msg: string
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    /** 不要求登录 */
    ignoreLogin?: boolean
    /** 不携带 JWT Token */
    noToken?: boolean
    // 是否会用到不同的 ContentType
    ContentType?: string
    // 是否需要携带经纬度
    withLocation?: boolean
  }
}
export const REQUEST_DOMAIN = process.env.TARO_APP_REQUEST_BASE_URL


export const getAuthHeaders = () => {
  return {
    Authorization: AuthorStr
  }
}

const service = axios.create({
  baseURL: REQUEST_DOMAIN,
  timeout: 30000, // 请求超时时间
  headers: {
    ...getAuthHeaders()
  }
})

const err = (error: AxiosError) => {
  if (error.response?.status === 401) {
    Taro.showToast({
      title: '登录过期',
      icon: 'error'
    })
    setTimeout(() => {
    }, 1000)
  }
  return Promise.reject(error)
}

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use(async config => {
  if (!config.noToken) {
    config.headers['Blade-Auth'] = Taro.getStorageSync('Blade-Auth')
  } else {
    // 如果不要带 Token
    config.headers['Blade-Auth'] = null
    delete config.headers['Blade-Auth']
  }

  config.params = config.params ?? {}
  // 部分接口使用不同的 ContentType
  if (config.ContentType) {
    config.headers['Content-Type'] = config.ContentType
  }
  return config
})

/**
 * @description 响应收到后的拦截器
 * @returns  payload
 */
service.interceptors.response.use(async response => {
  // await sleep(500)
  return Promise.resolve(response.data)
}, err)

export default service
