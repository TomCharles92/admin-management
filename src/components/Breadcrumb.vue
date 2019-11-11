<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
      <el-breadcrumb-item 
        v-for="item in breadcrumbList" 
        :key="item.path"
      >
        <a @click.prevent="handleLink(item)">{{item.meta.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb",
    data() {
      return {
        breadcrumbList: []
      }
    },
    mounted() {
      this.getBreadcrumb();
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    methods: {
      getBreadcrumb() {
        this.breadcrumbList = this.$route.matched.slice(0);
        
        if(this.breadcrumbList[0] && this.breadcrumbList[0].path !== "/") {
          this.breadcrumbList.unshift({
            path: "/",
            meta: { title: "首页" },
          })
        }
      },
      handleLink(item) {
        // const { path } = item;
        this.$router.push(item.path)
      }
    }
  }
</script>