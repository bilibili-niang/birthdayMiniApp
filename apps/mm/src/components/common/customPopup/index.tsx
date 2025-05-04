import './style.scss'
import { defineComponent, PropType, watch, ref, onMounted } from 'vue'
import { usePopup } from '@kacat/core'
import CustomButton from '../customButton'
import Text from 'src/components/common/Text'

export default defineComponent({
  name: 'CustomPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '温馨提示'
    },
    // 标题
    titleWeight: {
      type: Number,
      default: 600
    },
    titleSize: {
      type: [String, Number],
      default: '16px'
    },
    // 标题位置
    titlePosition: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'center'
    },
    // 点击遮罩是否允许关闭
    maskCloseableValue: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'confirm', 'update:modelValue'],
  setup(props, { emit, slots }) {
    let popupInstance: any = null
    const positionObj = {
      left: 'just-content-start',
      center: 'just-content-center',
      right: 'just-content-end'
    }
    const closeFun = ref(null)
    const showPopup = () => {
      popupInstance = usePopup({
        content: (
          <div class="alertContent">
            <div class="centerContainer column w-percent100 pureWhite">
              <div class={['row', 'customTitleContainer', 'w-percent100', positionObj[props.titlePosition]]}>
                {slots?.title?.()}
                {!slots?.title && (
                  <Text weight={props.titleWeight} size={props.titleSize}>
                    {props.title}
                  </Text>
                )}
              </div>
              <div class="column margin-top-20">{slots?.default?.()}</div>

              <div class="row margin-top-20 just-content-space-between">
                {slots?.bottom?.()}
                {!slots?.bottom && (
                  <div class="row w-percent100 just-content-center">
                    <CustomButton class="confirmBtn w-percent60" weight={500} onClick={() => emit('confirm')}>
                      知道了
                    </CustomButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        ),
        placement: 'center',
        maskVisible: true,
        maskCloseable: props.maskCloseableValue,
        onClose: () => {
          console.log('关闭')
          // emit('close')
          emit('update:modelValue', false)
          closeFun.value = null // 清理引用
        }
      })
      closeFun.value = popupInstance.close
    }
    const hidePopup = () => {
      if (popupInstance) {
        popupInstance.close()
        closeFun.value = null // 清理引用
      }
    }
    onMounted(() => {
      watch(
        () => props.modelValue,
        newVAl => {
          if (newVAl) {
            showPopup()
          } else {
            hidePopup()
          }
        },
        { immediate: true } // 添加immediate确保首次渲染时也能触发
      )
    })
  }
})
