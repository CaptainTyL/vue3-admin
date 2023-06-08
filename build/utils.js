// 处理env环境变量文件中 ’VITE‘ 开头变量在node环境(vite.config.js)中的访问
export const wrapperEnv = envOptions => {
  if (!envOptions) {
    return {}
  }
  const rst = {}
  // 使用 for...in... 进行对象循环
  for (const key in envOptions) {
    let val = envOptions[key]

    if (['true', 'false'].includes(val)) {
      val = val === 'true'
    }
    if (['VITE_PORT'].includes(val)) {
      val = +val
    }
    if (key === 'VITE_PROXY' && val) {
      try {
        val = JSON.parse(val.replace(/'/g, '"'))
      } catch (error) {
        val = ''
      }
    }
    rst[key] = val
    // 将环境变量绑定在process.env上
    if (typeof key === 'string') {
      process.env[key] = val
    } else if (typeof key === 'object') {
      process.env[key] = JSON.stringify(val)
    }
  }
  console.log('wrapperEnv', rst)
  return rst
}

const httpsReg = /^https:\/\//

// 封装创建代理
export const createProxy = (list = []) => {
  const rst = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)
    // https://github.com/http-party/node-http-proxy#options
    rst[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }
  console.log('createProxy', rst)
  return rst
}
