import { useAppStore } from '../stores'
import request from './request'

/** 获取统一支付参数 */
export const getPayParams = (orderNo: string) => {
  return request({
    // url: `/kacat-cornerstone-order-wap/m/unifiedOrder/${orderNo}/payInfo`,
    url: `/kacat-cornerstone-order-wap/m/unifiedOrder/${orderNo}/payInfoNew`,
    method: 'get',
    params: {
      appid: useAppStore().appId
    }
  })
}
