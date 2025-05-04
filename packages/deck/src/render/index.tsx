import { PropType, computed, defineComponent } from 'vue'
import './style.scss'
import { comps } from './comps'
import { DeckComponentAttrs, DeckComponentDefine } from '../types'
import Taro from '@tarojs/taro'
import { treeifyComponents } from '@kacat/deck'

export default defineComponent({
  name: '',
  props: {
    components: {
      type: Array as PropType<any[]>,
      required: true
    }
  },
  setup(props) {
    // 通过 attrs 属性计算样式
    const generateContainerStyle = (attrs: DeckComponentAttrs) => {
      return {
        background: attrs.backgroundEnable ? attrs.background : undefined,
        padding: attrs.padding.map(p => Taro.pxTransform(p)).join(' '),
        margin: attrs.margin.map(m => Taro.pxTransform(m)).join(' '),
        opacity: attrs.opacity / 100,
        borderRadius: attrs.borderRadius.map(b => Taro.pxTransform(b)).join(' '),
        overflow: attrs.overflow
      }
    }

    const components = computed(() => {
      return treeifyComponents(
        (props.components || []).filter(item => {
          return !item.hidden && !item?.attr?.hidden
        }) as any[]
      )
    })

    return () => {
      return components.value.map(item => {
        const comp: DeckComponentDefine = comps.get(item.key!)
        const containerStyle = {
          ...generateContainerStyle(item.attrs as any),
          ...(item.key === 'anchor'
            ? {
                position: 'sticky' as any,
                top: 'var(--nav-height)',
                zIndex: 20
              }
            : {})
        }
        return (
          <div id={`deck-comp-${item.id}`} class="deck-comp" style={containerStyle}>
            {comp ? <comp comp={item} config={item.config} /> : null}
          </div>
        )
      })
    }
  }
})
