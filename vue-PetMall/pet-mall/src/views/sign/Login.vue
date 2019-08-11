<template>
  <div id="login">
    <div class="retreat">
      <van-icon name="arrow-left" @click="backtrack('user')" />
    </div>
    <div class="userinfo">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" @click-right-icon="$toast('question')" />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <van-button square type="primary" @click="login_in">登录</van-button>
    <div class="other">
      <span>短信验证码登录</span>
      <span @click="reg">新用户注册</span>
    </div>
    <div class="lg">
      <img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother.png" alt="">
    </div>
    <div class="QQ">
      <a href="###"><img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" alt=""></a>
      <a href="###"><img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" alt=""></a>
    </div>
    <p class="ft10 ftc c333 mb15">
      <span>登录代表您阅读并同意</span>
      <a href="https://wap.epet.com/article.html?do=userAgreement&amp;fw=0" class="cf0">《E宠商城用户协议》</a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    backtrack(name) {
      this.$router.push(name);
    },
    reg() {
      this.$router.push({
        name: "reg"
      });
    },
    //登录
    async login_in() {
      const res = await this.$http
        .get("user", {
          params: {
            name: this.username,
            password: this.password
          }
        })
        .then(res => {});
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  a {
    display: block;
  }
  .retreat {
    font-size: 25px;
    line-height: 50px;
  }
  .userinfo {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding-top: 100px;
  }
  .van-button {
    width: 200px;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 55px;
  }
  .other {
    padding-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #666;
    }
  }
  .lg {
    img {
      width: 100%;
      height: 11px;
    }
  }
  .QQ {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .ft10 {
    display: flex;
    font-size: 10px;
    text-align: center;
    justify-content: center;
    .cf0 {
      color: red;
    }
  }
}
</style>


