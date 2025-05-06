// 登录选择页面
import './style.scss'
import { defineComponent, ref } from 'vue'
import CustomButton from '../../components/common/customButton'
import Text from 'src/components/common/Text'
import Taro from '@tarojs/taro'
import { goToLogin, reLaunchToStoreSelector } from '../../router'
import { Icon } from '@kacat/ui'
import { user } from '../../api'
import { useGlobalStore } from '../../stores'
import { Button } from '@tarojs/components'
import { useToast } from '@kacat/core'
import { getItemChooseStore } from '../../utils'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'LoginSelector',
  setup() {
    // 是否展示授权按钮
    const showAuthorizationButton = ref<boolean>(false)
    const store = useGlobalStore()
    const openid = ref<string>('')
    // 是否禁用按钮
    const disableBtn = ref<boolean>(false)
    // 一键登录
    const onClickLogin = async () => {
      // 防止残留token影响请求
      Taro.clearStorageSync()
      disableBtn.value = true
      await Taro.login({
        success: res => {
          if (res.code) {
            user
              .loginBuOneButton({ code: res.code, appid: store.appid })
              .then((result: any) => {
                if (!result.success) {
                  Taro.showToast({
                    title: result.msg || '登录失败',
                    icon: 'none'
                  })
                  disableBtn.value = false
                } else {
                  if (result.data?.status === 2) {
                    // 展示用户授权按钮
                    Taro.showToast({
                      title: '需要授权登录',
                      icon: 'none'
                    })
                    showAuthorizationButton.value = true
                    openid.value = result.data.openid
                  } else {
                    // 写入token
                    Taro.setStorageSync('token', result.data.merchants)
                    // 不用绑定，直接登录
                    if (result.data.merchants.length === 1) {
                      getItemChooseStore(result.data.merchants[0]).then()
                      return
                    }
                    // 写入store
                    store.updateUserInfo(result.data.merchants)
                    // 登陆成功,跳转店铺选择页面
                    reLaunchToStoreSelector()
                  }
                }
              })
              .catch(e => {
                console.log(e)
                // 提示
                Taro.showToast({
                  title: '登录失败',
                  icon: 'none'
                })
                disableBtn.value = false
              })
          } else {
            Taro.showToast({
              title: '获取code失败',
              icon: 'none'
            })
          }
        },
        fail: () => {
          Taro.showToast({
            title: '获取code失败',
            icon: 'none'
          })
          disableBtn.value = false
        }
      })
    }

    // 绑定手机号的逻辑
    const bingUserPhone = async (code: string) => {
      // 正在绑定你的手机号
      Taro.showToast({
        title: '正在绑定你的手机号',
        icon: 'none'
      })

      user
        .bindPhone({ code, appid: store.appid, openid: openid.value })
        .then(res => {
          console.log('res:')
          console.log(res)
          // 绑定成功,自动调用一下
          onClickLogin()
        })
        .catch(e => {
          console.log('e:')
          console.log(e)
          Taro.showToast({
            title: '绑定失败了',
            icon: 'none'
          })
        })
    }

    const onGetphonenumber = (e: any) => {
      if (!e.detail.code) {
        useToast('您取消了授权')
        return void 0
      }
      Taro.showLoading()
      bingUserPhone(e.detail.code)
    }

    return () => {
      return (
        <div class="loginSelector">
          <div class="cardContainer column align-items-center w-percent100">
            <div class="logoContainer column just-content-center"></div>
            <Text weight={620} size={23} class="margin-top-large">
              卡猫商家工作台
            </Text>
          </div>
          <div class="buttonContainer w-percent100">
            <div class="column w-percent100">
              {showAuthorizationButton.value && (
                <CustomButton weight={540} background="#627cff2e" color="#3B4EDF" borderColor="rgba(0,0,0,0)">
                  <Button
                    disabled={false}
                    class="c_quick-login__button-oepn-type"
                    openType="getPhoneNumber"
                    onGetphonenumber={onGetphonenumber}
                  ></Button>
                  授权
                </CustomButton>
              )}

              {!showAuthorizationButton.value && (
                <>
                  <CustomButton weight={540} onClick={onClickLogin} class="w-percent100" disabled={disableBtn.value}>
                    一键登录
                  </CustomButton>
                  <div class="block passwordLoginBtn w-percent100">
                    <CustomButton
                      weight={540}
                      background="#627cff2e"
                      color="#3B4EDF"
                      borderColor="rgba(0,0,0,0)"
                      onClick={() => goToLogin('phone')}
                    >
                      <Icon name="iphone" class="color-gray" />
                      手机号登录
                    </CustomButton>
                  </div>
                  <div class="loginByPhoneBtnContainer row w-fit-content just-content-center align-items-center">
                    <div class="loginByPhoneBtn" onClick={() => goToLogin('password')}>
                      账号密码登录
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )
    }
  }
})
