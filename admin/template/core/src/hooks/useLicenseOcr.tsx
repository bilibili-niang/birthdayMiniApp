import { ref } from 'vue'
import type { IBusinessLicense } from '../api/license-ocr'
import uuid from '../utils/uuid'
import { message } from '@kacat/ui'
import licenseOcr from '../api/license-ocr'

const useLicenseOcr = () => {
  const licenseStatus = ref<'loading' | 'success' | 'error' | null>(null)
  const licenseData = ref<IBusinessLicense | null>(null)
  const clearLicense = () => {
    licenseStatus.value = null
    licenseData.value = null
  }
  const onLicenseImageChange = (url: string) => {
    if (url) {
      const msgId = uuid()
      message.loading({ key: msgId, content: '图片正在识别中，请稍候片刻！', duration: 0 })
      licenseStatus.value = 'loading'
      licenseOcr(url)
        .then((res: any) => {
          console.log(res)
          if (res.code === 200) {
            licenseData.value = res.data as IBusinessLicense
            message.success({ key: msgId, content: '图片识别成功！' })
            licenseStatus.value = 'success'
          } else {
            message.error({
              key: msgId,
              content: res.msg || '图片识别失败！'
            })
            licenseStatus.value = 'error'
          }
        })
        .catch((err: any) => {
          message.error({
            key: msgId,
            content: err.response?.data?.msg || err.msg || err.message || '图片识别失败！'
          })
          licenseStatus.value = 'error'
        })
    }
  }

  // const ocrWidgetOptions = computed(() => {
  //   const businessLicenseEditable = state.licenseInfo.companyName?.length > 0 || licenseStatus.value === 'success'
  //   return {
  //     placeholder: businessLicenseEditable ? '必填，请输入' : 'OCR识别营业执照自动写入'
  //   }
  // })

  return {
    licenseStatus,
    licenseData,
    clearLicense,
    onLicenseImageChange
  }
}

export default useLicenseOcr
