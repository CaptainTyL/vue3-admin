import axios from 'axios'
import { reqResolve, reqReject, resResolve, resReject } from './interceptors'
export const createAxios = (options = {}) => {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000
  }

  const service = axios.create({
    ...defaultOptions,
    ...options
  })

  // 创建请求拦截器
  service.interceptors.request.use(reqResolve, reqReject)
  // 创建响应拦截器
  service.interceptors.response.use(resResolve, resReject)
}

// 创建默认请求axios
export const defAxios = createAxios()

// 创建默认请求axios
export const testAxios = createAxios({
  baseURL: import.meta.env.VITE_APP_BASE_API_TEST
})
