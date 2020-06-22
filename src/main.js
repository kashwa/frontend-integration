import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/styles/app.css'

require('@/store/subscriber')

// Set Default-Base-URL for Axios.
axios.defaults.baseURL = 'http://localhost:8080/backend-integration/public/api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
