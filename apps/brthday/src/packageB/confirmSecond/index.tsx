import './index.scss'
import { defineComponent, ref } from 'vue'
import { BasePage } from '@kacat/core'
import { useGlobalStore } from '../../stores'
import Text from 'src/components/common/Text/index'
import CustomButton from '../../components/common/customButton'
import { stores as storeApi } from '../../api'
import CustomPopup from '../../components/common/customPopup'
import { goTOWriteOffPage, reLaunchToContainer } from '../../router'
import Taro from '@tarojs/taro'
import { InputNumber } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/packages/inputnumber/index.css'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'ConfirmSecond',
  setup() {
    // 目标核销数量
    const targetNumber = ref(1)
    const store = useGlobalStore()
    const { confirmStore, confirmGoodsInfo, selectedStore } = store
    // 可能需要的密码
    const password = ref('')

    const writeOffSuccess = ref<boolean>(false)
    const writeOffError = ref<boolean>(false)
    // 接口返回的卡券的集合
    const coupons = ref([])
    // 核销失败原因
    const writeOffInfo = ref<any>({})
    // 按钮禁用
    const btnDisabled = ref(false)
    // 核销确认
    const confirmSecond = async () => {
      // 获取核销的目标数量的卡券,直接截取数组
      const targetCoupons = coupons.value.slice(0, targetNumber.value)
      // 需要密钥之类的
      if (targetCoupons[0].expireType === 2) {
        console.log('请输入密码~~~')
        if (password.value) {
          await startToWriteOff(targetCoupons)
        } else {
          // 提示
          Taro.showToast({
            title: '请输入密码',
            icon: 'none'
          })
        }
      } else {
        await startToWriteOff(targetCoupons)
      }
    }

    const startToWriteOff = async (targetCoupons: any[]) => {
      btnDisabled.value = true
      // loading
      Taro.showLoading({
        title: '核销中'
      })
      // 使用promise all来处理
      const promiseAllTarget = await Promise.all(
        targetCoupons.map(async (it: any) => {
          return await storeApi
            .confirmWriteOff({
              recordNo: it.recordNo,
              merchantId: selectedStore,
              storeId: confirmStore.id,
              storeName: confirmStore.name,
              password: password.value
            })
            .then(res => {
              if (res.success) {
                return true
              } else {
                return false
              }
            })
            .catch(() => {
              return false
            })
        })
      )
      console.log('promiseAllTarget', promiseAllTarget)
      if (promiseAllTarget.includes(false)) {
        // 取消loading
        Taro.hideLoading()
        btnDisabled.value = false
        Taro.showToast({
          title: '部分卡券核销失败',
          icon: 'none'
        })
        writeOffError.value = true
      } else {
        Taro.hideLoading()
        btnDisabled.value = false
        writeOffSuccess.value = true
      }
    }

    const init = () => {
      coupons.value = confirmGoodsInfo.coupons.filter(it => it.status === 1)
    }

    init()

    return () => {
      return (
        <BasePage
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="#f1f3fb"
        >
          <div class="ConfirmSecond column">
            <Text weight={500} size={19}>
              您当前正在核销
            </Text>
            <div class="infoLines column pureWhite">
              <div class="lineTextContainer row">
                <div class="leftTitle">
                  <Text color="rgba(0, 0, 0,.7)" size={15}>
                    商品名称
                  </Text>
                </div>
                <div class="rightDetail">
                  <Text size={15} weight={400} class="rightText">
                    {confirmGoodsInfo?.goodsName || '-'}
                  </Text>
                </div>
              </div>

              <div class="lineTextContainer row">
                <div class="leftTitle">
                  <Text color="rgba(0, 0, 0,.7)" size={15}>
                    规格
                  </Text>
                </div>
                <div class="rightDetail">
                  <Text size={15} weight={400} class="rightText">
                    {confirmGoodsInfo?.goodsStockName || '-'}
                  </Text>
                  <Text size={15} weight={400} class="rightText">
                    ￥ {confirmGoodsInfo?.priceText}
                  </Text>
                </div>
              </div>

              <div class="lineTextContainer row">
                <div class="leftTitle">
                  <Text color="rgba(0, 0, 0,.7)" size={15}>
                    核销数量
                  </Text>
                </div>
                <div class="rightDetail">
                  <InputNumber v-model={targetNumber.value} max={coupons.value.length} />
                  <div class="small-tips">
                    <Text size={12} color="rgba(0, 0, 0,.7)">
                      共有 <span class="margin-left-small  margin-right-small themeColor">{coupons.value.length}</span>
                      张待使用券码
                    </Text>
                  </div>
                </div>
              </div>

              <div class="lineTextContainer row">
                <div class="leftTitle">
                  <Text color="rgba(0, 0, 0,.7)" size={15}>
                    使用门店
                  </Text>
                </div>
                <div class="rightDetail">
                  <Text size={15} weight={400} class="rightText">
                    {confirmStore?.name || '-'}
                  </Text>
                </div>
              </div>
            </div>

            <div class="confirm-button column w-percent100 margin-bottom-10">
              {coupons.value[0].expireType === 2 && (
                <div class="input-content row w-percent100 align-items-center">
                  <input class="input" type="text" v-model={password.value} placeholder="请输入卡券密码" />
                </div>
              )}

              <CustomButton
                weight={500}
                onClick={confirmSecond}
                class="w-percent100 margin-top-10"
                disabled={btnDisabled.value}
              >
                确认核销
              </CustomButton>
            </div>

            <CustomPopup
              v-model={writeOffError.value}
              maskCloseableValue={false}
              title="核销失败"
              titleWeight={620}
              onConfirm={() => (writeOffError.value = false)}
            >
              <div class="row just-content-center">{writeOffInfo.value?.msg || '核销失败了'}</div>
            </CustomPopup>

            {/*  核销成功的弹窗*/}
            <CustomPopup maskCloseableValue={false} v-model={writeOffSuccess.value} titleWeight={620}>
              {{
                title: () => (
                  <div class="row successTopPngContainer">
                    <img
                      src="https://pic.imgdb.cn/item/662e1c560ea9cb1403579e43.png"
                      class="row successPng"
                      alt="该卡券已核销成功"
                    />
                  </div>
                ),
                default: () => (
                  <div class="successText column w-percent100 just-content-center align-items-center">
                    <Text weight={600} size="20px">
                      核销成功
                    </Text>
                  </div>
                ),
                bottom: () => (
                  <div class="row w-percent100 just-content-space-between">
                    <CustomButton
                      class="confirmBtn w-percent45"
                      color="#627CFF"
                      background="#ffffff"
                      weight={500}
                      onClick={reLaunchToContainer}
                    >
                      回到首页
                    </CustomButton>

                    <CustomButton class="confirmBtn w-percent45" weight={500} onClick={goTOWriteOffPage}>
                      查看核销记录
                    </CustomButton>
                  </div>
                )
              }}
            </CustomPopup>
          </div>
        </BasePage>
      )
    }
  }
})
