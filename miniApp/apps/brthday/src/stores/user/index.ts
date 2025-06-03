import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const userStore = defineStore('userStore', () => {

  const userInfo = ref({})

  const loginStatus = computed(() => {
    return !!Object.keys(userInfo.value).length || false
  })

  return {
    userInfo,
    loginStatus
  }
})

