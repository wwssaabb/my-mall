<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol
            v-show="isTabShow"
            class="tabcontrol-hidden"
            :titles="['流行','新款','精选']"
            @getshowindex="getShowIndex"
            ref="tabControl2"/>
    <scroll class="content"
            ref="scroll"
            @scroll="backtop"
            :param="{'probeType':3,'pullUpLoad':true,'click':true}"
            @pullingup="moreData">

        <slot slot="content" class="slot-contnet">
          <swiper
                  class="swiper"
                  :banner="banner"
                  ref="swiper"
                  :update="swiperUpdate"
                  @swiperImageLoad="swiperImageLoad"
          />
          <recommend :recommend="recommend"/>
          <feature></feature>
          <tabcontrol
                  :titles="['流行','新款','精选']"
                  @getshowindex="getShowIndex"
                  ref="tabControl1"/>
          <control-show
                  class="controlshow"
                  :showImageList="showImageList"
                  :showType="nowShowIndex"/>
      </slot>
    </scroll>
    <backtop @click.native="scrollToTop" v-show="backTopIsShow"/>


  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navbar.vue'
  import {getHomeData, getHomeShowList} from '../../../network/home.js'
  import controlShow from "views/home/tabControl-view/controlShow"
  import swiper from 'components/common/Carousel/swiper.vue'
  import recommend from 'views/home/recommend-view/recommend.vue'
  import feature from 'views/home/feature-view/feature.vue'
  import tabcontrol from 'views/home/tabControl-view/tabControl.vue'
  import scroll from "../../components/common/Scroll/scroll"
  import backtop from 'components/common/BackTop/BackTop.vue'
  import {debounce} from "components/common/utils.js"


  export default {
    name: "home",
    components: {
      navbar,
      controlShow,
      swiper,
      recommend,
      feature,
      tabcontrol,
      scroll,
      backtop
    },
    data() {
      return {
        result: null,
        banner: [],
        dKeyword: {},
        keywords: {},
        recommend: {},
        showImageList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        backTopIsShow: false,
        nowShowIndex: 'pop',
        tabcontrolOffsetTop:0,
        moveY:0,
        swiperUpdate:"",
        isTabShow:false
      }
    },
    watch: {
      nowShowIndex(){
        this.$bus.$emit('getNowType',this.nowShowIndex)
      },
    },
    methods: {
      //请求轮播图等首页数据
      getHomeData() {
        getHomeData().then(res => {
          this.result = res.data;
          this.banner = res.data.banner.list;
          this.dKeyword = res.data.dKeyword;
          this.keywords = res.data.keywords;
          this.recommend = res.data.recommend;
        })
      },
      //请求首页推荐展示数据
      getHomeShowList(type, page) {
        getHomeShowList(type, page).then(res => {
          //获取数据，判断数据类型加到对应的list保存，之后该数据的下一次请求
          //page+1
          switch (res.data.sort) {
            case 'pop':
              this.showImageList['pop'].list.push(...res.data.list)
              break
            case 'new':
              this.showImageList['new'].list.push(...res.data.list)
              break
            case 'sell':
              this.showImageList['sell'].list.push(...res.data.list)
              break
          }
        })
      },
      //上拉加载时触发加载数据请求
      moreData() {
        switch (this.nowShowIndex) {
          case 'pop':
            this.showImageList['pop'].page++
            this.getHomeShowList('pop', this.showImageList['pop'].page)
            break;
          case 'new':
            this.showImageList['new'].page++
            this.getHomeShowList('new', this.showImageList['new'].page)
            break;
          case 'sell':
            this.showImageList['sell'].page++
            this.getHomeShowList('sell', this.showImageList['sell'].page)
            break;
        }
        this.$refs.scroll.finishPullUp()
      },
      //backTop事件触发时父组件事件
      scrollToTop() {
        this.$refs.scroll.scrollTop();
      },
      //获取controlShow组件当前推荐展示标签
      getShowIndex(index) {
        this.nowShowIndex = index
        this.$refs.tabControl1.showIndex=this.nowShowIndex
        this.$refs.tabControl2.showIndex=this.nowShowIndex
      },
      //backTop组件show的时机
      backtop(position) {
        /*this.tabcontrolIsFixed=(-position.y) < this.tabcontrolOffsetTop ? false : true*/
        this.isTabShow=-position.y>this.tabcontrolOffsetTop
        this.backTopIsShow = (-position.y) >= 1000
      },

      swiperImageLoad(){
        setTimeout(()=>{
          this.tabcontrolOffsetTop=this.$refs.tabControl1.$el.offsetTop
        },200)
      }


    },
    computed:{
      showIndexTo(){
        return this.nowShowIndex=='流行'?'pop':this.nowShowIndex=='新款'?'new':'sell'
      },
    },
    mounted() {
      //请求轮播图等数据
      this.getHomeData()
      //请求首页推荐展示数据
      this.getHomeShowList('pop', this.showImageList['pop'].page)
      this.getHomeShowList('new', this.showImageList['new'].page)
      this.getHomeShowList('sell', this.showImageList['sell'].page)

      //防抖函数，减少scroll组件刷新次数
      const refresh=debounce(this.$refs.scroll.refresh,300)
      //监听图片加载完成后刷新scroll组件，重新计算高度（解决高度影响下拉操作Bug）
      this.$bus.$on('homeImageLoad',()=>{
        //组件刷新防抖
        refresh()
      })


    },
    updated() {

    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.moveY,100)
      if (this.$route.path==='/home'){
        setTimeout(()=>{
          this.$refs.swiper.reloadSwiper()
        },100)
      }

    },
    deactivated() {
      this.moveY=this.$refs.scroll.getScrollY()
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background: rgb(241, 241, 241);
  }
  .content {
    /*方法一：视口高度-其余的高度*/
    /*margin-top: 44px;*/
    position: fixed;
    top: 44px;
    width: 100%;
    height: calc(100vh - 97px);
    overflow: hidden;

    /*方法二：绝对定位*/
    /*position:absolute;
    top:44px;
    bottom:49px;
    left: 0;
    right: 0;
    overflow: hidden;*/
  }
  .slot-contnet{
    width: 100%;
  }
  .swiper{
    width: 100%;
    height: auto;
  }
  .controlshow
  {
    width: 100%;
  }
  .tabcontrol-hidden{
    width: 100%;
    position: relative;
    z-index: 9;
  }

</style>