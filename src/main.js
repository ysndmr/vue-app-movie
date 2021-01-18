import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import './assets/styles/reset.css';
import './assets/styles/normalize.css';
import './assets/external/easy-modal.min.css';



Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
