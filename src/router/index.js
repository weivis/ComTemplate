import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Layout from '../layout/Layout'

const routes = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   hidden: true,
  //   name: 'home',
  // },
  // {
  //   path: '/docmanage',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '',
  //       name: 'docmanage',
  //       component: () => import('@/views/docManage.vue'),
  //       meta: { title: '文档管理', icon: 'el-icon-s-marketing', requireAuth: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   hidden: true,
  //   component: () => import('@/views/login.vue'),
  //   meta: { title: '登录', icon: 'el-icon-thumb', requireAuth: false }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
