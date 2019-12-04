import Vue from 'vue'
import App from './App.vue'
import store from './store'
import modal from '@/plugins/modal'
import clickOutside from '@/plugins/click-outside'

Vue.config.productionTip = false
Vue.use(modal)
Vue.directive('click-outside', clickOutside)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
