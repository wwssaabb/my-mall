<template>
  <div class="container">
    <scroll class="scroll" :param="{'probeType':1,'pullUpLoad':false,'click':true}">
      <div slot="content" class="content">
        <ul class="list">
          <li class="list-item" v-for="item in showList" :key="item.acm" :class="{active:isActive(item.title)}" @click="[nowTitle=item.title,nowMaitKey=item.maitKey,nowMiniWallKey=item.miniWallkey]">
            <p class="title" >
              {{item.title}}
            </p>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import scroll from "../../../components/common/Scroll/scroll";
  export default {
    name: "sidebar",
    components:{
      scroll
    },
    props:{
      showList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        nowTitle:'正在流行',
        nowMaitKey:'3627',
        nowMiniWallKey:'10062603'
      }
    },
    watch:{
      nowTitle(){
        this.$emit('changeShowData',this.nowMaitKey,this.nowMiniWallKey)
      }
    },
    methods:{
      isActive(title){
        return this.nowTitle===title
      },
    },
    created() {
      this.$emit('changeShowData',this.nowMaitKey,this.nowMiniWallKey)
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    position: relative;
    left: 0;
  }
  .scroll{
    width: 100%;
    height:calc(100vh - 96px);
    overflow: hidden;
    background-color: #f6f6f6;
  }
  .content{
    width: 100%;
    color: black;
  }
  .list{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }
  .list-item{
    width: 100%;
    font-size: 16px;
    padding:18px 0;
    color: #7b7979;
    text-align: center;
  }
  .active{
    color: hotpink;
    font-weight: bold;
    background-color: #fff;
    border-left: 5px solid #7b7979;
  }
</style>