import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/public/css/tailwin.css'
import '@/public/font/iconfont.css'

import { registerCPT } from '@/public/common/commonCPT'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/navigation'

//注册全局组件
registerCPT()


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
