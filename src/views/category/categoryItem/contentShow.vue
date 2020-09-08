<template>
  <div class="container">
    <scroll class="scroll" ref="scroll" :param="{'probeType':1,'pullUpLoad':false,'click':true}">
      <div slot="content" class="catagory-content" ref="content">
        <div class="item" v-for="item in showLsit" :key="item.acm">
          <div class="item-wrap">
            <img class="item-image" v-lazy="item.image" />
            <p class="item-title">{{item.title}}</p>
          </div>
        </div>
        <category-recommend class="recommend" :showList="recommendShowList" @recommendRefresh="refresh" />
      </div>
    </scroll>
  </div>
</template>

<script>
  import scroll from "../../../components/common/Scroll/scroll";
  import categoryRecommend from "./categoryRecommend";
  export default {
    name: "contentShow",
    components:{
      scroll,
      categoryRecommend
    },
    props:{
      showData:{
        type:Array,
        default(){
          return []
        }
      },
      recommendShowList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        showLsit:[]
      }
    },
    methods:{
      refresh(){
        this.$refs.scroll.scrollTop()
        this.$refs.scroll.refresh()
      }
    },
    watch:{
      showData(){
        this.showLsit=this.showData
      }
    },
    created() {
      this.$emit('getShowData')
    }

  }
</script>

<style scoped>
  .container{
    width: 100%;
    position:absolute;
    top:44px;
    right: 0;
    bottom: 0;
  }
  .scroll{
    width: 100%;
    height:calc(100vh - 96px);
    overflow: hidden;
  }
  .catagory-content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    flex-flow: wrap;
  }
  .item{
    width: 30%;
    margin:10px 4px;
    padding:5px 0;
    text-align: center;
  }
  .item-image{
    width: 100%;
    height: 100%;
    margin: 5px 0;
  }
  .recommend{
    width: 100%;
  }
</style>