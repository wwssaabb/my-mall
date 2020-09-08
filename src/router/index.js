import Vue from 'vue'
import Vuerouter from 'vue-router'

const sort = () => import("views/tabBar-view/sort")
const home = () => import("views/tabBar-view/home")
const cart = () => import("views/tabBar-view/cart")
const profile = () => import("views/tabBar-view/profile")
const detail = () => import("views/Detail/detail")


Vue.use(Vuerouter)

const routes=[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/sort',
    component: sort
  },
  {
    path: '/Cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail',
    component: detail
  }
]

const router=new Vuerouter({
  routes,
  mode:'history'
})

export default router