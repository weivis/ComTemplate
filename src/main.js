import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import '@/permission' // permission control
import {getuser} from '@/utils/auth'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/main.scss' // global css

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('[main.js]UserDATA',getuser())
  if (to.matched.some(record => record.meta.requireAuth)) {
    let user = getuser()
    if (user.Token) {
      next()
    } else {
      router.push({ name: "login", params: { msg: "登录失效" } })
    }
  } else {
    next()
  }
})

Object.defineProperty(Vue.prototype, '$http', {
  value: function(requestPromise, successCallback) {
    requestPromise.then(res => {
      console.log("Load:",res)
      if (!res) return
      successCallback && successCallback(res)
    })
  }
})

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
