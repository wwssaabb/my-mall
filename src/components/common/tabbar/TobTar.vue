<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TobTar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f1f1f1;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow:0 -3px 6px rgba(120,120,120,0.15) ;
  }
</style>