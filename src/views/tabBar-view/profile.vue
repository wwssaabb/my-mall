<template>
  <div class="container">
    <!--<swiper class="swiper"></swiper>-->
    <profile-navbar class="navbar"/>
    <login class="login"/>
    <balance class="balance"/>
    <message class="message"/>
    <other class="other"/>
  </div>

</template>

<script>
  /*import swiper from 'components/common/Carousel/swiper.vue'*/
  import profileNavbar from "../../components/common/navbar/profileNavbar";
  import login from "../profile/profileItem/login";
  import balance from "../profile/profileItem/balance";
  import message from "../profile/profileItem/message";
  import other from "../profile/profileItem/other";
  export default {
    name: "profile",
    components: {
      /*swiper*/
      profileNavbar,
      login,
      balance,
      message,
      other
    },
    data(){
      return{
        profileNavbar
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
  }
  .navbar{
    width: 100%;
    background-color: #ff5677;
    color: whitesmoke;
    font-size: 16px;
    font-weight: bold;
  }
  .login{
    width: 100%;
    border-top: 1px solid #bdb8b9;
  }
  .balance{
    width: 100%;
   }
  .message{
    width: 100%;
  }
  .other{
    width: 100%;
  }
  .swiper{
    width: 100%;
  }
</style>