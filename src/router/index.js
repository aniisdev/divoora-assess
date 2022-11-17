import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from "../views/dashboard/DashboardPage.vue"
import adminPage from "../views/admin/adminPage";
import restaurantsRoutes from './restaurantsRoutes'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: adminPage
  },
  ...restaurantsRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
