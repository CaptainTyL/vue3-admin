import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/store'
import App from './App.vue'
import './assets/css/global.less'
import './assets/css/reset.css'
import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'

const app = createApp(App)

// 全局挂载message组件
app.config.globalProperties.$message = message

app.use(router).use(pinia).mount('#app')
