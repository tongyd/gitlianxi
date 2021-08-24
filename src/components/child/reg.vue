<template>
  <div class="reg">
    <p>
      <label>
        <span>用户名:</span>
        <input v-model="username">
      </label>
    </p>
    <p>
      <label>
        <span>密码:</span>
        <input v-model="password">
      </label>
    </p>
    <p>头像:</p>
    <p v-fileUpload="setInputFile">点击上传头像</p>
    <p>
      <label>
        <span>昵称:</span>
        <input v-model="name">
      </label>
    </p>
    <p>
      <button class="log" @click="Mockreg">注册</button>
    </p>
  </div>
</template>
<script>
import Mock from "mockjs";
import { MessageBox } from "mint-ui";
export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      name: "",
      setInputFile: {
        fn: "fileUpload", //函数
        multiple: false //设置是否多张上传
      },
      url: ""
    };
  },
  methods: {
    fileUpload(url) {
      this.url = url;
    },
    Mockreg() {
      var params = {
        username: this.username,
        password: this.password,
        avatar: this.url,
        name: this.name,
        id: Mock.Random.guid()
      };
      this.$apis.Mockreg(params).then(res => {
        if (res.data.data.code == 1) {
          MessageBox.alert("注册成功,请重新登陆");
          this.$router.push({
            path: "/user",
            query: {
              bool: true
            }
          });
        } else if (res.data.data.code == -1) {
          MessageBox.alert("信息不完整");
        } else {
          MessageBox.alert("用户名已经存在");
        }
      });
    }
  },
  mounted() {
    // this.Mockreg();
  }
};
</script>
<style lang="scss" scoped>
.reg {
  width: 100%;
  height: 160vw;
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
    i {
      display: block;
      float: left;
      height: 100%;
      width: 50%;
      margin-left: 10%;
      border: 1px solid #b9e9eb;
      font-style: normal;
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
      width: 20vw;
      height: 10vw;
      margin-left: 30%;
      border: 1px solid #b9e9eb;
      background: #7cf1f5;
    }
  }
}
</style>
