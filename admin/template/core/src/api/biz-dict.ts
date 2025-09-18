import request, { type ResponseBody } from './request'
import { useUserStore } from '@kacat/core'

let env_merchantId = ''

try {
  env_merchantId = import.meta.env.VITE_APP_MERCHANT_ID
} catch (err) {
  err
}

export interface IBusinessDictionaryOptions {
  /**
   * 字典码，创建子字典时传父字典的 code
   */
  code: string
  /**
   * 字典值，顶级菜单时固定为 -1
   */
  dictKey: string | number
  /**
   * 字典名称
   */
  dictValue: string
  /**
   * id，创建时不传值或传 0
   */
  id?: string | number
  /**
   * 父字典 id，创建顶级字典时不传或传 0
   */
  parentId?: string | number
  /**
   * 备注
   */
  remark?: string
  /**
   * 排序
   */
  sort: number

  [property: string]: any
}

/** 提交业务字典 */
export const $createBusinessDictionary = (options: IBusinessDictionaryOptions) => {
  return request({
    url: '/blade-system/dict-biz/submit',
    method: 'POST',
    data: options
  })
}

/** 删除业务字典，多个id之间,分隔 */
export const $removeBusinessDictionary = (id: string) => {
  return request({
    url: '/blade-system/dict-biz/remove',
    method: 'POST',
    params: {
      ids: id
    }
  })
}

export interface IBizDict {
  /**
   * 字典码
   */
  code?: string
  /**
   * 字典值
   */
  dictKey?: string
  /**
   * 字典名称
   */
  dictValue?: string
  hasChildren?: boolean
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否封存
   */
  isSealed?: number
  /**
   * 父字典 id
   */
  parentId?: string
  parentName?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 租户 id
   */
  tenantId?: string

  [property: string]: any
}

/**
 * 尝试获取商户ID并执行回调函数，如果获取不到会重试
 * @param callback 获取到商户ID后要执行的回调函数
 * @param maxRetries 最大重试次数
 * @param retryInterval 重试间隔时间(ms)
 * @returns Promise
 */
export const withMerchantId = <T>(
  callback: (merchantId: string) => Promise<T>,
  maxRetries = 3,
  retryInterval = 500
): Promise<T> => {
  return new Promise((resolve, reject) => {
    // 尝试获取 merchant_id 并执行回调，最多重试指定次数
    const tryRequest = (retryCount = 0) => {
      if (retryCount >= maxRetries) {
        return reject(new Error('获取 merchant_id 失败，超过最大重试次数'))
      }
      try {
        const store = useUserStore()
        const merchantId = store?.userInfo?.merchantId ?? env_merchantId
        // 严格检查 merchantId 是否存在且不为 undefined
        if (merchantId) {
          // 成功获取 merchant_id，执行回调
          return callback(merchantId).then(resolve).catch(reject)
        }
      } catch (storeError) {
        // store 未初始化，忽略异常
      }

      // 没有获取到有效的 merchant_id，延时后重试
      console.log(`没有获取到有效的 merchant_id，${retryCount + 1}/${maxRetries} 次重试中...`)
      setTimeout(() => tryRequest(retryCount + 1), retryInterval)
    }

    // 开始第一次尝试
    tryRequest()
  })
}

// 如果用try catch获取 merchant_id ,大概率获取不到,但是从 useUserStore 拿,控制台会报错,项目初始化之前调用了pinia
/** 获取业务字典 */
export const $getBusinessDictionary = (code: string): ResponseBody<IBizDict[]> => {
  return withMerchantId((merchantId) => {
    return request({
      url: '/blade-system/dict-biz/dictionary',
      params: {
        code,
        size: 30000,
        merchant_id: merchantId
      }
    })
  })
}

/** 获取业务字典 */
export const $getClientBusinessDictionary = (code: string): ResponseBody<IBizDict[]> => {
  return withMerchantId((merchantId) => {
    return request({
      url: '/kacat-cornerstone-system/dict-biz/dictionary',
      params: {
        code,
        size: 30000,
        merchant_id: merchantId
      }
    })
  })
}
