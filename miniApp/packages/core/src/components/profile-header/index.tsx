import { defineComponent, reactive, withModifiers } from 'vue'
import { useUserStore } from '../../stores'
import { storeToRefs } from 'pinia'
import { DEFAULT_AVATAR } from '@kacat/config'
import { useLogin } from '../../hooks'
import { Icon } from '@kacat/ui'
import './style.scss'
import { navigateTo } from '../../utils'

export const CommonProfileHeader = defineComponent({
  name: 'CommonProfileHeader',
  setup() {
    const userStore = useUserStore()
    const {
      isLogin,
      avatar,
      nickname,
      phone,
      userProfileEditable,
      isUserProfileNeedComplete,
      userProfileProgress,
      isNeedFaceImage
    } = storeToRefs(userStore)

    const navigateToSettings = () => {
      navigateTo({
        url: '/packageOther/settings/index'
      })
    }

    const toProfileSettings = () => {
      navigateTo({
        url: '/packageOther/profile-settings/index'
      })
    }

    return () => {
      return (
        <div class="common-profile-header">
          {isLogin.value ? (
            <div class="user-info" onClick={navigateToSettings}>
              <img class="user-avatar" src={avatar.value || DEFAULT_AVATAR} />
              <div class="user-info-text">
                <div class="user-nickname">{nickname.value}</div>
                <div class="user-mobile">{phone.value}</div>
              </div>
              {userProfileEditable.value && (
                <div
                  class={['to-profile-settings', isUserProfileNeedComplete.value && 'required']}
                  onClick={withModifiers(toProfileSettings, ['stop'])}
                >
                  {isUserProfileNeedComplete.value ? (
                    <div
                      class="progress"
                      style={{
                        '--ratio': userProfileProgress.value * 100 + '%'
                      }}
                    ></div>
                  ) : (
                    <Icon name="permissions" />
                  )}
                  {isUserProfileNeedComplete.value ? '完善资料' : '个人信息'}
                  <Icon name="right" />
                  {isNeedFaceImage.value && <div class="stock-out">录入人脸识别</div>}
                </div>
              )}
            </div>
          ) : (
            <div class="user-info" onClick={() => useLogin()}>
              <img class="user-avatar" src={DEFAULT_AVATAR} />
              <div class="user-info-text">
                <div class="user-nickname">立即登录</div>
                <div class="user-mobile">获取更多优质服务</div>
              </div>
            </div>
          )}
        </div>
      )
    }
  }
})
