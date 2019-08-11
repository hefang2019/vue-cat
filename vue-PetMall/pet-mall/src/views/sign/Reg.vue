<template>
  <div id="reg">
    <div class="retreat">
      <van-icon name="arrow-left" @click="backtrack('user')" />
    </div>
    <h3>快速注册</h3>
    <div class="userinfo">
      <van-cell-group>
        <van-field v-model="username" clearable right-icon="question-o" placeholder="手机号码" />
        <van-cell-group>
          <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-field v-model="password" type="password" placeholder="请输入6-20位密码" />
      </van-cell-group>
      <van-button class="btn" square type="primary">登录</van-button>
    </div>
    <p data-v-5063cb64="" class="ft10 ftc c333 delay5 animated bounceInRight pad10">点击“下一步”，即表示您阅读并同意
      <a data-v-5063cb64="" href="https://wap.epet.com/article.html?do=userAgreement" class="cf0">《E宠商城用户协议》</a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      sms: ""
    };
  },
  methods: {
    backtrack(name) {
      this.$router.push(name);
    }
  }
};
</script>
<style lang="scss" scoped>
#reg {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  h3 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    color: #333;
    padding-left: 20px;
  }
  .retreat {
    font-size: 25px;
    line-height: 50px;
  }
  .userinfo {
    .van-cell {
      margin: 10px 0;
    }
    .btn {
      width: 80%;
      height: 50px;
      line-height: 50px;
      border-radius: 10px;
      margin-top: 20px;
      margin-left: 20px;
      background: #ccc;
      border-color: #ccc;
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


