/*
 * 小程序的模式
 * */
// 微店商户核销
export const APP_MODE_STORE = 'writeOffWorkbench'
// 运动馆场馆经营
export const APP_MODE_VENUE = 'venueManagement'
export const appMode = [
  {
    label: '微店管家',
    value: APP_MODE_STORE,
    description: '卡猫微店核销工作台',
    url: 'https://dev-cdn.kacat.cn/upload/01f25fc7c0f23314646694ebdfc0060c.png'
  },
  {
    label: '场馆经营',
    description: '卡猫运动工作台',
    value: APP_MODE_VENUE,
    url: 'https://dev-cdn.kacat.cn/upload/3ac4af9c98c638512c3071fac90f6715.png'
  }
]

export interface appModeItemType {
  label: string
  value: string
  description: string
  url: string
}

// 小程序默认图片,目前没有卡猫默认的小程序logo
export const DEFAULT_APP_MODE_IMG = 'https://dev-cdn.cardcat.cn/kacat/default-avatar.svg'
// 默认用户头像
export const DEFAULT_USER_AVATAR = 'https://dev-cdn.cardcat.cn/kacat/default-avatar.svg'
