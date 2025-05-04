export interface MerchantType {
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
  account: string
  jti: string
}

// 这个是在data包裹的
export interface goodsDataType {
  id: string
  tenantId: string
  merchantId: string
  merchantName: string
  recordNo: string
  orderNo: string
  cardNo: string
  password: string
  cardInfo: object
  userId: string
  phone: string
  goodsId: string
  goodsName: string
  goodsImages: string[]
  goodsStockId: string
  goodsStockName: object
  availableTimes: number
  status: number
  qrcodeType: number
  expireStartAt: object
  expireEndAt: object
  unavailableDate: number
  unavailableDateWeekday: []
  unavailableDateHoliday: number
  unavailableDateRange: number
  unavailableDateStartAt: object
  unavailableDateEndAt: object
  availableDate: number
  availableDateStartAt: object
  availableDateEndAt: object
  createTime: string
  updateTime: string
  totalTimes: number
}

export interface checkGoodsType<T> {
  data: T
  code: number
  success: boolean
  msg: string
}

// 二次确认卡券核销的类型
export interface confirmWriteOff {
  code: number
  success: boolean
  data: boolean
  msg: string
}

export interface WriteOffConfirmType {
  recordNo: string
  password?: string | null
  storeId: string
  storeName: string
}

export interface recordsType {
  id: string
  tenantId: string
  merchantId: string
  merchantName: string
  sendRecordNo: string
  recordNo: string
  orderNo: string
  cardNo: string
  storeId: object
  storeName: object
  assistantUserId: string
  assistantName: object
  assistantPhone: object
  userId: string
  phone: string
  goodsId: string
  goodsName: string
  goodsImages: string[]
  goodsStockId: string
  goodsStockName: object
  createTime: string
  updateTime: string
}

// 获取卡券核销分页数据
export interface WriteOffRecordType {
  code: number
  success: boolean
  data: {
    records: recordsType[]
    total: number
    size: number
    current: number
    orders: []
    optimizeCountSql: boolean
    searchCount: boolean
    maxLimit: object
    countId: object
    pages: number
  }
  msg: string
}

export interface checkGoodsDataType {
  id: string
  tenantId: string
  merchantId: string
  merchantName: string
  recordNo: string
  mainOrderNo: object
  orderNo: string
  cardNo: string
  password: string
  cardInfo: object
  mustKnow: object
  userId: string
  phone: string
  goodsId: string
  goodsName: string
  goodsImages: string[]
  goodsStockId: string
  goodsStockName: string
  totalTimes: number
  availableTimes: number
  status: number
  qrcodeType: number
  expireStartAt: string
  expireEndAt: string
  unavailableDate: number
  unavailableDateWeekday: []
  unavailableDateHoliday: number
  unavailableDateRange: number
  unavailableDateStartAt: object
  unavailableDateEndAt: object
  availableDate: number
  availableDateStartAt: object
  availableDateEndAt: object
  createTime: string
  updateTime: string
}
