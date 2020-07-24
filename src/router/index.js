import Vue from 'vue'
import VueHead from "vue-head";
import VueRouter from 'vue-router'
import VueSmoothScroll from 'vue2-smooth-scroll'
import Index from '../views/index'

Vue.use(VueHead)
Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})
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
