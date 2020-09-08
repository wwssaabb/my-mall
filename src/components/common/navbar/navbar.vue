<template>
  <div class="nav-main">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"navbar"
}
</script>

<style scoped>
.nav-main{
  box-sizing: border-box;
  line-height: 44px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  box-shadow:0 2px 3px rgba(241,241,241, 0.5);
}
.left,.right{
  width: 15%;
  height: 100%;
  display:flex;
  justify-content: center;
  padding:0 5px;
  }

.center{
  flex:1;
  }
</style>