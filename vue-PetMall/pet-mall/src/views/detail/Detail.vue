<template>
  <div id="blurb">
    <div class="head">
      <van-icon name="arrow-left" @click="goto" />
      <h3>商品信息</h3>
      <van-icon name="chat-o" />
    </div>
    <div class="swiper">
      <van-swipe @change="onChange">
        <van-swipe-item>
          <img :src="this.listinfo.photo" alt="">
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/1
        </div>
      </van-swipe>
    </div>
    <div class="title">
      <p class="p1" v-text="this.listinfo.busject"></p>
      <p class="p2" v-text="this.listinfo.presubject"></p>
    </div>
    <div class="price">
      <div class="pri">
        <span>￥{{this.listinfo.sale_price}}</span>
        <del v-text="this.listinfo.market_price"></del>
      </div>
      <a href="###">
        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" alt="">
      </a>
    </div>
    <div class="stepper">
      <span>购买数量</span>
      <van-stepper v-model="value" :integer="true" input-width="48" />
    </div>
    <div class="dispatching">
      <p>
        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="">
        <span>正品保证</span>
      </p>
      <p>
        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="">
        <span>99包邮</span>
      </p>
      <p>
        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="">
        <span>30天退货</span>
      </p>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="num" @click="go_shop_cart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(listId)" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton(listId)" />
    </van-goods-action>
    <div class="detailNew">
      <img src="//img1.epetbar.com/2017-09/29/15/92a15153ba6a96ee87a510f74f87dde5.jpg@!water" alt="">
      <img src="https://img2.epetbar.com/common/upload/commonfile/20190626154931730894.jpg@300y-0ic" alt="">
      <img src="https://img2.epetbar.com/common/upload/commonfile/20190626154931730894.jpg@300y-1ic" alt="">
      <img src="https://img2.epetbar.com/common/upload/commonfile/20190626154931730894.jpg@300y-2ic" alt="">
      <img src="https://img2.epetbar.com/common/upload/commonfile/20190626154931730894.jpg@300y-3ic" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      value: 1,
      listId: "",
      catList: "",
      listinfo: "",
      num: 0
      // url: "shopcar"
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickIcon() {
      //
    },
    go_shop_cart() {
      this.$router.push({
        name: "shopcar"
      });
    },
    // onClickCar(url) {
    //   // Toast("点击图标");
    //   this.$router.to(url);
    // },
    onClickButton(id) {
      this.num += this.value;
      this.$store.commit({
        type: "addToCar",
        newGood: {
          buyNum: this.num,
          gid: this.listId
        }
      });
    },
    goto() {
      this.$router.go(-1);
    }
  },
  async created() {
    let catList = await this.$axios(
      "https://www.easy-mock.com/mock/5d494979ba8c45151264df79/goodslist/goodlist"
    );
    this.listId = this.$route.params.id;
    // window.console.log(listId);
    this.listinfo = catList.data.list[this.listId];
  }
  // mounted() {
  //   this.$store.commit("setNum", 100);
  // }
};
</script>
<style lang="scss" scoped>
#blurb {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  a {
    display: block;
  }
  .head {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    h3 {
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      text-align: center;
      line-height: 50px;
    }
    .van-icon {
      line-height: 50px;
      font-size: 20px;
    }
  }
  .swiper {
    widows: 100%;
    height: 100%;
    position: relative;
    .van-swipe {
      widows: 100%;
      height: 375px;
      img {
        width: 375px;
        height: 375px;
      }
    }
    .custom-indicator {
      width: 30px;
      height: 30px;
      position: absolute;
      bottom: 5px;
      right: 10px;
      background: #ccc;
      border-radius: 20px;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
    }
  }
  .title {
    widows: 100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    p {
      line-height: 20px;
    }
    .p1 {
      font-size: 14px;
      color: #666;
    }
    .p2 {
      font-size: 12px;
      color: red;
    }
  }
  .price {
    width: 100%;
    height: 34px;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    line-height: 34px;
    margin: 5px 0;
    background: #fff;
    .pri {
      span {
        color: red;
        font-weight: bold;
      }
      del {
        font-size: 12px;
        color: #333;
        margin-left: 20px;
      }
    }
    a {
      height: 100%;
      img {
        width: 79px;
        height: 25px;
        margin-top: 5px;
      }
    }
  }
  .stepper {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: left;
    background: #fff;
    span {
      font-size: 14px;
      color: #666;
      margin: 0 20px;
      line-height: 50px;
    }
    .van-stepper {
      box-sizing: border-box;
      padding-top: 10px;
      background: #ad8d8d00;
    }
  }
  .dispatching {
    width: 100%;
    height: 40px;
    border-top: 1px solid #ccc;
    margin-top: 5px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    p {
      line-height: 40px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      span {
        font-size: 14px;
        color: #666;
        vertical-align: middle;
      }
    }
  }
  .van-goods-action {
    z-index: 99;
  }
  .detailNew {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


