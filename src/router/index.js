import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortofolioDetail1 from '../views/PortofolioDetail1.vue'
import PortofolioDetail2 from '../views/PortofolioDetail2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/PortofolioDetail1',
    name: 'PortofolioDetail1',
    component: PortofolioDetail1
  },
  {
    path: '/PortofolioDetail2',
    name: 'PortofolioDetail2',
    component: PortofolioDetail2
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
