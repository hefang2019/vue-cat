<template>
    <div id="homeNav">
        <div class="catFood">
            <div class="catFoodTop">
                <div class="topLeft">
                    <img src="https://img2.epetbar.com/nowater/2019-04/11/14/99dfa93be426097b51ced606f7f75e08.png" alt="">
                </div>
                <div class="enter">
                    <img src="https://img2.epetbar.com/nowater/2018-10/22/15/ead6eb6726b9cada7beee3f27cd55fa8.png" alt="">
                </div>
            </div>
            <div class="columnList">
                <a href="###" class="maxImg">
                    <img src="https://img2.epetbar.com/2019-04/28/10/6d921c56be4acc502df8a3d3a0794543.png?x-oss-process=style/water" alt="">
                </a>
                <ul>
                    <li v-for="(food,idx) of cat" :key="idx">
                        <a href="###">
                            <img :src="food.small_image.img_url" alt="">
                        </a>
                        <p v-text="food.sale_price"></p>
                        <del v-text="food.market_price"></del>
                    </li>
                </ul>
            </div>
            <div class="catSwiper">
                <van-swipe :loop="false" :width="110" :show-indicators="false" :height="32">
                    <van-swipe-item v-for="(brand,idx) of brandLogo" :key="idx">
                        <a href="###">
                            <img :src="brand.img_url" alt="">
                        </a>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="catFoodTop">
                <div class="topLeft">
                    <img src="https://img2.epetbar.com/nowater/2019-06/20/10/b5bb4807545523e8dd538a3af4f1df5c.png" alt="">
                </div>
                <div class="enter">
                    <img src="https://img2.epetbar.com/nowater/2018-10/22/15/ead6eb6726b9cada7beee3f27cd55fa8.png" alt="">
                </div>
            </div>
            <div class="columnList">
                <a href="###" class="maxImg">
                    <img src="https://img2.epetbar.com/2019-06/20/10/2f39d1507a604934172387691bd4a1bd.jpg?x-oss-process=style/water" alt="">
                </a>
                <ul>
                    <li v-for="(food2,idx) of cat2" :key="idx">
                        <a href="###">
                            <img :src="food2.small_image.img_url" alt="">
                        </a>
                        <p v-text="food2.sale_price"></p>
                        <del v-text="food2.market_price"></del>
                    </li>
                </ul>
            </div>
            <div class="catSwiper">
                <van-swipe :loop="false" :width="110" :show-indicators="false" :height="32">
                    <van-swipe-item v-for="(brand2,idx) of brandLogo2" :key="idx">
                        <a href="###">
                            <img :src="brand2.img_url" alt="">
                        </a>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="catFoodTop">
                <div class="topLeft">
                    <img src="https://img2.epetbar.com/nowater/2018-12/20/17/e91579673b725b87dbd40579414a5a65.png" alt="">
                </div>
                <div class="enter">
                    <img src="https://img2.epetbar.com/nowater/2018-10/22/15/ead6eb6726b9cada7beee3f27cd55fa8.png" alt="">
                </div>
            </div>
            <div class="columnList">
                <a href="###" class="maxImg">
                    <img src="https://img2.epetbar.com/2019-04/28/13/84383ac5fa0be8fc731473c708d95c23.png?x-oss-process=style/water" alt="">
                </a>
                <ul>
                    <li v-for="(food3,idx) of cat3" :key="idx">
                        <a href="###">
                            <img :src="food3.small_image.img_url" alt="">
                        </a>
                        <p v-text="food3.sale_price"></p>
                        <del v-text="food3.market_price"></del>
                    </li>
                </ul>
            </div>
            <div class="catFoodTop">
                <div class="topLeft">
                    <img src="https://img2.epetbar.com/nowater/2019-06/20/11/d64f1a1ec8de1662a4a1f851c358602a.png" alt="">
                </div>
                <div class="enter">
                    <img src="https://img2.epetbar.com/nowater/2018-10/22/15/ead6eb6726b9cada7beee3f27cd55fa8.png" alt="">
                </div>
            </div>
            <div class="columnList">
                <a href="###" class="maxImg">
                    <img src="https://img2.epetbar.com/2019-06/20/10/58cfe5f728d6ffee51ba45550caec8fc.jpg?x-oss-process=style/water" alt="">
                </a>
                <ul>
                    <li v-for="(food4,idx) of cat4" :key="idx">
                        <a href="###">
                            <img :src="food4.small_image.img_url" alt="">
                        </a>
                        <p v-text="food4.sale_price"></p>
                        <del v-text="food4.market_price"></del>
                    </li>
                </ul>
            </div>
            <div class="catSwiper">
                <van-swipe :loop="false" :width="110" :show-indicators="false" :height="32">
                    <van-swipe-item v-for="(brand3,idx) of brandLogo3" :key="idx">
                        <a href="###">
                            <img :src="brand3.img_url" alt="">
                        </a>
                    </van-swipe-item>
                </van-swipe>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cat: "",
      brandLogo: [],
      cat2: [],
      brandLogo2: [],
      cat3: [],
      cat4: [],
      brandLogo3: []
    };
  },
  async created() {
    let cat = await this.$axios.post(
      "https://www.easy-mock.com/mock/5d44f4bd02f05d18e0fc45d1/info/info"
    );
    // window.console.log(cat.data.datas.list);
    this.cat = cat.data.datas.list[14].data.goods;
    this.brandLogo = cat.data.datas.list[15].data.brand_banner;
    this.cat2 = cat.data.datas.list[17].data.goods;
    this.brandLogo2 = cat.data.datas.list[18].data.images;
    this.cat3 = cat.data.datas.list[20].data.goods;
    this.brandLogo3 = cat.data.datas.list[23].data.images;
    this.cat4 = cat.data.datas.list[22].data.goods;
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/HomeNav.scss";
</style>



