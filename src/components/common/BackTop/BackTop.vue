<template>
  <div class="back-top">
    <div class="icon"></div>
  </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
  .back-top {
   width: 50px;
    height: 50px;
    border-radius:50%;
    background: rgba(223, 223, 223,0.9);
    position: fixed;
    right: 0;
    bottom: 74px;
    z-index: 1;
  }
  .icon{
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/img/home/arrow.svg");
    background-size:50px 50px ;
    transform: rotate(90deg) translateX(3px) scale(0.8);
    z-index: 1;
  }
  .icon::before{
    content: "-";
    position: absolute;
    transform: rotate(90deg) scalex(2.2) ;
    left: 9px;
    top:-10px;
    font-size: 60px;
    color: rgb(0, 0, 0);
  }

</style>