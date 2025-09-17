
import { defineComponent } from 'vue'
import themeConfig from './theme.json'
import './color.scss'
import { PREFIX_CLS } from '@kacat/config'

export default defineComponent({
  name: 'DevColors',
  setup() {
    return () => {
      return (
        <div class="dev-colors">
          <div style="margin-top: 36px;" class={`${PREFIX_CLS}-settings__sub-title`}>
            颜色（仅dev模式）
          </div>
          {Object.keys(themeConfig.primaryColors).map((key) => {
            return (
              <>
                <div style="font-size: 14px; font-weight: 500; margin-bottom: 12px;margin-top: 48px;">{key}</div>
                <div class="dev-colors__list">
                  {Object.keys((themeConfig.primaryColors as any)[key]).map((variable) => {
                    return (
                      <div
                        class="dev-colors__item clickable"
                        style={{
                          backgroundColor: (themeConfig.primaryColors as any)[key][variable]
                        }}
                      >
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
      )
    }
  }
})
