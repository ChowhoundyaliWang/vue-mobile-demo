import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import shopcar from '../components/tabbar/Shopcar.vue'
import search from '../components/tabbar/Search.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search }
  ],
  linkActiveClass: 'mui-active'
})
