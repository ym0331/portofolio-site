import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SiteDetail1 from '../views/SiteDetail1.vue'
import SiteDetail2 from '../views/SiteDetail2.vue'
import bannerDetail1 from '../views/bannerDetail1.vue'
import LogoDetail1 from  '../views/LogoDetail1.vue'
import bannerDetail2 from '../views/bannerDetail2.vue'
import SkillDetail from '../views/SkillDetail.vue'
import WorkDetail from  '../views/WorkDetail.vue'

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
    path: '/Site1',
    name: 'Site1',
    component: SiteDetail1
  },
  {
    path: '/Site2',
    name: 'Site2',
    component: SiteDetail2
  },
  {
    path: '/banner1',
    name: 'banner1',
    component: bannerDetail1
  },
  {
    path: '/Logo1',
    name: 'Logo1',
    component: LogoDetail1
  },
  {
    path: '/banner2',
    name: 'banne2',
    component: bannerDetail2
  },
  {
    path: '/Skill',
    name: 'Skill',
    component: SkillDetail
  },
  {
    path: '/Work',
    name: 'Work',
    component: WorkDetail 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
