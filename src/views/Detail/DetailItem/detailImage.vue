<template>
  <div class="detailImage">
    <div class="desc">{{detailImage.desc}}</div>
    <div class="key">{{detailImage.key}}</div>
    <div class="image">
      <img
              class="detailImage-img"
              v-for="item in detailImage.list"
              :key="item"
              :src="item"
              @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailImage",
    props: {
      detailImage: {
        type: Object
      }
    },
    data(){
      return{
        counter:0,
        imageLength:0
      }
    },
    mounted() {

    },
    methods: {
      imgLoad(){
        if(++this.counter===this.imageLength){
          this.$emit('imageLoad')
          this.counter=0
        }
      }
    },
    watch:{
      detailImage(){
        this.imageLength=this.detailImage.list.length
      }
    }
  }
</script>

<style scoped>
  .desc,
  .key,
  .image
  {
    width: 100%;
    height: auto;
    color: black;
    border-bottom:10px solid rgba(241, 241, 241,0.9) ;
  }
  .desc
  {
    height: auto;
    padding: 30px;
    text-indent: 2em;
    color: black;
    position: relative;
  }

  .desc::after
  {
    content: "";
    position: absolute;
    color: pink;
    top: 0;
    left: 0;
    width: 25%;
    height: 50%;
    border-left: 4px solid pink;
    border-top: 4px solid pink;
  }

  .desc::before
  {
    content: "";
    position: absolute;
    color: pink;
    bottom: 0;
    right: 0;
    width: 25%;
    height: 50%;
    border-right: 4px solid pink;
    border-bottom: 4px solid pink;
  }

  .key {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    padding: 10px;
    background-color: rgba(242, 242, 242, 0.9);
  }
  .detailImage-img{
    width: 100%;
    height:auto;
  }
</style>