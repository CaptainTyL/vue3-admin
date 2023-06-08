// 集成 vite-plugin-html 主要是为了对 index.html 进行压缩和注入动态数据，例如替换网站标题和cdn
import { createHtmlPlugin } from 'vite-plugin-html'

export const configHtmlPlugin = (viteEnv, isBuild) => {
  const { VITE_APP_TITLE } = viteEnv

  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    /**
     * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
     * @default src/main.ts
     */
    // entry: 'src/main.ts',
    /**
     * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
     * @default index.html
     */
    // template: 'public/index.html',

    inject: {
      data: {
        title: VITE_APP_TITLE
      }
    }
    // tags: [
    //   {
    //     injectTo: 'body-prepend',
    //     tag: 'div',
    //     attrs: {
    //       id: 'tag',
    //     },
    //   },
    // ],
  })
  return htmlPlugin
}
