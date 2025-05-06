import request, { getMerchantId } from '../request'
import { ResponseBody } from '../types'

type AuthMessageCodeOptions = {
  /** 手机号码 */
  phone: string
  /** 验证码id */
  smsId: string
  /** 验证码 */
  code: string
}
interface Response {
  /** 认证 token，用于后续请求接口 */
  access_token: string
  account: string
  avatar: string
  /** 客户端 id */
  client_id: string
  dept_id: string
  detail: Detail
  /** 有效期 */
  expires_in: number
  jti: string
  license: string
  nick_name: string
  oauth_id: string
  post_id: string
  real_name: string
  refresh_token: string
  role_id: string
  /** 角色名称 */
  role_name: string
  /** 认证访问 */
  scope: string
  /** 租户id */
  tenant_id: string
  token_type: string
  user_id: string
  /** 用户名 */
  user_name: string
}

interface Detail {
  type: string
}

const authMessageCode = (options: AuthMessageCodeOptions): ResponseBody<Response> => {
  const { phone, smsId, code } = options
  return request({
    url: '/blade-auth/oauth/token',
    method: 'POST',
    noToken: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic bTptX3NlY3JldA=='
    },
    data: {
      // 授权类型，短信验证码时固定为 sms_code
      grant_type: 'sms_code',
      // 授权范围，前台接口时固定为 wap
      scope: 'm',
      phone,
      sms_id: smsId,
      value: code,
      merchantId: getMerchantId(),
      merchant_id: getMerchantId(),
      scene: process.env.TARO_APP_SCENE
    }
  })
}

export default authMessageCode
