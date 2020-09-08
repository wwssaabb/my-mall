import axios from 'axios'

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1请求拦截器的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}