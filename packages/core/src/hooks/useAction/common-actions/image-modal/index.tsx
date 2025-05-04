import { openImageModal } from '@kacat/deck/src/components/image-modal'

export default {
  key: 'image-modal',
  title: '图片弹窗',
  type: 'other',
  handler: (config: any) => {
    openImageModal(config)
  }
}
