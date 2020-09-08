<template>
  <div class="balance-main">
    <div class="balance-wrap">
      <div class="balance-top">
        <p class="number">0.00</p>
        <p>元</p>
      </div>
      <div class="balance-bot">
        <p>我的余额</p>
      </div>
    </div>
    <div class="discount-wrap">
      <div class="discount-top">
        <p class="number">0</p>
        <p>个</p>
      </div>
      <div class="discount-bot">
        <p>我的优惠</p>
      </div>
    </div>
    <div class="integral-wrap">
      <div class="integral-top">
        <p class="number">0</p>
        <p>分</p>
      </div>
      <div class="integral-bot">
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "balance"
  }
</script>

<style scoped>
  .balance-main {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 20px solid rgba(189, 184, 185, .15);
  }

  .balance-main > div {
    height: 100%;
    flex: 1;
  }

  .balance-main > div:not(:last-child) {
    border-right: 2px solid rgba(189, 184, 185, 0.2);
  }

  .number {
    font-size: 16px;
    font-weight: bold;
    color: #f96146;
    margin: 0 5px;
  }

  .balance-wrap,
  .discount-wrap,
  .integral-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .balance-top,
  .discount-top,
  .integral-top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }

</style>