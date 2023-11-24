import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import("@/views/error"),
    redirect: '/404'
  },
  {
    path: '/404',
    component: () => import("@/views/error")
  },
  {
    path: '/login',
    component: () => import("@/views/login")
  },
  {
    path: '/register',
    component: () => import("@/views/register")
  },
  {
    path: '/news',
    component: () => import("@/views/news")
  },
  {
    path: '/',
    component: () => import("@/views/home"),
    redirect: '/merchandise',
    children: [
      {
        path: '/merchandise',
        component: () => import("@/views/merchandise")
      },
      {
        path: '/weekly',
        component: () => import("@/views/weeklyPub")
      },
      {
        path: '/map',
        component: () => import("@/views/map")
      }
    ]
  },
  {
    path: '/search',
    component: () => import("@/views/search")
  }
]

const router = new VueRouter({
  routes
})

export default router
