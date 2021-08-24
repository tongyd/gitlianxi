<template>
  <div id="jiumiaosha">
    <div class="jiumiaosha">
      <div class="at_top">
        <i class="fa fa-chevron-left"></i>
        <span>品牌团</span>
      </div>
      <div class="at_logo">
        <img src="@/assets/img/at_lunbo.jpg" alt />
      </div>
      <!-- 商品列表 -->
      <div class="main_lists">
        <ul>
          <li>
            <div class="shangp_left">
              <div class="qiangwan">
                <img src="@/assets/img/已抢完@2x.png" alt />
                <span>已抢完</span>
              </div>
              <img class="spimg" src="@/assets/img/shangpin.jpg" alt />
            </div>
            <div class="shangp_right">
              <h5>Apple iPhone XS 苹果xs x手机 金色 全网通 256G</h5>
              <p>
                <span>已团4502</span>
                <span>剩余230</span>
              </p>
              <div class="a_price">
                <div>
                  <p class="a_pricepo">￥5988</p>
                  <p>
                    原价：
                    <span>￥6666</span>
                  </p>
                </div>
                <div class="a_masq">
                  <mt-button type="primary">马上抢</mt-button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "atjiumiaosha",
  data() {
    return {
      bool: false
    };
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#jiumiaosha {
  width: 100%;
  .jiumiaosha {
    // 标题
    .at_top {
      height: r(86);
      line-height: r(86);
      font-size: r(36);
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      padding-left: r(27);
      > i {
        margin-right: r(256);
      }
    }
    // 轮播？
    .at_logo {
      width: 100%;
      height: r(300);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>

