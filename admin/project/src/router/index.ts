import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any[] = [
  {
    path: '/',
    name: 'index',
    meta: {
      showBreadcrumb: true
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: {
          title: '首页'
        },
        name: 'home',
        component: () => import('@/views/home/index'),
      },
      {
        path: '/tool',
        meta: {
          title: '工具'
        },
        name: 'tool',
        component: () => import('@/views/tool/index')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
