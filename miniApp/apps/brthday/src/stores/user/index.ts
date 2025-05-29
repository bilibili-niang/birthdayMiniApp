import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('userStore', () => {

  const userInfo = ref({})

  const loginStatus = ref(false)

  return {
    userInfo,
    loginStatus: loginStatus.value
  }
})

