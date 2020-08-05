import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false 

import BootstrapVue from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.min.css";

import store from "./store";
import router from "./router";

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
