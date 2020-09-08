<template>
  <div class="go-shop-cart">
    <div class="icon"></div>
  </div>
</template>

<script>
  export default {
    name: "goShowCart"
  }
</script>

<style scoped>
  .go-shop-cart {
    width: 50px;
    height: 50px;
    border-radius:50%;
    background: rgba(223, 223, 223,0.9);
    position: fixed;
    right: 0;
    bottom: 125px;
    z-index: 1;
  }
  .icon{
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/img/shoppingCart.svg");
    background-size:50px 50px ;
    transform: scale(0.6);
    z-index: 11;
  }
</style>