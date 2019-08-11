<template>
  <div id="user">
    <h4>我的E宠</h4>
    <div class="sign">
      <div class="setting">
        <a href="###">
          <van-icon name="setting-o" />
        </a>
        <a href="###">
          <van-icon name="chat-o" />
        </a>
      </div>
      <div class="user_info">
        <div class="photo">
          <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" alt="">
        </div>
        <div class="login">
          <a href="###" @click="goto('login')"> 登录 </a>
          <b> | </b>
          <a href="###" @click="goto('reg')"> 注册 </a>
        </div>
      </div>
      <div class="vip">
        <div class="roll">
          <a href="###" v-for="(v,idx) of vipClub" :key="idx">
            <img :src="v.above_image.img_url" alt="">
          </a>

        </div>
      </div>
    </div>
    <div class="orderinfo">
      <div class="myOrder">
        <div class="f1">
          <img src="https://img2.epetbar.com/nowater/2018-11/22/09/390880ba4e224747ebde28b56fe807da.png" alt="">
        </div>
        <div class="clearfix">
          <div class="fix" v-for="(order,idx) of MyOrder" :key="idx">
            <img :src="order.above_image.img_url" alt="">
            <p v-text="order.below_text"></p>
          </div>
        </div>
      </div>
      <div class="myOrder">
        <div class="f1">
          <img src="https://img2.epetbar.com/nowater/2018-11/22/09/b5103c1385810f1a1f76891c8ee6d3ef.png" alt="">
        </div>
        <div class="clearfix">
          <div class="fix" v-for="(w,idx) of wallet" :key="idx">
            <b v-text="w.above_text"></b>
            <p v-text="w.below_text"></p>
          </div>
        </div>
      </div>
      <div class="myWaiter">
        <div class="f2">
          <img src="https://img2.epetbar.com/nowater/2018-11/22/09/1cadc7c68de1db0b2ef68929b5a97bd6.png" alt="">
        </div>
        <div class="myinfo">
          <div class="fix" v-for="(info,idx) of myInfo" :key="idx">
            <img :src="info.above_image.img_url" alt="">
            <p v-text="info.below_text">联系客服</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vipClub: [],
      wallet: [],
      MyOrder: [],
      myInfo: []
    };
  },
  async created() {
    let vipClub = await this.$axios(
      "https://www.easy-mock.com/mock/5d496a3fb20a8503ca1a97d9/user/list"
    );
    // window.console.log(vipClub.data.list[3].data.items);
    this.vipClub = vipClub.data.list[0].data.items;
    this.MyOrder = vipClub.data.list[1].data.items;
    this.wallet = vipClub.data.list[2].data.items;
    this.myInfo = vipClub.data.list[3].data.items;
  },
  methods: {
    goto(name) {
      this.$router.push({ name });
    }
  }
};
</script>
<style lang="scss" scoped>
#user {
  width: 100%;
  height: 100%;
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  h4 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    text-align: center;
    line-height: 50px;
  }
  .sign {
    width: 100%;
    height: 207px;
    background: url("https://static.epetbar.com/static_web/wap/src/images/background/backgroundV420.jpg");
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
    // position: relative;
    .setting {
      width: 100%;
      height: 42px;
      display: flex;
      justify-content: space-between;
      a {
        font-size: 24px;
        color: #fff;
        line-height: 42px;
      }
    }
    .user_info {
      width: 100%;
      height: 70px;
      display: flex;

      .photo {
        width: 70px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .login {
        flex: 1;
        color: #fff;
        margin-left: 20px;
        a {
          color: #fff;
          line-height: 70px;
        }
      }
    }
    .vip {
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      width: 100%;
      height: 35px;
      background: #000;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      box-sizing: border-box;
      padding: 5px 10px;
      margin-top: 40px;
      .roll {
        width: 100%;
        height: 25px;
        padding: 5px 0;
        display: flex;
        justify-content: space-around;
        a {
          width: 25%;
          height: 25px;
          line-height: 25px;
        }
        img {
          width: 64px;
          height: 17px;
        }
      }
    }
  }
  .orderinfo {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    .myOrder {
      width: 100%;
      height: 116px;
      box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      margin-bottom: 25px;
      .f1 {
        width: 100%;
        height: 25px;
        padding: 10px 0 0 10px;

        img {
          width: 110px;
          height: 16px;
        }
      }
      .clearfix {
        width: 100%;
        height: 61px;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .fix {
          width: 20%;
          height: 51px;
          text-align: center;
          img {
            width: 25px;
            height: 25px;
          }
          p {
            font-size: 12px;
            color: #666;
          }
          b {
            font-size: 14px;
            color: red;
          }
        }
      }
    }
  }
  .myWaiter {
    width: 100%;
    height: 280px;
    .f2 {
      width: 100%;
      height: 25px;
      img {
        width: 111px;
        height: 16px;
      }
    }
    .myinfo {
      width: 100%;
      height: 216px;
      display: flex;
      flex-wrap: wrap;
      .fix {
        width: 25%;
        height: 52px;
        text-align: center;
        img {
          width: 26px;
          height: 26px;
        }
        p {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>


