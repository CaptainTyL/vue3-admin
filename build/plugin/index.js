// rollup打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'

import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'

export const createVitePlugins = (viteEnv, isBuild) => {
  const plugins = [configHtmlPlugin(viteEnv, isBuild)]
  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }
  if (viteEnv?.VITE_APP_USE_MOCK) {
    plugins.push(configMockPlugin(isBuild))
  }

  return plugins
}
