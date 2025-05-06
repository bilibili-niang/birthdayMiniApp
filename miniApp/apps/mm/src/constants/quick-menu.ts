import { QuickMenuItem } from '@kacat/core'
import { jumpToPageContainer, jumpToWriteOff } from '../router'

export const QUICK_MENU_ITEM_INDEX: QuickMenuItem = {
  key: 'index',
  name: '工作台',
  icon: 'home',
  handler: () => {
    jumpToPageContainer()
  }
}
export const QUICK_MENU_ITEM_WRITEOFF: QuickMenuItem = {
  key: 'index',
  name: '核销',
  icon: 'saoma_scan-code',
  handler: () => {
    jumpToWriteOff()
  }
}

export const QUICK_MENU_ITEM_MINE: QuickMenuItem = {
  key: 'index',
  name: '我的',
  icon: 'search',
  handler: () => {
    jumpToPageContainer()
  }
}
