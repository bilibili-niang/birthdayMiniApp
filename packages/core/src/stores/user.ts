import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import requestUserInfo, {
  $getUserProfile,
  $getUserProfileSettingsConfig,
  IUserProfileSettingsConfig,
  type UserInfo
} from '../api/user/getUserInfo'
import Taro from '@tarojs/taro'
import { useConfirm, useOpenLocationPermission, useResponseMessage } from '../hooks'
import { defaults } from 'lodash-es'
import { $getWechatOpenId, requestUpdateUserProfile } from '../api/user'
import { COMMON_STATUS_OFF, COMMON_STATUS_ON, DEFAULT_AVATAR } from '@kacat/config'
import { encryptPhoneNumber } from '@kacat/utils'
import useAppStore from './system'
import { useWechatBind } from '../hooks/useWechatBind'
import { $getLocationDetails } from '../hooks/useChooseAddress/api'

const useUserStore = defineStore('user', () => {
  /** 用户信息 */
  const user = ref<UserInfo | null | undefined>(null)
  const isUserLoading = ref(false)

  /** 是否登录 */
  const isLogin = computed(() => user.value !== null)

  const token = computed(() => (isLogin.value ? Taro.getStorageSync('Blade-Auth') : null))

  /** 获取用户信息 */
  const getUserInfo = async () => {
    try {
      isUserLoading.value = true
      const res = await requestUserInfo()
      if (res.code === 200) {
        user.value = res.data
        checkIsWechatBind()
        getUserProfile()
        getUserProfileConfig()
        return Promise.resolve(user.value)
      } else {
        return Promise.reject(res)
      }
    } catch (err) {
      user.value = null
      return Promise.reject(err)
    } finally {
      isUserLoading.value = false
    }
  }

  const avatar = computed(() => {
    return user.value?.avatar || DEFAULT_AVATAR
  })
  const nickname = computed(() => {
    if (!user.value) return undefined
    const { name, phone } = user.value
    return (name && name !== phone ? name : encryptPhoneNumber(phone)) || '匿名用户'
  })

  const phone = computed(() => {
    if (!user.value?.phone) return undefined
    return encryptPhoneNumber(user.value.phone)
  })

  /** 设置用户个人资料 */
  const setUserProfile = async (options: { nickname?: string; avatar?: string }) => {
    if (!user.value) {
      throw new Error('用户未登录，无法修改昵称、头像')
    }
    const _options = defaults(options, {
      nickname: nickname.value!,
      avatar: avatar.value!
    })
    try {
      const res = await requestUpdateUserProfile(_options)
      if (res.code === 200) {
        await getUserInfo()
        return Promise.resolve()
      } else {
        useResponseMessage(res)
        return Promise.reject(res.msg)
      }
    } catch (err) {
      useResponseMessage(err)
      return Promise.reject(err)
    }
  }

  const getUserLocation = async (options?: { denyTip?: boolean; details?: boolean }) => {
    console.log('获取位置')
    return new Promise((resolve, reject) => {
      userLocationDeny.value = false
      Taro.getLocation({
        type: 'gcj02',
        success: async res => {
          try {
            let details = userLocation.value?.details
            if (options?.details) {
              try {
                details = ((await $getLocationDetails({ lat: res.latitude, lng: res.longitude })) as any).result
              } catch (err) {
                console.log('逆解析失败', err)
              }
            }
            userLocation.value = res
            userLocation.value.details = details
            resolve(userLocation.value)
          } catch (err) {
            reject(err)
          }
        },
        fail: err => {
          if (err.errMsg === 'getLocation:fail auth deny') {
            userLocationDeny.value = true
            if (options?.denyTip) {
              useOpenLocationPermission()
            }
          }
          reject(err)
        }
      })
    })
  }

  /** 退出登录 */
  const logout = (options?: { onSuccess?: () => void; onCancel?: () => void }) => {
    useConfirm({
      title: '提示',
      content: '您确定要退出登录吗？',
      onConfirm: () => {
        Taro.removeStorageSync('Blade-Auth')
        user.value = null
        options?.onSuccess?.()
      },
      onCancel: () => {
        options?.onCancel?.()
      }
    })
  }

  /** 用户拒绝授权定位 */
  const userLocationDeny = ref(false)
  // const userLocation = ref({ longitude: 118.036297, latitude: 24.621834 })
  const userLocation = ref<null | (Taro.getLocation.SuccessCallbackResult & { details?: any })>(null as any)

  const isWechatBind = ref<boolean>()

  /** 检测是否绑定微信 */
  const checkIsWechatBind = async () => {
    // 非微信小程序平台？怎么处理呢
    if (process.env.TARO_ENV !== 'weapp') {
      isWechatBind.value = true
      return Promise.resolve()
    }

    return $getWechatOpenId(useAppStore().appId!)
      .then(res => {
        if (res.data?.length > 0) {
          isWechatBind.value = true
        } else {
          isWechatBind.value = false
        }
      })
      .catch(err => {
        isWechatBind.value = undefined
      })
  }

  const bindWechat = () => {
    useWechatBind()
  }

  /* --------------------------------- 用户个人信息 --------------------------------- */

  const userProfile = ref({})

  const getUserProfile = () => {
    $getUserProfile().then(res => {
      userProfile.value = res.data?.infoContent || {}
    })
  }

  /** 用户个人信息配置 */
  const userProfileConfig = ref<IUserProfileSettingsConfig | null>(null)

  /** 用户个人信息是否可编辑 */
  const userProfileEditable = computed(() => {
    return userProfileConfig.value?.status === COMMON_STATUS_ON
  })

  /** 用户个人信息字段 */
  const userProfileFields = computed(() => {
    if (!userProfileEditable.value) return []
    return (userProfileConfig.value?.content || []).slice(0).sort((a, b) => {
      return b.sort - a.sort
    })
  })

  /** 用户个人信息配置加载中 */
  const isUserProfileConfigLoading = ref(false)

  /** 获取用户个人信息配置 */
  const getUserProfileConfig = () => {
    if (!userProfileConfig.value) {
      isUserProfileConfigLoading.value = true
    }
    $getUserProfileSettingsConfig()
      .then(res => {
        userProfileConfig.value = res.data
      })
      .finally(() => {
        isUserProfileConfigLoading.value = false
      })
  }

  /** 用户信息是否需要完善（存在必填项未填写） */
  const isUserProfileNeedComplete = computed(() => {
    // 不需要填写
    if (userProfileConfig.value?.status === COMMON_STATUS_OFF) return false

    return !!userProfileConfig.value?.content?.some(item => {
      return item.required === COMMON_STATUS_ON && [undefined, null, ''].includes(userProfile.value?.[item.key])
    })
  })

  const userProfileProgress = computed(() => {
    const list = (userProfileConfig.value?.content ?? []).filter(item => item.required === COMMON_STATUS_ON)

    return (
      1 -
      list.filter(item => {
        return [undefined, null, ''].includes(userProfile.value?.[item.key])
      }).length /
        list.length
    )
  })

  const isNeedFaceImage = computed(() => {
    // 不需要填写
    if (userProfileConfig.value?.status === COMMON_STATUS_OFF) return false
    return !!userProfileConfig.value?.content.find(item => {
      return item.key === 'faceImage' && item.required === COMMON_STATUS_ON && !userProfile.value?.['faceImage']
    })
  })

  return {
    user,
    isUserLoading,
    token,
    isLogin,
    avatar,
    nickname,
    phone,
    getUserInfo,
    logout,
    userLocation,
    userLocationDeny,

    getUserLocation,
    setUserProfile,

    isWechatBind,
    checkIsWechatBind,
    bindWechat,

    getUserProfile,
    userProfile,
    getUserProfileConfig,
    userProfileEditable,
    userProfileFields,
    isUserProfileConfigLoading,
    isUserProfileNeedComplete,
    userProfileProgress,
    isNeedFaceImage
  }
})

export default useUserStore
