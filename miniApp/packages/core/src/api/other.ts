import { request } from '../../lib'

/** ORC 识别营业执照 */
export const $OCR_License = (url: string) => {
  return request({
    url: '/kacat-cornerstone-system/image/recognizeBusinessLicense',
    method: 'get',
    params: {
      url
    }
  })
}
