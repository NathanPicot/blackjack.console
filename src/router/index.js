/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import AutoRoutes from './autoRoutes'

const routes = [

  ...AutoRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
