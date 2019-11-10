<template>
  <div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <template v-for="item in $router.options.routes" >
          <el-submenu v-if="item.children" index="1" :key="item.path">
            <template slot="title">
              {{item.meta.title}}
            </template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.path" :key="subItem.path">
            <span slot="title">{{ subItem.meta.title }}</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item v-else :index="item.path" :key="item.path">
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: "SideBar",
  // created() {
  //   console.log(this.$router)
  // }
}
</script>