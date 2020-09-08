<template>
  <div class="other-container">
    <div class="shop-cart-wrap" @click="toShopCart">
      <i class="show-cart-icon"></i>
      <p>我的购物车</p>
    </div>
    <div class="loadown-wrap">
      <i class="loadown-icon"></i>
      <p>下载购物App</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "other",
    methods:{
      toShopCart(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  .other-container{
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  .other-container>div:not(:last-child){
    border-bottom: 1px solid #e0dbdb;
  }
  .shop-cart-wrap,
  .loadown-wrap{
    width: 100%;
    flex:1;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    color: black;
  }
  .show-cart-icon{
    width: 20px;
    height: 20px;
    background-image: url('../../../assets/img/shoppingCart.svg');
    background-size: 20px;
    margin: 0 10px 0 0;
  }
  .loadown-icon{
    width: 20px;
    height: 20px;
    background-image: url('../../../assets/img/app.svg');
    background-size: 20px;
    margin: 0 10px 0 0;
  }

</style>