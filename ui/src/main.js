import Vue from 'vue'
import App from './App.vue'
import store from './store/StoreIndex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
