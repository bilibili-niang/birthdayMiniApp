<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
// 获取屏幕边界到安全区域距离
let safeAreaInsets
let systemInfo
// #ifdef MP-WEIXIN
// 微信小程序使用新的API
systemInfo = uni.getWindowInfo()
safeAreaInsets = systemInfo.safeArea
  ? {
    top: systemInfo.safeArea.top,
    right: systemInfo.windowWidth - systemInfo.safeArea.right,
    bottom: systemInfo.windowHeight - systemInfo.safeArea.bottom,
    left: systemInfo.safeArea.left,
  }
  : null
// #endif
// #ifndef MP-WEIXIN
// 其他平台继续使用uni API
systemInfo = uni.getSystemInfoSync()
safeAreaInsets = systemInfo.safeAreaInsets
// #endif
const author = ref('菲鸽')
// 测试 uni API 自动引入
onLoad(() => {
  console.log('项目作者:', author.value)
})
console.log('index')
</script>

<template>
  <view class="bg-white px-4 pt-2" :style="{ marginTop: `${safeAreaInsets?.top}px` }">
    这是首页哦
  </view>
</template>
