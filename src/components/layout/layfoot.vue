<template>
  <div class="layfoot">
    <div class="fcun">
      <mt-tabbar v-model="selected" :fixed="true">
        <mt-tab-item
          :id="item.key"
          v-for="(item,index) in routpath"
          :key="index"
          @click.native="tab(index,item.path,item.query?item.query:'')"
        >
          <p :class="item.ico"></p>
          <p>{{item.name}}</p>
        </mt-tab-item>
        <span class="cun" v-if="!$store.state.cartlist.count==0">{{$store.state.cartlist.count}}</span>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "layfoot",
  data() {
    return {
      selected: "",
      routpath: [
        {
          name: "首页",
          path: "/homepage",
          key: "homepage",
          ico: ["fa", "fa-bank", "fa-2x"]
        },
        {
          name: "分类",
          path: "/cclass",
          key: "cclass",
          ico: ["fa", "fa-bars", "fa-2x"]
        },
        {
          name: "购物车",
          path: "/buycar",
          key: "buycar",
          ico: ["fa", "fa-cart-arrow-down", "fa-2x", "buycc"]
        },
        {
          name: "我的",
          path: "/user",
          key: "user",
          ico: ["fa", "fa-user-o", "fa-2x"],
          query: {
            bool: true
          }
        }
      ]
    };
  },
  methods: {
    tab(index, pt,qur) {
      // console.log(index,pt);
      this.$eventHub.$emit("sub", { bool: true });
      this.$router.push({
        path: pt,
        query:qur

      });
    }
  }
};
</script>
<style lang="scss" scoped>
.layfoot {
  .fcun {
    position: relative;
    span {
      position: absolute;
      background: #f2495e;
      border-radius: 50px;
      width: 4vw;
      height: 4vw;
      text-align: center;
      line-height: 3.8vw;
      font-size: 3vw;
      color: #fff;
      left: 65%;
      top: 2vw;
    }
  }

  .mint-tabbar.is-fixed {
    width: 100%;
    height: 10%;
    p {
      margin: r(10 * 2) 0 0 0;
      padding: 0;
      font-size: r(16 * 2);
    }
  }
}
</style>

