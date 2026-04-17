import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collections/winter',
      name: 'winter-collection',
      component: () => import('../views/ProductListingView.vue')
    }
  ]
})

export default router
