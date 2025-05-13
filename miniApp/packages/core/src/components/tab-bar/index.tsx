import { computed, defineComponent, PropType } from 'vue'
import './style.scss'
import Taro from '@tarojs/taro'
import { parseBorderRadius } from '@kacat/utils'
import { Button } from '@tarojs/components'

export interface ITabBarItem {
  /** 唯一标志 */
  key: string
  /** 文字内容 */
  text: string
  /** 默认图标url */
  icon: string
  /** 选中时图标url */
  activeIcon: string
  template?: string

  actionEnable?: boolean
  action?: any
}

/** 样式风格 */
export type ITabTheme = 'default' | 'rudder' | 'raised' | (string & {})

export default defineComponent({
  name: 'IndexTabBar',
  props: {
    /** Tab列表 */
    tabs: {
      type: Array as PropType<ITabBarItem[]>,
      required: true
    },
    current: {
      type: String,
      default: undefined
    },
    theme: {
      type: String as PropType<ITabTheme>,
      default: 'default'
    },
    /** 背景颜色 */
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    /** 默认文字颜色 */
    color: {
      type: String,
      default: '#999999'
    },
    /** 选中时文字颜色 */
    activeColor: {
      type: String,
      default: '#000000'
    },
    /** 圆角 */
    borderRadius: {
      type: [Number, Array] as PropType<number | number[]>,
      default: () => [0, 0, 0, 0]
    }
  },
  emits: {
    /** 点击切换触发 */
    change: (key: string, index: number) => true,
    action: (action: any) => true
  },
  setup(props, { emit }) {
    const tabs = computed(() => {
      return Array.isArray(props.tabs) ? props.tabs : []
    })

    const toggle = (item: ITabBarItem) => {
      if (item.actionEnable) {
        if (openType(item)) {
          return void 0
        }
        emit('action', item.action)
      } else {
        emit('change', item.key, tabs.value.indexOf(item), item)
      }
    }

    const openType = (item: ITabBarItem) => {
      if (process.env.TARO_ENV === 'weapp') {
        if (item.actionEnable && item.action?.key === 'contact' && item.action.config?.type !== 'work') {
          return <Button class="index-tab__open-type" openType="contact"></Button>
        }
      }
    }

    return () => {
      const { backgroundColor, color, activeColor, theme, borderRadius } = props
      const isRudder = theme === 'rudder' && [0, 3, 5].includes(tabs.value.length)
      const centerIndex = (tabs.value.length - 1) / 2
      return (
        <div
          class={['index-tab', `index-tab--${theme}`]}
          style={{
            backgroundColor: isRudder ? 'rgba(255, 255, 255, 0)' : backgroundColor,
            borderRadius: parseBorderRadius(borderRadius)
              .map(i => `${i}px`)
              .join(' ')
          }}
        >
          {isRudder && (
            <div
              class="index-tab-bg"
              style={{
                backgroundColor: backgroundColor,
                borderRadius: parseBorderRadius(borderRadius)
                  .map(i => `${i}px`)
                  .join(' ')
              }}
            ></div>
          )}
          {tabs.value.map((item, index) => {
            const isActive = props.current === item.key
            const icon = isActive ? item.activeIcon ?? item.icon : item.icon
            if (isRudder && index === centerIndex) {
              return (
                <div
                  class="index-tab__item clickable index-tab__item--center"
                  onClick={() => {
                    toggle(item)
                  }}
                >
                  <div class="index-tab__icon">{icon && <img src={icon}/>}</div>
                  <span
                    class="index-tab__name"
                    style={{
                      color: isActive ? activeColor : color
                    }}
                  >
                    {item.text}
                  </span>
                  {openType(item)}
                </div>
              )
            }
            return (
              <div
                class={['index-tab__item clickable', isActive && 'index-tab__item--active']}
                onClick={() => {
                  toggle(item)
                }}
                onTouchstart={
                  process.env.TARO_ENV !== 'h5'
                    ? () => {
                      Taro.vibrateShort({
                        type: 'medium'
                      })
                    }
                    : undefined
                }
              >
                <div class="index-tab__icon">{icon && <img class="index-tab__icon-image" src={icon}/>}</div>
                <span
                  class="index-tab__name"
                  style={{
                    color: isActive ? activeColor : color
                  }}
                >
                  {item.text}
                </span>
                {openType(item)}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
