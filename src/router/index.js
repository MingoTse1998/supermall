import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/Home')
const category = () => import('views/category/Category')
const cart = () => import('views/cart/Cart')
const profile = () => import('views/profile/Profile')

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})



export default router
