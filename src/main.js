import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as bootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import '@mdi/font/css/materialdesignicons.css';


Vue.use(bootstrapVue.BootstrapVue);
Vue.use(bootstrapVue.IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
