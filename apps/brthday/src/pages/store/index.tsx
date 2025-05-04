import './style.scss'
import Taro from '@tarojs/taro'
import { defineComponent, ref } from 'vue'
import { BasePage, useModal } from '@kacat/core'
import { ScrollView } from '@tarojs/components'
import Text from 'src/components/common/Text'
import { Icon } from '@kacat/ui'
import { goToSuccessPage, goTOWriteOffPage, reLaunchToStoreSelector } from 'src/router'
import { useGlobalStore } from 'src/stores'
import { phoneLoginType } from 'src/api/user/type'
import CustomPopup from 'src/components/common/customPopup/index'
import CustomButton from 'src/components/common/customButton'
import $store from '../../api/stores'
import { DEFAULT_USER_AVATAR } from '../../constants/appMode'
import { Image } from '@tarojs/components'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'Store',
  setup() {
    const store = useGlobalStore()

    // 是否弹窗
    const alertFlag = ref(false)
    const echoId = ref()

    // 店铺列表
    const shopList = ref([])

    // 调用扫码
    const scan = () => {
      Taro.scanCode({
        success: res => {
          if (res.result) {
            Taro.vibrateShort()
            // 没有了输码核销
            goToSuccessPage(res.result)
          } else {
            // 提示
            Taro.showToast({
              title: '未获取到二维码',
              icon: 'none'
            })
          }
        },
        fail: () => {
          Taro.showToast({
            title: '未获取到正确的二维码',
            icon: 'none'
          })
        }
      })
    }
    // 核销记录
    const writeOffPage = () => goTOWriteOffPage()
    // 当前已选择公司的数据
    const selectedItem = ref<phoneLoginType>()
    // 商店数量,长度,判断是否显示切换按钮
    const storeLength = ref<number>(0)
    // 获取当前用户选择的商户id
    const init = () => {
      if (store.checkData()) {
        storeList.value = Taro.getStorageSync('token') || store.$state.userInfo
        echoId.value = Taro.getStorageSync('storeId')
        const { selectedStore, userInfo, storeInfo } = store.$state
        storeLength.value = userInfo?.length || 1
        selectedItem.value = userInfo?.find((it: phoneLoginType) => it.id === selectedStore)
        selectedItem.value.account = storeInfo?.account

        console.log('selectedStore', selectedStore)

        $store.getStoreAbleuseList(selectedStore).then(res => {
          shopList.value = res.data.records
        })
      }
    }

    // 切换商家
    const changeStore = () => {
      // 清除 localstroage的 storeId
      Taro.removeStorageSync('storeId')
      store
        .updateUserinfoByRemote()
        .then(res => {
          if (res.success) {
            reLaunchToStoreSelector()
          }
        })
        .catch(e => {
          console.log(e)
          console.log('请求列表失败了,你可以再试一次')
          // 提示
          Taro.showToast({
            title: '请求列表失败,请重试',
            icon: 'none'
          })
        })
    }

    const storeList = ref<phoneLoginType[] | null>([])

    init()

    return () => {
      return (
        <BasePage navigator={null} backgroundColor="transparent" navigatorPlaceholder={true}>
          <div class="backContainer">
            <img
              class="bacImage"
              src="https://dev-cdn.kacat.cn/upload/20240517/ed0ca01a3a151b8fd94a14edd044b740.png"
              alt=""
            />
            <div class="bacItem"></div>
          </div>

          <div class="store overxHidden">
            <div class="storeContainer w-percent100 row align-items-center">
              <div class="leftStoreInfo row">
                <div class="imageContainer overHidden column just-content-center">
                  <Image class="storeAvatar row" src={selectedItem.value?.logoImgUri || DEFAULT_USER_AVATAR} />
                </div>

                <div class="infoText column just-content-center">
                  <div class="row just-content-space-between">
                    <Text weight={620} size={22}>
                      {selectedItem.value?.name || '-'}
                    </Text>
                    {storeLength.value !== 1 && (
                      <div
                        class="rightContainer column w-auto h-percent-100 just-content-center"
                        onClick={() => (alertFlag.value = true)}
                      >
                        <div class="arrowContainer row just-content-center align-items-center">
                          <Icon name="down-fill" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div class="row">
                    <Text size={13} weight={200} color="rgba(0,0,0,.7)">
                      {shopList.value.length > 0 ? <>所在门店:共{shopList.value.length}个门店</> : ''}
                      {shopList.value.length === 1 ? <>{shopList.value[0]?.name}</> : ''}
                    </Text>
                    {shopList.value.length > 0 ? (
                      <Text
                        size={13}
                        weight={200}
                        color="rgba(0,61,210,.7)"
                        class="margin-l-5"
                        onClick={() => {
                          useModal({
                            title: '所属店铺',
                            height: 'max',
                            padding: 0,
                            content: (
                              <div>
                                <ScrollView
                                  showScrollbar
                                  scrollY
                                  class="storeSelectorContainer w-percent100 column align-items-center"
                                >
                                  <div class="list-content">
                                    {shopList.value!.map((item: phoneLoginType) => {
                                      return (
                                        <div class="just-content-center w-percent100">
                                          <div
                                            class={[
                                              'storeItem column h-fit-content w-percent100',
                                              echoId.value === item.id && 'echoActive'
                                            ]}
                                          >
                                            <Text size="20px">{item.name}</Text>
                                            <Text size="13px">地址:{item.address}</Text>
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </ScrollView>
                              </div>
                            )
                          })
                        }}
                      >
                        查看
                      </Text>
                    ) : (
                      ''
                    )}
                  </div>
                  <Text size={13} weight={200} color="rgba(0,0,0,.7)">
                    当前登录: {selectedItem.value?.account || '-'}
                  </Text>
                </div>
              </div>
            </div>

            <div class="storeCardContainer margin-top-40 column">
              <div
                class="scanContainer w-percent100 shadowStyle-normal column just-content-space-between align-items-center"
                onClick={scan}
              >
                <div class="textContainer column align-items-center">
                  <Text weight={620} size={20}>
                    扫码核销
                  </Text>
                  <Text weight={500} size={15} color="rgba(0,0,0,.4)">
                    扫描卡券条码,快速核销
                  </Text>
                </div>

                <div class="scanImageContainer w-percent60 row just-content-center align-items-center shadowStyle-normal margin-top-20">
                  <Icon name="saoma_scan-code" class="scanSvgIcon color-white font-size-25 margin-right-small" />
                  <Text class="scanBottomText" size={20} weight={620} color="rgba(255,255,255,1)">
                    扫一扫
                  </Text>
                </div>
              </div>

              <div class="writeOffRecordsContainer w-percent100  row just-content-space-between align-items-center">
                {/*<div
                  class="writeOffRecordsItem shadowStyle-normal  w-percent50 column just-content-center align-items-center"
                  onClick={toWriteOff}
                >
                  <div
                    class="writeOffRecordIcon background-color-blue-purple row round just-content-center align-items-center icon-shadow">
                    <Icon name="a-123" class="codeVerification color-white font-size-25 "></Icon>
                  </div>
                  <Text class="bottomText" weight={620} size={20}>
                    输码核销
                  </Text>
                  <Text size={12} color="rgba(0,0,0,.4)">
                    输入券码验证核销
                  </Text>
                </div>*/}

                <div
                  class="writeOffRecordsItem shadowStyle-normal w-percent100 column just-content-center align-items-center"
                  onClick={writeOffPage}
                >
                  <div class="writeOffRecordIcon row round just-content-center align-items-center background-color-origin icon-shadow">
                    <Icon name="hexiaojilu" class="recording font-size-25 color-white "></Icon>
                  </div>
                  <Text class="bottomText" weight={620} size={20}>
                    核销记录
                  </Text>
                  <Text size={12} color="rgba(0,0,0,.4)">
                    查看核销订单
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* 弹窗 */}
          <CustomPopup v-model={alertFlag.value}>
            {{
              default: () => (
                <Text size={15} weight={400} color="rgba(0,0,0,.7)" class="margin-0-auto">
                  是否确认切换商户
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

                  <CustomButton class="w-percent50 confirmBtn" weight={500} onClick={changeStore}>
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
