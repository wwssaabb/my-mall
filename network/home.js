import {request} from './request';

export function getHomeData(){
    return request ({
        url:'/home/multidata'
    })
}
export function getHomeShowList(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
            /*default(){
                return {type:'pop',page:1}
            }*/
        },
        
    })
}

export function getCategoryData(){
    return request({
        url:'/category'
    })
}
export function getSubcategoryData(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function getSubcategoryDetailData(miniWallkey,type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}

export function getDetailData(id){
    return request({
        url:'/detail',
        params:{
            iid:id
        }
    })
}

export function getRecommendDate() {
    return request({
        url:'/recommend',
    })
}

export class getResInfo{
    constructor(iteminfo,columns,shopInfo,detailInfo){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newPrice=iteminfo.price
        this.oldPrice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.realPrice=iteminfo.lowNowPrice
        this.columns=columns
        this.services=shopInfo.services
        this.shopInfo=shopInfo
        this.detailInfo=detailInfo
        this.detailInfo.detailImage[0].desc=this.desc
    }
}

export class GoodsDetailParam{
  constructor(info,rule){
    this.image=info.images?info.images[0]:''
    this.infos=info.set
    this.size=rule===undefined?[]:rule.tables
  }
}

export class commentInfo{
    constructor(rate) {
        this.avatar = rate.user.avatar
        this.uname = rate.user.uname
        this.content = rate.content
        this.created = rate.created
        this.style = rate.style
        this.images = rate.images
    }
}

export class ShopParams{
    constructor(goodsInfo,detailParams,detailCarouselData,itemInfo,shopInfo){
        this.iid=itemInfo.iid
        this.image=detailCarouselData[0]
        this.title=goodsInfo.title
        this.size=[]
        if (detailParams.size[0]!==undefined){
            this.size.push(...detailParams.size[0][0])
        }
        this.size.splice(0,1)
        this.color=detailParams.infos.find(a=>a.key==='颜色').value.split(',')
        this.price=goodsInfo.realPrice
        this.count=1
        this.shopName=shopInfo.name
        this.shopId=shopInfo.shopId
    }
}