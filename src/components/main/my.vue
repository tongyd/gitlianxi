<template>
  <div id="my">
    <div class="my" v-show="bool">
      <p style="height:10vw;margin:5vw 0;padding:0 0 0 5vw;color:rgba(9,152,154,1)">
        <i class="fa fa-chevron-left fa-2x" @click="tabs"></i>
      </p>
      <p>
        <label>
          <span>用户名:</span>
          <input name="username" class="uname">
        </label>

      </p>
      <p>
        <label>
          <span>密码:</span>
          <input name="password" class="upwd" type="password">
        </label>
      </p>
      <p>
        <button @click="logins" class="log">登陆</button>
      </p>
      <p>
        <button @click="reg" class="reg">无账号-点击注册</button>
      </p>
    </div>
    <div v-show="!bool" class="minfo">
      <div class="usdiv">
        <div>
          <img :src="img" @click="tab(img)">
        </div>
        <p>{{username}}</p>
      </div>
      <ul>
        <li>
          <p>会员等级</p>
          <p>V0</p>
        </li>
        <li>
          <p>吉致币</p>
          <p>0</p>
        </li>
        <li>
          <p>优惠券</p>
          <p>0</p>
        </li>
        <li>
          <p>兑换券</p>
          <p>0</p>
        </li>
      </ul>
      <div class="ddiv">
        <p>
          <i class="fa fa-file-text"></i>我的订单
          <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt>
        </p>
        <p>
          <i class="fa fa-telegram"></i>收货地址
          <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import Store from "storejs";
export default {
  name: "my",
  data() {
    return {
      bool: true,
      img: "",
      username: "",
      user: []
    };
  },
  methods: {
    //   console.log(this.$apis.Mocklogin);
    logins() {
      var data = {
        username: $(".uname").val(),
        password: $(".upwd").val()
      };
      this.$apis.Mocklogin(data).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
          Toast({
            message: res.data.msg,
            iconClass: "icon icon-success"
          });
          this.bool = false;
          this.username = res.data.userinfo.name;
          this.img =
            res.data.userinfo.avatar == ""
              ? "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120"
              : res.data.userinfo.avatar;
          Store.set("users", res.data.userinfo);
        } else if (res.data.code == -1) {
          Toast({
            message: res.data.msg,
            iconClass: "icon icon-success"
          });
        } else {
          Toast({
            message: res.data.msg,
            iconClass: "icon icon-success"
          });
        }
      });
    },
    tab(img) {
      this.$router.push({
        path: "/userinfo",
        query: {
          img: img
        }
      });
    },
    reg() {
      this.$router.push({
        path: "/reg"
      });
    },
    tabs() {
      history.back();
    },
    pageinit() {
      this.user = Store.get("users") || [];
      // console.log(this.user);
      if (this.user.length != 0) {
        $(".uname").val(this.user.username);
        $(".upwd").val(this.user.password);
        this.bool = false;
        this.img =
          this.user.avatar == ""
            ? "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120"
            : this.user.avatar;
      } else {
        this.bool = true;
      }
    }
  },
  mounted() {
    this.pageinit();
  }
};
</script>
<style lang="scss" scoped>
#my {
  width: 100%;
  overflow: hidden;
  .my {
    width: 100%;
    height: 160vw;
    overflow: hidden;
    background-color: #b9e9eb;
    p {
      width: 80%;
      padding-left: 18%;
      height: 10vw;
      span {
        display: block;
        float: left;
        width: 20%;
        height: 100%;
      }
      input {
        display: block;
        float: left;
        height: 100%;
        width: 50%;
        margin-left: 10%;
        border: 1px solid #b9e9eb;
      }
      .log {
        width: 30vw;
        height: 10vw;
        margin-left: 20%;
        border: 1px solid #b9e9eb;
        background: #7cf1f5;
        text-align: center;
      }
      .reg {
        width: 30vw;
        height: 10vw;
        margin-left: 20%;
        border: 1px solid #b9e9eb;
        background: #7cf1f5;
        text-align: center;
      }
    }
  }
  .usdiv {
    width: 100%;
    height: 40vw;
    div {
      width: 30vw;
      height: 30vw;
      margin-left: 35%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 30vw;
        height: 30vw;
        display: block;
      }
    }
    p {
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      font-size: r(15 * 2);
      height: 10vw;
      line-height: 10vw;
    }
  }
  ul {
    width: 100%;
    height: 20vw;
    margin: 0;
    padding: 0;
    border-bottom: r(20) solid #f7f7f7;

    li {
      width: 25%;
      height: 100%;
      float: left;
      list-style: none;
      margin: 0;
      padding: 0;
      p {
        width: 100%;
        height: 50%;
        text-align: center;
        color: #ccc;
        margin: 0;
        padding: 0;
      }
      p:nth-of-type(2) {
        color: #333;
        font-size: r(18 * 2);
      }
    }
  }
  .ddiv {
    width: 100%;
    height: 30vw;
    p {
      height: 15vw;
      font-size: r(18 * 2);
      color: #333;
      padding-left: r(20);
      position: relative;
      i {
        margin: 0 r(20);
      }
      img {
        width: 2.4vw;
        position: absolute;
        right: 3vw;
      }
    }
    p:nth-of-type(1) {
      border-bottom: r(5) solid #f7f7f7;
    }
  }
}
</style>

