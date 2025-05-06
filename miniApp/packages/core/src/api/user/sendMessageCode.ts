import { useAppStore } from '../../stores'
import request from '../request'
import { ResponseBody } from '../types'

let useMerchantSms = false

try {
  useMerchantSms = process.env.TARO_APP_USE_MERCHANT_SMS === 'true'
} catch (err) {}

/**
 * 发送短信验证码
 * @param phone 手机号
 * @returns
 */
export const sendMessageCode = (
  phone: string
): ResponseBody<{
  success: boolean
  phone: string
  id: string
}> => {
  if (useMerchantSms) {
    return request({
      url: '/kacat-cornerstone-merchant/sms/validate',
      method: 'POST',
      noToken: true,
      params: {
        merchantId: useAppStore().merchantId
      },
      data: {
        phone
      },
      headers: {
        'Blade-Auth': null
      }
    })
  }

  return request({
    url: '/kacat-cornerstone-system/sms/validate',
    method: 'POST',
    noToken: true,
    data: {
      phone
    },
    headers: {
      'Blade-Auth': null
    }
  })
}
