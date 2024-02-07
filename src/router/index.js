import { createRouter, createWebHistory } from 'vue-router'
import autoRoutes from './autoRoutes'

const routes = [
  ...autoRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router