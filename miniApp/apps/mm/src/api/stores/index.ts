import { AxiosPromise } from 'axios'
import request from '../request'
import { checkGoodsType, confirmWriteOff, goodsDataType, MerchantType, WriteOffConfirmType } from './type'

export default {
  // 获取商户信息
  async getMerchantInfo(data: any): AxiosPromise<MerchantType> {
    return request({
      url: '/blade-auth/oauth/token',
      method: 'post',
      data,
      ContentType: 'application/x-www-form-urlencoded'
    })
  },
  // 查询该码是否有效
  async checkout(cardNo: string): AxiosPromise<checkGoodsType<goodsDataType>> {
    return request({
      url: '/kacat-cornerstone-order/m/goods/coupon/record?cardNo=' + cardNo,
      method: 'get'
    })
  },
  // 获取分页核销记录
  async getWriteOffRecord(params: any) {
    return request({
      url: '/kacat-cornerstone-order/m/goods/coupon/verification',
      method: 'get',
      params
    })
  },
  // 二次确认卡券核销
  async confirmWriteOff(data: WriteOffConfirmType): AxiosPromise<confirmWriteOff> {
    return request({
      url: '/kacat-cornerstone-order/m/goods/coupon/verification',
      method: 'post',
      data
    })
  },
  // 获取卡券所有可使用门店
  async getCardVouchersStore(goodsId: string, merchantId: string): AxiosPromise<any> {
    return request({
      url: `/kacat-cornerstone-merchant/shop/shopBycoupon/${goodsId}`,
      method: 'get',
      withLocation: true,
      params: {
        merchantId,
        size: 3000
      }
    })
  },
  // 获取商户列表
  async getStoreList() {
    return request({
      url: '/kacat-cornerstone-system/me/merchant',
      method: 'get'
    })
  },
  // 获取获取可核销门店
  async getStoreAbleuseList(merchantId: string) {
    return request({
      url: '/kacat-cornerstone-merchant/shop/authShop',
      method: 'get',
      params: {
        merchantId,
        size: 3000
      }
    })
  },
  // TEST 测试的
  // 卡券核销码获取子订单信息
  async getOrderInfo(params: { code: string; merchantId: string }) {
    return request({
      url: '/kacat-cornerstone-order/m/goods/coupon/verification-code/scan',
      method: 'get',
      params
    })
    /*return new Promise((resolve) => {
      return resolve(mockk)
    })*/
  }
}
