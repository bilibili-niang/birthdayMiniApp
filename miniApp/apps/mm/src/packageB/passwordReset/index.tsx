import './styles.scss'
import { ref, defineComponent } from 'vue'
import { BasePage } from '@kacat/core'
import Taro from '@tarojs/taro'
import CustomButton from 'src/components/common/customButton'
import { user } from '../../api'
import { goPageIndex } from '../../router'
import Text from 'src/components/common/Text'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'passwordReset',
  setup() {
    const loginAccount = ref({
      phone: '',
      newPassword: '',
      id: '',
      value: ''
    })

    // 是否展示新密码输入框
    const showPasswordInput = ref(false)

    // 是否展示确认按钮,在发送验证码之后才显示
    const showConfirmButton = ref(false)

    // 获取验证码
    const getverificationCode = () => {
      if (!loginAccount.value.phone) {
        // 提示
        Taro.showToast({
          title: '请输入手机号',
          icon: 'none'
        })
        return void 0
      } else {
        if (!/^1[3456789]\d{9}$/.test(loginAccount.value.phone)) {
          Taro.showToast({
            title: '请输入正确的手机号',
            icon: 'none'
          })
          return
        }
        showConfirmButton.value = true

        // 发送验证码
        user.postCaptcha({ phone: loginAccount.value.phone }).then(res => {
          if (res.success) {
            showPasswordInput.value = true
            loginAccount.value.id = res.data.id
          }
        })
      }
    }

    // 确认提交新密码
    const confirm = () => {
      user.resetPassword(loginAccount.value).then(res => {
        if (res.success) {
          // 提示
          Taro.showToast({
            title: res.msg || '密码修改成功',
            icon: 'none'
          })
          setTimeout(() => {
            goPageIndex()
          }, 1000)
        } else {
          // 提示
          Taro.showToast({
            title: res.msg || '密码修改失败',
            icon: 'none'
          })
        }
      })
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
          class="passwordReset"
        >
          <div class="padding-top-50">
            <Text weight={600} size={23}>
              密码重置
            </Text>
          </div>

          <div class="inputContainer">
            <div class="inputRow">
              <input class="input" type="number" v-model={loginAccount.value.phone} placeholder="请输入手机号" />
            </div>

            <div class="inputRow">
              <input class="input" type="text" v-model={loginAccount.value.value} placeholder="请输入验证码" />
            </div>

            {showPasswordInput.value && (
              <div class="inputRow">
                <input
                  class="input"
                  type="number"
                  v-model={loginAccount.value.newPassword}
                  placeholder="请输入新密码"
                />
              </div>
            )}
          </div>

          <div class="buttomOpBtns">
            {showConfirmButton.value ? (
              <CustomButton onClick={confirm}>确认</CustomButton>
            ) : (
              <CustomButton onClick={getverificationCode}>获取验证码</CustomButton>
            )}
          </div>
        </BasePage>
      )
    }
  }
})
