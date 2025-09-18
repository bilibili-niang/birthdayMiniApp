import { defineComponent } from 'vue'
import { useSearchTable } from '../../../components/search-table'

enum billType {
  expense = 0,
  income = 1
}

const BILL_TYPE_OPTIONS = [
  { label: '支出', value: billType.expense },
  { label: '收入', value: billType.income }
]

enum serviceType {
  refund = 0,
  recharge = 1,
  sms = 2
}

const SERVICE_TYPE_OPTIONS = [
  { label: '扣费退款', value: serviceType.refund },
  { label: '账户充值', value: serviceType.recharge },
  { label: '短信服务', value: serviceType.sms }
]

export default defineComponent({
  props: {
    merchantId: String
  },
  setup(props) {
    const { Table } = useSearchTable({
      title: '资金流水记录',
      requestURL: props.merchantId
        ? `/kacat-cornerstone-merchant/wallet/bill?merchantId=${props.merchantId}`
        : '/kacat-cornerstone-merchant/wallet/bill',
      filter: {
        list: [
          {
            label: '收支类型',
            key: 'billType',
            type: 'select',
            fixed: true,
            flex: 3,
            config: {
              options: BILL_TYPE_OPTIONS
            }
          },
          {
            label: '服务类型',
            key: 'serviceType',
            type: 'select',
            fixed: true,
            flex: 4,
            config: {
              options: SERVICE_TYPE_OPTIONS
            }
          },
          {
            label: '流水单号',
            key: '流水单号',
            type: 'input',
            fixed: true,
            flex: 5
          },
          {
            label: '创建时间',
            key: 'createTime',
            type: 'range-picker',
            flex: 8
          }
        ]
      },
      table: {
        columns: [
          { dataIndex: 'id', title: '流水单号', width: 200 },
          // { dataIndex: 'id', title: '账户名称', width: 200 },
          {
            dataIndex: 'billType',
            title: '流水类型',
            width: 100,
            customRender: ({ text }) => {
              return BILL_TYPE_OPTIONS.find((i) => i.value === text)?.label
            }
          },
          {
            dataIndex: 'amount',
            title: '金额（元）',
            width: 120,
            customRender: ({ text }) => {
              return (text ?? 0) / 100
            }
          },
          {
            dataIndex: 'serviceType',
            title: '服务类型',
            width: 100,
            customRender: ({ text }) => {
              return SERVICE_TYPE_OPTIONS.find((i) => i.value === text)?.label
            }
          },
          { dataIndex: 'serviceOrderNo', title: '关联订单号', width: 240 },
          { dataIndex: 'details', title: '说明', width: 380 },
          { dataIndex: 'createTime', title: '创建时间', width: 200 }
        ]
      }
    })
    return () => {
      return Table
    }
  }
})
