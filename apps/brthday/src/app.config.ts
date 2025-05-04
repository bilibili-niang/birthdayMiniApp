export default defineAppConfig({
  pages: ['pages/index'],
  subPackages: [
    {
      root: 'packageMain',
      pages: [
        'index',
      ]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#f5f5f5',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  enableShareAppMessage: true,
  enableShareTimeline: false,
  requiredPrivateInfos: ['chooseAddress', 'getLocation'],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序计算距离'
    }
  }
})
