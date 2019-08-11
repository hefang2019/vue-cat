<template>
  <div id="goodList">
    <h4>商品列表</h4>
    <van-search placeholder="点击搜索商品" v-model="val" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
    <ul class="list">
      <li :data-id="cat.gid" @click="add(cat.gid)" v-for="(cat,index) of catFood" :key="index">
        <a>
          <div class="goodsImg">
            <img :src="cat.photo" alt="">
          </div>
          <div class="goodsinfo">
            <p class="title" v-text="cat.subject"></p>
            <p class="price">￥{{cat.sale_price}}</p>
            <p class="sales">
              <span v-text="cat.comments"></span>
              <span v-text="cat.sold"></span>
            </p>
          </div>
        </a>
        <div class="cart">
          <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      value1: 0,
      value2: "a",
      value3: "A",
      value4: 0,
      catFood: [],
      option1: [
        { text: "默认", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
        { text: "好评排序", value: 3 },
        { text: "销量排序", value: 4 }
      ],
      option2: [{ text: "销量", value: "a" }],
      option3: [{ text: "价格", value: "A" }],
      option4: [{ text: "筛选", value: 0 }]
    };
  },
  async created() {
    let catFood = await this.$axios(
      "https://www.easy-mock.com/mock/5d494979ba8c45151264df79/goodslist/goodlist"
    );
    this.catFood = catFood.data.list;
  },
  methods: {
    add(id) {
      this.$router.push({
        name: "detail",
        params: { id: id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#goodList {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  h4 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    text-align: center;
    border-bottom: 1px solid #99999952;
    padding: 10px 0;
  }
  .list {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    li {
      border-bottom: 1px solid #e7e7e7;
      position: relative;
      a {
        width: 100%;
        height: 103px;
        display: block;
        .goodsImg {
          width: 30%;
          height: 100px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .goodsinfo {
          width: 70%;
          height: 100%;
          float: left;
          padding-left: 10px;
          box-sizing: border-box;
          .title {
            font-size: 12px;
            color: #666;
          }
          .price {
            font-size: 14px;
            color: red;
            margin-top: 25px;
          }
          .sales {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .cart {
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 10px;
        right: 5px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>


