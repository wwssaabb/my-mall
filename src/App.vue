<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
const maintabbar =()=>import('components/content/mainTabbar.vue')

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    font-size:14px;
  }
</style>
