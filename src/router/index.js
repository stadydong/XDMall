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
			},
			{
				path:"goodsDetail",
				component:()=>import("@/views/GoodsDetail.vue")
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
	mode: 'hash',
	scrollBehavior(to,from,savedPosition){
		return { y: 0 }
	}
})
const writeList = ["/login"]
router.beforeEach((to,from,next)=>{
	const token = localStorage.getItem("token")
	if(token){
		next()
	}else{
	/**
	 * 表示是白名单的路径进行放行 
	 * */
		if(writeList.includes(to.path)){
			// console.log(true);
			next()
		}else{
			next("/login")
		}
	}

})
export default router
