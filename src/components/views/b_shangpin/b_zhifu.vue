<template>
  <div id="b_zhifu">
    <div class="b_zigou">
      <!-- 标题 -->
      <div class="at_top">
        <i class="fa fa-chevron-left"></i>
        <span>商品详情</span>
      </div>
      <div class="main">
        <!-- 支付情况 等待支付-->
        <div class="zhifudiv" v-show="zhifubool">
          <div class="zf_top">
            <div>
              <img src="@/assets/img/等待支付@2x.png" alt />
            </div>
            <p>等待支付</p>
          </div>
          <div class="zf_bottom">
            <p>支付剩余时间00:20:00</p>
          </div>
        </div>
        <!-- 支付成功 -->
        <div class="sucssdiv" v-show="!zhifubool">
          <div class="sctop">
            <div>
              <img src="@/assets/img/支付成功@2x.png" alt />
            </div>
            <p>支付成功</p>
          </div>
          <div class="sccen">
            <p>
              实付
              <span>￥870</span>
            </p>
          </div>
          <div class="scbottom">
            <div>查看订单</div>
            <div>返回首页</div>
          </div>
        </div>
        <!-- 配送地址 -->
        <div class="psadress">
          <p class="titlep">配送地址</p>
          <div class="peisong_main">
            <div class="psm_top">
              <div>
                <img src="@/assets/img/地址@2x.png" alt />
              </div>
              <p>小薇</p>
              <p>13510022525</p>
            </div>
            <div class="psm_bottom">
              <p>湖南省长沙市岳麓区荣泰广场1单元2018室</p>
            </div>
          </div>
        </div>
        <!-- 订单详情部分 -->
        <p class="titlep">已选商品</p>
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
    <!-- 底部按钮 -->
    <div class="bot_btn" v-show="zhifubool">
      <p>
        应付：
        <span>￥870</span>
      </p>
      <div>
        <mt-button type="default">取消订单</mt-button>
        <mt-button type="default">立即支付</mt-button>
      </div>
    </div>
    <!--二维码弹框  -->
    <div class="ewmdiv"></div>
  </div>
</template>
<script>
import "@/common/css/shangpinxiangqing.scss";
export default {
  name: "badress",
  data() {
    return {
      zhifubool: false
    };
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#b_zhifu {
  width: 100%;
  //   height: 100%;
  height: r(1334);
  position: relative;
  overflow: hidden;
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
    .main {
      background: #f3f3f3;
      width: 100%;
      height: auto;
      padding-top: r(20);
      // 支付情况  等待支付
      .zhifudiv {
        width: 94%;
        margin-left: 3%;
        height: r(200);
        background: linear-gradient(
          90deg,
          rgba(255, 109, 43, 1),
          rgba(255, 144, 0, 1)
        );
        border-radius: r(20);
        .zf_top {
          display: flex;
          justify-content: center;
          padding-top: r(30);
          div {
            width: r(67);
            height: r(67);
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          p {
            height: r(46);
            font-size: r(48);
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .zf_bottom {
          margin-top: r(20);
          width: 100%;
          p {
            width: 100%;
            text-align: center;
            height: r(24);
            font-size: r(24);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            opacity: 0.6;
          }
        }
      }
      // 支付成功
      .sucssdiv {
        width: 94%;
        margin-left: 3%;
        height: r(279);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 r(4) r(30) 0 rgba(201, 201, 201, 0.4);
        border-radius: r(20);
        .sctop {
          display: flex;
          justify-content: center;
          padding-top: r(26);
          div {
            width: r(54);
            height: r(54);
            overflow: hidden;
            margin-right: r(28);
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          p {
            height: r(54);
            line-height: r(54);
            font-size: r(48);
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(255, 80, 0, 1);
          }
        }
        .sccen {
          margin-top: r(29);
          width: 100%;
          text-align: center;
          height: r(35);
          font-size: r(36);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
        }
        .scbottom {
          margin-top: r(50);
          display: flex;
          justify-content: space-between;
          padding: 0 12%;
          div {
            width: r(180);
            height: r(60);
            border: r(2) solid rgba(149, 149, 149, 1);
            border-radius: r(30);
            line-height: r(60);
            text-align: center;
            font-size: r(30);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(83, 83, 83, 1);
          }
        }
      }

      //   配送地址
      .psadress {
        margin-top: r(30);
        .peisong_main {
          margin-left: 2%;
          .psm_top {
            display: flex;
            padding-top: r(28);
            div {
              width: r(32);
              height: r(32);
              overflow: hidden;
              margin-left: r(24);
              img {
                width: 100%;
                height: 100%;
                display: block;
              }
            }
            p:nth-of-type(1) {
              width: r(56);
              height: r(27);
              font-size: r(28);
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
              margin: 0 r(20);
            }
            p {
              height: r(22);
              font-size: r(28);
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
            }
          }
          .psm_bottom {
            p {
              margin-left: r(24);
              height: r(66);
              line-height: r(66);
              font-size: r(24);
              font-family: PingFang-SC-Regular;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
              margin-bottom: r(22);
            }
          }
        }
      }
      //   标题p
      .titlep {
        margin-left: 2%;
        height: r(50);
        line-height: r(50);
        font-size: r(30);
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
    }
  }
  //   底部按钮
  .bot_btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: r(98);
    background: rgba(255, 255, 255, 1);
    border: r(1) solid rgba(229, 229, 229, 1);
    display: flex;
    justify-content: space-between;
    p {
      padding-left: 3%;
      height: r(98);
      font-size: r(30);
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      line-height: r(98);
      span {
        color: #ff5000;
      }
    }
    div {
      .mint-button--normal {
        width: r(210);
        height: r(98);
        background: rgba(201, 201, 201, 1);
        font-size: r(32);
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .mint-button--normal:nth-of-type(2) {
        background: rgba(255, 144, 0, 1);
      }
    }
  }
  //   二维码弹框
  .ewmdiv {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    opacity: 0.7;
  }
}
</style>



