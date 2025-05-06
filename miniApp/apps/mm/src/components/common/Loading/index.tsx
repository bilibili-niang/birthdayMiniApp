// 抄的
import './style.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  setup() {
    return () => {
      return (
        <div class="loadingFa">
          <div class="loadContainer">
            <div class="load">
              <div>G</div>
              <div>N</div>
              <div>I</div>
              <div>D</div>
              <div>A</div>
              <div>O</div>
              <div>L</div>
            </div>
          </div>
        </div>
      )
    }
  }
})
