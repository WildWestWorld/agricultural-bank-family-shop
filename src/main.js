import Vue from 'vue'
import App from './App.vue'

import 'amfe-flexible';
import "@/assets/style/reset.css"

import store from './store/index.js'
import router from "@/router";




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
