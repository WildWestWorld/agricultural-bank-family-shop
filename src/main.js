import Vue from 'vue'
import App from './App.vue'

import 'amfe-flexible';
import "@/assets/style/reset.css"

import store from './store/index.js'
import router from "@/router";


// Vant组件专区
import { Button, Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
