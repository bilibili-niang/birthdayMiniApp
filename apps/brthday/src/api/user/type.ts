// 发送手机验证码返回的数据类型
export interface smsResponseType {
  code: number
  success: boolean
  data: {
    success: boolean
    phone: object
    id: string
  }
  msg: string
}

export interface phoneCaptchaType {
  phone: string
  id: string
  value: string
}

// 手机号登陆返回的type 店铺数据
export interface phoneLoginType {
  id: string
  name: string
  desc: string
  logoImgUri: string
  companyName: string
  isAdmin: boolean
  directToken: string
  account: string | undefined
}

// 存储的店铺二级信息
export interface storeDataType {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  tenant_id: string
  user_name: string
  real_name: object
  avatar: string
  client_id: string
  role_name: string
  post_id: string
  user_id: string
  role_id: string
  nick_name: string
  oauth_id: object
  detail: {
    type: string
  }
  dept_id: string
  // 手机号字段
  account: string
  jti: string
}
