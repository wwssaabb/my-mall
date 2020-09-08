<template>
  <div class="main" v-show="isShow">
    <div class="content">
      <div class="message">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration=1500){
        this.isShow=true
        this.message=message
        setTimeout(()=>{
          this.isShow=false
          this.message=''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
  }
  .content{
    position: absolute;
    width: 50%;
    padding: 10px 0;
    border-radius:10px;
    background-color: rgba(88, 88, 88,0.9);
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: whitesmoke;
    font-size: 20px;
    font-weight: bold;
    text-align:center;
    z-index: 999;
  }
</style>