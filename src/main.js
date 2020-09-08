import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"

//swiper轮播图插件
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//Element-UI插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

//bus安装
Vue.prototype.$bus=new Vue()

//安装moment插件处理时间戳
import moment from "moment"
Vue.prototype.$moment=moment
//moment汉化
moment.locale('zh-cn')

//安装fastclick解决移动端300ms的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//安装自定义的toast插件
import Toast from 'components/common/Toast/index.js'
Vue.use(Toast)

//安装并使用图片懒加载插件
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
  loading:require("assets/img/loading.gif")
})

new Vue({
  render: h => h(App),
  router,
  ElementUI,
  store
  /*VueAwesomeSwiper*/
}).$mount('#app')
