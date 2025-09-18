import { defineComponent, onActivated, onMounted, ref } from 'vue'
import './style.scss'
import { Button, Icon, Input, QRCode, Spin } from '@kacat/ui'
import FundChangeRecord from './fund-change-record'
import RechargeOrder from './recharge-order'
import { useTabSearchTable } from '../../components/search-table'
import useSchemaFormModal from '../../hooks/useSchemaFormModal'
import { $getFundAccountInfo } from '../../api/fund-account'
import Sms from './sms'

export default defineComponent({
  setup() {
    const Table = useTabSearchTable([
      // @ts-ignore
      <FundChangeRecord title="资金流水明细" />,
      // @ts-ignore
      <RechargeOrder title="充值订单" />,
      // @ts-ignore
      <Sms title="短信设置" />
    ])

    const onRecharge = () => {
      useSchemaFormModal({
        title: '账户充值',
        width: 460,
        data: {},
        okText: '完成',
        schema: {
          type: 'object',
          properties: {
            账户名称: {
              title: '账户名称',
              type: 'string',
              readonly: true,
              config: {
                placeholder: '卡猫贸易'
              }
            },
            充值金额: {
              title: '充值金额（元）',
              type: 'number',
              required: true,
              config: {
                min: 1,
                max: 999999,
                placeholder: '请输入'
              }
            },
            _: {
              title: '微信支付',
              type: 'null',
              description: '请使用微信扫描付款，完成后刷新查看账户余额',
              widget: (props) => {
                return (
                  <div style="width:200px;height:200px;position:relative;overflow:hidden;border-radius:8px">
                    <div style="background:rgba(255, 255, 255, 0.9);color:#000;position:absolute;z-index:12;top:0;left:0;bottom:0;right:0;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;text-align:center;">
                      <div>暂不支持</div>
                      <div>请联系平台客服线下充值</div>
                    </div>
                    <QRCode size={200} bgColor="#fff" value="暂不支持，请联系平台客服线下充值" />
                  </div>
                )
              }
            }
          }
        }
      })
    }

    const account = ref({
      id: '',
      balance: 0,
      totalRechargeAmount: 0,
      totalUsedAmount: 0,
      status: '正常',
      statusDescription: null
    })

    const isLoading = ref(false)
    const getAccount = () => {
      isLoading.value = true
      $getFundAccountInfo()
        .then((res) => {
          account.value = res.data
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    onMounted(() => {
      getAccount()
    })

    onActivated(() => {
      getAccount()
    })

    const formatAmount = (v: number) => {
      const _v = Number.isNaN(v) ? 0 : v

      return (_v / 100).toFixed(2)
    }

    return () => {
      return (
        <div class="merchant-detail-page">
          <div class="fund-account">
            <h2>
              资金账户{' '}
              {isLoading.value ? (
                <Spin />
              ) : (
                <iconpark-icon onClick={getAccount} class="icon clickable" name="undo"></iconpark-icon>
              )}
            </h2>
            <div class="list">
              <div class="item">
                <div class="label">账户余额（元）</div>
                <div class="value number-font">
                  {formatAmount(account.value.balance)}
                  <Button type="primary" onClick={onRecharge}>
                    充值
                  </Button>
                </div>
              </div>
              <div class="item">
                <div class="label">总充值金额（元）</div>
                <div class="value number-font">{formatAmount(account.value.totalRechargeAmount)}</div>
              </div>
              <div class="item">
                <div class="label">已使用金额（元）</div>
                <div class="value number-font">{formatAmount(account.value.totalUsedAmount)}</div>
              </div>
            </div>
          </div>
          {Table}
        </div>
      )
    }
  }
})
