<template>
  <div class="recommend">
    <div class="recommend_item" v-for="(item,index) in recommend.list" :key="index+item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    props:{
      recommend:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    padding:10px 0 20px;
    display:flex;
    flex-flow: row nowrap;
    text-align:center;
    border-bottom:10px solid rgba(205, 205, 205,0.5);
    line-height:25px;
  }
  .recommend a{
    flex: 1;
  }
  .recommend img{
    width: 85%;
  }


</style>