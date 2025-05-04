import { defineStore } from 'pinia'
import { computed, readonly, ref, shallowRef, toRaw, watch } from 'vue'
import Taro from '@tarojs/taro'
import { DIRECT_WEAPP_OPTIONS } from '@kacat/config'
import dayjs from 'dayjs'
import { generateColorPalette } from '../../../utils/src/color'
import { $getOpenAppId, $getShortLinkContent } from '../api'
import { initWxJssdk } from '../setup'
import { navigateTo, safeParse } from '../utils'
import emitter from '../utils/emitter'
import { useToast } from '../hooks'

const useAppStore = defineStore('App', () => {
  const merchantId = ref('')

  if (process.env.TARO_ENV === 'h5') {
    watch(
      () => merchantId.value,
      () => {
        $getOpenAppId().then(res => {
          _appId.value = res.data
        })
      }
    )
  }

  /** 启动页完成加载后默认重定向路由 */
  const launchRedirect = ref('/packageMain/index')
  /** 设置启动页重定向路由（可能通过分享等途径进入，需要返回该页面） */
  const setLaunchRedirect = (url: string) => (launchRedirect.value = url)

  /** 系统信息 */
  const systemInfo = shallowRef(Taro.getSystemInfoSync())
  console.log('SystemInfo', systemInfo.value)

  /** 在开发者工具中 ？ */
  const isSimulator = computed(() => {
    return systemInfo.value.platform === 'devtools'
  })

  /** 小程序账户信息，包含appid、version、envVersion（开发版、体验版、正式版），插件列表的appid */
  const accountInfo = ref<Taro.getAccountInfoSync.AccountInfo | null>(null)
  if (process.env.TARO_ENV === 'weapp') {
    accountInfo.value = Taro.getAccountInfoSync()
    console.log('AccountInfo', accountInfo.value)
  }

  const _appId = ref('')

  /** 小程序appid */
  const appId = computed(() => {
    if (process.env.TARO_ENV === 'weapp') {
      return accountInfo.value?.miniProgram.appId
    }

    if (_appId.value) {
      return _appId.value
    }

    try {
      return process.env.TARO_APP_WX_OA
    } catch (err) {}

    return _appId.value
  })

  /** 是否直连小程序 */
  const isDirectWeapp = computed(() => {
    const flag = !!DIRECT_WEAPP_OPTIONS.find(item => {
      return item.value === appId.value
    })
    try {
      return process.env.TARO_APP_DIRECT_WEAPP === 'true' || flag
    } catch (err) {
      return flag
    }
  })

  /** 胶囊按钮位置信息，仅小程序端，非小程序端为固定默认值 */
  const menuButtonRect = ref<Taro.getMenuButtonBoundingClientRect.Rect | null>(null)
  if (process.env.TARO_ENV !== 'h5') {
    const localMenuButtonRect = Taro.getStorageSync('menuButtonRect')

    if (localMenuButtonRect?.width < 100) {
      menuButtonRect.value = localMenuButtonRect
    } else {
      menuButtonRect.value = Taro.getMenuButtonBoundingClientRect()
      Taro.setStorageSync('menuButtonRect', toRaw(menuButtonRect.value))
    }
    console.log('menuButtonRect', menuButtonRect.value)
  } else {
    menuButtonRect.value = {
      bottom: 83 - 51 + 8,
      height: 32,
      left: 375,
      right: 368,
      top: 51 - 51 + 8,
      width: 87
    }
  }

  const commonNavigatorHeight = computed(() => {
    if (process.env.TARO_ENV === 'h5') {
      return (48 * systemInfo.value.windowWidth) / 375
    }
    return menuButtonRect.value!.bottom + 8
  })

  const commonNavigatorStyle = computed(() => {
    if (process.env.TARO_ENV === 'h5') {
      return ''
    }
    const { top, left, right } = menuButtonRect.value!
    const pdl = systemInfo.value.windowWidth - right
    // const pdr = systemInfo.value.windowWidth - left + pdl
    const pdr = systemInfo.value.windowWidth - left
    return {
      height: `${commonNavigatorHeight.value}px`,
      paddingTop: `${top - 8}px`,
      paddingRight: `${pdr}px`,
      // padding-bottom: '8px'
      paddingLeft: `${pdl}px`,
      '--content-safe-height': `${commonNavigatorHeight.value - top - 8}px`
    }
  })

  /** 页面高度 = 100vh - 导航栏高度 */
  const commonPageHeightStyle = computed(() => {
    return {
      height: `calc(100vh - ${commonNavigatorHeight.value}px)`
    }
  })

  const loginPageContent = shallowRef<any>(null)
  const setLoginPageContent = (content: any) => {
    loginPageContent.value = content
  }

  const localTheme = Taro.getStorageSync('theme')
  /** 主题颜色 */
  const theme = ref(localTheme || 'blue')
  const setTheme = (color: string, fontColor?: string) => {
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      themeColorMap.value = {
        ...generateColorPalette(color),
        '--kacat-color-primary-text': fontColor || '#ffffff'
      }
    } else {
      theme.value = color
      themeColorMap.value = {}
    }
  }

  const themeColorMap = ref({})

  /**
   * 用于计算的参考时间，可以使用 resetLazyNow 刷新触发计算。
   * 注意：与当前时间相关且非必须时时刷新的计算属性应当使用该值计算，而不是闭包使用 dayjs()
   */
  const lazyNow = ref(dayjs())

  /**
   * 重置参考时间
   * ## 非可控情况下，请勿在 computed 内部直接使用，避免产生死循环
   */
  const resetLazyNow = () => {
    lazyNow.value = dayjs()
  }

  const init = () => {
    initialized.value = true
  }

  const initialized = ref(false)

  watch(
    () => [appId.value, initialized.value],
    () => {
      if (appId.value && initialized.value) {
        // 初始化微信 jssdk
        initWxJssdk()
      }
    },
    { immediate: true }
  )

  const useInitialized = (handler: () => void) => {
    if (initialized.value) {
      setTimeout(() => {
        handler()
      }, 600)
    } else {
      const stopWatch = watch(
        () => initialized.value,
        v => {
          if (v) {
            stopWatch()
            setTimeout(() => {
              handler()
            }, 600)
          }
        },
        {
          immediate: true
        }
      )
    }
  }

  const parseCodeScan = async (options: any) => {
    try {
      if (options.query.captureScreen) {
        useInitialized(() => {
          Taro.reLaunch({
            url: '/packageMain/index'
          })
        })
        return void 0
      }

      if ([1047, 1048, 1049].includes(options.scene)) {
        const scene = decodeURIComponent(options.query.scene)

        if (scene.startsWith('#')) {
          console.log('短链扫码', options)
          const res = await $getShortLinkContent(scene.replace(/^#/, ''))
          const content = safeParse(res.data)
          console.log('短链内容：', content)
          useInitialized(() => {
            useCodeScanHandler(content)
          })
        }
      }
    } catch (err) {
      console.log('短链扫码解析失败：', err)
    }
  }

  return {
    merchantId,

    launchRedirect,
    setLaunchRedirect,

    systemInfo,
    isSimulator,
    accountInfo,
    appId,
    isDirectWeapp,

    menuButtonRect,
    commonNavigatorHeight,
    commonPageHeightStyle,
    commonNavigatorStyle,

    loginPageContent,
    setLoginPageContent,

    theme,
    setTheme,
    themeColorMap,

    lazyNow,
    resetLazyNow,

    init,
    initialized: readonly(initialized),

    parseCodeScan
  }
})

export default useAppStore

const useCodeScanHandler = (content: any) => {
  const { type, payload } = content || {}
  if (type === 'navigateTo') {
    navigateTo({
      url: payload
    })
  } else if (type === 'action') {
    emitter.trigger('useAction', payload)
  }
}
