import { defineComponent, onMounted, ref } from 'vue'
import { useSearchTable } from '../../../components/search-table'
import { Button, Icon, Input, message, Rate as AntRate } from '@kacat/ui'
import request from '../../../api/request'
import { useResponseMessage } from '../../../hooks/useRequestErrorMessage'
import { COLOR_DISABLED, COLOR_ERROR, COLOR_SUCCESS } from '@kacat/config'

enum SmsStatus {
  not = 0,
  success = 1,
  fail = 2
}

const SMS_STATUS_OPTIONS = [
  { label: '未发送', value: SmsStatus.not, color: COLOR_DISABLED },
  { label: '发送成功', value: SmsStatus.success, color: COLOR_SUCCESS },
  { label: '发送失败', value: SmsStatus.fail, color: COLOR_ERROR }
]

enum SmsDrive {
  aliyun = 1
}

const SMS_DRIVE_OPTIONS = [{ label: '阿里云', value: SmsDrive.aliyun }]

enum SmsBizQueryStatus {
  not = 0,
  success = 1,
  fail = 2
}

const SMS_BIZ_QUERY_STATUS_OPTIONS = [
  { label: '未查询', value: SmsBizQueryStatus.not, color: COLOR_DISABLED },
  { label: '回执成功', value: SmsBizQueryStatus.success, color: COLOR_SUCCESS },
  { label: '回执失败', value: SmsBizQueryStatus.fail, color: COLOR_ERROR }
]

export default defineComponent({
  props: {
    merchantId: String,
    smsSettings: Boolean
  },
  setup(props) {
    const sign = ref('')
    const getSmsSign = () => {
      request({
        url: '/kacat-cornerstone-merchant/sms/sign-name',
        params: {
          merchantId: props.merchantId
        }
      }).then((res) => {
        sign.value = res.data
      })
    }

    const saveSmsSign = () => {
      const endLoading = message.loading('正在保存中...')
      request({
        url: '/kacat-cornerstone-merchant/sms/sign-name',
        method: 'post',
        data: {
          merchantId: props.merchantId,
          signName: sign.value
        }
      })
        .then((res) => {
          useResponseMessage(res)
        })
        .catch((err) => useResponseMessage(err))
        .finally(() => {
          endLoading()
        })
    }

    onMounted(() => {
      if (props.smsSettings) {
        getSmsSign()
      }
      getSmsCount()
    })

    const count = ref(-1)
    const getSmsCount = async () => {
      return request({
        url: '/kacat-cornerstone-merchant/sms/record/valid-count',
        method: 'get',
        params: {
          merchantId: props.merchantId
        }
      }).then((res) => {
        count.value = res.data ?? -1
      })
    }

    const Count = () => {
      return Number(count.value) >= 0 ? (
        <strong style="margin-left:24px; padding: 2px 8px; background: linear-gradient(to top, var(--kacat-color-primary-02) 12px, transparent 10px);">
          短信用量：累计已发送 {count.value} 条短信
        </strong>
      ) : null
    }

    const { Table } = useSearchTable({
      title: '短信设置',
      requestURL: `/kacat-cornerstone-merchant/sms/record?merchantId=${props.merchantId}`,
      async customRequest(params) {
        return request({
          url: '/kacat-cornerstone-merchant/sms/record',
          params: {
            ...params,
            merchantId: props.merchantId
          }
        }).finally(() => {
          getSmsCount()
        })
      },
      filterFront: () => {
        if (!props.smsSettings) return <Count />
        return (
          <div>
            <a>短信签名通过阿里云后台创建，创建成功后通过此页面完成短信签名与合作商的绑定关系</a>
            <div style="display:flex;align-items:center;margin-top:12px;">
              签名名称：
              <Input
                style="width:150px"
                value={sign.value}
                onChange={(e) => {
                  sign.value = e.target.value || ''
                }}
                placeholder="请输入短信签名"
              />
              &nbsp;
              <Button
                type="primary"
                onClick={() => {
                  saveSmsSign()
                }}
              >
                保存
              </Button>
              <Count />
            </div>
          </div>
        )
      },
      filter: {
        list: [
          { key: 'phone', label: '接收用户', type: 'input', flex: 4, fixed: true },
          {
            key: 'status',
            label: '发送状态',
            type: 'select',
            flex: 4,
            config: { options: SMS_STATUS_OPTIONS },
            fixed: true
          },
          // {
          //   key: 'bizQuery',
          //   label: '回执状态',
          //   type: 'select',
          //   flex: 4,
          //   config: { options: SMS_BIZ_QUERY_STATUS_OPTIONS },
          //   fixed: true
          // },
          { key: 'createTime', label: '发送时间', type: 'range-picker', fixed: true },
          {
            key: 'recordNo',
            label: '发送单号',
            type: 'input'
          }
        ]
      },
      table: {
        columns: [
          { dataIndex: 'recordNo', title: '发送单号', width: 250 },
          { dataIndex: 'phone', title: '接收用户', width: 150 },
          {
            title: '短信内容',
            width: 200,
            customRender: ({ record }) => {
              return <div>{record.detail.content}</div>
            }
          },
          {
            dataIndex: 'status',
            title: '发送状态',
            width: 100,
            customRender: ({ text }) => {
              const s = SMS_STATUS_OPTIONS.find((i) => i.value === text)
              return <div style={{ color: s?.color }}>{s?.label}</div>
            }
          },
          // {
          //   dataIndex: 'bizQuery',
          //   title: '消息回执',
          //   width: 100,
          //   customRender: ({ text }) => {
          //     const s = SMS_BIZ_QUERY_STATUS_OPTIONS.find((i) => i.value === text)
          //     return <div style={{ color: s?.color }}>{s?.label}</div>
          //   }
          // },
          {
            dataIndex: 'fee',
            title: '扣费金额（元）',
            width: 150,
            customRender: ({ text }) => {
              return text / 100
            }
          },
          { dataIndex: 'code', title: '短信编码', width: 120 },
          {
            dataIndex: 'drive',
            title: '短信驱动',
            width: 100,
            customRender: ({ text }) => {
              const s = SMS_DRIVE_OPTIONS.find((i) => i.value === text)
              return s?.label
            }
          },
          { dataIndex: 'id', title: 'ID', width: 200 },
          {
            dataIndex: 'createTime',
            title: '发送时间',
            width: 200,
            fixed: 'right',
            sorter: true
          },
          {
            title: '回执时间',
            width: 200,
            fixed: 'right',
            sorter: true,
            customRender: ({ record }) => {
              const queryTime = record.detail.queryTime
              return queryTime
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
