<template>
  <div id="opgc">
    <h3>小萌书</h3>
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">
          <van-icon name="chat-o" />
        </div>
      </van-search>
    </div>
    <ul class="catList">
      <li v-for="(can,idx) of canFood" :key="idx">
        <div class="catImg">
          <img :src="can.photo" alt="">
        </div>
        <div class="catinfo">
          <p class="p1" v-text="can.subject"></p>
          <p class="p2">￥{{can.sale_price}}</p>
          <p class="p3">
            <span v-text="can.comments"></span>
            <span v-text="can.sold"></span>
          </p>
        </div>
      </li>
      <div class="cart">
        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" alt="">
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      canFood: ""
    };
  },
  async created() {
    let canFood = await this.$axios(
      "https://www.easy-mock.com/mock/5d4ab540d8e18377154d058b/canFood/list"
    );

    this.canFood = canFood.data.list;
  }
};
</script>
<style lang="scss" scoped>
#opgc {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  h3 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #cccccc75;
  }
  .catList {
    width: 100%;
    height: 100%;
    position: relative;
    li {
      box-sizing: border-box;
      width: 100%;
      height: 123px;
      padding: 10px;
      display: flex;
      border-bottom: 1px solid #cccccc52;

      .catImg {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .catinfo {
        flex: 1;
        padding-left: 10px;
        p {
          -webkit-margin-before: 0;
          -webkit-margin-after: 0;
          font-size: 12px;
        }
        .p1 {
          color: #666;
        }
        .p2 {
          color: red;
          font-size: 14px;
          margin-top: 30px;
        }
        .p3 {
          color: #999;
          line-height: 20px;
        }
      }
    }
    .cart {
      width: 30px;
      height: 30px;
      position: absolute;
      bottom: 10px;
      right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>


