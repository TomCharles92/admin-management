import { asyncRouterMap, constantRouterMap } from "@/router/index"

const permission = {
  namespaced: true,
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        const accessedRouters = asyncRouterMap.filter(v => {
          if (hasPermission(roles, v)) {
            // 判断子路由
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter(child => {
                return hasPermission(roles, child)
              })
            }
            return true
          }
        })
        commit("SET_ROUTERS", accessedRouters)
        resolve()
      })
    }
  }
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return false
  }
}

export default permission