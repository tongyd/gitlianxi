<template>
  <div>
    <div class="xqfood">
      <div class="tpian">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in imgs" :key="index">
            <img :src="'https://res.bestcake.com/m-images/jd-detail/奥利奥雪域牛乳芝士/奥利奥雪域牛乳芝士'+item" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="p1">奥利奥雪域牛乳芝士</p>
      <div class="foodinfos">
        <p>
          <i>甜度</i>
          <span>🍦🍦🍦🍦🍦</span>
        </p>
        <p>
          <i>口味</i>
          <span>浓情芝士</span>
        </p>
        <p class="bp">
          <i>原材料</i>
          <span>进口新鲜蓝莓、进口原装安佳奶油、奶酪 进口黄油</span>
        </p>
        <p>
          <i>适合人群</i>
          <span>所有人群</span>
        </p>
        <p class="bp">
          <i>保鲜条件</i>
          <span>最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。</span>
        </p>
      </div>
      <div class="sppingjia">
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png" alt>
          <span>商品评价</span>
        </p>
        <p>
          <i>(1441条)></i>
        </p>
      </div>
      <div class="buynum">
        <p>购买数量</p>
        <p>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </p>
      </div>


      <!-- 化纤价格 -->
      <hphuaxian></hphuaxian>
    </div>
  </div>
</template>
<script>
import hphuaxian from "@/components/child/hphuaxian.vue";

export default {
  name: "xqfood",
  data() {
    return {
      imgs: [
        "-1.jpg?v=20170607",
        "-2.jpg?v=20170607",
        "-3.jpg?v=20170607",
        "-4.jpg?v=20170607"
      ]
    };
  },
  components: {
    hphuaxian
  }
};
</script>
<style lang="scss" scoped>
.xqfood {
  width: 100%;
  height: 100%;
  .tpian {
    width: 100%;
    height: 66%;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .p1 {
    width: 100%;
    height: r(61 * 2);
    text-align: center;
    font-size: r(16 * 2);
    font-weight: bold;
  }
  .foodinfos {
    width: 100%;
    height: 36%;
    border-top: r(2 * 10) solid #f7f7f7;
    border-bottom: r(2 * 10) solid #f7f7f7;
    padding: 5% 0 0 0;
    p {
      font-size: r(14 * 2);
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      i {
        color: #9a9a9a;
        font-style: normal;
        display: block;
        width: 20%;
        height: 100%;
        float: left;
      }
      span {
        color: #252525;
        width: 70%;
        margin-left: 10%;
        display: block;
        height: 100%;
        float: left;
      }
    }
    .bp {
      height: 20%;
    }
  }
  .sppingjia {
    width: 100%;
    height: 6%;
    padding: 1% 0;
    border-bottom: r(2 * 10) solid #f7f7f7;
    p {
      margin: 0;
      padding: 0 1%;
      float: left;
      width: 48%;
      height: 100%;
      font-size: r(14 * 2);
      img {
        width: 15%;
        display: inline-block;
        height: 50%;
      }
      span {
        color: #333;
        height: 100%;
        display: inline-block;
        margin-left: 3%;
      }
      i {
        font-style: normal;
        color: #9a9a9a;
        text-align: right;
        display: inline-block;
        width: 100%;
      }
    }
  }
  .buynum {
    width: 100%;
    height: 8%;
    padding: 2% 0 0 0;
    margin: 0;
    border-bottom: r(2 * 10) solid #f7f7f7;
    p {
      height: 8%;
      padding: 3% 0;
      margin: 0;
      float: left;
      width: 50%;
      button {
        background-color: #fff;
        border: 0;
      }
      span {
        display: inline-block;
        width: 5%;
        text-align: center;
      }
    }
    p:nth-of-type(2){
        text-align: right;
        width: 46%;
        padding-right: 3%;
    }
  }
}
</style>
