/** 主支付方式：无 */
export const PAYMENT_METHOD_NONE = 0
/** 主支付方式：余额支付 */
export const PAYMENT_METHOD_BALANCE = 1
/** 主支付方式：储值卡支付 */
export const PAYMENT_METHOD_VALUE_CARD = 2

/** 副支付方式：微信支付 */
export const SUB_PAYMENT_METHOD_WECHAT_PAY = 0
/** 副支付方式：店小银 */
export const SUB_PAYMENT_METHOD_DIAN_XIAO_YIN = 1
/** 副支付方式：通联支付（云闪付） */
export const SUB_PAYMENT_METHOD_UNION_PAY = 2

/** 主支付方式 */
export const PAYMENT_METHOD_OPTIONS = [
  { value: PAYMENT_METHOD_NONE, label: '无' },
  {
    value: PAYMENT_METHOD_BALANCE,
    label: '余额支付',
    icon: 'https://cdn.kacat.cn/upload/0f87d24338d69f30e1b5ba628ae4b19d.svg'
  },
  {
    value: PAYMENT_METHOD_VALUE_CARD,
    label: '储值卡支付',
    icon: 'https://cdn.kacat.cn/upload/f9f004949425bd9df1ed0547452a6d4a.svg'
  }
]

export const SUB_PAYMENT_METHOD_OPTIONS = [
  {
    value: SUB_PAYMENT_METHOD_WECHAT_PAY,
    label: '微信支付',
    icon: 'https://cdn.kacat.cn/upload/2a8153de72946c9a613ebe05b2666f47.svg'
  },
  {
    value: SUB_PAYMENT_METHOD_DIAN_XIAO_YIN,
    label: '店小银',
    icon: 'https://cdn.kacat.cn/upload/c559ad65f4253fc05c2dafffcb7f7ceb.svg'
  },
  // {
  //   value: SUB_PAYMENT_METHOD_CM_PAY,
  //   label: '和包支付',
  //   icon: 'https://cdn.kacat.cn/upload/b5a345a1aa0d4a26a743545c4e8c5bb8.svg',
  //   disabled: true
  // },
  {
    value: SUB_PAYMENT_METHOD_UNION_PAY,
    // label: '通联支付',
    // icon: 'https://cdn.kacat.cn/upload/b89500703125fdf8b99b964feb406621.svg'
    label: '云闪付',
    icon: 'https://cdn.kacat.cn/upload/3fe3c51a6e0355f60164cfd6ac24d71e.svg'
  }
]

/** 支付渠道：余额支付 */
export const PAYMENT_CHANNEL_BALANCE = 'UserAccount'
/** 支付渠道：微信支付 */
export const PAYMENT_CHANNEL_WECHAT_PAY = 'Wechat'
/** 支付渠道：通联支付（云闪付） */
export const PAYMENT_CHANNEL_ALL_IN_PAY = 'Allinpay'
/** 支付渠道 */
export const PAYMENT_CHANNEL_OPTIONS = [
  { label: '微信支付', label2: '微信', value: PAYMENT_CHANNEL_WECHAT_PAY },
  { label: '余额支付', label2: '余额', value: PAYMENT_CHANNEL_BALANCE },
  { label: '云闪付', label2: '支付渠道（原路返回）', value: PAYMENT_CHANNEL_ALL_IN_PAY }
]
