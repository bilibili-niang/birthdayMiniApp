// 核销店铺列表

import './style.scss'
import { defineComponent } from 'vue'
import Text from 'src/components/common/Text/index'
import { goConfirmSecond } from '../../../../router'
import { useGlobalStore } from '../../../../stores'
import { useUserStore } from '@kacat/core'

export default defineComponent({
  name: 'StoreList',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  emits: ['changeStore'],
  setup({ data }, { emit }) {
    const store = useGlobalStore()
    const chooseStore = (item: any) => {
      emit('changeStore', item)
      store.updateConfirmStore(item)
      goConfirmSecond()
    }

    const coreStore = useUserStore()
    return () => {
      return (
        <div class="store-list column">
          <div class="column w-percent100 padding-s">
            <Text weight={500} size={17}>
              请选择当前消费的门店
            </Text>
            <div class="titleBottomLine horizontalLine"></div>
          </div>
          {data?.length !== 0 &&
            data?.map((item: any, index: number) => {
              return (
                <div class="store-item column radio-n padding-s" onClick={() => chooseStore(item)}>
                  <div class="row just-content-space-between">
                    <Text weight={400} size={16} color="rgba(0,0,0,1)">
                      {item.name}
                    </Text>
                    {index === 0 && coreStore.$state.userLocation?.longitude && (
                      <Text size={12} color="#627CFF" class="theClosestTag">
                        离我最近
                      </Text>
                    )}
                  </div>

                  <div class="row just-content-space-between">
                    <Text size={12} color="rgba(0, 0, 0,.5)" weight={400} width="80%" class="storeAddressText">
                      {item.address}
                    </Text>
                    {coreStore.$state.userLocation?.longitude && (
                      <Text size={12} weight={400} color="rgba(0, 0, 0,.5)">
                        {item?.displayDistance}
                      </Text>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      )
    }
  }
})
