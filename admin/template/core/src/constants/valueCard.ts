import { COLOR_ERROR, COLOR_PROCESSING, COLOR_SUCCESS, COLOR_WARNING } from '@kacat/config'

/** 储值卡来源类型 */
export enum ValueCardSourceType {
  /** 后台创建 */
  BatchCreate = 0,
  /** 用户购买 */
  UserBuy = 1
}

/** 储值卡来源类型选项 */
export const ValueCardSourceTypeOptions = [
  { label: '后台创建', value: ValueCardSourceType.BatchCreate },
  { label: '用户购买', value: ValueCardSourceType.UserBuy }
] as const

/** 储值卡状态 */
export enum ValueCardStatus {
  /** 待激活 */
  PendingActivate = 0,
  /** 可使用 */
  Available = 1,
  /** 已吊销 */
  Revoked = 2
}

/** 储值卡状态选项 */
export const ValueCardStatusOptions = [
  { label: '待激活', value: ValueCardStatus.PendingActivate, color: COLOR_PROCESSING },
  { label: '可使用', value: ValueCardStatus.Available, color: COLOR_SUCCESS },
  { label: '已吊销', value: ValueCardStatus.Revoked, color: COLOR_ERROR }
]

/** 收支类型：支出-消费 */
export enum ValueCardBalanceChangeType {
  /** 收支类型：支出-消费 */
  Consume = 0,
  /** 收支类型：收入-充值 */
  Recharge = 1,
  /** 收支类型：收入-退款 */
  Refund = 2,
  /** 收支类型：支出-冲减 */
  Revoke = 3
}

export const ValueCardBalanceChangeTypeOptions = [
  { label: '支出 - 消费', value: ValueCardBalanceChangeType.Consume },
  { label: '收入 - 充值', value: ValueCardBalanceChangeType.Recharge },
  { label: '收入 - 退款', value: ValueCardBalanceChangeType.Refund },
  { label: '支出 - 冲减', value: ValueCardBalanceChangeType.Revoke }
] as const

/** 储值卡操作日志类型 */
export enum ValueCardOperateLogType {
  /** 制卡 */
  Create = 0,
  /** 下载文件 */
  Download = 1
}

/** 储值卡操作日志类型选项 */
export const ValueCardOperateLogTypeOptions = [
  { label: '创建批次', value: ValueCardOperateLogType.Create },
  { label: '下载文件', value: ValueCardOperateLogType.Download }
] as const

export enum ValueCardBatchStatus {
  /** 文件生成中 */
  Generating = 0,
  /** 已完成 */
  Completed = 1
}

/** 储值卡批次状态选项 */
export const ValueCardBatchStatusOptions = [
  { label: '文件生成中', value: ValueCardBatchStatus.Generating, color: COLOR_PROCESSING },
  { label: '已完成', value: ValueCardBatchStatus.Completed, color: COLOR_SUCCESS }
] as const
