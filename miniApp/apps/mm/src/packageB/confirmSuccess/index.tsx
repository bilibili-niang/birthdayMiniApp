// 展示核销商品信息,选择店铺
import { defineComponent, ref } from 'vue'
import './style.scss'
import { BasePage, computedDistance, useModal, useUserStore } from '@kacat/core'
import { useGlobalStore } from '../../stores'
import Text from 'src/components/common/Text/index'
import CustomButton from '../../components/common/customButton'
import { goConfirmSecond } from '../../router'
import { stores as storeApi } from '../../api'
import { checkGoodsDataType } from '../../api/stores/type'
import CustomPopup from 'src/components/common/customPopup'
import Taro from '@tarojs/taro'
import StoreList from './components/storeList/index'
import { Icon } from '@kacat/ui'
import { oneStoreType } from '../../stores/types'
import { useRouter } from '@tarojs/taro'
import { onBack } from '../../utils'
import { Skeleton } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/packages/skeleton/index.css'

definePageConfig({
  navigationStyle: 'custom'
})

export default defineComponent({
  name: 'ConfirmSuccess',
  setup() {
    const store = useGlobalStore()
    // 接口所有的数据
    const goodsInfo = ref<checkGoodsDataType | null>({} as checkGoodsDataType)
    // 接口返回的卡券的集合
    const coupons = ref([])
    const showSkeleton = ref(true)
    const showStore = ref(true)

    // 当前选中的核销店铺
    const nowStore = ref<any>()
    // 存储商铺列表
    const storesList = ref<oneStoreType[]>([])

    const { selectedStore } = store
    const { updateGoodsInfo } = store
    const init = () => {
      const searchObj = useRouter().params
      storeApi
        .getOrderInfo({
          code: searchObj?.id,
          merchantId: selectedStore
        })
        .then(res => {
          if (res.success) {
            showSkeleton.value = false
            getCardsStores(res.data.goodsId)
            updateGoodsInfo(res.data)
            // 获取商品快照即可
            goodsInfo.value = res.data
            coupons.value = res.data.coupons.filter(it => it.status === 1)
          } else {
            Taro.showToast({
              title: res.msg,
              icon: 'none'
            })
            setTimeout(onBack, 2000)
          }
        })
        .finally(() => {
          console.log('goodsInfo.value.goodsSnapshot.goodsStockSnapshot')
          console.log(goodsInfo.value)
        })
    }

    init()

    /**
     * 获取卡券核销店铺列表并按距离排序
     */
    const getCardsStores = goodsId => {
      storeApi
        .getCardVouchersStore(goodsId, selectedStore)
        .then(res => {
          if (res.success) {
            showStore.value = false
            // 先对records进行距离排序
            res.data.records.sort((a: any, b: any) => a.distance - b.distance)
            // 确保distance字段存在且为数字再进行赋值，这里简单检查作为示例
            storesList.value = res.data.records.map(record => ({
              ...record,
              displayDistance: computedDistance(record.distance)
            }))
            // 设置第一个元素为nowStore，确保排序后已选择列表不为空
            nowStore.value = storesList.value!.length > 0 ? storesList.value![0] : null
          } else {
            Taro.showToast({
              title: '获取卡券核销店铺列表失败',
              icon: 'none'
            })
          }
        })
        .catch(e => {
          Taro.showToast({
            title: '获取卡券核销店铺列表时发生错误',
            icon: 'none'
          })
        })
    }
    // 去核销
    const confirmToWriteOff = () => {
      // 如果核销店铺只有一家,直接跳转,如果有多家,则弹出选择菜单
      if (storesList.value?.length === 1) {
        store.updateConfirmStore(storesList.value[0])
        goConfirmSecond()
      } else {
        // 选一下
        alertSelectors()
      }
    }
    const storeListModal = ref()
    const storeTrigger = (item: any) => {
      nowStore.value = item
      storeListModal.value.close()
    }

    // 更换核销店铺
    const alertSelectors = () => {
      storeListModal.value = useModal({
        maskVisible: true,
        closeable: false,
        content: <StoreList data={storesList.value} onChangeStore={storeTrigger} />,
        placement: 'bottom'
      })
    }
    // 跳转核销页面

    const writeOffInfo = ref()
    const writeOffError = ref(false)

    const coreStore = useUserStore()

    return () => {
      return (
        <BasePage
          navigator={{
            title: '',
            showMenuButton: false,
            navigationBarBackgroundColor: 'transparent'
          }}
          backgroundColor="#f1f3fb"
          class="confirmBasePage"
        >
          <div class="confirmSuccess column">
            <div class="column">
              <Text weight={500} size={27}>
                核销卡券
              </Text>

              <div class="writeOffInformation column pureWhite margin-top-10">
                <Skeleton width="100vw" height="30px" animated row="1" title={false} round loading={showSkeleton.value}>
                  <div class="row align-items-center">
                    <Text weight={500} size={20} class="no-wrap">
                      待使用卡券:
                    </Text>
                    <Text weight={500} size={20} class="themeColor margin-left-small">
                      {coupons.value.length}
                    </Text>
                    <Text weight={500} size={20} class="no-wrap margin-left-small">
                      张
                    </Text>
                  </div>
                  {goodsInfo.value.coupons?.[0]?.expireEndAt ? (
                    <Text size={15} color="rgba(0,0,0,.5)" class="no-wrap">
                      券码有效期至: <span class="margin-left-small"></span> {goodsInfo.value.coupons[0].expireEndAt}
                    </Text>
                  ) : (
                    <div />
                  )}
                </Skeleton>
              </div>

              <div class="writeOffInformation column pureWhite margin-top-10">
                <Skeleton width="100vw" height="30px" animated row="3" title={false} round loading={showSkeleton.value}>
                  <div class="row">
                    <img
                      class="cardImage row w-100-h-100"
                      src={goodsInfo.value.goodsSnapshot.coverImages?.[0]}
                      alt={goodsInfo.value.goodsSnapshot?.title}
                    />
                    <div class="detail-content column w-percent60 padding-left-s">
                      <Text weight={500} size={18} oneRow class="w-200-f">
                        {goodsInfo.value.goodsSnapshot?.title}
                      </Text>
                      <Text
                        size={15}
                        color="rgba(0,0,0,.5)"
                        class="specifications-content row just-content-space-between"
                      >
                        <div>规格:</div>

                        <div class="column">
                          <div class="text-end">{goodsInfo.value?.goodsStockName}</div>
                          <div class="text-end">￥ {goodsInfo.value?.priceText}</div>
                        </div>
                      </Text>
                    </div>
                  </div>
                </Skeleton>
              </div>

              <div class="storeInfo pureWhite column">
                <div class="row just-content-space-between" onClick={alertSelectors}>
                  <Text weight={500} size={17}>
                    可使用门店
                  </Text>
                  <Text size={12} weight={400} class="storeNums row">
                    {storesList.value?.length}家可用 <Icon name="right" />
                  </Text>
                </div>
                <Skeleton width="100vw" height="30px" animated row="3" title={false} round loading={showStore.value}>
                  <div class="row margin-top-20 just-content-space-between">
                    <div class="column">
                      <Text size={16} weight={400}>
                        {nowStore.value?.name}
                      </Text>
                      <Text size={12} weight={400} color="rgba(0,0,0,.5)" class="storeAddressText">
                        {nowStore.value?.address}
                      </Text>
                    </div>

                    <div class="tagContainer column">
                      {storesList.value &&
                        storesList.value[0]?.id === nowStore.value?.id &&
                        coreStore.$state.userLocation?.longitude && (
                          <Text size={10} color="#627CFF" class="theClosestTag">
                            离我最近
                          </Text>
                        )}
                      {coreStore.$state.userLocation?.longitude && (
                        <Text size={12} weight={400} class="distanceNum" color="rgba(0,0,0,.5)">
                          {nowStore.value?.displayDistance}
                        </Text>
                      )}
                    </div>
                  </div>
                </Skeleton>
              </div>
            </div>
            <div class="column w-percent100 just-content-center ">
              <div class="bottomBtns column margin-bottom-10">
                {!showSkeleton.value && (
                  <CustomButton weight={500} onClick={confirmToWriteOff} class="w-percent100 margin-top-10">
                    去核销
                  </CustomButton>
                )}
              </div>
            </div>
          </div>

          {/*  核销失败的弹窗*/}
          <CustomPopup
            v-model={writeOffError.value}
            title="核销失败"
            titleWeight={620}
            onConfirm={() => (writeOffError.value = false)}
          >
            <div class="row just-content-center">{writeOffInfo.value?.msg || '核销失败了'}</div>
          </CustomPopup>
        </BasePage>
      )
    }
  }
})
