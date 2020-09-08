<template>
  <div class="detailParams">
    <table class="table">
      <tr v-for="item in size" :key="item.index">
        <td v-for="(item,index) in item" :key="item+index" class="size">{{item}}</td>
      </tr>
      <tr v-for="item in goodParams.infos" :key="item.index">
        <td v-for="(item,index) in item" :colspan="index==='value'?colspan:false" :key="item+index">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "detailParams",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return{
        goodParams:{},
        colspan:0,
        size:[]
      }
    },
    watch:{
      detailParams:{
          handler(newValue){
            this.goodParams=newValue
            this.size=this.goodParams.size[0]
            this.colspan=this.goodParams.size[0][0].length-1
        }
      }
    }

  }
</script>

<style scoped>
  .detailParams,
  .table
  {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  .detailParams
  {
    border-bottom:10px solid rgba(241, 241, 241,0.9) ;
  }
  tr,td
  {

    text-align: center;
    padding: 15px 5px;
    font-size: 12px;
    font-weight:600;
  }
  tr>td
  {
    /*border-top:1px solid rgba(0,0,0,0.8) ;*/
    border-bottom:1px solid rgba(0,0,0,0.2) ;
  }
  tr>td:not(.size)
  {
    color: rgb(255, 120, 156);
  }
  tr>td:first-child
  {
    text-align: right;
    padding:0 5px 0 0;
    width: 70px;
    font-size: 14px;
    color: black;
  }
  tr>td:first-child::after
  {
    content: ":";
  }
  .else{
    width: 100%;
    height:300px;
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
</style>