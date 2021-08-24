<template>
  <div id="app">
    <div class="rot">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    //  console.log(this.$route.path);
  }
};
</script>

<style scoped lang='scss'>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  .rot {
    height: 100%;
    overflow: auto;
  }
}
</style>
