import { createVNode, render } from 'vue'
import { defaultsDeep } from 'lodash'
import ContextMenu, { type ContextMenuConfig, type ContextMenuItem } from '../components/context-menu'

// let container = document.querySelector('.lego-ui-modal-root')
// if (!container) {
//   container = document.createElement('div')
//   container.className = 'lego-ui-modal-root lego-ui'
//   document.body.append(container)
// }

let lastClickEvent = new MouseEvent('click')
const collectClickEvent = (e: MouseEvent) => {
  lastClickEvent = e
}
document.addEventListener('click', collectClickEvent, true)
document.addEventListener('contextmenu', collectClickEvent, true)

function useContextMenu(e: MouseEvent = lastClickEvent, config: ContextMenuConfig) {
  e = e || lastClickEvent
  e.stopPropagation()
  e.preventDefault()

  const container = document.createElement('div')
  container.className = 'kacat-ui-modal-root'
  document.body.append(container)

  const cancel = () => {
    document.removeEventListener('mousedown', cancel, true)
    document.removeEventListener('contextmenu', cancel, true)

    // FIXME 这里并没有销毁虚拟节点
    document.body.removeChild(container)
    _config.onClose()
  }

  document.addEventListener('mousedown', cancel, true)
  document.addEventListener('contextmenu', cancel, true)

  const _config = defaultsDeep(
    {
      x: e.pageX,
      y: e.pageY,
      list: []
    },
    config
  )

  _config.onClose = (...arg: any) => {
    config.onClose?.(...arg)
  }
  // _config.list.push(
  //   ...([
  //     {
  //       key: 'plugins',
  //       title: '插件',
  //       divider: true,
  //       icon: 'components',
  //       children: [
  //         {
  //           key: 'plugin_color',
  //           title: '颜色填充',
  //           icon: 'background-color',
  //           handler: () => {}
  //         },
  //         {
  //           key: 'plugin_colors',
  //           title: '色板',
  //           icon: 'platte',
  //           handler: () => {},
  //           disabled: true
  //         },
  //         {
  //           key: 'plugin_design_sources',
  //           title: '设计资源',
  //           icon: 'layers',
  //           handler: () => {}
  //         }
  //       ]
  //     },
  //     {
  //       key: 'help',
  //       title: '帮助',
  //       icon: 'help-92iol097',
  //       divider: true,
  //       handler: () => {}
  //     }
  //   ] as ContextMenuItem[])
  // )

  const ContextMenuInstance = createVNode(ContextMenu, {
    config: _config,
    key: (Math.random() * 1000).toString(),
    onClose: () => {
      _config.onClose()
    }
  })
  render(ContextMenuInstance, container!)

  // const vm = createVNode({
  //   setup() {
  //     return () => {
  //       return modalInstance
  //     }
  //   }
  // })
  // render(vm, container!)
}

export default useContextMenu
export { ContextMenu, type ContextMenuConfig, type ContextMenuItem }
