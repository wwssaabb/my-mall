<template>
  <div class="message-container">
    <div class="message-wrap">
      <i class="message-icon"></i>
      <p>我的消息</p>
    </div>
    <div class="integral-wrap">
      <i class="integral-icon"></i>
      <p>积分商城</p>
    </div>
    <div class="vip-wrap">
      <i class="vip-icon"></i>
      <p>会员卡</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message"
  }
</script>

<style scoped>
  .message-container{
    width: 100%;
    height: 210px;
    border-bottom: 20px solid rgba(189, 184, 185, .15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .message-container>div:not(:last-child){
    border-bottom: 1px solid #e0dbdb;
  }
  .message-wrap,
  .integral-wrap,
  .vip-wrap{
    width: 100%;
    flex:1;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    color: black;
  }
  .message-icon{
    width: 20px;
    height: 20px;
    background-image: url('../../../assets/img/messge.svg');
    background-size: 20px;
    margin: 0 10px 0 0;
  }
  .integral-icon{
    width: 20px;
    height: 20px;
    background-image: url('../../../assets/img/integral.svg');
    background-size: 20px;
    margin: 0 10px 0 0;
  }
  .vip-icon{
    width: 20px;
    height: 20px;
    background-image: url('../../../assets/img/vip.svg');
    background-size: 20px;
    margin: 0 10px 0 0;
  }
</style>