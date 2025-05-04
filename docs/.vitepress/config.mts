import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kacat-M-Fe',
  description: '卡猫C端开发文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        items: [
          {
            text: 'Components',
            link: '/docs/components/index'
          },
          {
            text: 'Hooks',
            link: '/docs/hooks/index'
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/docs/': [
        {
          text: 'Components',
          link: '/docs/components/index',
          items: [{ text: 'BasePage', link: '/docs/components/BasePage' }]
        },
        {
          text: 'Hooks',
          link: '/docs/hooks/index',
          items: [
            // UI
            { text: 'useLoading 加载态', link: '/docs/hooks/useLoading' },
            { text: 'upPopup 弹窗', link: '/docs/hooks/usePopup' },
            // 数据逻辑
            { text: 'usePagination 分页', link: '/docs/hooks/usePagination' },
            // 全局事件
            { text: 'withScope', link: '/docs/hooks/withScope' }
          ]
        },
        {
          text: '疑难杂症',
          link: '/docs/issues',
          items: [
            { text: '平台兼容', link: '/docs/issues/compatibility'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
