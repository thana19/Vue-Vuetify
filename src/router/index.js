import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    }
  ],
  mode: 'history'
})
