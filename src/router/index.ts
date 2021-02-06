import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import { Home, Settings } from '../views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: async () => import('@/views/HomeTab.vue'),
      },
      {
        path: '/records',
        component: async () => import('@/views/RecordsTab.vue'),
      },
    ],
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
