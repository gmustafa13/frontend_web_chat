import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from "./router/index";
import service from "./services/service"

// Vue.config.productionTip = false;
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.prototype.$service = service;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

