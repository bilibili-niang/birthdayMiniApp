import { computed, defineComponent, ref } from 'vue'
import './network.scss'
import sourceList from './source-list'
import { Icon, ScrollTab, ScrollTabItem } from '@kacat/ui'
import SubPage from './SubPage'
import type { ImageDefine } from './Resource'

export default defineComponent({
  emits: {
    select: (image: ImageDefine) => true
  },
  setup(props, { emit }) {
    const list = sourceList

    const current = ref(-1)
    const currentTab = computed(() => list[current.value])

    const showAll = () => {
      current.value = -1
    }

    const onToggle = (index: number) => {
      current.value = index
    }

    return () => {
      return (
        <div class="network-design-source">
          <div class="tips">以下素材均来源网络，仅供学习参考，未经原作者授权使用可能造成侵权，本平台概不负责。</div>
          <div class="network-design-source__header">
            <div class="all" onClick={showAll}>
              <div class={['tab-item clickable', !currentTab.value && 'active']}>全部概览</div>
            </div>
            <Icon name="right-one" />
            <div class="tabs">
              <ScrollTab current={current.value}>
                {list.map((tab, index) => {
                  return (
                    <ScrollTabItem>
                      <div
                        class={['tab-item clickable', index === current.value && 'active']}
                        onClick={() => {
                          onToggle(index)
                        }}
                      >
                        {tab.icon && <img class="icon" src={tab.icon} />}
                        {tab.title}
                        <div class="count number-font">{tab.sources?.length ?? 0}</div>
                      </div>
                    </ScrollTabItem>
                  )
                })}
              </ScrollTab>
            </div>
          </div>
          <div class="network-design-source__content">
            {currentTab.value ? (
              <SubPage
                key={current.value}
                data={currentTab.value.sources ?? []}
                // @ts-ignore
                col={currentTab.value.col ?? 6}
                onSelect={
                  props.onSelect ??
                  ((image: ImageDefine) => {
                    emit('select', image)
                  })
                }
              />
            ) : (
              <AllOverView onToggle={onToggle} />
            )}
          </div>
        </div>
      )
    }
  }
})

const AllOverView = defineComponent({
  emits: {
    toggle: (index: number) => true
  },
  setup(props, { emit }) {
    return () => {
      return (
        <div class="network-design-source__all-overview scroller">
          {sourceList.map((item, index) => {
            return (
              <div class="folder clickable" onClick={() => emit('toggle', index)}>
                <div class="title">
                  {item.icon && <img src={item.icon} />}
                  {item.title}
                  <div class="count number-font">{item.sources.length}</div>
                </div>
                {item.cover ? (
                  <div
                    class="cover"
                    style={{
                      backgroundImage: `url(${item.cover})`
                    }}
                  ></div>
                ) : (
                  <div class="cover none">
                    <div class="cover-content">
                      {item.sources.slice(0, 4).map((s) => {
                        return (
                          <div
                            class="cover-item"
                            style={{
                              backgroundImage: `url(${s.url})`
                            }}
                          >
                            {/* @ts-ignore */}
                            {s.type === 'video' ? '视频' : s.type === 'audio' ? '音频' : null}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
