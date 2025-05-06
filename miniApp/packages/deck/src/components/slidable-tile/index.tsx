import { computed, defineComponent, onUnmounted, ref, watch } from 'vue'
import './style.scss'
import { Image, Swiper, SwiperItem } from '@tarojs/components'
import { onPageHide, onPageShow } from '@kacat/core'
import { Icon } from '@kacat/ui'
import { nextTick } from '@tarojs/taro'
import { uuid, withUnit } from '@kacat/utils'
import { clamp } from 'lodash-es'
import { useAction } from '../../hooks/useAction'

export default defineComponent({
  name: '',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const config = computed(() => props.config || {})
    const list = computed(() => {
      return ((props.config.list ?? []) as any[])
        .filter(i => i)
        .map(item => {
          const { deg = 180, from = '#fff', to = '#fff' } = item.primaryContent?.linearGradient ?? {}

          const isCustom = item.primaryContent?.type === 'custom'

          const {
            title,
            subtitle,
            icon,
            action,
            primaryIcon = {
              type: 'default',
              replacedIcon: null,
              size: {
                width: 50,
                height: 50
              },
              offset: {
                x: 0,
                y: 0
              }
            },
            primaryContent = {
              type: 'default',
              customImage: null,
              linearGradientEnable: false,
              linearGradient: {
                deg: 180,
                from: 'rgba(255, 255, 255, 0.1)',
                to: 'rgba(255, 255, 255, 0.1)'
              },
              title: {
                text: null,
                color: '#000',
                icon: null
              },
              subtitle: {
                text: null,
                text2: null,
                color: 'rgba(0, 0, 0, 0.7)'
              },
              actionEnable: true,
              action: {
                text: null,
                arrow: true,
                color: '#1677ff'
              }
            }
          } = item

          return {
            title: title,
            subtitle: subtitle,
            icon: icon?.url,

            // backgroundColor: backgroundColor,
            action,

            primaryIconType: primaryIcon.type ?? 'default',
            primaryIconUrl: primaryIcon.type ?? 'default',
            // primaryContent,

            primaryTitle: primaryContent.title?.text || title,
            primaryTitleColor: primaryContent.title?.color,
            primaryTitleIconUrl: primaryContent.title?.icon?.url,

            primarySubtitle: primaryContent.subtitle?.text || subtitle,
            primarySubtitle2: primaryContent.subtitle?.text2 || '',
            primarySubtitleColor: primaryContent.subtitle?.color,

            primaryActionEnable: primaryContent.actionEnable ?? true,
            primaryAction: primaryContent.action?.text || '去看看',
            primaryActionColor: primaryContent.action?.color,
            primaryActionArrow: primaryContent.action?.arrow ?? true,

            $id: uuid(),
            $activeIconStyle: {
              width: withUnit(primaryIcon.size.width || 50),
              height: withUnit(primaryIcon.size.height || 50),
              transform: `translate3d(${withUnit(primaryIcon.offset.x || 0)}, ${withUnit(
                primaryIcon.offset.y || 0
              )}, 0)`
            },
            $custom: isCustom,
            $customImage: primaryContent.customImage?.url,
            $backgroundStyle: {
              backgroundImage: primaryContent.linearGradientEnable
                ? `linear-gradient(${deg}deg, ${from}, ${to} 70%)`
                : ''
            },
            $replacedIconUrl: primaryIcon.replacedIcon?.url
          }
        })
    })

    /** 运行滑动，数量至少 3 个 */
    const enableSlide = computed(() => list.value.length > 2)

    const doubleList = computed(() => {
      if (!enableSlide.value) return list.value
      return [
        ...list.value,
        ...list.value,
        // 只有三张的时候要多插入 1 张，防止滑动到最后一张的时候有空白
        ...(list.value.length === 3 ? [list.value[0]] : [])
      ]
    })

    const current = ref(0)

    watch(
      () => doubleList.value,
      () => {
        if (list.value.length > 2 && current.value === 0) {
          current.value = list.value.length
        }
      },
      { immediate: true }
    )

    const onToggle = (index: number) => {
      if (isSliding.value) return void 0

      isSliding.value = true
      current.value = index

      setTimeout(onSlidEnd, DURATION + 200)
    }

    /** 滑动动画结束 */
    const onSlidEnd = () => {
      // 滑动到 n + 1 时候，取消过渡，瞬间切换回 1
      if (current.value > list.value.length) {
        current.value = current.value % list.value.length
        noTransition.value = true
        nextTick(() => {
          noTransition.value = false
          isSliding.value = false
        })
      } else if (current.value === 0) {
        // 滑动到 0 的时候，取消过渡，瞬间切换到 n（保证 前、后 都有内容不会露馅）
        current.value = list.value.length
        noTransition.value = true
        nextTick(() => {
          noTransition.value = false
          isSliding.value = false
        })
      } else {
        isSliding.value = false
      }
    }

    const toPreviousOne = () => {
      onToggle(current.value - 1)
    }
    const toNextOne = () => {
      onToggle(current.value + 1)
    }

    /** 滑动中？禁止切换操作 */
    const isSliding = ref(false)

    /** 禁用过渡、动画，用于无缝衔接 */
    const noTransition = ref(false)

    const DURATION = 400

    let lastSwiperIndex = 0

    /** 手势触摸时停止自动播放 */
    const onMoveStart = () => {
      stopAutoplay()
    }

    /** 手势离开时重新开始自动播放 */
    const onMoveEnd = () => {
      autoplay()
    }

    /** 滑动轮播图时触发 */
    const onMove = (e: any) => {
      const currentSwiperIndex = e.detail.current
      const delta = currentSwiperIndex - lastSwiperIndex

      delta === -1 || delta > 1 ? toPreviousOne() : toNextOne()
      lastSwiperIndex = currentSwiperIndex
    }

    let autoplayTimer: NodeJS.Timeout

    /** 是否允许自动播放，数量至少 3 个 */
    const autoplayEnable = computed(() => config.value.autoplayEnable && enableSlide.value)
    const autoplayInterval = computed(() => clamp((config.value.autoplay || 5) * 1000, 2000, 10000))

    /** 自动播放 */
    const autoplay = () => {
      clearTimeout(autoplayTimer)
      if (autoplayEnable.value) {
        autoplayTimer = setTimeout(() => {
          toNextOne()
          autoplay()
        }, autoplayInterval.value)
      }
    }

    /** 停止自动播放 */
    const stopAutoplay = () => {
      clearTimeout(autoplayTimer)
    }

    // 页面离开时暂停播放
    onPageHide(() => {
      stopAutoplay()
    })

    // 页面进入时开启播放
    onPageShow(() => {
      autoplay()
    })

    watch(
      () => enableSlide.value,
      () => {
        autoplay()
      },
      { immediate: true }
    )

    onUnmounted(() => {
      stopAutoplay()
    })

    // 个数为 3 不可修改，这里实际上是点击 swiper 上的 block
    const swiperList = [{}, {}, {}]
    const onBlockClick = (index: number) => {
      const realIndex = (current.value + index) % list.value.length
      useAction(list.value[realIndex].action)
    }
    const onItemClick = (index: number) => {
      useAction(list.value[index % list.value.length].action)
    }

    return () => {
      // 小于 2 个不显示
      if (!(list.value.length >= 2)) return null

      return (
        <div
          class={['d_slidable-title', isSliding.value && 'sliding', noTransition.value && 'no-transition']}
          style={{
            '--offset': -current.value
          }}
        >
          <div class="d_slidable-title__content" onTouchmove={onMoveStart} onTouchend={onMoveEnd}>
            {/* 用于模仿手势左右滑动 */}
            {enableSlide.value && (
              <Swiper class="d_slidable-title__move" circular={true} autoplay={false} duration={0} onChange={onMove}>
                {swiperList.map(() => {
                  return (
                    <SwiperItem class="d_slidable-title__move-view">
                      {/* block 用于模拟代理点击事件 */}
                      {swiperList.map((_, index) => {
                        return (
                          <div
                            class={['block', index === 0 && 'primary']}
                            onClick={() => {
                              onBlockClick(index)
                            }}
                          ></div>
                        )
                      })}
                    </SwiperItem>
                  )
                })}
              </Swiper>
            )}

            {/* 滑动轨道，通过改变 offsetX 产生滑动效果 */}
            <div class="d_slidable-title__track">
              {doubleList.value.map((item, index) => {
                const isActive = enableSlide.value ? index === current.value : true
                const delay = (index - current.value) * DURATION * 0.15
                const iconStyle = isActive ? item.$activeIconStyle : {}
                return (
                  <div
                    key={item.$id}
                    style={{
                      animationDelay: `${delay}ms`
                    }}
                    class={['d_slidable-title__item', isActive ? 'primary' : 'default']}
                    onClick={() => onItemClick(index)}
                  >
                    {/* 主标题 */}
                    <div class="title">{item.title}</div>
                    {/* 默认图标 */}
                    <div class={['default-icon', ['hide', 'replace'].includes(item.primaryIconType!) && 'fade-out']}>
                      <div
                        class="icon-image"
                        style={{
                          backgroundImage: `url(${item.icon})`,
                          ...iconStyle
                        }}
                      ></div>
                    </div>
                    {/* 副标题 */}
                    <div class="subtitle">{item.subtitle}</div>

                    {/* 激活态内容 */}
                    <div
                      class="primary-content"
                      style={{
                        ...item.$backgroundStyle
                      }}
                    >
                      {item.$custom ? (
                        <div
                          class="primary-content-image"
                          style={{
                            backgroundImage: `url(${item.$customImage})`
                          }}
                        ></div>
                      ) : (
                        <>
                          <div class="primary-title" style={{ color: item.primaryTitleColor }}>
                            {/* 主标题前缀图片 */}
                            {item.primaryTitleIconUrl && (
                              <Image class="primary-title-icon" mode="heightFix" src={item.primaryTitleIconUrl} />
                            )}
                            {/* 主标题 */}
                            {item.primaryTitle}
                          </div>
                          <div class="primary-subtitle" style={{ color: item.primarySubtitleColor }}>
                            {/* 第一行副标题 */}
                            <div>{item.primarySubtitle}</div>
                            {/* 第二行副标题 */}
                            <div>{item.primarySubtitle2}</div>
                          </div>
                          {item.primaryActionEnable && (
                            <div
                              class="primary-action"
                              style={{
                                color: item.primaryActionColor
                              }}
                            >
                              {/* 按钮文本 */}
                              {item.primaryAction}
                              {/* 箭头 */}
                              {item.primaryActionArrow && <Icon name="right" />}
                            </div>
                          )}
                        </>
                      )}

                      {/* 替换图标 */}
                      {item.primaryIconType === 'replace' && (
                        <div class="primary-icon">
                          <div
                            class="icon-image"
                            style={{
                              backgroundImage: `url(${item.$replacedIconUrl})`,
                              ...iconStyle
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }
})
