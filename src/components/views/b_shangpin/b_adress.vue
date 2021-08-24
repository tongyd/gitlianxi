<template>
  <div id="b_adress">
    <div class="b_zigou">
      <!-- 标题 -->
      <div class="at_top">
        <i class="fa fa-chevron-left"></i>
        <span>添加收获地址</span>
      </div>
      <!-- 地址部分 -->
      <div class="divadress">
        <div class="divshouhuo">
          <input type="text" placeholder="收货人" />
        </div>
        <div class="divtel">
          <input type="tel" placeholder="手机号码" />
        </div>
        <div class="divdiqu">
          <input type="text" placeholder="所在地区" />
          <i class="fa fa-chevron-right"></i>
        </div>
        <div class="divxx">
          <input type="text" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等" />
        </div>
      </div>
      <!-- 智能识别 -->
      <div class="divzhineng">
        <div class="top">
          <div>
            <mt-button type="primary">智能粘贴</mt-button>
          </div>
          <p>
            <i class="fa fa-trash-o fa-lg"></i>
            清空
          </p>
        </div>
        <div class="bottom">
          <p>清空</p>
        </div>
      </div>
      <!-- 设置默认地址 -->
      <div class="normal_adress">
        <div>
          <img src="@/assets/img/地址识别-未打钩@2x.png" alt />
        </div>
        <p>设为默认地址</p>
      </div>
    </div>
    <div class="overqd">
      <mt-button type="primary">确定</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "badress",
  data() {
    return {};
  },

  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#b_adress {
  width: 100%;
  height: 100%;
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
    // 地址部分
    .divadress {
      border-top: r(10) solid #f3f3f3;
      border-bottom: r(10) solid #f3f3f3;
      overflow: hidden;

      > div {
        height: r(99);
        line-height: r(100);
        margin-left: 2%;
        border-bottom: r(1) solid rgba(238, 238, 238, 1);
        > input {
          width: 90%;
          font-size: r(30);
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(160, 160, 160, 1);
          border: 0;
          outline: none;
        }
        i {
          color: #b5b5b5;
        }
      }
      .divxx {
        input {
          width: 100%;
        }
      }
    }
    // 智能识别
    .divzhineng {
      padding: 0 2%;
      overflow: hidden;
      height: r(350);
      .top {
        height: r(93);
        margin-top: r(27);
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        .mint-button--normal {
          height: r(60);
          background: linear-gradient(
            90deg,
            rgba(255, 109, 43, 1),
            rgba(255, 144, 0, 1)
          );
          border-radius: r(30);
          text-align: center;
          font-size: r(30);
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        p {
          font-size: r(26);
          height: r(60);
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(255, 80, 0, 1);
        }
      }
      .bottom {
        p {
          width: 100%;
          height: r(200);
          border: r(2) solid rgba(160, 160, 160, 1);
          border-radius: r(20);
          font-size: r(26);
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          text-indent: r(52);
        }
      }
    }
    // 设置默认地址
    .normal_adress {
      padding: r(28) 2% 0;
      display: flex;
      > div {
        width: r(40);
        height: r(40);
        background: rgba(255, 255, 255, 1);
        border: r(1) solid rgba(154, 154, 154, 1);
        border-radius: 50%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: r(30);
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        padding-left: r(12);
        height: r(40);
        line-height: r(40);
      }
    }
  }
  //   确定按钮
  .overqd {
    position: fixed;
    bottom: 0;
    width: 100%;
    .mint-button--normal {
      width: 100%;
      height: r(98);
      background: rgba(255, 146, 48, 1);
    }
  }
}
</style>



