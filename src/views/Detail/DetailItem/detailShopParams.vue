<template>
  <div class="wrap" v-show="show" @click.self="show=!show">
    <div class="content">
          <transition >
            <div class="shop-params">
              <div class="title">
                <h2>商品参数</h2>
              </div>
              <div class="color-main">
                <p>颜色/款式:</p>

                  <scroll class="color-scroll" :param="{'probeType':1,'pullUpLoad':false,'click':true}">
                    <div class="color-list" slot="content">
                      <span
                              class="color"
                              v-for="item in params.color"
                              :key="item"
                              @click="changeParams('color',item)"
                              :class="{'choose':submitColor===item}"

                        >
                        {{item}}
                        </span>
                    </div>
                  </scroll>


              </div>
              <div class="size-main">
                <p>尺码:</p>
                <scroll class="size-scroll" :param="{'probeType':1,'pullUpLoad':false,'click':true}">
                  <div class="size-list" slot="content">
                    <span
                            class="size"
                            v-for="item in params.size"
                            :key="item"
                            @click="changeParams('size',item)"
                            :class="{'choose':submitSize===item}"
                    >
                      {{item}}
                    </span>
                  </div>
                </scroll>
              </div>
              <div class="amount">
                <p class="amount-text">数量:</p>
                <div class="count">
                  <span class="btn" @click="changeParams('del')">-</span>
                  <span class="number">{{submitCount}}</span>
                  <span class="btn" @click="changeParams('add')">+</span>
                </div>
              </div>
              <div class="define" @click="[submit(),show=!show]">
                <p>确定</p>
              </div>
            </div>
          </transition>
      <div class="close" @click="show=!show"></div>
    </div>
  </div>


</template>

<script>
  import scroll from "../../../components/common/Scroll/scroll";
  export default {
    name: "detailShopParams",
    components:{
      scroll
    },
    props:{
      shopParams:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        show:false,
        params:{},
        submitParams:{},
        submitCount:1,
        submitColor:"",
        submitSize:"",

      }
    },
    watch: {
      submitColor(){
        this.submitParams.color=this.submitColor
        this.submitParams.shopParams.selectColor=this.submitColor
      },
      submitSize(){
        this.submitParams.size=this.submitSize
        this.submitParams.shopParams.selectSize=this.submitSize
      },
      shopParams(){
        this.params=this.shopParams
        this.submitParams.iid=this.params.iid
        this.submitParams.image=this.params.image
        this.submitParams.title=this.params.title
        this.submitParams.price=this.params.price
        this.submitParams.count=1
        this.submitParams.shopName=this.params.shopName
        this.submitParams.shopId=this.params.shopId
        this.submitParams.color=this.params.color[0]
        this.submitParams.size=this.params.size[0]
        this.submitParams.shopParams= {}
        this.submitParams.shopParams.size=this.params.size
        this.submitParams.shopParams.color=this.params.color
        this.submitColor=this.params.color[0]
        this.submitSize=this.params.size[0]
      },
    },
    methods:{
      changeParams(key,value){
        if (key==='del'||key==='add'){
          let sp=this.submitParams
          if (this.submitCount>1){
            key==='del'?this.submitCount--:this.submitCount++
            sp.count=this.submitCount
          }else{
            key==='del'?this.$toast.show('不能再减了'):this.submitCount++
            sp.count=this.submitCount
          }
        }else{
          this.submitParams[key]=value
          key==='color'?this.submitColor=value:this.submitSize=value
        }
      },
      submit(){
        let shop={}
        shop.shopId=this.submitParams.shopId
        shop.shopName=this.submitParams.shopName
        shop.submitCount=this.submitCount
        shop.goodsParams=JSON.parse(JSON.stringify(this.submitParams))
        this.$store.dispatch('addCart',shop).then(res=>
            this.$toast.show(res,1500)
        )
        //初始化商品购物车参数        
        this.submitColor=this.params.color[0]
        this.submitSize=this.params.size[0]
        this.submitCount=1
      }

    },
    mounted(){

    }

  }
</script>

<style scoped>
  .wrap
  {
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .wrap::after
  {
    content: "";
    position: absolute;
    top: -120px;
    left: -120px;
    right: -120px;
    bottom: -120px;
    overflow: hidden;
    background: rgba(0,0,0,0.8);
    z-index: 1;
  }
  .content
  {
    box-sizing: border-box;
    position: absolute;
    width: 80%;
    min-height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius:15px;
    z-index:4;
  }
  .shop-params
  {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index:4 ;
  }
  .shop-params::after
  {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffa6cb;
    z-index: -3;
  }
  .title
  {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: whitesmoke;
  }
  .close
  {
    position: absolute;
    top:1px;
    right: 1px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url("../../../assets/img/home/close.svg");
    background-size: 25px 25px;
    background-position: center center;
    text-align: center;
    border: 1px solid white;
    z-index: 4;
  }
  .color-main,
  .size-main
  {
    min-width: 100%;
    min-height: 40%;
    border-radius:8px ;
    padding: 5px;
    border:1px solid whitesmoke ;
    color: black;
  }
  .color-main p,
  .size-main p
  {
    font-weight: bold;
    font-size: 16px;
    margin:5px 0;
  }
  .color-list,
  .size-list
  {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid black;
    padding: 5px 5px;
    border-radius:8px;
  }
  .color-scroll,
  .size-scroll{
    border: 1px solid black;
    border-radius:8px;
    margin:5px 0 ;
    padding: 5px 5px;
    width: 100%;
    max-height:200px ;
    overflow:hidden;
  }
  .color,
  .size
  {
    padding:10px 5px;
    border-radius:8px;
    margin:2px 11px;
    text-align: center;
    border: 3px solid beige;
  }
  .color
  {
    width: 42%;
  }
  .size
  {
    width: 25%;
  }
  .choose
  {
    color: whitesmoke;
    background-color:blueviolet;
  }
  .amount
  {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    margin: 10px 0;
  }
  .amount p
  {
    font-size: 18px;
  }
  .count
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn
  {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #c4c4c4;
    margin:0 10px ;
    box-shadow: 0 6px 4px rgba(0,0,0,0.8);
    transition:0.5s;
  }
  .btn:active
  {
    box-shadow: 0 3px 4px rgba(0,0,0,0.8);
  }
  .number
  {
    font-size: 18px;
    margin: 0 5px;
    background-color: #fff;
    padding:5px 15px;
  }
  .define
  {
    width: 100%;
    height: 20%;
    text-align: center;
    font-size: 20px;
    font-weight:600;
    margin:10px 0;
  }
  .define p
  {
    display: inline-block;
    padding:10px 25%;
    border-radius: 10px;
    color: white;
    background-color:#c7254e;
  }
  .amount-text{
    color: black;
  }
</style>