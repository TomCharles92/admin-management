import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from "./router/index"
import store from './store'

Vue.config.productionTip = false


let roles = ["admin"]
var count = 0

router.beforeEach((to, from, next) => {
  if (count === 0) { // 一次性方法
    console.log(223)
    store.dispatch("permission/GenerateRoutes", roles)
      .then(() => {
        console.log(store.state.permission.addRouters)
        router.addRoutes(store.state.permission.addRouters)
        console.log(router)
        count++
        next({ ...to, replace: true })
      })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

