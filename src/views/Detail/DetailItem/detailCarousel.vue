<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index+item">
        <el-image class="image" :src="item" fit="cover" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>

  <!--<el-carousel class="carousel" :interval="5000" arrow="" indicator-position="inside" height="450px">
    <el-carousel-item v-for="(item,index) in banner" :key="index+item">
      <el-image class="image" :src="item" fit="cover" />
    </el-carousel-item>
  </el-carousel>-->
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "detailCarousel",
    components:{

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
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{

      }
    },
    mounted() {


    },
    updated() {
      var swiper =new Swiper('.swiper-container',{
        loop:false,
        autoplay: {
          delay:3000
        },
        observe:true,
        observeParents:true,
        observeSlideChildren:true,
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
      swiper
    }
  }
</script>

<style scoped>
  .carousel {
    width: 100%;
    margin:5px 0;
  }
  .swiper-container{
    width: 100%;
    height: auto;
  }
  .image{
    width: 100%;
    height: 550px;
  }
</style>