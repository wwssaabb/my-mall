<template>
  <div class="wrapper">
    <div class="control_show">
      <div class="show" v-for="item in showList" :key="item.acm">
        <a @click="itemClick( item.iid ||item.item_id)">
          <img class="image" v-lazy="item.image || item.show.img" @load="imageLoad" :key="item.acm"/>
        </a>
        <div class="title">{{item.title}} <span class="icon">...</span> </div>
        <div class="message">
          <span class="price">{{item.orgPrice || item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "controlShow",
    components: {},
    props: {
      showType: {
        type: String,
        default() {
          return 'pop';
        }
      },
      showImageList: {
        type: Object,
        default() {
          return {}
        }
      },
      detailShowList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        showList:{},
        detailList: []
        /*scroll:null*/
      }
    },
    watch: {
      showType() {
        this.changeShowIndex()
      },
      detailShowList() {
        this.changeDetailShowList()
      },
      '$route'(){
        if (this.$route.path==='/detail'){
          this.changeDetailShowList()
        }else if (this.$route.path==='/home'){
          this.changeShowIndex()
        }

      }
    },
    methods: {
      changeShowIndex() {
        this.showList = this.showImageList[this.showType].list
      },
      changeDetailShowList() {
        this.showList = this.detailShowList
      },
      //定义图片加载完成事件，提交给父组件调用
      imageLoad() {
        if (this.$route.path==='/home'){
          this.$bus.$emit('homeImageLoad')
        }else if (this.$route.path==='/detail'){
          this.$bus.$emit('detailImageLoad')
        }

      },
      itemClick(id) {
        this.$router.push({
          path: '/detail',
          query: {
            iid: id
          }
        })
      }
    },
    mounted() {
      if (this.showImageList['pop']){
        this.showList=this.showImageList['pop'].list
      }

    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
  }
  .control_show {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .show {
    text-align: center;
    width: 47%;
    padding:0 0;
    margin:5px 0;
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
    margin-left: 1px;
    content:"...";
    position: absolute;
    font-size: 16px;
    letter-spacing: 1px;
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

  .price{
    color: crimson;
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