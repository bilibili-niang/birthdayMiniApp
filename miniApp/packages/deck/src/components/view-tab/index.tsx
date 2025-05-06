import { PropType, Ref, computed, defineComponent, inject, ref, watch } from 'vue'
import './style.scss'
import { ScrollTab, ScrollTabItem } from '@kacat/ui'
import { DeckComponentConfig } from '../types'
import Taro from '@tarojs/taro'
import { uuid } from '@kacat/utils'
import { emitter, useAppStore } from '@kacat/core'
import DeckRender from '../../render'

type AnchorComp = {
  list: {
    title: string
    icon: string
    component: string
  }[]
  style: {
    fixedBackgroundColor: string
    iconPlacement: string
    iconVisible: string
  }
  itemStyle: {
    default: {
      color: string
      backgroundColor: string
    }
    active: {
      color: string
      backgroundColor: string
    }
  }
}

export default defineComponent({
  name: 'd_view-tab',
  props: {
    comp: {
      type: Object as PropType<DeckComponentConfig<AnchorComp>>,
      required: true
    },
    config: {
      type: Object as PropType<AnchorComp>,
      required: true
    }
  },
  setup(props) {
    const id = `anchor-${uuid()}`

    const appStore = useAppStore()
    const commonNavigatorHeight = appStore.commonNavigatorHeight

    const tabHeight = ref(44)
    const stickyTop = computed(() => commonNavigatorHeight + tabHeight.value)

    const list = computed(() => {
      return props.comp.children.map(item => item.config)
    })

    const current = ref(0)
    const onToggle = (index: number) => {
      onAnchorClick(index)
      Taro.vibrateShort?.({
        type: 'light'
      })
    }

    const currentView = computed(() => {
      return props.comp.children[current.value]
    })

    const iconPlacement = computed(() => {
      const v = props.config.style?.iconPlacement || 'none'
      if (v === 'above' && !list.value.some(i => !!i.icon)) {
        // 上方 => 至少有一个设置了图标才显示
        return 'none'
      }
      return v
    })

    const style = computed(() => {
      const { color, backgroundColor } = props.config.itemStyle?.default || {}
      const { color: activeColor, backgroundColor: activeBackgroundColor } = props.config.itemStyle?.active || {}
      return {
        '--sticky-bg': props.config.style?.fixedBackgroundColor,
        '--item-color': color,
        '--item-color-active': activeColor,
        '--item-bg': backgroundColor,
        '--item-bg-active': activeBackgroundColor
      }
    })

    const scrollTop: Ref<number> = inject('scrollTopRef') || ref(0)

    const isSticky = ref(false)

    const tabQuery = Taro.createSelectorQuery()
      .select(`#${id} .d_view-tab__tab.fixed`)
      .boundingClientRect((res: any) => {
        tabHeight.value = res.height
      })
      .select(`#${id}`)
      .boundingClientRect((res: any) => {
        isSticky.value = res.top <= commonNavigatorHeight + 2
      })

    const onScroll = () => {
      tabQuery.exec()
    }

    watch(() => scrollTop.value, onScroll)

    const basePageKey = inject('basePageKey')
    const onAnchorClick = (index: number) => {
      current.value = index

      tabQuery.exec(res => {
        const top = scrollTop.value + res[1].top - commonNavigatorHeight + Math.random() / 1000
        if (top < scrollTop.value - 10) {
          emitter.trigger(`basePageScrollTo:${basePageKey}`, top)
        }
      })
    }

    return () => {
      return (
        <div id={id} class={['d_view-tab', isSticky.value && 'sticky']} style={style.value}>
          <div class="d_view-tab__tab-wrap">
            {['relative', 'fixed'].map(type => {
              return (
                <ScrollTab current={current.value} class={['d_view-tab__tab', type]}>
                  <div class="d_view-tab__list">
                    {list.value.map((item, index) => {
                      if (!item) {
                        return null
                      }

                      const iconVisible = props.config.style?.iconVisible ?? 'always'

                      const _iconVisible = iconVisible === 'always' ? true : type === 'fixed'

                      return (
                        <ScrollTabItem>
                          <div
                            class={['d_view-tab__item clickable', index === current.value && 'active']}
                            onClick={() => {
                              onToggle(index)
                            }}
                          >
                            {iconPlacement.value === 'above' && (
                              <div
                                class={['icon', !_iconVisible && 'icon-hidden']}
                                style={{
                                  backgroundImage: `url(${item.icon})`
                                }}
                              ></div>
                            )}
                            <div class="title">
                              {iconPlacement.value === 'inner' && item.icon && (
                                <div
                                  class="inner-icon"
                                  style={{
                                    backgroundImage: `url(${item.icon})`
                                  }}
                                ></div>
                              )}
                              {item.title}
                            </div>
                          </div>
                        </ScrollTabItem>
                      )
                    })}
                  </div>
                </ScrollTab>
              )
            })}
          </div>
          <div class="d_view-tab__view">
            <DeckRender components={currentView.value.children} key={current.value} />
          </div>
        </div>
      )
    }
  }
})
