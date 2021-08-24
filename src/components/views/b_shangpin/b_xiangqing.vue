<template>
  <div id="jiumiaosha">
    <div class="jiumiaosha">
      <div class="at_top">
        <i class="fa fa-chevron-left"></i>
        <span>商品详情</span>
      </div>
      <!-- 商品图片 -->
      <div class="b_lunbo">
        <!-- <img src="@/assets/img/xqshangpin.jpg" alt /> -->
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="@/assets/img/xqshangpin.jpg" alt />
          </mt-swipe-item>
          <!-- <mt-swipe-item>
            <img src="@/assets/img/xqshangpin.jpg" alt />
          </mt-swipe-item>-->
        </mt-swipe>
      </div>
      <!-- 限时购买 -->
      <div class="timesbuy">
        <div>
          <span>￥870</span>
          <img v-show="!timeoverbool" src="@/assets/img/限时购@2x.png" alt />
        </div>
        <p>
          <span class="buy_left">
            <span>零售价￥</span>
            <span>1200</span>
          </span>
          <span v-show="!timeoverbool" class="buy_right">距结束 07:32:20:2</span>
          <span class="buy_right" v-show="timeoverbool">团购已结束</span>
        </p>
      </div>
      <!-- 商品名称 -->
      <div class="buy_name">
        <p class="bn_po">芙丽芙丽 Folli Follie LADY BUBBLE系列轻奢时尚欧美潮流女士手表石英腕表</p>
        <p class="bn_pt">此商品正在参加抢购，请抓紧时间购买！</p>
      </div>
      <!-- 商品详情 -->
      <div class="buy_xq">
        <div class="fg"></div>
        <div class="buy_title">
          <img src="@/assets/img/商品详情旁的装饰@2x.png" alt />
          <span>商品详情</span>
          <img src="@/assets/img/商品详情旁的装饰-右@2x.png" alt />
        </div>
      </div>
      <!-- 立即购买 -->
      <div class="buybtn" v-show="!buybool">
        <div>
          <div class="left">
            <img src="@/assets/img/icon首页@2x.png" alt />
            <p>首页</p>
          </div>
          <div class="right" v-show="!overbool">
            <mt-button type="primary">立即购买</mt-button>
          </div>
          <div class="right riover" v-show="overbool">
            <mt-button type="primary">团购结束</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="buy_sel" v-show="buybool">
      <div class="buy_zhe"></div>
      <div class="buy_selmain">
        <div class="buy_selmainimg">
          <img src="@/assets/img/xqshangpin.jpg" alt />
          <div>
            <p class="price">￥870</p>
            <p class="sizes">已选择：金色 30mm</p>
          </div>
          <span class="closes">
            <i class="fa fa-close (alias) fa-2x"></i>
          </span>
        </div>
        <div class="xq_bottom">
          <p class="xq_color">颜色</p>
          <div class="div">
            <mt-button type="primary">金色</mt-button>
            <mt-button type="primary">银色</mt-button>
          </div>
          <p class="xq_size">表带规格</p>
          <div class="div">
            <mt-button type="primary">28mm</mt-button>
            <mt-button type="primary">30mm</mt-button>
          </div>
          <div class="xq_num">
            <span class="num_left">购买数量</span>
            <span class="num_right">
              <span class="fa fa-minus"></span>
              <span>2</span>
              <span class="fa fa-plus"></span>
            </span>
          </div>
        </div>
        <div class="goubuy">
          <mt-button type="primary">确定</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "atjiumiaosha",
  data() {
    return {
      bool: false,
      timeoverbool: false,
      overbool: true,
      buybool: true
    };
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#jiumiaosha {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  // 点击购买后的弹框
  .buy_sel {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    .buy_zhe {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 1);
      opacity: 0.7;
    }
    .buy_selmain {
      width: 100%;
      height: r(784);
      background: rgba(255, 255, 255, 1);
      border-radius: r(20);
      // top: r(550);
      bottom: 0;
      position: absolute;
      .buy_selmainimg {
        > img {
          width: r(244);
          height: r(244);
          border-radius: r(20);
          display: block;
          position: absolute;
          left: r(32);
          top: r(-40);
        }
        > div {
          margin-left: r(310);
          .price {
            margin-top: r(85);
            height: r(37);
            font-size: r(30);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(255, 80, 0, 1);
          }
          .sizes {
            margin-top: r(44);
            height: r(23);
            font-size: r(24);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(160, 160, 160, 1);
          }
        }
        .closes {
          width: r(28);
          height: r(28);
          display: block;
          color: #bfbfbf;
          position: absolute;
          right: r(50);
          top: r(31);
        }
      }
      .xq_bottom {
        padding-left: r(29);
        p {
          height: r(29);
          font-size: r(30);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(160, 160, 160, 1);
        }
        .xq_color {
          margin-top: r(45);
        }
        > .div {
          margin-top: r(29);
          // 颜色按钮
          .mint-button--normal {
            width: 20%;
            height: r(47);
            background: rgba(255, 146, 48, 1);
            border-radius: r(24);
            font-size: r(24);
            color: rgba(255, 255, 255, 1);
            margin-right: r(30);
          }
          .mint-button--normal:nth-of-type(2) {
            background: rgba(255, 255, 255, 1);
            border: r(1) solid rgba(181, 181, 181, 1);
            color: rgba(34, 34, 34, 1);
          }
        }
        .xq_size {
          margin-top: r(60);
        }
        .xq_num {
          padding-top: r(71);
          padding-bottom: r(9);
          .num_left {
            width: r(121);
            height: r(29);
            font-size: r(30);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(160, 160, 160, 1);
          }
          .num_right {
            width: r(176);
            height: r(54);
            border: r(1) solid rgba(181, 181, 181, 1);
            border-radius: r(27);
            display: inline-block;
            margin-left: 52%;
          }
          span {
            width: r(40);
            height: r(48);
            display: inline-block;
            text-align: center;
            width: 18px;
            line-height: r(48);
          }
        }
      }
      // 确定的黄色按钮
      .goubuy {
        .mint-button--normal {
          width: 100%;
          height: r(110);
          background: rgba(255, 146, 48, 1);
          margin-top: r(42);
        }
      }
    }
  }
  .jiumiaosha {
    position: relative;
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
    // 商品图片
    .b_lunbo {
      height: r(750);
      margin: 0 r(10);
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    //限时购买
    .timesbuy {
      padding: 0 r(20);
      height: r(130);
      background: linear-gradient(
        90deg,
        rgba(255, 104, 44, 1),
        rgba(255, 144, 0, 1)
      );
      div {
        height: r(85);
        span {
          font-size: r(30);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        img {
          display: inline-block;
          width: r(189);
          height: r(40);
          margin-left: 50%;
          margin-top: r(19);
        }
      }
      p {
        .buy_left {
          width: r(160);
          font-size: r(24);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          text-decoration: line-through;
          color: rgba(255, 255, 255, 1);
          opacity: 0.7;
          text-decoration: none;
          > span:nth-of-type(2) {
            text-decoration: line-through;
          }
        }
        .buy_right {
          font-size: r(24);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          margin-left: 35%;
        }
      }
    }
    // 商品名称
    .buy_name {
      padding: 0 2%;
      .bn_po {
        margin: r(27) 0;
        height: r(70);
        font-size: r(32);
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
      .bn_pt {
        height: r(45);
        font-size: r(24);
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(255, 211, 154, 1);
      }
    }
    // 商品详情
    .buy_xq {
      .fg {
        width: 100%;
        height: r(10);
        background: rgba(243, 243, 243, 1);
      }
      .buy_title {
        padding: 0 20%;
        > img {
          width: r(120);
          height: r(4);
          display: inline-block;
          margin-top: r(34);
        }
        > span {
          margin-top: r(21);
          height: r(31);
          font-size: r(32);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          display: inline-block;
        }
      }
    }
    // 立即购买
    .buybtn {
      width: 100%;
      height: r(98);
      background: rgba(255, 255, 255, 1);
      border: r(1) solid rgba(229, 229, 229, 1);
      position: fixed;
      left: 0;
      bottom: 0;
      > div {
        display: flex;
        padding-left: 7%;
        .left {
          width: 22%;
          padding-top: r(12);
          > img {
            display: block;
            width: r(44);
            height: r(44);
          }
          > p {
            height: r(23);
            font-size: r(24);
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(34, 34, 34, 1);
          }
        }
        .right {
          width: 77%;
          height: r(98);
          .mint-button--normal {
            width: 100%;
            font-size: r(32);
            line-height: r(98);
            height: r(98);
            text-align: center;
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            background: rgba(255, 144, 0, 1);
          }
        }
        .riover {
          .mint-button--normal {
            background: rgba(201, 201, 201, 1);
          }
        }
      }
    }
  }
}
</style>

