import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

// 固定路由表
export const constantRouterMap = [
  {
    path: "/",
    meta: { title: "首页", icon: "" },
    component: () => import("@/views/Home")
  },
  {
    path: "/Icon",
    meta: { title: "图标", icon: "" },
    component: () => import("@/views/Icon")
  }
]

// 异步路由表
export const asyncRouterMap = [
  {
    path: "/Permission",
    meta: { title: "权限测试页", icon: "", role: ['admin', 'super_editor'] },
    component: () => import("@/views/Permission"),
    children: [
      {
        path: "/Page",
        meta: { title: "页面权限", icon: "", role: ['admin', 'super_editor'] },
        component: () => import("@/views/Permission/Page")
      },
      {
        path: "/Directive",
        meta: { title: "指令权限", icon: "" },
        component: () => import("@/views/Permission/Directive")
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})