import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsPage from '../views/products-page.vue'
import PastOrders from '../views/past-orders.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
