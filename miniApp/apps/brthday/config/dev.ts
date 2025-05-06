import type { UserConfigExport } from '@tarojs/cli'

export default {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      port: 3000,
      proxy: {
        '/kacat': {
          target: process.env.TARO_APP_REQUEST_PROXY_TARGET,
          ws: false,
          changeOrigin: true
        },
        '/kuoka': {
          target: process.env.TARO_APP_REQUEST_PROXY_TARGET,
          ws: false,
          changeOrigin: true
        },
        '/blade': {
          target: process.env.TARO_APP_REQUEST_PROXY_TARGET,
          ws: false,
          changeOrigin: true
        }
      }
    }
  }
} satisfies UserConfigExport
