/** 个人实名认证信息 */
export interface IPersonalAuthInfo {
  /**
   * 居住地址
   */
  address: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 用户id
   */
  id: string
  /**
   * 姓名
   */
  name: string
  /**
   * 电话
   */
  phone: string
  /**
   * 用户类型
   */
  typeText: string
}

/** 志愿者信息 */
export interface IVolunteerInfo {
  address: string
  avatar: string
  createTime: string
  desc: string
  educationLevel: number
  id: string
  name: string
  region: string
  type: number
  userId: string
}

export interface IPartyMemberInfo {
  address: string
  communityId: null
  communityName: null
  createTime: string
  createUser: string
  education: number
  gender: number
  id: string
  idCard: string
  joinPartyTime: string
  mobile: string
  name: string
  registeredAddress: string
  /**
   * 状态
   */
  status: number
  updateTime: string
  updateUser: string
  userId: string
  [property: string]: any
}

export interface IVolunteerInfoOptions {
  /** 详细地址 */
  address: string
  /** 个人简介 */
  desc: string
  /** 最高学历 */
  educationLevel: number
  /** 地址区域 */
  region: string
  /** 志愿者类型 */
  type: number
}

export interface IScoreAccount {
  /**
   * 已使用积分
   */
  consumedScore: number
  /**
   * 当前账户总积分
   */
  currentScore: number
  /**
   * ID
   */
  id: number
  /**
   * 志愿者手机号码
   */
  mobile: string
  /**
   * 志愿者姓名
   */
  name: string
  /**
   * 累积获得积分
   */
  sumScore: number
  /**
   * 志愿者用户ID
   */
  userId: string
}

export interface IScoreRecord {
  /**
   * 志愿活动ID
   */
  activityId?: string
  activityName?: string
  /**
   * 用户积分账户余额
   */
  balance?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 积分说明
   */
  desc?: string
  /**
   * ID
   */
  id?: string
  /**
   * 合作商ID
   */
  merchantId?: string
  /**
   * 志愿者手机号
   */
  mobile?: string
  /**
   * 志愿者姓名
   */
  name?: string
  /**
   * 业务订单号
   */
  recordNo?: string
  /**
   * 收支积分值
   */
  score?: number
  /**
   * 积分流水号
   */
  scoreNo?: string
  /**
   * 收支类型
   */
  type?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 志愿者用户ID
   */
  userId?: string
}

export interface IScoreRank {
  /**
   * 志愿者总数，合作商下所有志愿者总数
   */
  countUser: number
  /**
   * 当前志愿者排行信息
   */
  currentUser: {
    /**
     * 志愿者头像
     */
    avatar: string
    /**
     * 志愿者姓名
     */
    name: string
    /**
     * 志愿者排行名次
     */
    rankNo: number
    /**
     * 累积获得积分
     */
    sumScore: number
    /**
     * 志愿者用户ID
     */
    userId: string
  }
  /**
   * 排行榜榜单
   */
  list: {
    /**
     * 志愿者头像
     */
    avatar: string
    /**
     * 志愿者姓名
     */
    name: string
    /**
     * 名次，无重复名次。若累积获得积分相同，则再以志愿者加入时间正序排序
     */
    rankNo: number
    /**
     * 志愿者累积获得积分
     */
    sumScore: number
    /**
     * 志愿者用户ID
     */
    userId: string
  }[]
}
