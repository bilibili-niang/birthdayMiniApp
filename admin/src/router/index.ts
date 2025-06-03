import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/basicLayout/index'),
    meta: {
      showBreadcrumb: true
    },
    children: []
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
