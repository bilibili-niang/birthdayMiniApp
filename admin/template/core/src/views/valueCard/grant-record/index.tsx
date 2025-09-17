import { defineComponent } from 'vue'
import { useAppStore, useRequestErrorMessage, useSearchTable, useTableAction } from '@kacat/core'
import { moneyToYuan } from '@kacat/utils'
import { $getValueCardGrantRecords, $revokeValueCard } from '../../../api/valueCard'
// import { Available, budgetType, sourceType, statusType, WaitActive } from '@/constants/valueCard'
import { message, Modal } from '@kacat/ui'
import { SchemaForm } from '@kacat/jsf'
// import { budgetRecord } from '@/views/marketing/value-card/use-record/Modal'
import { $getValueCardUseRecords } from '../../../api/valueCard'
import { ValueCardSourceTypeOptions, ValueCardStatus, ValueCardStatusOptions } from '../../../constants/valueCard'
import { showValueCardUseRecord } from '../use-record'

export default defineComponent({
  title: '发放记录',
  setup() {
    const onRevoke = (record: any) => {
      const value = {
        name: record.card?.name,
        userPhone: record.card?.userPhone
      }

      Modal.confirm({
        title: '吊销储值卡',
        content: () => {
          return (
            <SchemaForm
              style="margin-left:-50px;width:calc(100% + 50px)"
              schema={{
                type: 'object',
                properties: {
                  name: {
                    title: '储值卡名称',
                    type: 'string',
                    readonly: true
                  },
                  userPhone: {
                    title: '归属用户',
                    type: 'string',
                    readonly: true
                  }
                }
              }}
              value={value}
              onChange={() => {}}
            ></SchemaForm>
          )
        },
        okText: '确定吊销',
        onOk: async () => {
          return $revokeValueCard(record.card.cardNo)
            .catch(useRequestErrorMessage)
            .then((res) => {
              if (res.code === 200) {
                silentRefresh()
                message.success(res.msg)
              } else {
                useRequestErrorMessage(res)
              }
            })
        }
      })
    }
    const { Table, silentRefresh } = useSearchTable({
      title: '储值卡发放记录',
      customRequest(params) {
        return $getValueCardGrantRecords(params)
      },
      exportURL: '/kacat-cornerstone-goods/storeValueCard/export?scene=' + useAppStore().scene,
      filter: {
        list: [
          {
            key: 'title',
            label: '储值卡名称',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            key: 'cardNo',
            label: '卡号',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            key: 'userPhone',
            label: '归属用户',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            key: 'source',
            label: '发放场景',
            type: 'select',
            fixed: true,
            config: {
              options: ValueCardSourceTypeOptions
            },
            flex: 4
          },
          {
            key: 'outOrderNo',
            label: '购买订单号',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            key: 'batchNo',
            label: '批次',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            key: 'status',
            label: '状态',
            type: 'select',
            fixed: true,
            config: {
              options: ValueCardStatusOptions
            },
            flex: 4
          },
          {
            key: 'createTime',
            label: '创建时间',
            type: 'range-picker',
            fixed: true
          },
          {
            key: 'activeTime',
            label: '激活时间',
            type: 'range-picker',
            fixed: true
          }
        ]
      },

      table: {
        columns: [
          // {
          //   dataIndex: 'id',
          //   title: 'ID',
          //   width: 200
          // },
          {
            dataIndex: 'cardNo',
            title: '卡号',
            width: 200
          },
          {
            dataIndex: 'name',
            title: '储值卡名称',
            width: 200
          },
          {
            dataIndex: 'initBalance',
            title: '面值(元)',
            width: 100,
            customRender: ({ text }) => {
              return moneyToYuan(text)
            }
          },
          {
            dataIndex: 'balance',
            title: '剩余金额(元)',
            width: 120,
            customRender: ({ text }) => {
              return moneyToYuan(text)
            }
          },
          {
            dataIndex: 'status',
            title: '状态',
            width: 80,
            customRender: ({ text }) => {
              const s = ValueCardStatusOptions.find((i) => i.value === text)
              return <div style={{ color: s?.color }}>{s?.label}</div>
            }
          },
          {
            dataIndex: 'userPhone',
            title: '归属用户',
            width: 130,
            customRender: ({ text }) => {
              return text ?? '-'
            }
          },
          {
            dataIndex: 'source',
            title: '发放场景',
            width: 150,
            customRender: ({ text }) => {
              return ValueCardSourceTypeOptions.find((i) => i.value === text)?.label
            }
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            width: 200
          },
          {
            title: '激活时间',
            dataIndex: 'activeTime',
            width: 200,
            customRender: ({ text }) => {
              return text ?? '-'
            }
          },
          {
            title: '操作',
            dataIndex: 'title',
            width: 100,
            fixed: 'right',
            customRender: ({ record }) => {
              return useTableAction({
                list: [
                  {
                    title: '收支明细',
                    hidden: !record.userPhone,
                    onClick: () => showValueCardUseRecord(record)
                  },
                  {
                    title: '吊销',
                    type: 'danger',
                    onClick: () => {
                      onRevoke(record)
                    },
                    // 待发放、待使用时显示
                    hidden: ![ValueCardStatus.PendingActivate, ValueCardStatus.Available].includes(record.card?.status)
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
