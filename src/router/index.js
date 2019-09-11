import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cinema',
      name: 'cinema',
        // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Cinema" */ '@/views/cinema/index.vue')
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import(/* webpackChunkName: "Ticket" */ '@/views/ticket/index.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "Movie" */ '@/views/movie/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/index.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import(/* webpackChunkName: "city" */ '@/views/home/city/index.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
