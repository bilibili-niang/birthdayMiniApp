import { defineComponent } from 'vue'

definePageConfig({
  enableShareAppMessage: true,
  navigationStyle: 'custom',
  disableScroll: true
})

export default defineComponent({
  name: 'componentName',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div class="home-page">
          home
        </div>
      )
    }
  }
})
