import { computed } from 'vue'
import { $getBusinessDictionary } from '../api/biz-dict'
import usePagination from './usePagination'

const cacheData: Record<string, ReturnType<typeof usePagination>> = {}

export const useBizDict = (code: string) => {
  const pagination =
    cacheData[code] ||
    usePagination({
      requestHandler: (params) => {
        return $getBusinessDictionary(code)
      }
    })

  if (!cacheData[code]) {
    cacheData[code] = pagination
    pagination.fetchData()
  }

  return {
    ...pagination,
    options: computed(() => {
      return pagination.data.value.map((item: any) => {
        return {
          label: item.dictValue,
          title: item.dictValue,
          value: item.dictKey || item.id
        }
      })
    })
  }
}
