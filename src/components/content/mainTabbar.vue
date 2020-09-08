<template>
  <tob-tar>
    <tab-bar-item path="/home" activeColor="#13227a">
      <img slot="item-image" src="~assets/img/home.svg" alt="主页">
      <img slot="item-image-active" src="~assets/img/active-home.svg" alt="主页">
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort" activeColor="#13227a">
      <img slot="item-image" src="~assets/img/sort.svg" alt="分类">
      <img slot="item-image-active" src="~assets/img/active-sort.svg" alt="分类">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#13227a">
      <img slot="item-image" src="~assets/img/shoppingCart.svg" alt="购物车">
      <img slot="item-image-active" src="~assets/img/active-shoppingCart.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#13227a">
      <img slot="item-image" src="~assets/img/mine.svg" alt="我的">
      <img slot="item-image-active" src="~assets/img/active-mine.svg" alt="我的">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tob-tar>
</template>

<script>
  const TobTar =()=>import("../common/tabbar/TobTar.vue")
  const tabBarItem=()=>import('../common/tabbar/tabBarItem.vue')
  export default {
    name: "mainTabbar",
    components: {
      TobTar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>