<template>
  <div id="a_denglu">
    <div class="toptitle">
      <p>登录</p>
    </div>
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
        <span>密码</span>
        <input type="password" placeholder="请输入登录密码" />
        <i class="fa fa-eye-slash fa-lg"></i>
        <!-- <i class="fa fa-eye fa-lg"></i> -->
      </div>
    </div>
    <div class="btn_dengl">
      <div>
        <mt-button type="primary">登录</mt-button>
        <p>
          <span>忘记密码？</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adenglu",
  data() {
    return {};
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#a_denglu {
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
      span:nth-of-type(1) {
        margin-right: r(60);
      }
      input {
        width: r(400);
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
      p {
        margin-top: r(45);
        text-align: center;
        height: r(25);
        font-size: r(26);
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: rgba(0, 132, 255, 1);
        > span {
          width: r(120);
        }
      }
    }
  }
}
</style>


