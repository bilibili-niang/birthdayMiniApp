// 微店的商户选择
import './style.scss'
import { defineComponent, ref } from 'vue'
import { BasePage, useToast } from '@kacat/core'
import Text from '../components/common/Text'
import { goToMerchantSelector } from '../router'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Icon } from '@kacat/ui'
import { APP_MODE_STORE, APP_MODE_VENUE, appMode, appModeItemType, DEFAULT_USER_AVATAR } from '../constants/appMode'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'Index',
  setup() {
    const applicationList = ref<appModeItemType[]>(appMode)

    // 是否开启禁用
    const disabled = ref(false)
    // 更新已选择的商户id,跳转
    const chooseStore = async (item: appModeItemType) => {
      disabled.value = true
      console.log('item', item)
      Taro.setStorageSync('appMode', item.value)
      if (item.value === APP_MODE_STORE) {
        // 跳转到微店的商户选择
        goToMerchantSelector()
        disabled.value = false
      } else if (item.value === APP_MODE_VENUE) {
        useToast('还未支持...')
        disabled.value = false
      }
    }
    // TODO 暂无用户数据
    const user = ref({
      url: DEFAULT_USER_AVATAR,
      phone: '18672148720',
      companyName: '能力有限责任公司'
    })

    return () => {
      return (
        <BasePage
          useScrollView
          navigator={{
            title: '卡猫管家',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="rgba(241, 243, 251, 1)"
        >
          <div class="StoreSelector column">
            <div class="selector-top-avatar-content">
              <div class="selector-left-avatar">
                <Image src={user.value.url} class="user-avatar" />
              </div>
              <div class="user-name-content">
                <Text size="22px" weight={600}>
                  {user.value.companyName}
                </Text>
                <Text size="11px" weight={400} color="rgba(0, 0, 0, 1)" class="top-user-phone">
                  {user.value.phone}
                </Text>
              </div>
            </div>

            <div class="StoreSelectorTitle">
              <Text weight={500} size="17px">
                我的应用
              </Text>
            </div>

            <div class="storeSelectorContainer w-percent100 column align-items-center">
              {applicationList.value!.map((item: appModeItemType) => {
                return (
                  <div class="application-item just-content-center w-percent100">
                    <div
                      class={[
                        'storeItem row align-items-center h-fit-content w-percent100',
                        disabled.value && 'disabledBtn'
                      ]}
                      onClick={() => chooseStore(item)}
                    >
                      <div class="left-app-name column">
                        <Text size="22px">{item.label}</Text>
                        <Text size="14px">{item.description}</Text>
                        <Icon name="right" class="" />
                      </div>

                      <img class="storeAvatar row round" src={item.url} alt={item.label} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </BasePage>
      )
    }
  }
})
