import { defineComponent } from 'vue'
import { useSearchTable } from '../../../components/search-table'
import { COLOR_DISABLED, COLOR_PROCESSING, COLOR_SUCCESS } from '@kacat/config'

enum rechargePayMethod {
  offline = 0,
  wechatPay = 1
}

const RECHARGE_PAY_METHOD_OPTIONS = [
  { label: '线下付款', value: rechargePayMethod.offline },
  { label: '微信支付', value: rechargePayMethod.wechatPay }
]

enum rechargeStatus {
  closed = 0,
  success = 1,
  pending = 2,
  refund = 3
}

const RECHARGE_STATUS_OPTIONS = [
  { label: '已关闭', value: rechargeStatus.closed, color: COLOR_DISABLED },
  { label: '支付成功', value: rechargeStatus.success, color: COLOR_SUCCESS },
  { label: '待支付', value: rechargeStatus.pending, color: COLOR_PROCESSING },
  { label: '已退款', value: rechargeStatus.refund, color: COLOR_DISABLED }
]

export default defineComponent({
  props: {
    merchantId: String
  },
  setup(props) {
    const { Table } = useSearchTable({
      title: '充值订单表',
      requestURL: props.merchantId
        ? `/kacat-cornerstone-merchant/wallet/recharge-order?merchantId=${props.merchantId}`
        : '/kacat-cornerstone-merchant/wallet/recharge-order',
      filter: {
        list: [
          {
            key: 'status',
            label: '订单状态',
            type: 'select',
            fixed: true,
            flex: 4,
            config: {
              options: RECHARGE_STATUS_OPTIONS
            }
          },
          {
            key: 'payMethod',
            label: '支付方式',
            type: 'select',
            fixed: true,
            flex: 4,
            config: {
              options: RECHARGE_PAY_METHOD_OPTIONS
            }
          },
          {
            key: 'userMobile',
            label: '操作用户手机号',
            type: 'input',
            fixed: true
          },
          {
            key: 'orderNo',
            label: '订单编号',
            type: 'input'
          },
          {
            key: 'payMethodOrderNo',
            label: '支付单号',
            type: 'input'
          },
          {
            key: 'createTime',
            label: '创建时间',
            type: 'range-picker'
          }
        ]
      },
      table: {
        columns: [
          { dataIndex: 'id', title: 'ID', width: 200 },
          { dataIndex: 'orderNo', title: '订单编号', width: 240 },
          { dataIndex: 'userMobile', title: '充值用户', width: 200 },
          {
            dataIndex: 'amount',
            title: '订单金额（元）',
            width: 160,
            customRender: ({ text }) => {
              return (text ?? 0) / 100
            }
          },
          {
            dataIndex: 'status',
            title: '订单状态',
            width: 200,
            customRender: ({ text }) => {
              const s = RECHARGE_STATUS_OPTIONS.find((item) => item.value === text)
              return <div style={{ color: s?.color }}>{s?.label}</div>
            }
          },
          {
            dataIndex: 'payMethod',
            title: '支付方式',
            width: 200,
            customRender: ({ text }) => {
              return RECHARGE_PAY_METHOD_OPTIONS.find((item) => item.value === text)?.label
            }
          },
          { dataIndex: 'payMethodOrderNo', title: '支付订单号', width: 200 },
          { dataIndex: 'createTime', title: '创建时间', width: 200 }
        ]
      }
    })
    return () => {
      return Table
    }
  }
})
