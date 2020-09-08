<template>
  <div class="detailnavbar">
    <navbar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/home/arrow.svg"/>
      </div>
      <div slot="center" class="title">
        <div
                v-for="(item,index) in title"
                :key="index"
                class="item"
                :class="{'ative':currentIndex==index}"
                @click="indexClick(index)"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from "./navbar";
  export default {
    name: "DetailNavbar",
    components:{
      navbar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    watch:{
      currentIndex(){
        this.$emit('detailNavbarIndex',this.currentIndex)
      }
    },
    methods:{
      backClick(){
        this.$router.back()
      },
      indexClick(index){
        this.currentIndex=index
        this.$emit('detailNavbarClick',index)
      }
    }
  }
</script>

<style scoped>
  .detailnavbar{
    background: rgb(241, 241, 241);
    box-shadow:0 -3px 6px rgba(120,120,120,0.15) ;
  }
  .title{
    display:flex;
    justify-content: center;
    box-sizing: border-box;
  }
  img{
    width: auto;
    height: 44px;
    transform: scale(0.8);
  }
  .item{
    font-size: 18px;
    line-height: 41px;
    padding: 0 4px;
    flex:1;
  }
  .ative{
    color: pink;
    border-bottom:3px solid pink;
  }
  /*.item:not(:last-child){
    border-right:3px solid rgb(203, 196, 196) ;
  }*/
</style>