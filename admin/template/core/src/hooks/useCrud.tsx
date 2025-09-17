import type { Schema } from '@kacat/jsf'
import { ref, type Ref } from 'vue'
import useSchemaFormModal from './useSchemaFormModal'
import useRequestErrorMessage from './useRequestErrorMessage'
import { message, Modal } from '@kacat/ui'
import { COMMON_STATUS_OFF, COMMON_STATUS_ON } from '@kacat/config'

const useCrud = (options: {
  title: string
  width?: number
  createTitle?: string
  updateTitle?: string
  removeTitle?: string
  schema: Schema | Ref<Schema> | ((type: 'create' | 'update') => Schema)
  value?: any
  onChange?: (value: any) => void
  defaultValue?: () => any
  format?: (value: any) => any
  retrieve?: (value: any) => any
  onCreate?: (value: any) => void | Promise<any>
  onCreateSuccess?: (value: any) => void
  onUpdate?: (value: any) => void | Promise<any>
  onUpdateSuccess?: (value: any) => void
  onToggleStatus?: (value: any) => void | Promise<any>
  onToggleSuccess?: (value: any) => void
  onRemove?: () => Promise<any>
  onRemoveSuccess?: (value: any) => void
  // 是否开启全屏
  fullScreen?: boolean
}) => {
  const schema = typeof options.schema === 'function' ? options.schema : (type: 'create' | 'update') => options.schema

  const dataRef = ref<any>(null)

  const typeRef = ref<'' | 'create' | 'update'>('')

  const onCreate = (
    handler?: (value: any) => void | Promise<any>,
    onCreateSuccess?: (value: any) => void,
    defaultValue?: any
  ) => {
    typeRef.value = 'create'
    dataRef.value = defaultValue ?? options.defaultValue?.() ?? null
    useSchemaFormModal({
      title: options.createTitle ?? `新建${options.title}`,
      schema: schema('create') as Schema,
      data: dataRef.value,
      width: options?.fullScreen ? '100%' : (options.width ?? 620),
      fullScreen: options?.fullScreen,
      onChange: (data) => {
        dataRef.value = data
        options.onChange?.(data)
      },
      onOk: async (data) => {
        const formatedData = options.format?.(data) ?? data
        try {
          const res: any = await (handler ?? options.onCreate)?.(formatedData)
          if (!res) return Promise.resolve(undefined)
          if (res.code === 200) {
            message.success(res.msg || '创建成功')
            ;(onCreateSuccess ?? options.onCreateSuccess)?.(res.data)
            return Promise.resolve(res)
          } else {
            useRequestErrorMessage(res)
            return Promise.reject(res)
          }
        } catch (err) {
          useRequestErrorMessage(err)
          return Promise.reject(err)
        }
      },
      onCancel: () => {
        typeRef.value = ''
      }
    })
  }
  // prefixText 用于在编辑按钮上添加自定义前缀,如果不想显示传入 null , 如果传,则默认显示编辑
  const onUpdate = (
    value: any,
    handler?: (value: any) => void | Promise<any>,
    onUpdateSuccess?: (value: any) => void,
    prefixText?: string | null
  ) => {
    typeRef.value = 'update'
    dataRef.value = options.retrieve?.(value) ?? value ?? options.defaultValue?.() ?? null
    useSchemaFormModal({
      title: options.updateTitle ?? `${prefixText === null ? '' : prefixText || '编辑'}${options.title}`,
      schema: schema('update') as Schema,
      data: dataRef.value,
      width: options?.fullScreen ? '100%' : (options.width ?? 620),
      fullScreen: options?.fullScreen,
      onChange: (data) => {
        dataRef.value = data
        options.onChange?.(data)
      },
      onOk: async (data) => {
        const formatedData = options.format?.(data) ?? data
        try {
          const res: any = await (handler ?? options.onUpdate)?.(formatedData)
          if (!res) return Promise.resolve(undefined)
          if (res.code === 200) {
            message.success(res.msg || '编辑成功')
            ;(onUpdateSuccess ?? options.onUpdateSuccess)?.(res.data)

            return Promise.resolve(res)
          } else {
            useRequestErrorMessage(res)
            return Promise.reject(res)
          }
        } catch (err) {
          useRequestErrorMessage(err)
          return Promise.reject(err)
        }
      },
      onCancel: () => {
        typeRef.value = ''
      }
    })
  }

  type CommonStatus = typeof COMMON_STATUS_ON | typeof COMMON_STATUS_OFF
  const onToggleStatus = async (
    status: CommonStatus,
    handler?: (status: CommonStatus) => void | Promise<any>,
    onToggleSuccess?: (status: CommonStatus) => void
  ) => {
    try {
      const value = status === COMMON_STATUS_ON ? COMMON_STATUS_OFF : COMMON_STATUS_ON
      const res: any = await (handler ?? options.onCreate)?.(value)
      if (!res) return Promise.resolve(undefined)
      if (res.code === 200) {
        message.success(res.msg || '切换成功')
        ;(onToggleSuccess ?? options.onUpdateSuccess)?.(value)

        return Promise.resolve(res)
      } else {
        useRequestErrorMessage(res)
        return Promise.reject(res)
      }
    } catch (err) {
      useRequestErrorMessage(err)
      return Promise.reject(err)
    }
  }

  const onRemove = (handler?: () => void | Promise<any>, onRemoveSuccess?: (value: any) => void) => {
    Modal.confirm({
      title: options.removeTitle ?? `删除${options.title}`,
      content: '该操作无法撤销，确定要删除吗？',
      onOk: async () => {
        try {
          const res: any = await (handler ?? options.onRemove)?.()
          if (!res) return Promise.resolve(undefined)
          if (res.code === 200) {
            message.success(res.msg || '删除成功')
            ;(onRemoveSuccess ?? options.onRemoveSuccess)?.(res.data)
            return Promise.resolve(res)
          } else {
            useRequestErrorMessage(res)
            return Promise.resolve(res)
          }
        } catch (err) {
          useRequestErrorMessage(err)
          return Promise.resolve(err)
        }
      }
    })
  }

  const onRead = (value: any) => {
    dataRef.value = value ?? null
    useSchemaFormModal({
      title: `查看${options.title}`,
      schema: schema('update') as Schema,
      data: dataRef.value,
      width: options.width ?? 620,
      readonly: true
    })
  }

  return {
    dataRef,
    typeRef,
    onCreate,
    onUpdate,
    onToggleStatus,
    onRemove,
    onRead
  }
}

export default useCrud
