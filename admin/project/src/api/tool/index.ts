// 翻译为英文
import request from '@/api/request'

export const $transform = async (data: object) => {
  return request.post('/api/tool/translate', data)
}