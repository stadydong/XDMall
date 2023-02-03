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
				component: () => import('@/views/Home.vue'),
				meta:{
					showNav:true
				}
			},
			{
				path: 'goods',
				component: () => import('@/views/Goods.vue'),
				meta:{
					showNav:true
				}
			},
			{
				path:"goodsDetail",
				component:()=>import("@/views/GoodsDetail.vue"),
				meta:{
					showNav:true
				}
			},
			{
				path:"cart",
				component:()=>import("@/views/Cart.vue"),
				meta:{
					showNav:false
				}
			},
			{
				path:"about",
				component:()=>import("@/views/About.vue"),
				meta:{
					showNav:true
				}
			},
			/**用户相关的路径 */
			{
				path:"user",
				component:()=>import("@/views/User.vue"),
				meta:{
					showNav:false
				},
				children:[
					{
						path:"addressList",
						component:()=>import("@/views/children/AddressList.vue")
					},
					{
						path:"aihuishou",
						component:()=>import("@/views/children/Aihuishou.vue")
					},
					{
						path:"coupon",
						component:()=>import("@/views/children/Coupon.vue")
					},
					{
						path:"information",
						component:()=>import("@/views/children/Information.vue")
					},
					{
						path:"orderList",
						component:()=>import("@/views/children/OrderList.vue")
					},
					{
						path:"support",
						component:()=>import("@/views/children/Support.vue")
					}
				]
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/Login.vue')
	},
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
