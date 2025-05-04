import request from '../request'

export default {
  async getMerchantId(appId) {
    return request({
      url: `/kacat-cornerstone-wechat-wap/m/open/miniapp/${appId}/merchantId`
    })
  }
}
