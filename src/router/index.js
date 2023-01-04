import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/components/common/Main.vue'),
		children: [
			{
				path: '',
				component: () => import('@/views/Home.vue')
			},
			{
				path: 'goods',
				component: () => import('@/views/Goods.vue')
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/Login.vue')
	}
]

const router = new VueRouter({
	routes,
	mode: 'hash'
})

export default router
