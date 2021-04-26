import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routes/index'
import store from './stores/index'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
