import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      meta: { title: "首页", icon: "" },
      component: () => import("./views/Home")
    },
    {
      path: "/Permission",
      meta: { title: "权限测试页", icon: "" },
      component: () => import("./views/Permission"),
      children: [
        {
          path: "/Page",
          meta: { title: "页面权限", icon: "" },
          component: () => import("./views/Permission/Page")
        },
        {
          path: "/Directive",
          meta: { title: "指令权限", icon: "" },
          component: () => import("./views/Permission/Directive")
        }
      ]
    },
    {
      path: "/Icon",
      meta: { title: "图标", icon: "" },
      component: () => import("./views/Icon")
    }
  ]
})