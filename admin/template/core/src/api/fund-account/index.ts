import request from '../request'

/** 获取资金账户信息 */
export const $getFundAccountInfo = () => {
  return request({
    url: '/kacat-cornerstone-merchant/wallet',
    method: 'get'
  })
}
