<template>
  <div class="container">
    <navbar>
      <div slot="center" class="navbar-center">商品分类</div>
      <div slot="right"  class="navbar-right"></div>
    </navbar>

  </div>
</template>

<script>
  import navbar from "./navbar";
  export default {
    name: "categoryNavbar",
    components:{
      navbar
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    height:44px;
    background-color:#ff5677;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  .navbar-center{

  }
  .navbar-right{

  }
</style>