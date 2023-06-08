// rollup打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'

import { configHtmlPlugin } from './html'

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
  return plugins
}
