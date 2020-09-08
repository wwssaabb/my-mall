<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-image"></slot>
    <slot v-else name="item-image-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"#37ac77"
      }

    },computed:{
      isActive(){
        return this.$route.path.indexOf(this.path);
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    data(){
      return {
        /*Active:true,*/
        itemPath:this.path
      }
    },
    methods:{
      /*changeIsActive(){
        !this.isActive;
      },*/
      itemClick(){
        this.$router.push(this.path).catch(err=>err)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    display: flex;
    flex: 1;
    text-align: center;
    height: 49px;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .item-top{
    flex-direction:row;
  }
  .active{
   color:#13227a;
  }
  .tab-bar-item:not(:last-child){
    border-right: 2px solid rgba(193, 185, 185, 0.8);
  }


</style>