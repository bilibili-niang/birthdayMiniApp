import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import devConfig from './dev'
import prodConfig from './prod'
import customRoutes from './custom-routes'

// 获取环境变量
const keysWithPrefix = Object.keys(process.env).filter(key => key.startsWith('TARO_APP_'))
const valuesWithPrefix = keysWithPrefix.reduce((acc, key) => {
  acc[key] = `"${process.env[key]}"`
  return acc
}, {})

console.log('========================= 环境变量 =========================')
console.log(valuesWithPrefix)
console.log('============================================================')

export default defineConfig(async (merge, { command, mode }) => {
  console.log(command, mode, process.env.TARO_APP_NAME)
  const baseConfig: UserConfigExport = {
    env: {
      ...valuesWithPrefix
    },
    projectName: 'coupon',
    date: '2024-1-23',
    designWidth: 375,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: `dist/${process.env.TARO_ENV}`,
    plugins: ['@tarojs/plugin-http', '@tarojs/plugin-html'],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'vue3',
    // https://github.com/NervJS/taro/issues/13456
    compiler: { type: 'webpack5', prebundle: { enable: false } },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    alias: {},
    mini: {
      miniCssExtractPluginOption: {
        //忽略css文件引入顺序
        ignoreOrder: true
      },
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)

        chain.merge({
          module: {
            rule: {
              mjsScript: {
                test: /\.mjs$/,
                include: [/pinia/],
                use: {
                  babelLoader: {
                    loader: require.resolve('babel-loader')
                  }
                }
              }
            }
          }
        })
      }
    },
    h5: {
      router: {
        customRoutes: customRoutes
      },
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        //忽略css文件引入顺序
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        pxtransform: {
          config: {
            baseFontSize: 14,
            minRootSize: 12
          }
        },
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)

        // JSX 热重载
        chain.module
          .rule('jsx')
          .test(/\.(j|t)sx$/)
          .use(['babel-loader', '@ant-design-vue/vue-jsx-hot-loader'] as any)
          .before('babel-loader')
          .loader('@ant-design-vue/vue-jsx-hot-loader')
      }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    },
    sass: {
      resource: [path.resolve(__dirname, '../../../packages/styles/src/variables.scss')]
    }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
