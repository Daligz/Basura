import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/splash',
    name: 'splash',
    component: function () {
      return import('../views/SplashView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')

    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function(){
      return import('../views/Dashboard.vue')
    }
  },
  {
    path: '/rewardsDashboard',
    name: 'rewardsDashboard',
    component: function(){
      return import('../views/Rewards/RewardsDashboardView.vue')
    }
  },
  {
    path: '/addReaward',
    name: 'addReaward',
    component: function(){
      return import('../views/Rewards/AddRewardView.vue')
    }
  },
  {
    path: '/updateReaward',
    name: 'updateReaward',
    component: function(){
      return import('../views/Rewards/UpdateRewardView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
