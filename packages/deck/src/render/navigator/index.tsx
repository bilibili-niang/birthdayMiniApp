import { PropType, computed, defineComponent, onUnmounted, ref, watch } from 'vue'
import './style.scss'
import { storeToRefs } from 'pinia'
import Taro, { useRouter } from '@tarojs/taro'
import { emitter, useAppStore, useQuickMenu } from '@kacat/core'
import { Icon } from '@kacat/ui'

const backToIndex = () => {
  const url = '/packageMain/index'
  if (process.env.TARO_ENV !== 'h5') {
    try {
      Taro.navigateBack({
        delta: 100,
        fail: err => {
          console.log(err.errMsg)
          Taro.redirectTo({
            url: url
          })
        }
      })
    } catch (err) {}
  } else {
    // FIXME 这里可能会造成首页重新渲染？
    Taro.redirectTo({
      url: url
    })
  }
}

export default defineComponent({
  name: 'CommonNavigator',
  props: {
    navigatorStyle: {
      type: String as PropType<'common' | 'blank'>,
      default: 'common'
    },
    navigatorTheme: {
      type: String as PropType<'black' | 'white'>,
      default: 'black'
    },
    title: {},
    navigatorPlaceholder: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object as PropType<any>
      // required: true
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  // @ts-ignore
  slots: ['title'],
  setup(props, { slots }) {
    const router = useRouter()
    // const hideBackMenu = router.path === '/packageIndex/index'
    const hideBackMenu = props.title === '首页'
    const appStore = useAppStore()
    const { menuButtonRect, commonNavigatorStyle, commonNavigatorHeight } = storeToRefs(appStore)

    const menuStyleRef = computed(() => {
      const { width, height } = menuButtonRect.value!
      return `
        width: ${width}px;
        height: ${height}px;
      `
    })

    const onBack = () => {
      const pages = Taro.getCurrentPages().filter(item => item.route !== 'pages/launch')
      if (pages.length > 1) {
        Taro.navigateBack({
          delta: 1,
          success(res) {
            console.log(res)
          },
          fail(err) {
            console.log(err)
            backToIndex()
          }
        })
      } else {
        backToIndex()
      }
    }
    // TODO 当页面只有一个时，返回按钮换成首页按钮

    const isImmersion = computed(() => props.config?.immersion)

    const navBgStyle = computed(() => {
      if (!props.config?.foreground) return undefined
      const { enable, type, backgroundImage, backgroundHeight } = props.config.foreground
      if (type === 'image') {
        return {
          backgroundImage: `url(${backgroundImage?.url})`,
          backgroundPosition: `0 calc(100% + ${Taro.pxTransform(backgroundHeight)})`,
          opacity: 1
        }
      }
      return {
        backgroundColor: props.config.backgroundColor,
        opacity: !enable && !isImmersion.value ? 1 : scrollTween.value
      }
    })
    const diffusionStyle = computed(() => {
      if (!props.config?.foreground) return undefined
      const {
        enable,
        type,
        backgroundColor,
        backgroundImage,
        backgroundHeight = 200,
        dynamicColor
      } = props.config.foreground
      if (!enable) {
        return undefined
      }
      if (type === 'image') {
        return {
          zIndex: 0,
          backgroundImage: `url(${backgroundImage?.url})`,
          backgroundPosition: '0 100%',
          height: `calc(${commonNavigatorHeight.value}px + ${Taro.pxTransform(backgroundHeight)})`
        }
      }
      return {
        // backgroundImage: `linear-gradient(to bottom, ${backgroundColor} ${Taro.pxTransform(
        //   commonNavigatorHeight.value
        // )}, transparent)`,
        backgroundColor: (dynamicColor && tempTheme.value) || backgroundColor,
        height: `calc(${commonNavigatorHeight.value}px + ${Taro.pxTransform(backgroundHeight)})`
      }
    })

    const scrollTween = computed(() => {
      let t = props.scrollTop / (80 * 1)
      t = t > 1 ? 1 : t < 0 ? 0 : t
      return t
    })

    const setNavigationBarColor = () => {
      const { navigationBarTextStyle = 'black', navigationBarTextStyleFixed = 'black' } = props.config || {}

      Taro.setNavigationBarColor({
        frontColor:
          scrollTween.value <= 0.5
            ? navigationBarTextStyle === 'black'
              ? '#000000'
              : '#ffffff'
            : navigationBarTextStyleFixed === 'black'
            ? '#000000'
            : '#ffffff',
        backgroundColor: ''
      })
    }
    setNavigationBarColor()

    watch(() => props.config, setNavigationBarColor)
    watch(
      () => scrollTween.value,
      (value, preValue) => {
        if ((value <= 0.5 && preValue > 0.5) || (value > 0.5 && preValue <= 0.5)) {
          setNavigationBarColor()
        }
      }
    )

    const immersive = computed(() => props.config?.immersion)

    /* ---------------------------------- 轮播图联动 --------------------------------- */
    const currentPageId = computed(() => '')
    const tempTheme = ref<string | null>(null)
    const onThemeChange = (color: string | null) => {
      tempTheme.value = color
    }
    emitter.on(`nav-swiper-theme-color-${currentPageId.value}`, onThemeChange as any)

    onUnmounted(() => {
      emitter.off(`nav-swiper-theme-color-${currentPageId.value}`, onThemeChange as any)
    })
    /* ---------------------------------- 轮播图联动 --------------------------------- */

    return () => {
      const title = props.config?.title ?? slots.title?.() ?? props.title ?? ''
      const { navigationBarTextStyle = props.navigatorTheme, navigationBarTextStyleFixed = props.navigatorTheme } =
        props.config || {}
      return (
        <>
          <div
            class={[
              'd_common-navigator',
              `d_common-navigator--${scrollTween.value < 0.5 ? navigationBarTextStyle : navigationBarTextStyleFixed}`
            ]}
            style={commonNavigatorStyle.value}
          >
            {props.navigatorStyle === 'blank' ? (
              <div class="d_common-navigator__content">{slots.default?.()}</div>
            ) : (
              <>
                <div class="w_basic-nav__bg" style={navBgStyle.value}></div>
                <div class="d_common-navigator__content">
                  {hideBackMenu ? (
                    <div class="d_common-navigator__menu" style="opacity:0"></div>
                  ) : (
                    <div class="d_common-navigator__menu" style={menuStyleRef.value}>
                      <div class="d_common-navigator__menu-item" onClick={onBack}>
                        <Icon name="back" />
                      </div>
                      <div class="d_common-navigator__menu-split"></div>
                      <div
                        class="d_common-navigator__menu-item"
                        onClick={() => {
                          useQuickMenu()
                        }}
                      >
                        <Icon name="menu" />
                      </div>
                    </div>
                  )}
                  <div
                    class={[
                      'd_common-navigator__title',
                      typeof title === 'string' && 'd_common-navigator__title--text'
                    ]}
                  >
                    <div class="d_common-navigator__title-text">{title}</div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div class="w_basic-nav__diffusion" style={diffusionStyle.value}></div>
          {/* <div class="w_basic-nav-placeholder"></div> */}
          {props.navigatorPlaceholder && !immersive.value && (
            <div class="d_common-navigator-static" style={commonNavigatorStyle.value}></div>
          )}
        </>
      )
    }
  }
})
