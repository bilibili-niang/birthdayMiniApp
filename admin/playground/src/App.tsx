import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './app.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div class="app-page">
          <RouterView/>
        </div>
      )
    }
  }
})
