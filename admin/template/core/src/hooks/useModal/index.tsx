import { Modal as AntModal, type ModalProps } from '@kacat/ui'
import useAppStore from '../../stores/app'

// const useModal = (content: any, options: ModalProps) => {
//   const container = document.createDocumentFragment()

//   const visible = ref(true)

//   const close = () => {
//     visible.value = false
//   }

//   const Modal = defineComponent({
//     props: { ...AntModal.props },
//     setup(props, { slots }) {
//       return () => {
//         return (
//           <AntModal {...props} open={visible.value} destroyOnClose={true} prefixCls={PREFIX_CLS} onCancel={close}>
//             {() => content}
//           </AntModal>
//         )
//       }
//     }
//   })
//   render(<Modal {...options} />, container as any)
//   return {
//     close
//   }
// }

type UseModalOptions = { content: any } & ModalProps

const useModal = (options: UseModalOptions) => {
  const { zIndex = useAppStore().getGlobalModalZIndex(), ...restOptions } = options
  const modal = AntModal.open({
    zIndex,
    ...restOptions
  })
  return modal
}

export default useModal
