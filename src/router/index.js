import Vue from 'vue'
import VueHead from "vue-head";
import VueRouter from 'vue-router'
import Index from '../views/index'

Vue.use(VueHead)
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
