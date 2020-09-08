<template>
  <div class="container">
    <navbar>
      <div class="title" slot="center">
        <p>我的信息</p>
      </div>
    </navbar>

  </div>
</template>

<script>
  import navbar from "./navbar";
  export default {
    name: "profileNavbar",
    components:{
      navbar
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
  }
</style>