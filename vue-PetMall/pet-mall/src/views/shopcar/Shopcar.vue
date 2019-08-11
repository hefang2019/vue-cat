<template>
  <div id="shopCar">
    <div class="title">
      <van-icon name="arrow-left" @click="goto()" />
      <h3>购物车</h3>
      <van-icon name="qr" />
    </div>

    <div class="shopinfo" v-for="(i,index) of carList" :key="index">
      <van-checkbox class="check" v-model="checked" />

      <van-card :price="i.price" :title="i.title" :thumb="i.photo">
        <div slot="footer">
          <van-stepper :integer="true" v-model="i.buyNum" input-width="40px" button-size="32px" :max="5" />
        </div>
      </van-card>

    </div>

    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>

    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      // value: 3,
      carList: []
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      if (this.carList.length == 0) {
        return total;
      }
      for (let item of this.carList) {
        total += Number(item.price) * item.buyNum;
      }
      return total * 100;
    }
  },
  methods: {
    onSubmit() {},
    goto() {
      this.$router.go(-1);
    }
  },
  async created() {
    let shopCart = await this.$axios(
      "https://www.easy-mock.com/mock/5d494979ba8c45151264df79/goodslist/goodlist"
    );
    const goodList = shopCart.data.list;
    const carList = this.$store.state.carList;
    carList.forEach((item, idx) => {
      let carGood = Object.assign(
        {},
        {
          photo: goodList[idx].photo,
          price: goodList[idx].sale_price,
          title: goodList[idx].subject,
          buyNum: item.buyNum
        }
      );
      this.carList.push(carGood);
    });
  }
};
</script>
<style lang="scss" scoped>
#shopCar {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
  .title {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    h3 {
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      line-height: 50px;
    }
    i {
      line-height: 50px;
      font-size: 20px;
    }
  }
  .shop {
    width: 100%;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    background: #fff;
    span {
      line-height: 30px;
      font-size: 14px;
      color: #666;
      margin-left: 20px;
    }
  }
  .shopinfo {
    widows: 100%;
    height: 110px;
    display: flex;
    background: #fff;
    position: relative;
    .check {
      padding-left: 20px;
      z-index: 2;
    }
    .van-card {
      .van-card__footer {
        position: absolute;
        right: 20px;
        bottom: 5px;
      }
      .van-card__price {
        font-size: 14px;
        font-weight: bold;
        margin-top: 20px;
      }
    }
  }
}
</style>

