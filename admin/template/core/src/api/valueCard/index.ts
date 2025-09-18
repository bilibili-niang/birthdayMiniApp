import useAppStore from '../../stores/app'
import request, { type PaginationData, type RequestPagination } from '../request'

/** 获取储值卡列表 */
export const $getValueCardList = (params?: RequestPagination) => {
  return request<PaginationData<any>>({
    url: '/kacat-cornerstone-goods/cardManage',
    method: 'GET',
    params: {
      scene: useAppStore().scene,
      ...params
    }
  })
}

/** 获取储值卡发放记录 */
export const $getValueCardGrantRecords = (params: RequestPagination) => {
  return request({
    url: '/kacat-cornerstone-goods/storeValueCard',
    method: 'GET',
    params: {
      scene: useAppStore().scene,
      ...params
    }
  })
}

/** 获取实体卡制作记录 */
export const $getPhysicalValueCardCreateRecords = (params?: RequestPagination) => {
  return request<PaginationData<any>>({
    url: '/kacat-cornerstone-finance/storeValueCardBatchRecord',
    method: 'GET',
    params: {
      scene: useAppStore().scene,
      ...params
    }
  })
}

/** 批量创建实体储值卡 */
export const $createPhysicalValueCard = (options: {
  cardManageId: string
  faceValueId: string
  number: number
  smsId?: string
  value?: string
}) => {
  return request({
    url: '/kacat-cornerstone-finance/storeValueCard/batchProduce',
    method: 'POST',
    data: {
      scene: useAppStore().scene,
      ...options
    }
  })
}

/** 获取实体卡制作记录下载文件 */
export const $getPhysicalValueCardDownloadFile = (id: string) => {
  return request({
    url: `/kacat-cornerstone-finance/storeValueCardBatchRecord/${id}/downloadFile`,
    method: 'get'
  })
}

/** 实体卡制作记录操作日志 */
export const $getPhysicalValueCardOperateLog = (params: RequestPagination<{ id: string }>) => {
  const { id, ...rest } = params
  return request({
    url: `/kacat-cornerstone-finance/storeValueCardBatchRecord/${params.id}/operateLog`,
    method: 'get',
    params: {
      ...rest
    }
  })
}

/** 获取储值卡收支明细列表 */
export const $getValueCardUseRecords = (params: RequestPagination<{ cardNo?: string }>) => {
  const { cardNo, ...rest } = params
  return request({
    url: cardNo ? `/kacat-cornerstone-goods/storeValueCard/${cardNo}` : '/kacat-cornerstone-goods/cardPaymentRecord',
    method: 'GET',
    params: {
      scene: useAppStore().scene,
      ...rest
    }
  })
}

/** 吊销储值卡 */
export const $revokeValueCard = (cardNo: string) => {
  return request({
    url: `/kacat-cornerstone-goods/storeValueCard/revoke/${cardNo}`,
    method: 'put'
  })
}
