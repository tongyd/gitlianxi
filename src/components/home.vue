<template>
  <div>
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        v-wechat-title="$route.meta.title"
        img-set="/static/logo.png"
      />
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      v-wechat-title="$route.meta.title"
      img-set="/static/logo.png"
    />
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.$store.commit("Vuexinit");
  }
};
</script>
<style scoped lang='scss'>
div {
  width: 100%;
}
</style>


