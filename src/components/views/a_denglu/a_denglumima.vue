<template>
  <div id="a_zhaohuimima">
    <div class="toptitle">
      <p>找回密码?</p>
    </div>
    <div class="zhaoo">
      <div class="dl_bottom">
        <div class="dlb_top">
          <span>+86</span>
          <span>
            <i class="fa fa-chevron-down"></i>
          </span>
          <i class="shux"></i>
          <input type="text" placeholder="请输入手机号" />
        </div>
        <div class="dlb_top dl">
          <input type="text" placeholder="请输入验证码" />
          <mt-button type="primary">发验证码</mt-button>
        </div>
      </div>
      <div class="btn_dengl">
        <div>
          <mt-button type="primary">下一步</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adenglumima",
  data() {
    return {};
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#a_zhaohuimima {
  .toptitle {
    margin-top: r(65);
    padding-left: r(48);
    p {
      height: r(45);
      font-size: r(48);
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      line-height: r(45);
    }
  }
  .zhaoo {
    .dl_bottom {
      margin-top: r(92);
      padding-left: r(47);
      padding-right: r(40);
      .dlb_top {
        border-bottom: r(1) solid rgba(220, 220, 220, 1);
        padding-bottom: r(25);
        span {
          font-size: r(32);
          font-family: PingFang-SC-Medium;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          text-align: center;
          display: inline-block;
          line-height: r(25);
          .fa-chevron-down {
            line-height: r(25);
            font-size: r(12);
            width: r(22);
            text-align: center;
            margin-left: r(10);
            margin-right: r(20);
          }
        }
        .shux {
          width: r(2);
          height: r(30);
          background: rgba(38, 38, 38, 1);
          display: inline-block;
        }
        input {
          width: r(195);
          font-size: r(32);
          line-height: r(32);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          border: none;
          outline: none;
        }
      }
      .dl {
        margin-top: r(60);
        input {
          width: r(400);
        }
        .mint-button--normal {
          width: r(168);
          height: r(60);
          background: linear-gradient(
            90deg,
            rgba(255, 109, 43, 1),
            rgba(255, 144, 0, 1)
          );
          border-radius: r(30);
          font-size: r(28);
          line-height: r(60);
          font-family: PingFang-SC-Medium;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .btn_dengl {
      margin-top: r(189);
      > div {
        width: 100%;
        text-align: center;
        .mint-button--normal {
          width: r(540);
          height: r(88);
          background: linear-gradient(
            90deg,
            rgba(255, 109, 43, 1),
            rgba(255, 144, 0, 1)
          );
          opacity: 0.3;
          border-radius: r(44);
          font-size: r(36);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>


