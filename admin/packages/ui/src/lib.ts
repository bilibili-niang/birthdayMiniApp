import './styles/settings.scss'
import 'vuetify/_styles.scss'
import * as vuetify from 'vuetify'

export { default as Button } from './components/button/index'
export { default as Input } from './components/input/index'
export { default as List } from './components/list/index'
export { default as ListItem } from './components/listItem/index'
export { default as ListItemSubtitle } from './components/listItemSubtitle/index'
export { default as ListItemTitle } from './components/listItemTitle/index'
export { default as Modal } from './components/modal/index'
export { createModal } from './components/modal/service'
export { notify, notifySuccess, notifyError, installNotify } from './components/notify/index'

// @ts-ignore
// export * from 'vuetify/components'
export { vuetify }