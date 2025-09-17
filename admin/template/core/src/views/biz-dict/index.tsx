import { $createBusinessDictionary, $removeBusinessDictionary } from '../../api/biz-dict'

import { Button, Icon, Modal, Tag, message, Table as AntTable } from '@kacat/ui'
import { defineComponent, reactive, toRaw, type PropType } from 'vue'
import Child from './child'
import type { Schema } from '@kacat/jsf'
import uuid from '../../utils/uuid'
import { useSearchTable, useSearchTableRefresh, useTableAction } from '../../components/search-table'
import useSchemaFormModal from '../../hooks/useSchemaFormModal'
import useRequestErrorMessage from '../../hooks/useRequestErrorMessage'
import { COMMON_STATUS_ON } from '@kacat/config'
import useModal from '../../hooks/useModal'
import './style.scss'
import { defaults } from 'lodash'

export default defineComponent({
  name: 'BusinessDictionary',
  props: {
    title: String,
    options: {
      type: Array as PropType<
        {
          code: string
          dictValue: string
          remark?: string
          sort?: number
        }[]
      >,
      default: () => []
    }
  },
  setup(props) {
    const tableKey = uuid()
    const refresh = () => useSearchTableRefresh(tableKey)

    const defaultState = () => ({
      id: null,
      parentId: null,
      code: '',
      dictKey: null,
      dictValue: '',
      sort: 0,
      remark: ''
    })

    const state = reactive(defaultState())

    const schema: Schema = {
      type: 'object',
      properties: {
        code: {
          title: '字典编码',
          type: 'string',
          required: true,
          config: {
            placeholder: '必填，请输入'
          }
        },
        dictValue: {
          title: '字典名称',
          type: 'string',
          required: true,
          config: {
            placeholder: '必填，请输入'
          }
        },
        remark: {
          title: '备注',
          type: 'string',
          config: {
            placeholder: '选填'
          }
        },
        sort: {
          title: '排序',
          type: 'number'
        }
        // isSealed: {
        //   title: '是否封存',
        //   type: 'boolean',
        // }
      }
    }

    /** 格式化数据 */
    const formatState = () => {
      return {
        ...state
      }
    }

    /** 恢复数据 */
    const retrieveState = (record: any) => {
      Object.assign(state, defaultState(), {
        id: record.id ?? null,
        parentId: record.parentId ?? null,
        code: record.code ?? '',
        dictKey: record.dictKey ?? null,
        dictValue: record.dictValue ?? '',
        sort: record.sort ?? 0,
        remark: record.remark ?? ''
      })
    }

    const vlidate = () => {
      if (!state.code) {
        message.error('请填写「字典编码」')
        return false
      }

      if (!state.dictValue) {
        message.error('请填写「字典名称」')
        return false
      }

      return true
    }

    let loading = false
    const createFormOptions = () => {
      const onAdd = async (option: (typeof props.options)[number]) => {
        if (loading) return void 0
        const v = defaults(option, defaultState())
        loading = true
        const end = message.loading('添加中...')
        const res: any = await $createBusinessDictionary(v as any)
          .catch((err) => {
            useRequestErrorMessage(err)
          })
          .finally(() => {
            loading = false
            end()
          })
        if (res.code === 200) {
          message.success(res.msg || '添加成功')
          refresh()
        } else {
          useRequestErrorMessage(res)
        }
      }

      useModal({
        title: '选择字典',
        content: () => {
          return (
            <div class="biz-dict-top-options">
              <AntTable
                bordered
                dataSource={props.options}
                columns={[
                  { dataIndex: 'code', title: '字典编码', width: 100 },
                  { dataIndex: 'dictValue', title: '字典名称', width: 150 },
                  {
                    dataIndex: 'remark',
                    title: '备注',
                    width: 300,
                    customRender: ({ text }) => {
                      return text || <div class="color-disabled">无备注</div>
                    }
                  },
                  {
                    title: '操作',
                    width: 100,
                    customRender: ({ record }) => {
                      const added = dataRef.value.find((i) => i.code === record.code)

                      return added ? (
                        <Button>
                          已添加
                          <Icon style="margin-left:6px;" class="color-success" name="ok-bold" />
                        </Button>
                      ) : (
                        <Button type="primary" onClick={() => onAdd(record)}>
                          添加
                        </Button>
                      )
                    }
                  }
                ]}
              ></AntTable>
            </div>
          )
        }
      })
    }

    /** 添加 */
    const create = () => {
      Object.assign(state, defaultState())
      useSchemaFormModal({
        title: '新增业务字典',
        width: 600,
        schema,
        data: state,
        onChange: (data) => {
          Object.assign(state, data)
        },
        onOk: async () => {
          if (!vlidate()) return Promise.reject()
          const res: any = await $createBusinessDictionary(toRaw(state) as any).catch((err) => {
            useRequestErrorMessage(err)
          })
          if (res.code === 200) {
            message.success(res.msg || '新增成功')
            refresh()
          } else {
            useRequestErrorMessage(res)
          }
        }
      })
    }

    /** 编辑 */
    const update = (record: any) => {
      retrieveState(record)
      console.log(record)
      useSchemaFormModal({
        title: '编辑业务字典',
        width: 600,
        schema,
        data: state,
        onChange: (data) => {
          Object.assign(state, data)
        },
        onOk: async () => {
          if (!vlidate()) return Promise.reject()
          const res: any = await $createBusinessDictionary(toRaw(state) as any).catch((err) => {
            useRequestErrorMessage(err)
          })
          if (res.code === 200) {
            message.success(res.msg || '编辑成功')
            refresh()
          } else {
            useRequestErrorMessage(res)
          }
        }
      })
    }

    const remove = (record: any) => {
      Modal.confirm({
        title: '删除提示',
        content: (
          <div>
            确定要删除&emsp;
            <strong class="color-primary">
              {record.code}（{record.dictValue}）
            </strong>{' '}
            吗？
          </div>
        ),
        okText: '删除',
        onOk: async () => {
          const res: any = await $removeBusinessDictionary(record.id).catch(useRequestErrorMessage)
          if (res.code === 200) {
            message.success(res.msg || '删除成功')
            refresh()
          } else {
            useRequestErrorMessage(res)
          }
        }
      })
    }

    const manage = (record: any) => {
      Modal.open({
        width: 1280,
        centered: true,
        content: <Child parent={record} />
      })
    }

    const { Table, dataRef } = useSearchTable({
      key: tableKey,
      title: props.title || '业务字典',
      requestURL: '/blade-system/dict-biz/parent-list?size=100',
      defaultDescs: 'sort',
      filter: {
        list: [
          { key: 'code', label: '字典编号', type: 'input', fixed: true },
          { key: 'dictValue', label: '字典名称', type: 'input', fixed: true }
        ]
      },
      toolbar:
        props.options.length > 0 ? (
          <Button type="primary" onClick={createFormOptions}>
            新增字典类型
          </Button>
        ) : (
          <Button type="primary" onClick={create}>
            新增字典
          </Button>
        ),
      table: {
        columns: [
          { dataIndex: 'id', title: 'ID', width: 200 },
          { dataIndex: 'code', title: '字典编码', width: 150 },
          { dataIndex: 'dictValue', title: '字典名称', width: 200 },
          { dataIndex: 'remark', title: '备注', width: 250 },
          {
            dataIndex: 'isSealed',
            title: '是否封存',
            width: 100,
            align: 'center',
            customRender: ({ text }) => {
              return text === COMMON_STATUS_ON ? <Tag color="red">是</Tag> : <Tag color="blue">否</Tag>
            }
          },
          { dataIndex: 'sort', title: '排序', width: 100 },
          {
            title: '操作',
            width: 180,
            fixed: 'right',
            customRender: ({ record }) => {
              return useTableAction({
                list: [
                  {
                    title: '编辑',
                    onClick: () => {
                      update(record)
                    }
                  },
                  {
                    title: '字典配置',
                    onClick: () => {
                      manage(record)
                    }
                  },
                  {
                    title: '删除',
                    type: 'danger',
                    onClick: () => {
                      remove(record)
                    }
                  }
                ]
              })
            }
          }
        ]
      }
    })
    return () => {
      return Table
    }
  }
})
