import Kacat from '@kacat/core'

import { QUICK_MENU_ITEM_INDEX } from './constants/quick-menu'

export default () => {
  Kacat.setQuickMenuList(
    /*
  process.env.TARO_ENV === 'h5'
    ? [QUICK_MENU_ITEM_INDEX, QUICK_MENU_ITEM_WRITEOFF]
    : [QUICK_MENU_ITEM_INDEX, QUICK_MENU_ITEM_WRITEOFF]*/
    [QUICK_MENU_ITEM_INDEX]
  )
}
