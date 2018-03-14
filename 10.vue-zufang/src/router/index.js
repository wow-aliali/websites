import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Index from '@/components/index'
import HouseDetail from '@/components/housedetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/housedetail',
      name: 'housedetail',
      component: HouseDetail
    }
  ]
})
