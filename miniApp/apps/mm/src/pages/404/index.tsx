import { defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  setup() {
    return () => {
      return <div class="404">你迷失了方向</div>
    }
  }
})
