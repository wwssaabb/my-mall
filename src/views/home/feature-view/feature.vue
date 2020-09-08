<template>
  <div class="feature">
    <div class="feature_item">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "feature"
  }
</script>

<style scoped>
  .feature{
    /*border-bottom:10px solid rgba(205, 205, 205,0.5);*/

  }
  .feature img{
    width: 100%;
  }
  img::after{
    content: "";
    width:inherit;
    height: inherit;
    border-right: 1px solid white;
  }
</style>