<template>
	<div class="h-full w-full  pt-20 bg-zinc-50">
		<header class="px-40 w-full h-20 flex justify-between bg-black text-white fixed top-0 z-50">
			<div class="h-left flex justify-center h-full items-center">
				<a href="/">
					<div class="h-8 w-8 text-2xl bg-white text-center text-black rounded-3xl p-2 box-content">M</div>
				</a>
			</div>
			<div class="h-right flex justify-center h-full items-center">
				<div class="h-search relative">
					<input
						type="text"
						name="keyword"
						class="h-8 text-sm text-black rounded w-60 pl-4
						placeholder-gray-400
						outline-none
						focus:ring-4
					focus:ring-white
						focus:ring-opacity-20
						"
						placeholder="请输入商品信息"
						v-model="keyword"
					/>
					<a href.sync="">
						<span class="iconfont icon-sousuo absolute text-gray-400 right-1 text-xl h-8 flex items-center top-0"></span>
					</a>
				</div>
				<router-link to="/goods" class="text-white"><div class="h-8 px-8 leading-8">全部商品</div></router-link>
				<div class="h-8 px-8 leading-8">|</div>
				<!-- 用户图标 -->
				<a-popover placement="bottom">
        <template slot="content">
					<div class=" text-center pt-6">
						<div class="userImg  w-16 h-16 rounded-full mx-auto overflow-hidden border relative">
							<img class="w-16 h-16 absolute left-0 top-0" :src="userInfo.imgUrl">
						</div>
						
						<div class="px-16 w-44 text-center  border-b pt-1 pb-2">{{ userNameV }}</div>
						<router-link class="text-black" to="/user/orderList"><div class="px-10 py-2 border-b hover:bg-zinc-200">我的订单</div></router-link>
						<router-link  to="/user/information" class="text-black" ><div class="px-10 py-2 border-b hover:bg-zinc-200">账号资料</div></router-link>
						<router-link  to="/user/addressList" class="text-black"><div class="px-10 py-2 border-b hover:bg-zinc-200">收货地址</div></router-link>
						<router-link  to="/user/coupon" class="text-black"><div class="px-10 py-2 border-b hover:bg-zinc-200">售后服务</div></router-link>
						<router-link  to="/user/support" class="text-black"><div class="px-10 py-2 border-b hover:bg-zinc-200">我的优惠</div></router-link>
						<a href.sync="" class="text-black" @click="logout"><div class="px-10 py-2  text-center hover:bg-zinc-200">退出</div></a>
					</div>
        </template>
				<a class="h-8 iconfont icon-wode text-xl px-8 text-white flex items-center"></a>
      </a-popover>

				<!-- 购物车图标 -->
				<a-popover placement="bottom" v-model="visible">
					<template slot="content">
						<div class="w-96-scroll relative">
							<div class="cart-d w-96-scroll max-h-84 overflow-auto pb-20">
								<!-- 购物车列表 -->
								<div class="py-4 border-b pl-4 last:border-b-0" v-for="item in carList" :key="item.id">
									<ProductCart
									 :num="item.num"
									  :title="item.product.productDetail.title"
										 :imgUrl="item.product.productImageUrl"
										 :price="item.product.productDetail.salePrice"></ProductCart>
								</div>
							</div>
							<!-- 购物车当前商品的数量和总价 -->
							<div class=" w-96 cart-handler h-20 border-t flex justify-between items-center bg-white absolute bottom-0">
								<div class="cart-left ml-4">
									<div class=" text-sm text-zinc-300 tracking-widest">共{{productTotal}}件商品</div>
									<div class=" text-base mt-1">合计: <span class=" text-red-600">￥ <span class=" text-2xl">{{ totalPrice }}</span></span></div>
								</div>
								<div class="cart-right mr-4">
									<router-link to="/cart"><button class=" bg-blue-600 text-white h-12 text-xl px-6 rounded-lg">去购物车</button></router-link>
								</div>
							</div>
						</div>
        </template>
				<div class="h-8 iconfont icon-gouwucheman text-2xl px-8"></div>
				</a-popover>
			</div>
		</header>
		<nav class="px-40 nav h-20 flex space-x-6 items-center bg-white shadow-2xl" v-if="showNav">
			<div v-for="(item, index) in navList" :key="item.id">
				<span class="mr-6 font-bold">·</span>
				<a :class="{ activeNav: index === currentIndex }" :href="item.toUrl">{{ item.title }}</a>
			</div>
		</nav>
		<router-view />
		<footer class="px-40 pb-10 ">
			<div class="footer-content flex pt-16 pb-6 ">
				<div class="left flex justify-between w-2/3">
					<div class="flex flex-col w-1/5">
						<div class="siteinfo-title">选购指南</div>
						<a href="#"><div class="siteinfo-text">购买指南</div></a>
						<a href="#"><div class="siteinfo-text">支付方式</div></a>
						<a href="#"><div class="siteinfo-text">送货政策</div></a>
					</div>
					<div class="flex flex-col w-1/5">
						<div class="siteinfo-title">服务支持</div>
						<a href="#"><div class="siteinfo-text">官方开源</div></a>
						<a href="#"><div class="siteinfo-text">项目前端</div></a>
						<a href="#"><div class="siteinfo-text">项目后端</div></a>
					</div>
					<div class="flex flex-col w-1/5">
						<div class="siteinfo-title">自助服务</div>
						<a href="#"><div class="siteinfo-text">个人博客</div></a>
						<a href="#"><div class="siteinfo-text">个人简介</div></a>
						<a href="#"><div class="siteinfo-text">关于小M</div></a>
					</div>
					<div class="flex flex-col w-1/5">
						<div class="siteinfo-title">其他项目</div>
						<a href="#"><div class="siteinfo-text">待开发...</div></a>
					</div>
					<div class="flex flex-col w-1/5">
						<div class="siteinfo-title">友情链接</div>
						<a href="https://vuex.vuejs.org"><div class="siteinfo-text">Vuex</div></a>
						<a href="https://router.vuejs.org"><div class="siteinfo-text">Vue-Route</div></a>
						<a href="https://cn.vuejs.org/"><div class="siteinfo-text">Vue</div></a>
					</div>
				</div>
				<div class="right w-1/2 flex flex-col justify-center items-end">
					<div class="text-2xl text-cyan-500">XXXXXXXXXXX</div>
					<div class="text-xs text-stone-400 mt-2">周一至周日 10:00-23:00</div>
				</div>
			</div>
			<div class="border border-stone-100"></div>
			<div class="text-sm text-stone-600 mt-6">本项目为个人学习项目所有设计内容来源于网络</div>
		</footer>
	</div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
	data() {
		return {
			keyword: '',
			visible:false,
			setTimeInstance:null,
		}
	},
	methods: {
		toUrl(toUrl) {
			console.log(toUrl)
		},
		logout(){
			localStorage.removeItem("token")
			this.$router.push({
				path:"/login"
			})
		},
		changeVisible(){
			if(this.setTimeInstance){
				clearTimeout(this.setTimeInstance)
			}
			this.setTimeInstance = setTimeout(()=>{
				this.visible = false
			},3000)
		}
	},
	computed: {
		...mapState({
			navList: state => state.HomeStore.navList,
			currentIndex: state => state.HomeStore.currentIndex,
			userInfo:state=>state.MainStore.userInfo,
			carList:state=>state.MainStore.carList
		}),
		...mapGetters([
			"totalPrice",
			"productTotal"
		]),
		userNameV(){
			return JSON.parse(localStorage.getItem("username"))
		},
		showNav(){
			return this.$route.meta.showNav
		},
	},
	created() {
		this.$store.dispatch('GetNavList')
		this.$store.dispatch('GetUserInfo',this)
		console.log(this.$store.getters.totalPrice);
	}
}
</script>

<style>
.activeNav {
	font-weight: 600;
}

.siteinfo-title {
	@apply text-xs text-stone-600 mb-4;
}
.siteinfo-text {
	@apply text-xs text-stone-400 mb-1;
}
/**
修改弹出框的样式 */
.ant-popover-inner-content{
	padding: 0;
}
</style>

