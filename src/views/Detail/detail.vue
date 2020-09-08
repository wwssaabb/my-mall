<template>
  <div class="detail">
    <div class="navbar">
      <detail-navbar @detailNavbarClick="detailScrollTo" @detail-navbar-index="navbarIndex" ref="navbar"/>
    </div>
    <scroll
            class="scroll"
            ref="scroll"
            :param="{'probeType':3,'pullUpLoad':true,'click':true}"
            @scroll="positionY"
    >
      <slot slot="content">

        <div class="carousel">
          <detail-carousel :banner="detailCarouselData" />
        </div>

        <div class="content">
          <detail-content :goods-info="goodsInfo"/>
        </div>

        <div class="detailImage">
          <detail-image :detail-image="detailImages" @imageLoad="detailImageLoad"/>
        </div>

        <div class="detailParams">
          <detail-params :detail-params="detailParams" ref="params"/>
        </div>

        <div class="detailComment">
          <detail-comment :detail-comment="detailComment" ref="comment"/>
        </div>

        <div class="detailRecommend">
          <p class="recommend">推荐商品</p>
          <control-show :detail-show-list="detailRecommend" ref="recommend"/>
        </div>
      </slot>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backTop" v-show="backTopIsShow"/>
    <go-shop-cart @click.native="goShopCart"/>
      <detail-shop-params :shopParams="shopParams" ref="shop"/>



  </div>
</template>

<script>
  import scroll from "../../components/common/Scroll/scroll";
  import {getDetailData,getResInfo,GoodsDetailParam,commentInfo,getRecommendDate,ShopParams} from "../../../network/home"
  import detailNavbar from 'components/common/navbar/DetailNavbar'
  import detailCarousel from './DetailItem/detailCarousel'
  import detailContent from './DetailItem/detailContent'
  import detailImage from './DetailItem/detailImage'
  import detailParams from './DetailItem/detailParams'
  import detailComment from './DetailItem/detailComment'
  import controlShow from "views/home/tabControl-view/controlShow"
  import {debounce} from "components/common/utils.js"
  import detailBottomBar from './DetailItem/detailBottomBar'
  import {backTopMixin,goShopCartMixin} from "components/common/mixin.js"
  import detailShopParams from './DetailItem/detailShopParams'
  export default {
    name: "detail",
    components:{
      scroll,
      detailNavbar,
      detailCarousel,
      detailContent,
      detailImage,
      detailParams,
      detailComment,
      controlShow,
      detailBottomBar,
      detailShopParams
    },
    mixins:[backTopMixin,goShopCartMixin],
    data(){
      return{
        iid:null,
        res:null,
        detailCurrentIndex:0,
        detailCarouselData:[],
        goodsInfo: {},
        detailImages:{},
        detailParams:{},
        detailComment:{},
        detailRecommend:[],
        shopParams:{},
        detailRecommendKey:"",
        detailTitleY:[],
      }
    },
    watch: {

    },
    mounted() {
      //获取并保存iid
      this.iid=this.$route.query.iid

      //获取详情页请求数据
      this.getData(this.iid)

      const refresh=debounce(this.$refs.scroll.refresh,300)
      const changeY=debounce(this.changeDetailTitleY,300)
      this.$bus.$on('detailImageLoad',()=>{
        //组件刷新防抖
          refresh()
          changeY()
      })

    },
    methods:{
      getData(id){
        getDetailData(id).then(res=>{
          this.res=res.result
          this.detailRecommendKey=this.res.itemInfo.iid
          this.detailCarouselData=this.res.itemInfo.topImages
          //获取商品信息
          this.goodsInfo=new getResInfo(this.res.itemInfo,this.res.columns,this.res.shopInfo,this.res.detailInfo)
          //获取商品展示信息
          this.detailImages=this.goodsInfo.detailInfo.detailImage[0]
          //获取商品参数
          this.detailParams=new GoodsDetailParam(this.res.itemParams.info,this.res.itemParams.rule)
          //获取详情页评论信息
          this.res.rate.list?this.detailComment=new commentInfo(this.res.rate.list[0]):{}
          //获取购物车参数
          this.shopParams=new ShopParams(this.goodsInfo,this.detailParams,this.detailCarouselData,this.res.itemInfo,this.res.shopInfo)
        })
        getRecommendDate().then(res=>{
          //获取推荐商品列表
          this.detailRecommend=res.data.list
        })
      },
      changeDetailTitleY(){
        this.detailTitleY=[]
        this.detailTitleY.push(0)
        if (this.$refs.params&&this.$refs.comment&&this.$refs.recommend){
          this.detailTitleY.push(-this.$refs.params.$el.offsetTop)
          this.detailTitleY.push(-this.$refs.comment.$el.offsetTop)
          this.detailTitleY.push(-this.$refs.recommend.$el.offsetTop + 61)
          this.detailTitleY.push(-this.$refs.recommend.$el.offsetTop - 1000)
        }
      },
      detailImageLoad(){
        this.$refs.scroll.refresh()
      },
      detailScrollTo(y){
        this.scrollTo(0,this.detailTitleY[y],100)
      },
      getScrollY(){
        return this.scroll.getScrollY()
      },
      scrollTo(x,y,t){
        this.$refs.scroll.scrollTo(x,y,t)
      },
      positionY(position){
        this.backTopIsShow=-position.y>this.decideY
        const y=position.y
        for (let i=0;i<this.detailTitleY.length-1;i++){
          if (this.detailCurrentIndex!==i&&(y<=this.detailTitleY[i]&&y>=this.detailTitleY[i+1])){
            this.detailCurrentIndex=i
            this.$refs.navbar.currentIndex=i
          }
        }
        /*if (y<TitleY[0]&&y>TitleY[1]){
          this.detailCurrentIndex=0
          this.$refs.navbar.currentIndex=0
        }else if (y<=TitleY[1]&&y>TitleY[2]){
          this.detailCurrentIndex=1
          this.$refs.navbar.currentIndex=1
        }else if (y<=TitleY[2]&&y>TitleY[3]){
          this.detailCurrentIndex=2
          this.$refs.navbar.currentIndex=2
        }else if (y<=TitleY[3]&&y>TitleY[4]){
          this.detailCurrentIndex=3
          this.$refs.navbar.currentIndex=3
        }*/
      },
      navbarIndex(index){
        this.detailCurrentIndex=index
      },
      addToCart(id){
        const product={}
        product.iid=id
        product.image=this.detailCarouselData[0]
        product.title=this.goodsInfo.title
        product.size=this.detailParams.size[0][0]
        product.color=this.detailParams.infos.find(a=>a.key==='颜色').value.split(',')
        product.price=this.goodsInfo.realPrice
        product.count=1
        this.$refs.shop.show=true
      }
    },
  }
</script>

<style scoped>
  .detail{
    width: 100%;
    z-index: 10;
    background: #fff;
  }
  .scroll{
    width: 100%;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  .recommend{
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: black;
    padding:15px 0;
    background: rgba(255, 130, 163,1);
    margin-bottom:10px ;
  }
</style>