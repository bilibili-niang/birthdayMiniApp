import './style.scss'
import { defineComponent, ref } from 'vue'
import { useRouter } from '@tarojs/taro'
import Text from 'src/components/common/Text'
import CustomButton from 'src/components/common/customButton'
import { Icon } from '@kacat/ui'
import Taro from '@tarojs/taro'
import { user } from 'src/api'
import { useGlobalStore } from 'src/stores'
import { goToResetPassword, reLaunchToStoreSelector } from 'src/router'
import { captchaLoginApi } from 'src/api/user'
import { BasePage } from '@kacat/core'
import { getItemChooseStore } from '../../utils'
import { phoneLoginType } from '../../api/user/type'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'Login',
  setup() {
    // 获取页面传参
    const params = useRouter().params
    // 登录方式 账号密码 / 手机号
    const loginType = ref('password')
    const store = useGlobalStore()
    // 是否展示下面的 验证码 / 密码 输入框
    const showBottomInput = ref<boolean>(false)
    // 新增,声明定时器ID变量,懒得清除
    let timerId: ReturnType<typeof setTimeout> | null = null

    const init = () => {
      const { type = 'password' } = params
      loginType.value = type === 'undefined' ? 'password' : type
      if (process.env.TARO_ENV === 'h5') {
        isH5.value = true
      }
    }

    const loginAccount = ref({
      // 手机号/账户
      account: '',
      // 密码
      password: '',
      // 验证码
      captcha: '',
      cap: '',
      pwd: ''
    })

    // 登录成功的方法
    const loginSuccess = (data: phoneLoginType[]) => {
      // 写入token
      Taro.setStorageSync('token', data)
      // 提示登录成功
      Taro.showToast({
        title: '登录成功',
        icon: 'success'
      })
      // 写入store
      store.updateUserInfo(data)
      // 如果res.data 长度为1,直接跳转商铺页面
      if (data.length === 1) {
        getItemChooseStore(data[0]).then()
        return
      } else {
        // 登陆成功,跳转店铺选择页面
        reLaunchToStoreSelector()
      }
    }

    // 登录
    const login = () => {
      if (isDisable.value) return
      // 校验手机号
      if (!/^1[3456789]\d{9}$/.test(loginAccount.value.account)) {
        Taro.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
        return
      }

      // STEP 1验证码登录
      if (loginType.value === 'phone') {
        isDisable.value = true
        if (!loginAccount.value.account || !loginAccount.value.captcha) {
          Taro.showToast({
            title: '请输入手机号,验证码',
            icon: 'none'
          })
          isDisable.value = false
          return
        } else {
          isDisable.value = true
          user
            .loginByCaptcha({
              phone: loginAccount.value.account,
              id: captchaData.value,
              value: loginAccount.value.captcha
            })
            .then((res: captchaLoginApi) => {
              // 成功这里没有res.success
              if (!res.success) {
                // 弹窗
                Taro.showToast({
                  title: res.msg || '验证码错误',
                  icon: 'none'
                })
              } else {
                Taro.showToast({
                  title: '登录成功',
                  icon: 'success'
                })
                loginSuccess(res.data)
              }
            })
            .catch(e => {
              console.log('e:')
              console.log(e)
              // 弹窗
              Taro.showToast({
                title: e.response.data.msg || '登录出错了',
                icon: 'none'
              })
            })
            .finally(() => {
              timerId = setTimeout(() => {
                isDisable.value = false
              }, 3000)
            })
        }
      } else {
        // STEP 2账号密码登录
        Taro.clearStorageSync()
        if (!loginAccount.value.account || !loginAccount.value.password) {
          // 提示
          Taro.showToast({
            title: '请输入手机号,密码',
            icon: 'none'
          })
          return void 0
        }
        // 登录
        user
          .loginByPassword({
            phone: loginAccount.value.account,
            password: loginAccount.value.password
          })
          .then(res => {
            if (res.success) {
              Taro.showToast({
                title: '登录成功',
                icon: 'success'
              })
              loginSuccess(res.data)
            } else {
              // 提示
              Taro.showToast({
                title: res.msg || '出错了',
                icon: 'error'
              })
            }
          })
      }
    }

    // 下一步
    const nextStep = () => {
      if (!loginAccount.value.account) {
        return void 0
      }
      // 校验该手机号是否需要设置密码
      user
        .checkPasswordLogin(loginAccount.value.account)
        .then(res => {
          if (!res.success) {
            // 提示
            Taro.showToast({
              title: res.msg || '出错了',
              icon: 'none'
            })
            return
          }
          if (res.data) {
            console.log('支持账号密码登录')
            showBottomInput.value = true
          } else {
            console.log('需要初始化密码')
            goToResetPassword(null)
          }
        })
        .catch(e => {
          console.log('e:')
          console.log(e)
          // 提示
          Taro.showToast({
            title: e.response.data.msg || '出错了',
            icon: 'none'
          })
        })
    }

    // 是否显示密码 true 隐藏 false 显示
    const showFlag = ref(true)
    const isH5 = ref(false)
    const isDisable = ref(false)
    // 验证码id
    const captchaData = ref()
    // 密码的显隐切换
    const toggleShowFlag = () => (showFlag.value = !showFlag.value)

    // 发送验证码
    const sendCaptcha = () => {
      timeValue.value = 60
      // 校验手机号
      if (!/^1[3456789]\d{9}$/.test(loginAccount.value.account)) {
        Taro.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
        return void 0
      }
      // 展示下面的输入框
      showBottomInput.value = true

      // 防止残留token影响请求
      Taro.clearStorageSync()
      countdown()
      isDisable.value = true
      // 验证码登录
      user
        .postCaptcha({ phone: loginAccount.value.account })
        .then(res => {
          if (res.success) {
            Taro.showToast({
              title: res.msg || '验证码已发送',
              icon: 'success'
            })
            // 保存验证码id
            captchaData.value = res.data.id
          } else {
            Taro.showToast({
              title: res.msg || '验证码发送失败',
              icon: 'none'
            })
          }
        })
        .catch(e => {
          console.log('e:')
          console.log(e)

          Taro.showToast({
            title: e.msg || e.message || '验证码发送失败',
            icon: 'none'
          })
        })
      isDisable.value = false
      setTimeout(() => {
        isDisable.value = false
      }, 1300)
    }

    init()

    const timeValue = ref(60)
    // 从timeValue开始倒计时
    const countdown = () => {
      if (timeValue.value > 0) {
        timeValue.value--
        setTimeout(() => {
          countdown()
        }, 1000)
      } else {
      }
    }
    return () => {
      return (
        <BasePage
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="#ffffff"
        >
          <div class="login overxHidden">
            <div class="padding-top-50">
              <Text weight={600} size={23}>
                {loginType.value === 'password' ? '密码' : '验证码'}登录
              </Text>
              {loginType.value === 'password' ? (
                <Text size={15} weight={400} color="rgba(0,0,0,.4)">
                  请输入绑定的账号密码进行登录
                </Text>
              ) : (
                <Text size={15} weight={400} color="rgba(0,0,0,.4)">
                  请输入店员手机号进行登录
                </Text>
              )}
            </div>

            <div class="formContainer w-percent100">
              {/*密码登录*/}
              {loginType.value === 'password' && (
                <div class="passwor dLogin column">
                  {!showBottomInput.value ? (
                    <div class="phone row w-percent100 align-items-center">
                      <div class="leftInput">+86</div>
                      <div class="verticalOccupancy"></div>
                      <input
                        class="input"
                        type="number"
                        v-model={loginAccount.value.account}
                        placeholder="请输入手机号"
                      />
                    </div>
                  ) : (
                    <div class="password row w-percent100 align-items-center">
                      <input
                        class="input"
                        password={showFlag.value}
                        type="password"
                        onChange={e => {
                          loginAccount.value.password = e.target.value
                          loginAccount.value.pwd = e.target.value
                        }}
                        v-model={loginAccount.value.pwd}
                        placeholder="请输入密码"
                      />
                      {isH5.value ? (
                        <></>
                      ) : (
                        <div class="passwordBtn" onClick={toggleShowFlag}>
                          {showFlag.value ? (
                            <Icon name="yulan-guanbi_preview-close" />
                          ) : (
                            <Icon name="yulan-guanbi_preview-close-one" />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div class="column margin-top-20">
                {loginType.value === 'password' && !showBottomInput.value && (
                  <CustomButton
                    size={16}
                    class="loginBtn confirmBtn"
                    weight={540}
                    disabled={isDisable.value}
                    onClick={nextStep}
                  >
                    下一步
                  </CustomButton>
                )}
                {loginType.value === 'password' && showBottomInput.value && (
                  <CustomButton class="loginBtn confirmBtn" weight={540} disabled={isDisable.value} onClick={login}>
                    登录
                  </CustomButton>
                )}
              </div>

              {/*手机验证码登录*/}
              {loginType.value === 'phone' && (
                <div class="phoneLogin column">
                  {!showBottomInput.value ? (
                    <div class="phone row w-percent100 align-items-center">
                      <div class="leftInput">+86</div>
                      <div class="verticalOccupancy"></div>
                      <input
                        class="input"
                        type="number"
                        v-model={loginAccount.value.account}
                        placeholder="请输入手机号"
                      />
                    </div>
                  ) : (
                    <div class="captcha row align-items-center">
                      <input
                        class="input"
                        type="number"
                        onChange={e => {
                          loginAccount.value.captcha = e.target.value
                          loginAccount.value.cap = e.target.value
                        }}
                        v-model={loginAccount.value.cap}
                        placeholder="请输入验证码"
                      />
                      <div class="captchaBtn">
                        {timeValue.value === 0 ? (
                          <div class="get-message-again" onClick={sendCaptcha}>
                            重新获取
                          </div>
                        ) : (
                          timeValue.value + '秒后重新获取  '
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {loginType.value === 'password' && showBottomInput.value && (
              <div
                onClick={() => {
                  goToResetPassword(loginAccount.value.account)
                }}
                class="row w-percent100 just-content-space-between"
              >
                <div></div>
                <Text size={15} weight={400} color="rgba(0,0,0,.4)">
                  忘记密码
                </Text>
              </div>
            )}

            <div class="column margin-top-20">
              {loginType.value === 'phone' && !showBottomInput.value && (
                <CustomButton
                  size={16}
                  class="loginBtn confirmBtn"
                  weight={540}
                  disabled={isDisable.value}
                  onClick={sendCaptcha}
                >
                  获取验证码
                </CustomButton>
              )}
              {loginType.value === 'phone' && showBottomInput.value && (
                <CustomButton class="loginBtn confirmBtn" weight={540} disabled={isDisable.value} onClick={login}>
                  登录
                </CustomButton>
              )}
            </div>
          </div>
        </BasePage>
      )
    }
  }
})
