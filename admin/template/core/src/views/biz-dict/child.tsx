import { $createBusinessDictionary, $removeBusinessDictionary } from '../../api/biz-dict'

import type { Schema } from '@kacat/jsf'
import { Button, Input, Modal, Tag, message } from '@kacat/ui'
import { computed, defineComponent, reactive, toRaw } from 'vue'
import uuid from '../../utils/uuid'
import { useSearchTable, useSearchTableRefresh, useTableAction } from '../../components/search-table'
import useSchemaFormModal from '../../hooks/useSchemaFormModal'
import useRequestErrorMessage from '../../hooks/useRequestErrorMessage'
import { COMMON_STATUS_ON } from '@kacat/config'

const Child = defineComponent({
  name: 'BusinessDictionaryChild',
  props: {
    parent: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const tableKey = uuid()
    const refresh = () => useSearchTableRefresh(tableKey)

    const defaultState = () => ({
      id: null,
      parentId: props.parent.id,
      code: props.parent.code,
      dictKey: '',
      dictValue: '',
      remark: '',
      sort: 0
    })

    const state = reactive(defaultState())

    const schema = computed<Schema>(() => {
      const s: Schema = {
        type: 'object',
        properties: {
          code: {
            title: '字典编号',
            type: 'string',
            widget: () => <Input disabled value={state.code} />
          },
          yyy: {
            title: '上级字典',
            type: 'string',
            widget: () => <Input disabled value={props.parent.dictValue} />
          },
          dictKey: {
            title: '字典键值',
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
      return s
    })

    /** 格式化数据 */
    const formatState = () => {
      return {
        ...state
      }
    }

    const vlidate = () => {
      if (!state.dictKey) {
        message.error('请填写「字典键值」')
        return false
      }

      if (!state.dictValue) {
        message.error('请填写「字典名称」')
        return false
      }

      return true
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

    /** 添加 */
    const create = () => {
      Object.assign(state, defaultState())
      useSchemaFormModal({
        title: '新增字典配置',
        width: 600,
        labelWidth: 100,
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
              {record.dictKey}（{record.dictValue}）
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
        content: <Child parent={record} depth={props.depth + 1} />
      })
    }

    const { Table } = useSearchTable({
      key: tableKey,
      title: `字典配置 丨 ${props.parent.dictKey ?? props.parent.code}（${props.parent.dictValue}）`,
      requestURL: `/blade-system/dict-biz/child-list?parentId=${props.parent.id}`,
      defaultDescs: 'sort',
      filter: {
        list: [
          { key: 'code', label: '字典编号', type: 'input', fixed: true },
          { key: 'dictValue', label: '字典名称', type: 'input', fixed: true }
        ]
      },
      toolbar: (
        <Button type="primary" onClick={create}>
          新增
        </Button>
      ),
      table: {
        columns: [
          { dataIndex: 'id', title: 'ID', width: 200 },
          // { dataIndex: 'code', title: '字典编码', width: 150 },
          { dataIndex: 'dictKey', title: '字典键值', width: 200 },
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
                    title: '管理子项',
                    disabled: true,
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

export default Child
