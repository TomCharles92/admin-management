<template>
  <div id="app">
    <SideBar id="menu"></SideBar>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "app",
  components: { SideBar }
};
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
}

html,
body,
#app {
  height: 100%;
}

#menu {
  background-color: rgb(84, 92, 100);
  width: 210px;
  height: 100%;
  float: left;
}

#main {
  margin-left: 210px;
  height: 100%;
}
</style>
