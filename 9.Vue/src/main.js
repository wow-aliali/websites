import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
