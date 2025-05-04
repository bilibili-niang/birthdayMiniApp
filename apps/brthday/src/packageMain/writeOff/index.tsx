/*
import './style.scss'
import { defineComponent, ref } from 'vue'
import { useRouter } from '@tarojs/taro'
import { BasePage } from '@kacat/core'
import CustomButton from 'src/components/common/customButton'
import { stores } from 'src/api'
import Text from 'src/components/common/Text/index'
import CustomPopup from 'src/components/common/customPopup'
import { goToSuccessPage } from '../../router'
import { useGlobalStore } from '../../stores'
import Taro from '@tarojs/taro'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'WriteOff',
  setup() {
    const store = useGlobalStore()
    const isDisable = ref(false)
    const inputValue = ref<string | null>('')
    // 控制弹窗
    const alertFlag = ref(false)
    // 核销信息,用来展示
    const couponInfo = ref<{ msg?: string; title?: string }>({})

    // 提交券码
    const submitCouponCode = () => {
      if (!inputValue.value) {
        // 提示
        Taro.showToast({
          title: '请输入券码',
          icon: 'none'
        })
        return
      }
      isDisable.value = true
      checkCode(inputValue.value)
    }
    // 获取当前扫码传来的code
    const init = () => {
      // 获取页面传参
      const searchObj = useRouter().params
      if (searchObj?.id) {
        inputValue.value = searchObj.id
        checkCode(inputValue.value)
      }
    }

    //　查询该码是否有效
    const checkCode = async (code: string) => {
      if (!code) return void 0
      stores
        .checkout(code)
        .then((res: any) => {
          if (res?.success) {
            store.updateGoodsInfo(res.data)
            goToSuccessPage()
          } else {
            // 失败时,展示提示弹窗
            alertFlag.value = true
          }
        })
        .catch(e => {
          couponInfo.value.msg = e.response.data?.msg
          if (couponInfo.value?.msg && couponInfo.value.msg.includes('该券为')) {
            couponInfo.value.title = '温馨提示'
          } else if (couponInfo.value?.msg && couponInfo.value.msg.includes('查无此券')) {
            couponInfo.value.title = '温馨提示'
          }
          alertFlag.value = true
        })
        .finally(() => {
          setTimeout(() => {
            isDisable.value = false
          }, 2000)
        })
    }

    const closeAlert = () => {
      alertFlag.value = false
      couponInfo.value.title = ''
    }
    init()

    return () => {
      return (
        <BasePage
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent',
            redirectUrl: '/packageMain/container/index'
          }}
          backgroundColor="transparent"
        >
          <div class="writeOff column  overxHidden">
            <div class="backContainer">
              <div class="bacItem"></div>
            </div>

            <Text weight={620} size={27} class="padding-l-r-normal">
              输码核销
            </Text>
            <img
              class="fingerImage"
              src="https://dev-cdn.kacat.cn/upload/20240517/8b05beca868048c9d35c756f47f5c9b5.png"
              alt=""
            />
            <div class="inputType overxHidden">
              <input
                type="text"
                class="input writeOffInput row align-items-center"
                placeholder="请输入券码核销"
                v-model={inputValue.value}
              />
              <div class="column">
                <CustomButton
                  class="verificationBtn w-percent100"
                  weight={540}
                  disabled={isDisable.value}
                  onClick={submitCouponCode}
                >
                  验证核销信息
                </CustomButton>
              </div>
            </div>
          </div>

          {/!*查询券码结果的失败弹窗,成功时直接跳转*!/}
          <CustomPopup
            v-model={alertFlag.value}
            title={couponInfo.value?.title ? couponInfo.value?.title : '核销失败'}
            titleSize={19}
            titleWeight={600}
          >
            {{
              default: () => (
                <Text size={15} weight={400} class="margin-0-auto" color="rgba(0,0,0,.7)">
                  {couponInfo.value?.msg}
                </Text>
              ),
              bottom: () => (
                <div class="row w-percent100 just-content-center">
                  <CustomButton weight={500} onClick={closeAlert} class="w-percent50 confirmBtn">
                    知道了
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
*/
