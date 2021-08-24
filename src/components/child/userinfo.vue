<template>
  <div class="userinfo">
    <ul>
      <li>
        <div>头像</div>
        <div class="dimg">
          <img :src="url" alt>
        </div>
      </li>
      <li>
        <div>昵称</div>
        <div>未设置</div>
      </li>
      <li>
        <div>真实姓名</div>
        <div>未设置</div>
      </li>
      <li>
        <div>性别</div>
        <div>男</div>
      </li>
      <li>
        <div>手机号</div>
        <div>182****6536</div>
      </li>
      <li>
        <div>修改密码</div>
      </li>
    </ul>
    <p class="dlog" @click="dlog">退出登录</p>
  </div>
</template>
<script>
import Store from "storejs";
import { MessageBox } from "mint-ui";
export default {
  name: "userinfo",
  data() {
    return {
      url: ""
    };
  },
  methods: {
    dlog() {
      MessageBox.confirm("是否退出?").then(
        action => {
          Store.remove("users");
          this.$router.push({
            path: "/homepage",
          });
        },
        () => {
          return;
        }
      );
    }
  },
  mounted() {
    this.url = this.$route.query.img;
  }
};
</script>
<style lang="scss" scoped>
.userinfo {
  width: 100%;
  height: 165vw;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      list-style: none;
      width: 90%;
      margin: 0 5%;
      height: 15vw;
      font-weight: 400;
      color: #333;
      font-size: r(14 * 2);
      line-height: r(66 * 2);
      border-bottom: r(10) solid #f7f7f7;
      display: flex;
      justify-content: space-around;
      div {
        flex: 1;
      }
      div:nth-of-type(2) {
        text-align: right;
      }
      .dimg {
        img {
          width: 10vw;
          height: 10vw;
          margin-top: 2.5vw;
          margin-bottom: 2.5vw;
          border-radius: 50%;
          display: block;
          margin-left: 30vw;
        }
      }
    }
  }
  .dlog {
    width: 100%;
    text-align: center;
    color: #f2495e;
    height: 15vw;
    margin-top: 3.867vw;
    margin-bottom: 3.867vw;
    font-size: 3.7334vw;
    line-height: 3.7334vw;
  }
}
</style>


