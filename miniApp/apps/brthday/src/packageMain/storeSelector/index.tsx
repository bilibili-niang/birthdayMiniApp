// 微店的商户选择页面
import './style.scss'
import { defineComponent, ref } from 'vue'
import { BasePage } from '@kacat/core'
import Text from '../../components/common/Text'
import { phoneLoginType } from '../../api/user/type'
import { useGlobalStore } from '../../stores'
import { jumpToPageContainer } from '../../router'
import { getItemChooseStore } from '../../utils'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { DEFAULT_APP_MODE_IMG } from '../../constants/appMode'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'componentName',
  setup() {
    const store = useGlobalStore()

    const storeList = ref<phoneLoginType[] | null>([])

    // 回显的storeid,可能也不需要了
    const echoId = ref()
    // 是否开启禁用
    const disabled = ref(false)

    const init = async () => {
      // 从存储获取
      echoId.value = Taro.getStorageSync('storeId')

      storeList.value = Taro.getStorageSync('token') || store.$state.userInfo
      const localStoreData = Taro.getStorageSync('storeData')
      // 本地存在,就不用去请求了
      if (localStoreData) {
        store.updateStoreInfo(localStoreData)
        // 存在则说明用户已选择店铺,跳转
        if (echoId.value) {
          setTimeout(() => {
            jumpToPageContainer()
          }, 2000)
        }
      }
    }
    // 更新已选择的商户id,跳转
    const chooseStore = async (item: phoneLoginType) => {
      disabled.value = true
      // 弹窗
      Taro.showToast({
        title: '用户已登录',
        icon: 'success'
      })
      // 选择商铺触发
      getItemChooseStore(item).finally(() => {
        setTimeout(() => {
          disabled.value = false
        }, 2000)
      })
    }

    init()
    return () => {
      return (
        <BasePage
          useScrollView
          navigator={{
            title: '商铺选择',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
        >
          <div class="backContainer">
            <div class="bacItem"></div>
          </div>

          <div class="StoreSelector column">
            <div class="StoreSelectorTitle">
              <Text weight={530} size="27px">
                请选择店铺
              </Text>
            </div>
            {storeList.value?.length ? (
              <div class="storeSelectorContainer w-percent100 column align-items-center">
                {storeList.value!.map((item: phoneLoginType) => {
                  return (
                    <div class="just-content-center w-percent100">
                      <div
                        class={[
                          'storeItem row align-items-center h-fit-content w-percent100',
                          disabled.value && 'disabledBtn',
                          echoId.value === item.id && 'echoActive'
                        ]}
                        onClick={() => chooseStore(item)}
                      >
                        <Image class="storeAvatar row round" src={item.logoImgUri || DEFAULT_APP_MODE_IMG} />
                        <Text size="20px">{item.name}</Text>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div class="emptyData">您的店铺列表为空，请联系管理员添加</div>
            )}
          </div>
        </BasePage>
      )
    }
  }
})
