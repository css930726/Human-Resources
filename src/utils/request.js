// 1.引入axios库
import axios from 'axios'

// 2.创建axios实例
const service = axios.create({
  // 基准路径
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(

)

// 响应拦截器
service.interceptors.response.use(

)
// 向外暴露创建的axios实例
export default service
