// 导出一个配置好的axios提供给main挂载
import axios from 'axios'
import Vue from 'vue'
import local from '@/utils/local'
import router from '@/router'
import JSONBIG from 'json-bigint'

Vue.use(router)
axios.defaults.baseURL = 'http://112.35.167.208:8083/index.php?s=';
axios.defaults.transformResponse = [(data) => {
  try {
    return JSONBIG.parse(data)
  } catch (e) {
    return data
  }
}]

// 请求拦截器
axios.interceptors.request.use(config => {
  // 1. 获取token
  const user = local.getUser() || {} //  这里得到的是一个字符串  是token 的字符串
  // console.log("user", user)
  // config.headers.Authorization = `Bearer ${user}`
  config.headers.token = user
  return config;
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
axios.interceptors.response.use(res => {
  // console.log(res);
  if (res.data.code == 200) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(res);
  }
}, err => {
  console.log(err);
  // const status = err.response.status
  // console.log(status);
  return Promise.reject(err)
})

export default axios
