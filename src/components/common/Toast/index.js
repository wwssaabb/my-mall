import Toast from "./toast.vue"

const obj = {}

obj.install = function (Vue) {
  //1.先创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.new一个组件对像dwd
  const toast = new toastConstructor()

  //3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //4.这时toast.$el对应的就是上面的div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj













