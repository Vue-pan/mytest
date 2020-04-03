import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Location from '@/pages/location/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/location',
      component: Location
    }
  ]
})
