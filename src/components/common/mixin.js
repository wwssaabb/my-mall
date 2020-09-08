import BackTop from "./BackTop/BackTop";
import goShopCart from "./goShopCart/goShowCart";

export const backTopMixin={
  components:{
    BackTop
  },
  data(){
    return{
      decideY:1000,
      backTopIsShow:false
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,100)
    },
  }
}

export const goShopCartMixin={
  components:{
    goShopCart
  },
  methods:{
    goShopCart(){
      this.$router.push('/cart')
    }
  }
}