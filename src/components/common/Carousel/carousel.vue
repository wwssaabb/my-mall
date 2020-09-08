<template>
  <el-carousel class="carousel" :interval="5000" arrow="" indicator-position="inside" :height="nowHeight+'px'">
    <el-carousel-item v-for="(item,index) in banner.list" :key="index+item.acm">
      <!--<a :href="item.link">-->
        <el-image class="image" :src="item.image" :alt="item.title" />
      <!--</a>-->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "carousel",
    components:{
      /*Swiper*/
    },
    data(){
      return{
        windowWidth:0,
        scale:0,
        nowWidth:0,
        nowHeight:0
      }
    },
    props:{
      interval:{
        type:Number,
        default:3000
      },
      moveRation:{
        type:Number,
        default: 0.3
      },
      banner:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    methods:{

    },
    computed:{

    },
    created() {
      this.windowWidth=document.body.clientWidth
    },
    updated() {
      this.scale=this.windowWidth/this.banner.list[0].width
      this.nowHeight=this.banner.list[0].height*this.scale
    }
  }
</script>

<style scoped>
  .carousel{
    width: 100%;
    height: auto;
    /*overflow: hidden;*/
  }
  .el-carousel__item:nth-child(2n) {
    background-color:#99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>