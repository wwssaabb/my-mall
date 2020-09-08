<template>
  <div class="cart">
    <div class="title">
      <p>购物车</p>
      <span class="count" v-show="goodsAmount!==0">({{goodsAmount}})</span>
    </div>
    <scroll :param="{'probeType':1,'pullUpLoad':false,'click':true}" class="scroll"
            v-if="$store.state.cartList.length!==0">
      <slot slot="content">
        <div class="goods-show" v-for="shop in showData" :key="shop.id">
          <div class="shopName">
            <i class="shop-icon"></i>
            <p class="name">{{shop.shopName}}</p>
          </div>
          <div class="goods" v-for="(goods,index) in shop.goodsList" :key="goods.iid+index">
            <div class="select" >
              <img class="select-icon" src="~assets/img/choose1.svg" :class="{'choose':chooseArr.find(a=>JSON.stringify(a)===JSON.stringify(goods))}" @click="chooseGoods(goods)" alt="">
            </div>
            <div class="image">
              <el-image :src="goods.image" fit="cover" style="width: 100%;height:100%;border-radius:5px;"></el-image>
            </div>
            <div class="detail">
              <div class="desc">{{goods.title}}</div>
              <div class="style">
                <p class="style-title">款式/颜色:</p>
                <select name="color" id="color" v-model="goods.color" class="select-color" >
                  <option :value="color" v-for="color in goods.shopParams.color" :selected="{'selected':isSelected('color',color,goods)}" :key="color">
                    {{color}}
                  </option>
                </select>
              </div>
              <div class="size">
                <p class="size-title">尺寸:</p>
                <select name="size" id="size" v-model="goods.size" class="select-size" >
                  <option :value="size" v-for="size in goods.shopParams.size" :selected="{'selected':isSelected('size',size,goods)}" :key="size">
                    {{size}}
                  </option>
                </select>
              </div>
              <div class="cost">
                <div class="price">￥{{parseFloat(goods.price).toFixed(2)}}</div>
                <div class="amount">
                  <span class="btn dash" @click="changeParams('cut',goods)"></span>
                  <p class="goods-count">{{goods.count}}</p>
                  <span class="btn plus" @click="changeParams('add',goods)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </scroll>
    <div class="cart-empty" v-else>
      <img src="~assets/img/shoppingCart.svg" alt=""/>
      <span>你的购物车空空如也</span>
      <span>快去挑选几件好货吧！</span>
    </div>
    <div class="total">
      <div class="choose-all" >
        <img class="select-icon" src="~assets/img/choose1.svg" :class="{'choose':isChooseAll}" @click="chooseAll" alt="">
      </div>
      <span class="select-all">全选</span>
      <span class="sum">合计: <span class="much">￥{{much.toFixed(2)}}</span></span>
      <span class="buy">去结算</span>
    </div>

  </div>
</template>

<script>
  //import navbar from "components/common//navbar/navbar"
  import scroll from "../../components/common/Scroll/scroll";

  export default {
    name: "cart",
    components: {
      //navbar,
      scroll
    },
    data() {
      return {
        count: 30,
        isChoose:false,
        chooseArr:[],
      }
    },
    methods:{
      chooseGoods(params){
        if (this.chooseArr.find(a=>JSON.stringify(a)===JSON.stringify(params))){
          this.chooseArr.splice(this.chooseArr.indexOf(params),1)
        }else{
          this.chooseArr.push(params)
        }
        this.isChoose=!this.isChoose
      },
      chooseAll(){
        if (this.isChooseAll){
          this.chooseArr=[]
        }else{
          this.chooseArr=[]
          this.$store.state.cartList.map(a=>a.goodsList.map(a=>this.chooseArr.push(a)))
        }
      },
      isSelected(key,value,params){
        return key==='color'?value===params.color:value===params.size
      },
      changeParams(key,params){
        key==='cut'?(params.count>1?params.count--:this.$toast.show('不能再减了哦')):params.count++
      }
    },
    computed: {
      goodsAmount() {
        return this.chooseArr.length
      },
      showData() {
        return this.$store.state.cartList
      },
      much(){
        return this.chooseArr.reduce((n,a)=>n+=parseFloat(a.price)*a.count,0)
      },
      isChooseAll(){
        return this.chooseArr.length!==0&&this.chooseArr.length===this.$store.state.cartList.reduce((n, a) => n += a.goodsList.length, 0)
      }
    }
  }
</script>

<style scoped>
  .cart {
    width: 100%;
    height: calc(100vh - 49px);
    color: black;
  }

  .title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff5677;
    color: white;
  }

  .count {
    font-size: 18px;
  }

  .scroll {
    position: relative;
    top: 49px;
    left: 0;
    right: 0;
    bottom: 89px;
    width: 100%;
    height: calc(100vh - 138px);
    overflow: hidden;
    padding: 0 2px;
  }
  .shopName
  {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom:5px;
    border-radius:5px;
    background-color: #ebccd1;
  }
  .shop-icon
  {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image:url("../../assets/img/shop.svg");
    background-size: 25px 25px;
    margin: 0 10px 0 0;
  }
  .goods-show
  {
    padding: 10px;
    border: 2px solid black;
    border-radius:10px ;
    margin:15px 0;
  }
  .goods {
    width: 100%;
    height: auto;
    border: 2px solid black;
    border-radius:15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.9) ;
    margin:10px 0;
  }

  .select {
    text-align: center;
  }
  .select-icon
  {
    width: 25px;
    height: 25px;
    border: 3px solid lightgray;
    border-radius:50%;
  }
  .choose
  {
    border: 3px solid #d4237a;
    background-color: #d4237a;
  }

  .image {
    width: 30%;
    height: 100%;
    border-radius:5px;
  }

  .detail {
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: start;
    margin-left: 5px;
    width: 60%;
    height: 100%;
  }
  .desc
  {
    margin:5px 0 ;
  }
  .style
  {
    margin:5px 0 ;
  }
  .size
  {
    margin:5px 0 ;
  }
  .cost
  {
    width: 100%;
    margin:5px 0 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price
  {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
  .amount
  {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .goods-count{
    background-color:silver;
    padding: 5px  10px;
    margin: 0 5px;
    font-size: 18px;
    font-weight: bold;
  }
  .btn{
    margin:0 5px;
    width: 25px;
    height: 25px;
    flex: 1;
    background-repeat: no-repeat;
    background-size: 15px;
    background-color: silver;
    background-position: center;
  }
  .plus{
    background-image: url('../../assets/img/plus.svg');
  }
  .dash{
    background-image: url('../../assets/img/dash.svg');
  }
  .total {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #f1f1f1;
    font-size: 18px;
    box-shadow: 0 -3px 6px rgba(241, 241, 241, 0.8);
  }
  .choose-all{
    margin: 0 5px;
  }

  .select-all {
    padding: 0 10px;
    font-size: 20px;
  }
  .much
  {
    font-size: 20px;
    font-weight: bold;
    color: red;
  }

  .buy {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    height: 100%;
    width: 30%;
    background-color: rgba(255, 82, 0, 0.9);
    color: white;
    font: normal bold 20px/40px arial;
    text-align: center;
  }

  .cart-empty {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-empty span
  {
    font-size: 18px;
    padding: 10px 10px;
  }
  .style-title,
  .size-title{
    color: whitesmoke;
    font-weight: bold;
    border-radius:2px 2px 0 0 ;
    background-color:slategray;
    padding-top:2px ;
    text-align: center;
  }
</style>