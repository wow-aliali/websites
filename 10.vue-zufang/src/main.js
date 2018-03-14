import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/scss/reset.scss'
import '@/assets/scss/base.scss'
import '@/assets/scss/mixin.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
