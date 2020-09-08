<template>
  <div>
    <div class="tabcontrol_main">
      <div class="item" v-for="(item,index) in titles" :key="index+item" @click="label(item)">
        <span :class="{active:item===show}">{{item}}</span>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "tabcontrol",
    components:{

    },
    props:{
      showImageList:{
        type:Object,
        default(){
          return {}
        }

      },
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        showIndex:'pop',
      }
    },
    watch:{
      showIndex(){
        this.$emit('getshowindex',this.showIndex)
      }
    },
    methods:{
      label(item){
        item==='流行'?this.showIndex='pop':item==='新款'?this.showIndex='new':this.showIndex='sell'
      }
    },
    computed:{
      show(){
        return this.showIndex==='pop'?'流行':this.showIndex==='new'?'新款':'精选'
      }
    }
  }
</script>

<style scoped>
  .tabcontrol_main{
    width: 100%;
    display:flex;
    text-align:center;
    line-height: 20px;
    font-size: 18px;
    border-bottom:3px solid rgba(241, 241, 241,0.5);
    border-top:10px solid rgba(205, 205, 205,0.5);
    background-color: rgb(241, 241, 241);
  }


  .item{
    width: 100%;
    flex:1;
    padding:10px 0;
    z-index: 10;
  }
  span.active{
    color:pink;
    border-bottom:3px solid pink;
  }
  span{
    padding:0 5px 5px;
  }
</style>