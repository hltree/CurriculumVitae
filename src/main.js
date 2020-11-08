import Vue from 'vue'
import Vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  Vuetify
}).$mount('#app')
