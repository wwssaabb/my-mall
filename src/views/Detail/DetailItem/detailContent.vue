<template>
  <div class="info-content" v-if="Object.keys(goodsInfo).lenght!==0">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price">
      <span class="newPrice">{{goodsInfo.newPrice}}</span>
      <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="discount" v-if="discount!=''">{{discount}}</span>
    </div>
    <div class="columns">
      <span>{{columns[0]}}</span>
      <span>{{columns[1]}}</span>
      <span>{{columnsName}}</span>
    </div>
    <div class="service">
      <span v-for="index in length" :key="index">
        <img :src="services[index-1].icon" alt="" v-if="services[index-1].icon!=undefined"/>
        <span>{{services[index-1].name}}</span>
      </span>
    </div>

    <div class="shop-info" v-if="goodsInfo.shopInfo">
      <div class="logo">
        <img v-lazy="goodsInfo.shopInfo.shopLogo" alt="">
        <span class="name">{{goodsInfo.shopInfo.name}}</span>
      </div>
      <div class="assess">
        <div class="sells">
          <p>{{goodsInfo.shopInfo.cSells>10000?parseInt(goodsInfo.shopInfo.cSells/10000)+'.'+parseInt(goodsInfo.shopInfo.cSells/1000)%10+'万':goodsInfo.shopInfo.cSells}}</p><p>总销量</p>
        </div>
        <div class="goods">
          <p>{{goodsInfo.shopInfo.cGoods}}</p><p>全部宝贝</p>
        </div>
        <div class="score">
          <table border="0">
            <tr v-for="item in goodsInfo.shopInfo.score" :key="item.name">
              <td>{{item.name}}:</td>
              <td><span :class="{'height':item.isBetter}">{{item.score}}</span></td>
              <td><span :class="{'height':item.isBetter,'fill':true}">{{item.isBetter===false?'低':'高'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shopUrl"><a :href="goodsInfo.shopInfo.shopUrl"><p>进店逛逛</p></a></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "detailContent",
    components:{

    },
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        Better:"",
        columns:[],
        services:[],
        discount:'',
        columnsName:"",
        length:0,

      }
    },
    watch: {
      goodsInfo(){
        this.columns=this.goodsInfo.columns
        this.services=this.goodsInfo.services
        if (this.services.length){
          this.length=this.services.length-1
        }
        let name=[]
        name.push(...this.services)
        this.columnsName=name.pop().name
        this.discount=this.goodsInfo.discount
      }
    },

  }
</script>

<style scoped>
  .info-content{
    width: 100%;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
  }
  .columns{
    width: 100%;
    display:flex;
    text-align: center;
    justify-content: space-between;
    margin-top:10px;
  }
  .service{
    width: 100%;
    display:flex;
    text-align: center;
    justify-content: space-evenly;
    margin-top:10px;
  }
  .title,.price{
    margin-top:10px;
    padding:0 10px;
  }
  .title{
    font-size:16px;
    font-weight:bold;
    color:black;
  }
  .columns span{
    flex:1;
    font-size:16px;
    color: #7b7979;
  }
  .price span{
    margin:0 3px;
  }
  .newPrice{
    color: #ff3f64;
    font-size: 22px;
  }
  .oldPrice{
    color: #bdb8b9;
    text-decoration:line-through;
  }
  .discount{
    font-size:18px;
    padding:1px 3px;
    font-weight:bold;
    background-color: #ff3f64;
    border-radius:5px;
    color:white;
  }
  .service img{
    width: 14px;
    height: 14px;
  }
  .service{
    padding-bottom:10px;
    border-bottom: 10px solid rgba(241, 241, 241,0.9) ;
  }


  .shop-info {
    width: 100%;
    height: 260px;
    /* margin-top:15px;*/
    padding: 15px;
    border-bottom: 10px solid rgba(241, 241, 241,0.9) ;
  }
  .logo{
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .logo img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .sells p,.goods p{
    margin:5px 0;
  }
  span.name{
    margin-left:10px;
    font-size:24px;
    font-weight: bold;
  }
  .assess{
    height: 120px;
    display:flex;
    justify-content: center;
    margin-top:5px;
    font-size: 18px;
  }
  .assess>div:not(:last-child){
    width: 30%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
  }
  .assess>div:last-child{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .score{
    height: 80px;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    font-size: 16px;
  }
  .score span{
    color:green;
  }
  span.fill{
    background: green;
    color:white;
    border-radius:2px;
  }
  span.height{
    color: #d50e0e;
  }
  span.height.fill{
    display:inline-block;
    background: #d50e0e;
    color:white;
  }
  .shopUrl p{
    display: inline-block;
    background: #eeeeee;
    border-radius:10%;
    margin:-20px 0;
    padding:10px 30px;
    font-weight: 700;
    position:relative;
    left: 50%;
    transform: translate(-50%);
  }
</style>