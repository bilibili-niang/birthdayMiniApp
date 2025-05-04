export * from './default-tab'
export * from './order'
export * from './coupon'

/** 应用归属：数字家园 */
export const ORIGIN_HOME = 0
/** 应用归属：微店 */
export const ORIGIN_STORE = 1
/** 应用归属：智慧文旅 */
export const ORIGIN_TOURISM = 2
/** 应用归属：运动馆 */
export const ORIGIN_VENUE = 3

/** 直连小程序列表 */
export const DIRECT_WEAPP_OPTIONS = [
  { label: '权益券包', value: 'wxed3ff9703fc1f177' },
  { label: '小鹭岛', value: 'wx05fa8c4202336762' }
]

/** 腾讯地图key */
export const TENCENT_MAP_KEY = 'QAYBZ-5PKWK-F7TJC-AFAFD-A3ESO-LFFA2'
// export const TENCENT_MAP_KEY = 'CJRBZ-7YZCD-5W64C-HEPNU-7GIK2-J2B4W'

/** 腾讯地图应用来源 */
export const TENCENT_MAP_REFERER = 'kacat'

/** 默认用户头像，未登录、未设置时使用 */
export const DEFAULT_AVATAR = 'https://dev-cdn.kacat.cn/upload/b901d1c52a244bebd9107706819aab23.svg'

export * from './express'

/** 通用状态：禁用 */
export const COMMON_STATUS_OFF = 0
/** 通用状态：启用 */
export const COMMON_STATUS_ON = 1
/** 通用状态选项 */
export const COMMON_STATUS_OPTIONS = [
  { label: '禁用', value: COMMON_STATUS_OFF },
  { label: '启用', value: COMMON_STATUS_ON }
]

/** 颜色 蓝色：加载中、进程中、待办 */
export const COLOR_PROCESSING = '#1677ff'
/** 颜色 绿色：成功 */
export const COLOR_SUCCESS = '#27ae60'
/** 颜色 红色：失败 */
export const COLOR_ERROR = '#eb2f06'
/** 颜色 黄色：警告 */
export const COLOR_WARNING = '#f1c40f'
/** 颜色 灰色：禁用、关闭、失效 */
export const COLOR_DISABLED = '#c4c6ca'

/** 性别：女性 */
export const GENDER_FEMALE = 0
/** 性别：男性 */
export const GENDER_MALE = 1
