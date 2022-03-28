import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/products-app.vue'
import PastOrders from '../views/past-orders.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products-app',
    name: 'Products',
    component: Products
  },
  {
    path: '/pas-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
