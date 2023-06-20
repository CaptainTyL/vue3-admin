import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/store'
import App from './App.vue'
import './assets/css/global.less'
import './assets/css/reset.css'

createApp(App).use(router).use(pinia).mount('#app')
