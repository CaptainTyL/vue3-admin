// axios请求拦截器 响应拦截器编写
import { isNullOrUndef } from '@/utils/is'

export const reqResolve = config => {
  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get') {
    config.params = { ...config.params, t: new Date().getTime() }
  }
  return config
}

export const reqReject = error => {
  return Promise.reject(error)
}

export const resResolve = response => {
  return response?.data
}

export const resReject = error => {
  let { code, message } = error.response?.data || {}
  if (isNullOrUndef(code)) {
    // 未知错误
    code = -1
    message = '接口异常！'
  } else {
    /**
     * TODO 此处可以根据后端返回的错误码自定义框架层面的错误处理
     */
    switch (code) {
      case 401:
        message = message || '登录已过期'
        break
      case 403:
        message = message || '没有权限'
        break
      case 404:
        message = message || '资源或接口不存在'
        break
      default:
        message = message || '未知异常'
        break
    }
  }

  console.error(`【${code}】 ${error}`)
  return Promise.resolve({ code, message, error })
}
