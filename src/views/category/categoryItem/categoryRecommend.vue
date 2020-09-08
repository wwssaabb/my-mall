<template>
  <div class="category-recommend-container">
    <div class="control_show">
      <div class="show" v-for="item in showList" :key="item.acm">
        <a @click="itemClick( item.iid)">
          <img class="image" v-lazy="item.img" @load="imageLoad" />
        </a>
        <div class="title">{{item.title}} <span class="icon">...</span> </div>
        <div class="message">
          <span class="price">￥{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "categoryRecommend",
    components:{

    },
    props:{
      showList:{
        type:Array,
        default(){
          return[]
        },
        imageCount:1
      }
    },
    data(){
      return{
        iid:''
      }
    },
    watch:{
      showList(){

      }
    },
    methods:{
      itemClick(iid){
        this.iid=iid
        this.$router.push({
          path: '/detail',
          query: {
            iid: iid
          }
        })
      },
      imageLoad(){
        let count=this.showList.length
        if (this.imageCount<count){
          this.imageCount++
        }else{
          this.imageCount=0
          this.$emit('recommendRefresh')
        }
      }
    }

  }
</script>

<style scoped>
  .category-recommend-container{
    width: 100%;
  }
  .control_show {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .show {
    text-align: center;
    width: 47%;
    padding:5px 0;
  }

  .image {
    width:100%;
    border-radius: 10px;
    font-size: 12px;
  }

  .title {
    position:relative;
    width: 100%;
    height:16px;
    overflow: hidden;
    padding:0 16px 0 0 ;
    /*white-space:nowrap;*/
  }
  .icon{
    content:"...";
    position: absolute;
    font-size: 16px;
    letter-spacing: 2px;
    top: 0;
    right: 0;
    z-index: 10;
  }
  .message {
    position: relative;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: space-around;
  }

  .collect {
    position: relative;
  }

  .collect::before {
    content: "";
    position: absolute;
    top: 0;
    left: -14px;
    background: url("../../../assets/img/home/collect.svg") 0 0/14px 14px;
    width: 14px;
    height: 14px;
  }
</style>