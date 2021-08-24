<template>
  <div id="b_zigou">
    <div class="b_zigou">
      <!-- 标题 -->
      <div class="at_top">
        <i class="fa fa-chevron-left"></i>
        <span>商品详情</span>
      </div>
      <div class="div">
        <!-- 添加地址 -->
        <div class="b_adress">
          <p>
            <span class="fa fa-plus"></span>
            请添加地址
          </p>
        </div>
        <!-- 订单详情部分 -->
        <div class="b_xq">
          <div>
            <div class="bxq_top">
              <div class="divimg">
                <img src="@/assets/img/xqshangpin.jpg" alt />
              </div>
              <div class="divmain">
                <p>芙丽芙丽 Folli Follie LADY BUBBLE系列轻奢时尚欧美潮流女士手表石英腕表</p>
                <p>颜色：金色；规格：30mm</p>
                <p>￥870</p>
              </div>
            </div>
            <div class="div_bottom">
              <div class="divnum">
                <p>购买数量</p>
                <div>
                  <i class="fa fa-minus"></i>
                  <span>1</span>
                  <i class="fa fa-plus"></i>
                </div>
              </div>
              <div class="divprice">
                <p>运费</p>
                <span>快递：￥0.00</span>
              </div>
              <div class="divbeizhu">
                <p>订单备注</p>
              </div>
              <div class="divxiaoji">
                <p>共1件</p>
                <p>
                  <span>小计：</span>
                  <span>￥870</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 立即支付 -->
    <div class="tijiao">
      <p>
        应付：
        <span>￥870</span>
      </p>
      <div>
        <mt-button type="primary">立即支付</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import "@/common/css/shangpinxiangqing.scss";
export default {
  name: "bzigou",
  data() {
    return {};
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#b_zigou {
  width: 100%;
  height: 100%;
  position: relative;
  .b_zigou {
    // 标题
    .at_top {
      height: r(78);
      line-height: r(78);
      font-size: r(36);
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      padding-left: r(27);
      > i {
        margin-right: r(256);
      }
    }
    > .div {
      background: #f3f3f3;
      padding-left: 3%;
      padding-top: r(11);
      padding-right: 3%;
      // 添加地址
      .b_adress {
        width: 100%;
        height: r(148);
        background: rgba(255, 255, 255, 1);
        border-radius: r(20);
        p {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: r(148);
          font-size: r(26);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 144, 0, 1);
        }
      }
    }
  }
  .tijiao {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: r(98);
    display: flex;
    justify-content: space-between;
    p {
      margin-left: 10%;
      height: r(98);
      line-height: r(98);
      text-align: center;
      font-size: r(30);
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      > span {
        color: #ff5000;
      }
    }
    div {
      width: 45%;
      height: r(98);
      .mint-button--normal {
        width: 100%;
        height: r(98);
        background: rgba(255, 144, 0, 1);
      }
    }
  }
}
</style>



