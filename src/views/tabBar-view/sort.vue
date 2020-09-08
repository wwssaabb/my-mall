<template>
  <div class="container">
    <category-navbar class="category-navbar"/>

    <sidebar class="sidebar" :showList="showList" ref="sidebar" @changeShowData="getShowData"/>

    <contentShow
            class="content-show"
            ref="contentShow"
            @getShowData="getShowData"
            :showData="showImage"
            :recommendShowList="recommendShowList"
    />


  </div>


</template>

<script>
  import categoryNavbar from "../../components/common/navbar/categoryNavbar";
  import sidebar from "../category/categoryItem/sidebar";
  import contentShow from "../category/categoryItem/contentShow";
  import {getCategoryData, getSubcategoryData,getSubcategoryDetailData} from '../../../network/home.js'

  export default {
    name: "category",
    components: {
      categoryNavbar,
      sidebar,
      contentShow,

    },
    data() {
      return {
        showList: [],
        recommendShowList: [],
        key: '',
        miniKey: '',
        showImage: [],
        nowType:'pop'
      }
    },
    methods: {
      getCategoryData() {
        getCategoryData().then(res => {
          this.showList = res.data.category.list
        })
      },
      getShowData(key='3627',miniKey='10062603') {
        this.key=key
        this.miniKey=miniKey
        getSubcategoryData(key).then(res => {
          this.showImage = res.data.list
        })
      },
      getRecommendData(miniWallkey='10062603',type='pop'){
        getSubcategoryDetailData(miniWallkey,type).then(res=>{
          this.recommendShowList=res
        })
      }
    },
    watch:{
      miniKey(){
        this.getRecommendData(this.miniKey,this.nowType)
      },
      nowType(){
        this.getRecommendData(this.miniKey,this.nowType)
      }
    },
    created() {


      /*this.$bus.$on('getNowType',(type)=>{
        this.nowType=type
      })*/
    },
    mounted() {
      //请求分类列表
      this.getCategoryData()
      //请求展示内容区的图片
      this.getShowData()
      //获取初始化的推荐商品数据
      this.getRecommendData()

      /*this.getRecommendData()*/


    },
    updated() {
      this.$bus.$on('getNowType',(type)=>{
        this.nowType=type
      })
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }

  .category-navbar {
    width: 100%;
  }

  .sidebar {
    width: 30%;
  }

  .content-show {
    width: 70%;
  }
  .recommend{
    width: 100%;
  }
</style>