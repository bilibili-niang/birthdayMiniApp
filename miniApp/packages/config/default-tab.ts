export const defaultTabConfig = {
  name: '默认导航',
  theme: 'common',
  borderRadius: [0, 0, 0, 0],
  backgroundColor: 'rgba(255, 255, 255, 1)',
  color: '#999',
  activeColor: 'rgba(0, 0, 0, 1)',
  list: [
    {
      page: {
        id: 'index',
        name: '首页'
      },
      text: '首页',
      icon: {
        normal: {
          url: 'https://dev-cdn.kacat.cn/upload/20231208/d7962819ab71c8631222d8a2fe679cc8.png',
          width: 400,
          height: 400
        },
        active: {
          url: 'https://dev-cdn.kacat.cn/upload/20231208/72994d9fbe76b0a53b7b9c21df47f797.gif',
          width: 400,
          height: 400
        }
      }
    }
  ]
}
