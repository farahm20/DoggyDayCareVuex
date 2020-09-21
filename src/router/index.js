import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Dogs',
    name: 'Dogs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Dogs.vue')
  },
  {
    path: '/dogs/:chipNumber',
    name: 'DogInfo',
    component: () => import('@/views/DogInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
