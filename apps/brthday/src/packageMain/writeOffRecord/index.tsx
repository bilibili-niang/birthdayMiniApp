// 核销记录列表
import './style.scss'
import { defineComponent, ref } from 'vue'
import { stores } from 'src/api'
import { recordsType } from 'src/api/stores/type'
import Text from 'src/components/common/Text/index'
import { BasePage, navigationItemType, NavigationScrollList, useCopyText } from '@kacat/core'

definePageConfig({
  navigationStyle: 'custom',
  disableScroll: true
})

export default defineComponent({
  name: 'WriteOffRecord',
  setup() {
    const InfoText = ({ label, value }: { label: string; value: string }) => (
      <Text color="rgba(0,0,0,.7)" size={11} width="250px" class="row info">
        {label}
        <div class="vline" />
        {value}
      </Text>
    )

    const render = ({
      orderNo,
      goodsImages,
      goodsName,
      goodsStockName,
      createTime,
      storeName,
      assistantPhone
    }: recordsType) => (
      <div class="item col w-full white">
        <div class="row">
          <Text weight={400} size={15} class="order row" onClick={() => useCopyText(orderNo)}>
            订单编号:
            <div class="vline" />
            {orderNo}
          </Text>
        </div>
        <div class="hline" />
        <div class="row space-between">
          <img class="img" src={goodsImages[0]} alt={goodsName} mode="aspectFill" />
          <div class="text-box col">
            <Text weight={500} oneRow width="250px" size={16} class="name">
              {goodsName}
            </Text>
            <InfoText label="规格" value={goodsStockName} />
            <InfoText label="核销时间" value={createTime} />
            <InfoText label="门店" value={storeName} />
            <InfoText label="店员手机" value={assistantPhone} />
          </div>
        </div>
      </div>
    )

    const makeRequest = (scope: string) => async (p: any) => {
      const res = await stores.getWriteOffRecord({ scope, ...p })
      const total = res.data.total
      const idx = scope === '2' ? 0 : 1
      tabs.value[idx].label = tabs.value[idx].text + (total ? `(${total})` : '')
      return res
    }

    const tabs = ref<(navigationItemType & { text: string })[]>([
      { value: 0, text: '我核销的', label: '', request: makeRequest('2'), render },
      { value: 1, text: '全店记录', label: '', request: makeRequest('1'), render }
    ])

    return () => (
      <BasePage
        navigator={{
          title: (
            <Text class="w-full m-auto" weight={600} size={15}>
              核销记录
            </Text>
          ),
          showMenuButton: true,
          navigationBarBackgroundColor: 'transparent'
        }}
        backgroundColor="#F1F3FB"
        class="scroll"
      >
        <NavigationScrollList class="record" navigationList={tabs.value} />
      </BasePage>
    )
  }
})
