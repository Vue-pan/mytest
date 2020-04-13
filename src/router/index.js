import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Location from '@/pages/location/Location'
import Detail from '@/pages/detail/Detail'
import detailGalary from '@/pages/detail/components/detailGalary'
import mapContent from '@/pages/detail/components/mapContent'

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
    },
    {
      path: '/Detail/:id',
      component: Detail,
      children:[
        {
          path:'galary',
          component:detailGalary
        },
        {
          path:'mapContent',
          component:mapContent
        }
      ]
    }
  ]
})
