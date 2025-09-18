import './src/setup'
// 基座组件
import BaseApp from './src/components/base-app'

// 拟态进度条
import Progress from './src/components/progress'
import { defineAsyncComponent } from 'vue'

export { default as useImageSelector } from './src/hooks/useImageSelector'
export { default as useImagePreview } from './src/hooks/useImagePreview'
export { type ImageDefine } from './src/components/image-selector/Resource'
export { default as FileUploader } from './src/components/file-uploader'
export { default as CommonSelector } from './src/components/common-selector'

export { default as useModal } from './src/hooks/useModal'

export { default as useSchemaFormModal, useSchemaForm } from './src/hooks/useSchemaFormModal'
export { default as SchemaErrors } from './src/hooks/useSchemaFormModal/errors'

export { default as usePreviewPage } from './src/hooks/usePreviewPage'
export { default as useGenerateQrcode } from './src/hooks/useGenerateQrcode'

// 封装的通用选择器组件
export { default as useCommonSelector, CommonSelectorPropsDefine } from './src/hooks/useCommonSelector'

// 通过useSearchTable生成多选选择器
export {
  default as useSearchTableMultiple,
  type UseSearchTableMultipleOptions
} from './src/hooks/useSearchTableMultiple'

export {
  default as SearchTable,
  useSearchTable,
  useTabSearchTable,
  useSearchTableRefresh,
  useSearchTableReload,
  useTableAction,
  useTableLongText,
  useTableImages,
  useTableAddress,
  type SearchTableConfig
} from './src/components/search-table'
export { commonSearchTableWidgetPropsDefine } from './src/components/search-table/widgets/types'

export { uuid } from './src/utils/uuid'

export { default as Spin } from './src/components/spin'

// 路由管理
export { default as router, defineRoute, type IRoute } from './src/router'
export { default as generateChannelRoute } from './src/router/channel-route'

// 布局组件
export { registerRoutes, BasicLayout, PageView, Exception404 } from './src/router'

// 状态管理
export { default as useAppStore, openSettings, closeSettings, initApp } from './src/stores/app'
export { default as useUserStore } from './src/stores/user'
export { default as useBasicLayoutStore } from './src/stores/basic-layout'
export { setBreadcrumb } from './src/components/layouts/basic-layout/breadcrumb'
export { usePermissionStore, withPermission } from './src/stores/permission'
export { default as AuthButton } from './src/components/auth-button'

// 控件
export * from './src/widgets'

export { BaseApp, Progress }

export { default as useRequestErrorMessage, useResponseMessage } from './src/hooks/useRequestErrorMessage'

export { default as request } from './src/api/request'
export * from './src/api/request'

export { requestUploadFile } from './src/api/uploadImage'
export { $createBusinessDictionary, $getBusinessDictionary, $removeBusinessDictionary } from './src/api/biz-dict'

export { default as test } from './src/utils/test'

export { default as emitter } from './src/utils/emitter'

export * from './src/utils/index'

export { default as useLogin } from './src/hooks/useLogin'
export { default as useAddressSelector, type AddressData } from './src/hooks/useAddressSelector'
export { default as useWebView } from './src/hooks/useWebView'
export { default as useMapView } from './src/hooks/useMapView'
export { useMpaBoundary } from './src/hooks/useMapBoundary'
export { useMapCenter } from './src/hooks/useMapCenter'
export { useMapImageLayers } from './src/hooks/useMapImageLayers'
export { useCustomMarkers, useCustomMarkerAnchor } from './src/hooks/useCustomMarkers'

export { default as useCrud } from './src/hooks/useCrud'
export { useBizDict } from './src/hooks/useBizDict'

export { default as useLicenseOcr } from './src/hooks/useLicenseOcr'
export { default as useContextMenu, type ContextMenuItem, type ContextMenuConfig } from './src/hooks/useContextMenu'

export { default as usePagination, buildPaginationData, mockRequest } from './src/hooks/usePagination'

export { default as useRichTextEditor } from './src/hooks/useRichTextEditor'

export { registerActions, defineAction, registerPreCondition, useAction, type ActionItem } from './src/hooks/useAction'
export { useComputedValue, type ComputedValue } from './src/hooks/useComputedValue'
export { useSelector } from './src/hooks/useSelector'
export { useFileRender } from './src/hooks/useFileRender'
export { useClientPageQRcode } from './src/hooks/useClientPageQRcode'
export { useSms } from './src/hooks/useSms'
export { usePermissionTree } from './src/hooks/usePermissionTree'

export { default as BizDictPage } from './src/views/biz-dict'

/** 收款账户页面 */
const PayeePage = () => import('./src/views/payee')
/** 资金账户页面 */
const FundAccount = () => import('./src/views/fund-account')
const CommonPaymentAccountConfig = () => import('./src/views/payee/config')

const FundChangeRecord = defineAsyncComponent(() => import('./src/views/fund-account/fund-change-record'))
const FundRechargeOrder = defineAsyncComponent(() => import('./src/views/fund-account/recharge-order'))
const FundSmsRecord = defineAsyncComponent(() => import('./src/views/fund-account/sms'))

/** 用户个人信息配置页面 */
const UserInfoSettings = () => import('./src/views/user-info-settings')
/** 用户个人信息采集页面 */
const UserInfoList = () => import('./src/views/user-info-settings/list')

// 开放收银台
const OpenCashier = () => import('./src/views/open/cashier')

export {
  PayeePage,
  FundAccount,
  CommonPaymentAccountConfig,
  FundChangeRecord,
  FundRechargeOrder,
  FundSmsRecord,
  UserInfoSettings,
  UserInfoList,
  OpenCashier
}

export { default as useTreeSelector } from './src/components/tree-selector'

export { extractRoutes } from './src/router/extract-routes'

export { default as ElevatorScroll } from './src/components/elevator-scroll'

export { useDetailView } from './src/hooks/useDetailView'

export { importExel } from './src/components/import-exel'
export { default as DownloadFileRender } from './src/components/downloadFileRender'

export { default as Category } from './src/components/category'

export { useScanDevice } from './src/hooks/useScanDevice'

export { useSmsSchema } from './src/hooks/useSmsSchema'

export * from './src/views/valueCard'

// 有的接口其它项目会用到
export { getSideMenus } from './src/api/menu'

// 开发辅助
export * from './src/components/devUtils'
// 暴露给外部,部分选择器也会使用到事件选择器的动作
export { getActionDefine, useActionSelector } from './src/hooks/useAction'
