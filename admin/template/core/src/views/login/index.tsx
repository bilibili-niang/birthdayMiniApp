import { computed, defineComponent, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { Button, Empty, Icon, Input, message, Spin } from '@kacat/ui'
import './style.scss'
import wechat from '../../assets/wechat.svg'
import MagnetMatrix from './magnet-matrix'
import { useRouter } from 'vue-router'
import {
  authMerchantDirect,
  authMessageCode,
  authMessageCodeThenChooseMerchant,
  type IAuthMerchant,
  loginByAccountAndPassword,
  queryAccountSupportPasswordLogin,
  resetPasswordRequest,
  sendMessageCode
} from '../../api/login'
import useRequestErrorMessage from '../../hooks/useRequestErrorMessage'
import test from '../../utils/test'
import useAppStore from '../../stores/app'
import useUserStore from '../../stores/user'
import useBasicLayoutStore from '../../stores/basic-layout'

export default defineComponent({
  name: 'LegoLoginPage',
  setup() {
    const router = useRouter()
    const appStore = useAppStore()

    const userStore = useUserStore()

    const scope = computed(() => {
      return appStore.scope ?? localStorage.getItem('scope') ?? 'cs'
    })

    watch(
      () => userStore.userInfo,
      (v) => {
        if (userStore.userInfo?.id) {
          try {
            onLoginSuccess()
          } catch (e) {
            console.log(e)
          }
        }
      },
      { immediate: true }
    )
    const state = reactive({
      type: 'sms',
      mobile: localStorage.getItem('Last-Login-Mobile') || '',
      code: '',
      smsId: '',
      account: '',
      password: '',
      newPassword: '',
      qrcode: '',
      countDown: 30,
      proclaimed: false,
      loading: false,
      smsLoading: false
    })

    const countdownRef = ref(0)
    let countdownTimer: NodeJS.Timeout

    const countdown = () => {
      countdownRef.value--
      if (countdownRef.value > 0) {
        countdownTimer = setTimeout(countdown, 1000)
      }
    }

    onBeforeUnmount(() => {
      clearTimeout(countdownTimer)
    })


    const onLoginSuccess = () => {
      // const link = url.parse(window.location.href, true)
      // const { redirect = '/' } = link.query
      // window.location.replace(redirect as string)
      router.replace('/')
    }


    const handleLogin = () => {
      // STEP 密码登录
      if (state.type === 'pwd') {
        const { account, password } = state
        if (!account || !password) {
          return message.error('请输入账号和密码')
        }
        const loading = message.loading('登录中...')
        // 查询是否支持密码登录,不支持了需要重置密码
        queryAccountSupportPasswordLogin(account)
          .then((res) => {
            if (!res.success) {
              // 该用户不存在
              useRequestErrorMessage(res)
              return void 0
            }
            if (res.data) {
              loginByAccountAndPassword({ account, password })
                .then((re) => {
                  if (re.success) {
                    merchantList.value = Array.isArray(re.data) ? re.data : []
                    state.type = 'merchant'
                    // 只有一个商户，自动触发选择
                    if (merchantList.value.length === 1) {
                      onMerchantChoose(0)
                    }
                  } else {
                    useRequestErrorMessage(re)
                  }
                })
                .catch((e) => {
                  useRequestErrorMessage(e)
                })
                .finally(loading)
            } else {
              // TODO 不知道为什么res没有data就需要重置
              // 重置密码
              message.error('密码需要重置')
              state.type = 'resetPassword'
            }
          })
          .finally(loading)
        // STEP 重置密码
      } else if (state.type === 'resetPassword') {
        if (!test.mobile(state.account)) {
          return message.error('请输入11位数手机号码')
        }
        if (!test.code(state.code)) {
          return message.error('请输入6位数验证码')
        }
        if (!state.newPassword) {
          return message.error('请输入新密码')
        }
        // 请求
        state.loading = true
        resetPasswordRequest({
          mobile: state.account,
          smsId: state.smsId,
          code: state.code,
          newPassword: state.newPassword
        })
          .then((res: any) => {
            if (res.success) {
              message.success(res.msg)
              state.loading = false
              state.type = 'pwd'
            } else {
              message.error(res.msg)
              state.loading = false
            }
          })
          .catch((e) => {
            state.loading = false
            useRequestErrorMessage(e)
          })
      } else if (state.type === 'sms') {
        if (!test.mobile(state.mobile)) {
          return message.error('请输入11位数手机号码')
        }
        if (!test.code(state.code)) {
          return message.error('请输入6位数验证码')
        }
        state.loading = true

        if (scope.value === 'su') {
          return authMessageCode({
            scope: scope.value,
            phone: state.mobile,
            smsId: state.smsId,
            code: state.code
          })
            .then(onAuthResolve)
            .catch((err) => {
              message.error(err.response.data.error_description)
            })
            .finally(() => {
              state.loading = false
              state.code = ''
              state.smsId = ''
            })
        }

        authMessageCodeThenChooseMerchant({
          scope: scope.value,
          phone: state.mobile,
          smsId: state.smsId,
          code: state.code
        })
          .then((res: any) => {
            merchantList.value = Array.isArray(res.data) ? res.data : []
            state.type = 'merchant'

            // 只有一个商户，自动触发选择
            if (merchantList.value.length === 1) {
              onMerchantChoose(0)
            }
          })
          .catch((err) => {
            message.error(err.response.data.error_description)
          })
          .finally(() => {
            state.loading = false
            state.code = ''
            state.smsId = ''
          })
      }
    }

    const onAuthResolve = (res: any) => {
      localStorage.setItem('Blade-Auth', `${res.token_type} ${res.access_token}`)
      localStorage.setItem('Last-Login-Mobile', state.mobile)
      countdownRef.value = 0
      clearTimeout(countdownTimer)
      message.success('登录成功')
      useBasicLayoutStore().initMenu()
      useUserStore()
        .getUserInfo()
        .then(() => {
        })
      onLoginSuccess()
    }

    const sms = () => {
      if (state.smsLoading || countdownRef.value > 0) {
        return false
      }
      state.smsLoading = true
      sendMessageCode(state.type === 'resetPassword' ? state.account : state.mobile)
        .then((res: any) => {
          if (res.code !== 200) {
            throw new Error(res.msg || res.data.msg)
          }
          message.success(res.msg || res.data.msg || '验证码发送成功，请留意短信')
          state.smsId = res.data.id
          countdownRef.value = 60
          countdown()
        })
        .catch((err) => {
          console.log(err)
          useRequestErrorMessage(err)
        })
        .finally(() => {
          state.smsLoading = false
        })
    }
    const WechatQRCode = () => {
      return (
        <>
          <div class="main-title">微信安全登录</div>
          <div class="qr-code">
            <img src="https://pixso.cn/user/login/assets/wechat-qr.d4b88757.png" alt="" />
            <div class="qr-code__refresh clickable" onClick={() => message.error('暂未支持扫码登录，请使用验证码登录')}>
              <span>二维码已失效</span>
              <span>点击刷新</span>
            </div>
          </div>
          <div class="wechat-protocol">
            请关注公众号，登录代表同意{' '}
            <a class="clickable" href="#">
              隐私政策
            </a>
          </div>
          <div class="toggle-type clickable" onClick={() => (state.type = 'sms')}>
            手机短信登录
          </div>
        </>
      )
    }

    const Sms = () => {
      return (
        <>
          <div class="main-title">手机短信登录</div>
          <Button class="toggle-wechat" onClick={() => (state.type = 'qrcode')}>
            <img src={wechat} alt="" />
            微信登录
          </Button>
          <div class="divider">或</div>
          <Input
            class="ipt"
            maxlength={11}
            placeholder="请输入手机号"
            value={state.mobile}
            onChange={(e) => (state.mobile = e.target.value as string)}
          ></Input>
          <Input
            class="ipt"
            placeholder="请输入验证码"
            maxlength={6}
            value={state.code}
            onChange={(e) => (state.code = e.target.value as string)}
            suffix={
              <div class={['sms-btn clickable', countdownRef.value > 0 && '--disabled']} onClick={sms}>
                {countdownRef.value > 0 ? `${countdownRef.value}s` : state.smsLoading ? <Spin /> : '发送'}
              </div>
            }
          ></Input>
          <Button class="primary-btn" type="primary" loading={state.loading} onClick={handleLogin}>
            登录
          </Button>
          <div class="toggle-type clickable" onClick={() => (state.type = 'pwd')}>
            密码登录
          </div>
        </>
      )
    }

    const Pwd = () => {
      return (
        <>
          <div class="main-title">账号密码登录</div>
          <Button class="toggle-wechat" onClick={() => (state.type = 'qrcode')}>
            <img src={wechat} alt="" />
            微信登录
          </Button>
          <div class="divider">或</div>
          <Input
            class="ipt"
            placeholder="请输入手机号/邮箱"
            value={state.account}
            onChange={(e) => (state.account = e.target.value as string)}
          ></Input>
          {state.proclaimed ? (
            <Input
              class="ipt"
              placeholder="请输入密码"
              value={state.password}
              onChange={(e) => (state.password = e.target.value as string)}
              suffix={
                <div class="suffix-icon" onClick={() => (state.proclaimed = false)}>
                  <Icon name="preview"></Icon>
                </div>
              }
            ></Input>
          ) : (
            <div class="ipt-wrap">
              <Input
                class="ipt"
                type="password"
                placeholder="请输入密码"
                value={state.password}
                onChange={(e) => (state.password = e.target.value as string)}
                suffix={
                  <div class="suffix-icon" onClick={() => (state.proclaimed = true)}>
                    <Icon name="preview-close"></Icon>
                  </div>
                }
              ></Input>
              <a onClick={() => (state.type = 'resetPassword')}>忘记密码</a>
            </div>
          )}

          <Button class="primary-btn" type="primary" loading={state.loading} onClick={handleLogin}>
            登录
          </Button>

          <div class="toggle-type clickable" onClick={() => (state.type = 'sms')}>
            手机短信登录
          </div>
        </>
      )
    }

    const isMerchantAuthLoading = ref(false)

    const onMerchantChoose = (index: number) => {
      const target = merchantList.value[index]
      isMerchantAuthLoading.value = true
      authMerchantDirect({
        token: target.directToken,
        scope: scope.value
      })
        .then(onAuthResolve)
        .catch((err) => {
          message.error(err.response.data.error_description)
        })
        .finally(() => {
          isMerchantAuthLoading.value = false
        })
    }

    const merchantList = ref<IAuthMerchant[]>([])

    const MerchantChoose = () => {
      return (
        <div class="login-merchant">
          <Spin spinning={isMerchantAuthLoading.value}>
            <div class="login-merchant__title">
              请选择商户账号
              <a
                style="font-size:12px;margin-left:auto;"
                onClick={() => {
                  state.type = 'sms'
                }}
              >
                重新登录
                <Icon name="right" />
              </a>
            </div>
            <div class="login-merchant__list scroller">
              {merchantList.value.length === 0 && <Empty style="margin-top:48px;" description="无可登录的商户账号" />}
              {merchantList.value.map((item, index) => {
                return (
                  <div
                    class="login-merchant__item clickable"
                    onClick={() => {
                      onMerchantChoose(index)
                    }}
                  >
                    <div class="login-merchant__avatar" style={{ backgroundImage: `url(${item.logoImgUri})` }}></div>
                    <div class="login-merchant__info">
                      <div class="login-merchant__name">{item.name}</div>
                      <div class="login-merchant__company">{item.companyName}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Spin>
        </div>
      )
    }

    const ResetPassword = () => {
      return (
        <>
          <div class="main-title">忘记密码</div>
          <Input
            class="ipt"
            placeholder="请输入手机号"
            value={state.account}
            onChange={(e) => (state.account = e.target.value as string)}
          ></Input>
          <Input
            class="ipt"
            placeholder="请输入验证码"
            maxlength={6}
            value={state.code}
            onChange={(e) => (state.code = e.target.value as string)}
            suffix={
              <div class={['sms-btn clickable', countdownRef.value > 0 && '--disabled']} onClick={sms}>
                {countdownRef.value > 0 ? `${countdownRef.value}s` : state.smsLoading ? <Spin /> : '发送'}
              </div>
            }
          ></Input>
          <Input
            class="ipt"
            type="password"
            placeholder="请输入新密码"
            value={state.newPassword}
            onChange={(e) => (state.newPassword = e.target.value as string)}
            suffix={
              <div class="suffix-icon" onClick={() => (state.proclaimed = true)}>
                <Icon name="preview-close"></Icon>
              </div>
            }
          ></Input>
          <Button class="primary-btn" type="primary" loading={state.loading} onClick={handleLogin}>
            重置密码
          </Button>
          <div class="toggle-type clickable" onClick={() => (state.type = 'pwd')}>
            返回
          </div>
        </>
      )
    }

    return () => {
      return (
        <div class="login-page">
          <div class="logo">
            {/* <img src={logo} alt="" /> */}
            {/* <strong>商户后台</strong> */}
          </div>
          <MagnetMatrix />
          {/* @ts-ignore */}
          <div class="login-box" theme="light">
            {state.type === 'resetPassword' ? (
              <ResetPassword />
            ) : state.type === 'merchant' ? (
              <MerchantChoose />
            ) : state.type === 'qrcode' ? (
              <WechatQRCode />
            ) : state.type === 'pwd' ? (
              <Pwd />
            ) : (
              <Sms />
            )}
          </div>
        </div>
      )
    }
  }
})
