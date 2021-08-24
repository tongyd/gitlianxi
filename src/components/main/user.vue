<template>
  <div>
    <transition enter-active-class="bounceInRight" leave-active-class="bounceOutRight">
      <my v-show="bools" class="animated"></my>
    </transition>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      bools: false
    };
  },
  mounted() {
    this.bools = this.$route.query.bool;
  },
  
};
</script>
