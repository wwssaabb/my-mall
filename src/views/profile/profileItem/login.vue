<template>
  <div class="container">
    <div class="avatar-wrap">
      <img class="avatar" src="../../../assets/img/avatar.svg" alt="">
    </div>
    <div class="login-wrap">
      <div class="left">
        <div class="top">
          <p class="login-text">登录</p>
          <p class="register">注册</p>
        </div>
        <div class="bot">
          <i class="login-left-bot-icon"></i>
          <p class="point">暂无绑定手机号</p>
        </div>
      </div>
      <div class="right">
        <i class="login-right-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 140px;
    background-color: #ffd7dc;
    display: flex;
    justify-content: left;
    align-items: center;
    color: black;
  }

  .avatar-wrap {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 10px;
    border: 5px solid #ffd7dc;
  }

  .login-wrap {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .left {
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
  }

  .top, .bot {
    width: 100%;
    margin: 5px 0;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .login-left-bot-icon {
    width: 18px;
    height: 18px;
    background-image: url('../../../assets/img/phone.svg');
    background-size: 18px 18px;
    margin: 0 5px 0 0;
  }

  .login-text,
  .register {
    font-size: 18px;
  }

  .login-text::after {
    content: "/";
    position: relative;
    top: 1px;
    margin: 0 3px;
    font-size: 18px;
  }

  .right {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-right-icon {
    width: 30px;
    height: 30px;
    background-image: url('../../../assets/img/arrow.svg');
    background-size: 30px 30px;
    background-repeat: no-repeat;
  }
</style>