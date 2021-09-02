<template>
  <div class="login-contain">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="test"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <iframe-template :urlInfo="urlInfo"></iframe-template>
  </div>
</template>

<script>
  import iframeTemplate from "@/views/iframe/iframe-template";
  // import { loginApi } from "@/common/js/request/apiLogin.js";
  import { loginApi } from "../../../common/js/request/apiLogin.js";
  export default {
    name: "",
    components: { iframeTemplate },
    data() {
      return {
        username: "hgsk",
        password: "cjk12345",
        urlInfo: {
          path: "",
        },
      };
    },
    methods: {
      onSubmit(values) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
        console.log("submit", values);
        let obj = {
          loginType: "PASSWORD", // 默认
          num: 9667, // 默认
          userMail: this.username, //hgsk,
          userPwd: this.password, //"cjk12345",
        };
        loginApi(obj).then((res) => {
          console.log(res);
          this.$toast.success("登录成功");
          this.$router.push({
            path: "/home",
          });
        }).catch(err => {
          console.log(err);
        });
        // this.$http
        //   .post(`${this.$config.loginApi}`, obj)
        //   .then((res) => {
        //     console.log(res);
        //     this.$toast.success("登录成功");
        //   //   this.urlInfo.path = 'https://baidu.com'
        //     this.$router.push({
        //         path:'/home'
        //     })
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     this.$toast.fail("失败失败", err);
        //   });
      },
    },
  };
</script>

<style>
  .login-contain {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
