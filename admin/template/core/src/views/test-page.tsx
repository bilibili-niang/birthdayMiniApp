import { Spin } from '@kacat/ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const value = ref(Math.random())
    const isLoading = ref(true)
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
    return () => {
      return (
        <div>
          <h1>{value.value}</h1>
          {isLoading.value && <Spin />}
        </div>
      )
    }
  }
})
