import Vue from 'vue'
import App from './App.vue'
import store from './store'
import modal from '@/plugins/modal'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
