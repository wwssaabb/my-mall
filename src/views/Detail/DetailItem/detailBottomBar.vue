<template>
  <div class="bottom-bar">
    <div class="left">
      <div @click="service">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="shop">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="select">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="shop-cart" @click="ShoppingCart">加入购物车</div>
      <div class="buy" @click="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods:{
      service(){

      },
      shop(){

      },
      select(){

      },
      ShoppingCart(){
        this.$emit('addToCart',this.$route.query.iid)
      },
      buy(){

      }
    }
  }
</script>

<style scoped>
  .bottom-bar
  {
    width: 100%;
    height:49px;
    display: flex;
    left:0;
    right: 0;
    bottom: 0;
    background: white;
    box-shadow:0 -3px 5px rgba(231,231,231,0.9);
  }
  .left
  {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left>div
  {
    text-align: center;
    flex:1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left>div:not(:first-child)
  {
    border-left:3px solid rgba(231,231,231,0.9) ;
  }
  .text
  {
    color: black;
  }
  i.service
  {
    width: 30px;
    height: 30px;
    background-image: url("../../../assets/img/service.svg");
    background-size:30px 30px;
    background-repeat:no-repeat;
    background-position:left top;
  }
  i.shop
  {
    width: 30px;
    height: 30px;
    background-image: url("../../../assets/img/shop.svg");
    background-size:30px 30px;
    background-repeat:no-repeat;
    background-position:left top;
  }
  i.select
  {
    width: 30px;
    height: 30px;
    background-image: url("../../../assets/img/select2.svg");
    background-size:30px 30px;
    background-repeat:no-repeat;
    background-position:left top;
  }
  .right
  {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .right>div
  {
    flex:1;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .shop-cart
  {
    background: rgba(75, 201, 129, 0.99);
    color: black;
    font-weight: bolder;
    font-size: 16px;
  }
  .buy
  {
    background: hotpink;
    color: white;
    font-weight: bolder;
    font-size: 16px;
  }
</style>