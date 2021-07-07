import Vue from 'vue'
import VueRouter from 'vue-router'
import local from '@/utils/local'
import Home from '@/view/home/index.vue'
import Semo from '@/view/demo/demo.vue'
import Screen from '@/view/screen/screen.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Semo
    }, {
      path: '/screen',
      name: 'screen',
      component: Screen
    },
  ]
})
// 路由导航守卫（前置导航守卫）
// router.beforeEach((to, from, next) => {
//   const user = local.getUser()
//   if (to.path !== '/login' && !user) return next('/login')
//   next()
// })

export default router
