import Vue from 'vue'
import Router from 'vue-router'
import PCNewsContainer from '@/components/page/pc_newscontainer'
import PCNewsDetails from '@/components/page/pc_news_details'
import PCUserCenter from '@/components/page/pc_usercenter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: PCNewsContainer
    },
    {
      path: '/details/:uniquekey',
      name: 'newsdetails',
      component: PCNewsDetails
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: PCUserCenter
    }
  ]
})
