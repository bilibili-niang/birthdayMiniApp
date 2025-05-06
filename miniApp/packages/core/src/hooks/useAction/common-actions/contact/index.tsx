import Taro from '@tarojs/taro'
import { useContact } from '../../../useContact'

const formatConfig = (_config: any) => {
  return {
    ..._config,
    work: {
      corpId: _config.corpId,
      url: _config.url,
      messageCard: _config.messageCard,
      ..._config?.work
    }
  }
}

export default {
  key: 'contact',
  title: '联系客服',
  handler: (_config: any) => {
    const config = formatConfig(_config)
    const contacts = config.contactsEnable || config.type === 'phone' ? config.contacts : []
    if (config.type === 'work' && config.work) {
      if (process.env.TARO_ENV === 'h5') {
        window.location.href = config.work.url
      } else {
        Taro.openCustomerServiceChat({
          extInfo: {
            url: config.work.url
          },
          corpId: config.work.corpId,
          ...config.work.messageCard,
          fail: () => {
            console.log('打开企业微信客服失败')
            // 失败就打开默认弹窗。
            showContactModal(contacts)
          }
        })
      }
      return void 0
    }
    if (!config.type) {
      showContactModal([], true)
    } else {
      showContactModal(contacts, config.type === 'mp')
    }
  }
}

const showContactModal = (contacts = [], onlineContact = true) => {
  useContact({
    onlineContact,
    contacts
  })
}
