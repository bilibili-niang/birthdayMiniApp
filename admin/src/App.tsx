import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './app.scss'
import { $getConfig } from '@/api'

export default defineComponent({
  name: 'App',
  setup() {
    const init = () => {
      $getConfig().then((res: any) => {
        if (res.success) {
          setTimeout(() => {
            // document.getElementById('app')?.setAttribute('data-mounted', 'true')
          }, 700)
        }
      })
    }

    init()
    return () => {
      return (
        <div>
          <RouterView />
        </div>
      )
    }
  }
})
