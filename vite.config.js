import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { wrapperEnv, createProxy } from './build/utils.js'
import path from 'path' // 引入path模块
import vue from '@vitejs/plugin-vue'
import { createVitePlugins } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)

  // 这样就可以拿到定义好的环境变量了，也可以使用process.env.xxx这种方式进行访问
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv

  return {
    base: VITE_PUBLIC_PATH || '/',
    plugins: [
      vue(),
      Components({
        // 按需加载ant-design-vue 组件
        resolvers: [AntDesignVueResolver()]
      }),
      ...createVitePlugins(viteEnv, isBuild)
    ],
    resolve: {
      // 配置文件夹别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // 配置css 预处理器
    css: {
      preprocessorOptions: {
        less: {
          // 配置项
        }
      }
    },
    server: {
      host: '0.0.0.0', // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
      port: VITE_PORT, // 端口
      proxy: createProxy(VITE_PROXY) // 代理
    }
  }
})
