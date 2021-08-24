<template>
  <div id="ashouy">
    <div class="ashouy" >
      <!--  v-show="bool" -->
      <div class="ashouyo"></div>
      <div>
        <div class="a_img">
          <img src="@/assets/img/支付弹窗@2x.png" alt />
          <div class="a_mian">
            <p>您有一笔订单未支付?</p>
            <div class="a_mianbtn">
              <mt-button type="primary">取消订单</mt-button>
              <mt-button type="primary">立即支付</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="a_top">
      <h1>壹团</h1>
    </div>
    <div class="a_center">
      <div class="a_centop">
        <div class="a_ctopleft">
          <img src="@/assets/img/tx.jpg" alt />
        </div>
        <div class="a_ctopcen">
          <p>058团长的店铺</p>
          <p>精致的生活并不贵</p>
        </div>
        <div class="a_ctoprig">
          <img src="@/assets/img/分享店铺@2x.png" alt />
          <span>分享店铺</span>
        </div>
      </div>
      <div class="a_cenbot">
        <div class="a_cenbotmain">
          <ul>
            <li>
              <div>
                <img src="@/assets/img/icon9.9秒杀@2x.png" alt />
              </div>
              <p>9.9秒杀</p>
            </li>
            <li>
              <div>
                <img src="@/assets/img/icon长期购@2x.png" alt />
              </div>
              <p>长期购</p>
            </li>
            <li>
              <div>
                <img src="@/assets/img/icon品牌团@2x.png" alt />
              </div>
              <p>品牌团</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="a_bottom">
      <div class="a_bottitle">
        <h1 class="h1">
          <span>今日团品</span>
          <i></i>
        </h1>
        <div class="a_time">
          <span>限时</span>
          <span class="a_times">15</span>
          <i>:</i>
          <span class="a_times">22</span>
          <i>:</i>
          <span class="a_times">16</span>
        </div>
      </div>
      <div class="a_bottmain">
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
  </div>
</template>
<script>
export default {
  name: "ashouye",
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
#ashouy {
  width: 100%;
  height: 100%;
  position: relative;
  // 支付弹框
  .ashouy {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20000;
    .ashouyo {
      background: rgba(0, 0, 0, 1);
      width: 100%;
      height: 100%;
      z-index: 20000;
      opacity: 0.7;
    }
    .a_img {
      width: r(541);
      height: r(375);
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      > img {
        width: r(541);
        height: r(375);
        display: block;
      }
      .a_mian {
        position: absolute;
        text-align: center;
        z-index: 999999;
        width: r(480);
        height: r(311);
        overflow: hidden;
        left: r(30);
        top: r(30);
        opacity: 1;
        p {
          margin-top: r(104);
          width: 100%;
          text-align: center;
          height: r(31);
          font-size: r(32);
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(34, 34, 34, 1);
        }
        .a_mianbtn {
          margin-top: r(82);
          .mint-button--normal {
            width: r(190);
            height: r(68);
            border: r(2) solid rgba(255, 104, 44, 1);
            border-radius: r(34);
            font-size: r(30);
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: rgba(255, 104, 44, 1);
            background: #fff;
          }
          .mint-button--normal:nth-of-type(2) {
            background: linear-gradient(
              90deg,
              rgba(255, 104, 44, 1),
              rgba(255, 144, 0, 1)
            );
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .a_top {
    width: 100%;
    height: r(88);
    > h1 {
      width: 100%;
      text-align: center;
      font-size: r(36);
      line-height: r(88);
      height: r(88);
      font-family: PingFang-SC-Medium;
      font-weight: bold;
    }
  }
  .a_center {
    width: 100%;
    height: r(430);
    overflow: hidden;
    .a_centop {
      width: 100%;
      height: r(250);
      background: linear-gradient(
        90deg,
        rgba(255, 109, 43, 1),
        rgba(255, 170, 69, 1)
      );
      display: flex;
      padding: r(45) 0;
      overflow: hidden;
      .a_ctopleft {
        width: r(120);
        height: r(120);
        margin: 0 r(30);
        border-radius: 50%;
        background: rgba(222, 222, 222, 1);
        overflow: hidden;
        text-align: center;
        > img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .a_ctopcen {
        height: r(120);
        width: r(398);
        color: #fff;
        > p:nth-child(1) {
          font-size: r(36);
          line-height: r(35);
          margin-top: r(22);
          font-weight: Bold;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        > p:nth-child(2) {
          height: r(60);
          line-height: r(60);
          font-size: r(24);
          margin-bottom: r(4);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
      .a_ctoprig {
        background: #ff5000;
        height: r(54);
        width: r(172);
        font-size: r(26);
        color: #fff;
        text-align: center;
        border-top-left-radius: 10% 50%;
        border-bottom-left-radius: 10% 50%;
        position: relative;
        > img {
          width: 100%;
          height: 100%;
          display: block;
          overflow: hidden;
        }
        > span {
          position: absolute;
          left: r(42);
          line-height: r(26);
          top: r(14);
          font-family: PingFang-SC-Medium;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .a_cenbot {
      width: 100%;
      height: r(210);
      background: #f3f3f3;
      position: relative;

      .a_cenbotmain {
        background: #fff;
        width: 94%;
        height: r(220);
        border-radius: r(20);
        position: absolute;
        top: r(-40);
        left: r(20);
        > ul {
          display: flex;
          justify-content: space-around;
          width: 100%;
          height: 100%;
          > li {
            list-style: none;
            width: r(100);
            padding: r(42) 0;
            div {
              width: 100%;
              height: r(100);
              text-align: center;
              img {
                display: block;
                width: r(100);
                height: 100%;
              }
            }
            > p {
              width: 100%;
              text-align: center;
              font-size: r(26);
              height: r(25);
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              line-height: r(52);
            }
          }
        }
      }
    }
  }
  .a_bottom {
    padding: 0 r(20);
    overflow: auto;
    background: #f3f3f3;
    .a_bottitle {
      display: flex;
      justify-content: space-between;
      padding-bottom: r(30);
      padding-top: r(42);
      .h1 {
        height: 100%;
        width: 50%;
        position: relative;
        > span {
          position: absolute;
          left: 0;
          top: 0;
          font-size: r(36);
          line-height: r(34);
          font-family: PingFang-SC-Bold;
          font-weight: bold;
        }
        > i {
          background: rgba(255, 219, 173, 1);
          width: r(140);
          height: r(10);
          display: inline-block;
        }
      }
      .a_time {
        span:nth-of-type(1) {
          width: r(48);
          height: r(23);
          font-size: r(24);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(38, 38, 38, 1);
        }
        .a_times {
          width: r(45);
          height: r(45);
          line-height: r(45);
          display: inline-block;
          color: #fff;
          font-size: r(20);
          text-align: center;
          border-radius: r(5);
          background: rgba(34, 34, 34, 1);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        i {
          font-weight: 500;
          font-style: normal;
          // width: 4px;
          // height: 14px;
          // background: rgba(38, 38, 38, 1);
          // border-radius: 50%;
        }
      }
    }
    .a_bottmain {
      width: 100%;
    }
  }
}
</style>
