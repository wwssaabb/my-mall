import Vue from 'vue'
import Vuex from 'vuex'

//安装Vuex
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {

  },
  actions: {
    addCart(context, {shopId, shopName, goodsParams, submitCount}) {
      return new Promise((resolve)=>{
        //判断商品参数不能为空
        let paramsIsEmpty = goodsParams.color === "" || goodsParams.size === "" || goodsParams.color === undefined || goodsParams.size === undefined
        if (paramsIsEmpty) {
          resolve('加入购物车失败，请选择商品参数')
        } else {
          //先判断是否为同一家商店（shopId），如果没有相同的商店则创建该商店Array存储后面的商品参数
          let findShopIsSame = context.state.cartList.find(a => a.shopId === shopId)
          if (findShopIsSame) {
            //在判断是否有相同款式和尺寸的商品,是的话对应的商品count++,不是的话增加新的商品
            let findSameGoods = context.state.cartList.find(a => a.goodsList.find(a => a.iid === goodsParams.iid && a.color === goodsParams.color && a.size === goodsParams.size))
            if (findSameGoods) {
              findSameGoods.goodsList.find(a => a.iid === goodsParams.iid).count += parseInt(submitCount)
              resolve('商品添加成功！')
            } else {
              context.state.cartList.find(a => a.shopId === shopId).goodsList.push(goodsParams)
              resolve('商品添加成功！')
            }
          } else {
            let shop = {}
            shop.shopId = shopId
            shop.shopName = shopName
            shop.goodsList = []
            shop.goodsList.push(goodsParams)
            context.state.cartList.push(shop)
            resolve('商品添加成功！')

          }
        }
      })
    }
  }
})

//导出store对象挂载到Vue实例
export default store