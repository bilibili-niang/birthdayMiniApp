import './style.scss'
import { ref, defineComponent } from 'vue'
import { BasePage } from '@kacat/core'
import { useGlobalStore } from 'src/stores'
import Text from 'src/components/common/Text'
import { phoneLoginType } from '../../api/user/type'
import { Icon } from '@kacat/ui'
import CustomButton from '../../components/common/customButton'
import CustomPopup from '../../components/common/customPopup'
import { DEFAULT_USER_AVATAR } from '../../constants/appMode'
import { Image } from '@tarojs/components'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'Mine',
  setup() {
    const store = useGlobalStore()
    const alertFlag = ref(false)
    // 获取用户数据
    const userData = ref<phoneLoginType>()
    const init = () => {
      const { selectedStore, userInfo } = store.$state
      userData.value = userInfo?.find((it: phoneLoginType) => it.id === selectedStore)
    }
    init()

    return () => {
      return (
        <BasePage navigator={null} navigatorPlaceholder={true} backgroundColor="#ffffff">
          <div class="mine overxHidden">
            <div class="mineTopCard column align-items-center w-percent100">
              <div class="avatarContainer round shadowStyle-l margin-top-20">
                <Image src={userData.value?.logoImgUri || DEFAULT_USER_AVATAR} class="userAvatar row round" />
              </div>
              <Text class="margin-top-20" weight={620} size={27}>
                {store.$state.storeInfo?.nick_name || '阿波卡利斯'}
              </Text>
              <Text class="" weight={400} size={15} color="rgba(0,0,0,.4)">
                {store.$state.storeInfo?.account || '18672148720'}
              </Text>
            </div>

            <div class="mineSelections margin-top-50">
              <div class="column">
                <div class="customerServiceContainer margin-top-30 row just-content-space-between w-percent100 border-bottom-line-normal padding-b-l">
                  <button open-type="contact" class="customerServiceBtn">
                    联系客服
                  </button>
                  <Text weight={620} size={16} class="row just-content-center align-items-center">
                    <Icon name="lianxikefu" class="margin-right-large font-size-20" /> 联系客服
                  </Text>
                  <div class="arrow">
                    <Icon name="right"></Icon>
                  </div>
                </div>

                <div
                  class="margin-top-30 row just-content-space-between w-percent100 border-bottom-line-normal padding-b-l"
                  onClick={() => (alertFlag.value = true)}
                >
                  <Text weight={620} size={16} class="row just-content-center align-items-center">
                    <Icon name="logout-round" class="margin-right-large font-size-20" />
                    退出登录
                  </Text>
                  <div class="arrow">
                    <Icon name="right"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CustomPopup v-model={alertFlag.value}>
            {{
              default: () => (
                <Text size={15} weight={400} color="rgba(0,0,0,.7)" class="margin-0-auto">
                  是否退出登录
                </Text>
              ),
              bottom: () => (
                <div class="row just-content-space-between w-percent100">
                  <CustomButton
                    class="w-percent45 confirmBtn"
                    color="#627CFF"
                    background="#ffffff"
                    weight={500}
                    onClick={() => (alertFlag.value = false)}
                  >
                    取消
                  </CustomButton>

                  <CustomButton class="w-percent50 confirmBtn" weight={500} onClick={store.logout}>
                    确认
                  </CustomButton>
                </div>
              )
            }}
          </CustomPopup>
        </BasePage>
      )
    }
  }
})
