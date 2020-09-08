<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banners" :key="index+item">
        <el-image class="image" :src="item.image" fit="cover" @load="imageLoad" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "swiper",
    props: {
      banner:{
        type:Array,
        default(){
          return []
        }
      },
      update:{
        type: String,
        default() {
          return '';
        }
      }
    },
    data() {
      return {
        banners:[],
        swiper:{},
        isLoad:true,
        option:{
          loop:false,
          autoplay: {
            delay:3000
          },
          autoplayDisableOnInteraction: false,
          observe:true,
          observeParents:true,
          observeSlideChildren:true,
          pagination: {
            el: '.swiper-pagination',
          },
          /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
        }
      }
    },
    methods: {
      reloadSwiper() {
        this.swiper=new Swiper('.swiper-container',this.option)
      },
      imageLoad(){
        if (this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad=false
        }
      }
    },
    watch: {
      banner(){
        this.banners=this.banner
      },
      update(){
        console.log(this.update)
      }
    },
    updated() {
      this.swiper=new Swiper('.swiper-container',this.option)

    },

  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: auto;
  }

</style>