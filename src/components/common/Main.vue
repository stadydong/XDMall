<template>
	<div class="h-full w-full pt-20 bg-zinc-50">
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
						class="h-8 text-sm text-black rounded w-60 pl-4 placeholder-gray-400 outline-none focus:ring-4 focus:ring-white focus:ring-opacity-20"
						placeholder="请输入商品信息"
						v-model="keyword"
					/>
					<a href.sync="">
						<span
							class="iconfont icon-sousuo absolute text-gray-400 right-1 text-xl h-8 flex items-center top-0"
						></span>
					</a>
				</div>
				<router-link to="/goods" class="text-white"><div class="h-8 px-8 leading-8">全部商品</div></router-link>
				<div class="h-8 px-8 leading-8">|</div>
				<!-- 用户图标 -->
				<a-popover placement="bottom">
					<template slot="content">
						<div class="text-center pt-6">
							<div class="userImg w-16 h-16 rounded-full mx-auto overflow-hidden border relative">
								<img class="w-16 h-16 absolute left-0 top-0" :src="userInfo.imgUrl" />
							</div>

							<div class="px-16 w-44 text-center border-b pt-1 pb-2">{{ userNameV }}</div>
							<router-link class="text-black" to="/user/orderList"
								><div class="px-10 py-2 border-b hover:bg-zinc-200">我的订单</div></router-link
							>
							<router-link to="/user/information" class="text-black"
								><div class="px-10 py-2 border-b hover:bg-zinc-200">账号资料</div></router-link
							>
							<router-link to="/user/addressList" class="text-black"
								><div class="px-10 py-2 border-b hover:bg-zinc-200">收货地址</div></router-link
							>
							<router-link to="/user/coupon" class="text-black"
								><div class="px-10 py-2 border-b hover:bg-zinc-200">售后服务</div></router-link
							>
							<router-link to="/user/support" class="text-black"
								><div class="px-10 py-2 border-b hover:bg-zinc-200">我的优惠</div></router-link
							>
							<a href.sync="" class="text-black" @click="logout"
								><div class="px-10 py-2 text-center hover:bg-zinc-200">退出</div></a
							>
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
										:price="item.product.productDetail.salePrice"
									></ProductCart>
								</div>
							</div>
							<!-- 购物车当前商品的数量和总价 -->
							<div class="w-96 cart-handler h-20 border-t flex justify-between items-center bg-white absolute bottom-0">
								<div class="cart-left ml-4">
									<div class="text-sm text-zinc-300 tracking-widest">共{{ productTotal }}件商品</div>
									<div class="text-base mt-1">
										合计:
										<span class="text-red-600"
											>￥ <span class="text-2xl">{{ totalPrice }}</span></span
										>
									</div>
								</div>
								<div class="cart-right mr-4">
									<router-link to="/cart"
										><button class="bg-blue-600 text-white h-12 text-xl px-6 rounded-lg">去购物车</button></router-link
									>
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
		<div
			ref="chat"
			v-show="showChatWindow"
			class="chat-window w-200 bg-white border fixed z-50 top-40"
			:style="{ top: chatPosition.chatTop, left: chatPosition.chatLeft }"
		>
			<div class="chat-window-title bg-zinc-100 flex py-3 pl-4">
				<img src="@/../public/img/chat-logo.png" class=" h-18 w-18 p-2 bg-white rounded-full ease-out duration-500 hover:rotate-360">
				<div class=" flex flex-col justify-center ml-4">
					<div class=" text-lg">在线聊天</div>
					<div class=" text-red-500">当前在线 {{ currentPersonNum }} 人</div>
				</div>
			</div>
			<div class="chat-main">
				<div class="chat-content h-60 pb-6 overflow-y-auto">
					<div class="h-10 flex justify-center items-center" v-if="loadChatContent">
						<button class="px-3 py-1 bg-gray-200 rounded text-sm" @click="clickLoading">加载更多</button>
					</div>
					<!-- 用户聊天每条信息 -->
					<UserCharCard
						v-for="chat in chatContent"
						:key="chat.id"
						:content="chat.message"
						:title="chat.userInfo.virtualName"
						:createTime="chat.createdAt"
						:userImg="chat.userInfo.imgUrl"
					/>
				</div>
				<div class="chat-handler border-t border-t-gray-200 border-opacity-60">
					<div class="icon-content h-2"></div>
					<textarea class="w-full pl-2 text-sm pr-4 outline-none h-20" v-model="currentMessage"> </textarea>

					<div class="w-full h-10 flex justify-end font-bold text-sm items-center">
						<button class="bg-green-600 text-white px-3 h-8" @click="openChatWindow(false)">关闭</button>
						<button class="bg-green-600 text-white px-3 ml-4 mr-3 h-8" @click="sendMessage">发送</button>
					</div>
				</div>
			</div>
		</div>
		<div class="fixed bottom-4 right-2 px-4 py-1 border text-blue-500 rounded-lg" @click="openChatWindow(true)">
			在线聊天
		</div>
		<footer class="px-40 pb-10 bg-white">
			<div class="footer-content flex pt-16 pb-6">
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
import { mapState, mapGetters } from 'vuex'
import UserCharCard from '@/components/page/main/UserCharCard.vue'
import { io } from 'socket.io-client'
import { getChatContent,getChatTotal } from '@/service/main/main'

import throttle from 'lodash/throttle'
// throttle()
export default {
	data() {
		return {
			keyword: '',
			visible: false,
			setTimeInstance: null,
			clientWidth: '',
			clientHeight: '',
			chatPosition: {
				chatTop: '0',
				chatLeft: '0'
			},
			chatElementInfo: {
				width: 0,
				height: 0
			},
			chatContent: [],
			chatContentTotal: 0,
			showChatWindow: true,
			/**要发送的消息 */
			currentMessage: '',
			/**WebSocket对象 */
			socket:null,
			currentPersonNum:0
		}
	},
	components: {
		UserCharCard
	},
	methods: {

		/** 退出登录 */
		logout() {
			localStorage.removeItem('token')
			this.$router.push({
				path: '/login'
			})
		},
		changeVisible() {
			if (this.setTimeInstance) {
				clearTimeout(this.setTimeInstance)
			}
			this.setTimeInstance = setTimeout(() => {
				this.visible = false
			}, 3000)
		},
		/**获取聊天内容 */
		async GetChatContent(skip,take) {
			const chatContent = await getChatContent(skip,take)
			this.chatContent.unshift(...chatContent.data)
			console.log(chatContent)
		},
		/**打开或关闭聊天框事件 */
		openChatWindow(flag) {
			this.showChatWindow = flag
		},
		/**发送聊天消息 */
		sendMessage() {
			if(this.currentMessage === null || undefined || ""){
				this.$message.error("消息不能为空")
				return 
			}
			/**属性为true时表示WebSocket连接成功 */
			if(!this.socket.connected){
				this.$message.error("连接失败")
				return
			}
			this.messageToServer(this.currentMessage)
			this.currentMessage = ""
		},
		/**发射发起消息公共函数 */
		messageToServer(message){
			this.socket.emit("sendMessage",{
				message
			})
		},
		/**初始化聊天内容最后5条 */
		initChatContent(){
			/**先获取总数 */
			getChatTotal().then(res=>{
			this.chatContentTotal = res.data.chatTotal - 5
			/**获取聊天框消息 */
				this.GetChatContent(this.chatContentTotal)
			}).catch(err=>{
				console.log("获取聊天记录总数错误",err);
			})
		},
		/**点击加载更多聊天信息 */
		clickLoading(){
			this.throttleFnObj()
		},
		/**节流函数要执行的真正函数 */
		throttleClickLoadingFn(){
			if(this.chatContentTotal > 0){
				/**最后剩下3条的数据就只要这3条不要多了 */
				if((this.chatContentTotal - 5) < 0){
					let take = this.chatContentTotal
					this.chatContentTotal = 0 
					this.GetChatContent(this.chatContentTotal,take)
				}else{
					this.GetChatContent(this.chatContentTotal)				
				}
				console.log(this.chatContentTotal);
			}else{
				this.$message.error("没有更多数据了")
			}
		},
		
		
	},
	computed: {
		...mapState({
			navList: state => state.HomeStore.navList,
			currentIndex: state => state.HomeStore.currentIndex,
			userInfo: state => state.MainStore.userInfo,
			carList: state => state.MainStore.carList
		}),
		...mapGetters(['totalPrice', 'productTotal']),
		userNameV() {
			return JSON.parse(localStorage.getItem('username'))
		},
		showNav() {
			return this.$route.meta.showNav
		},
		loadChatContent(){
			return this.chatContentTotal > 0
		}
	},
	created() {
		/**对加载更多按钮注册节流函数 */
		this.throttleFnObj = throttle(this.throttleClickLoadingFn,1000)
		this.$store.dispatch('GetNavList')
		this.$store.dispatch('GetUserInfo', this)
		this.$store.dispatch('GetCarList')
		/**获取初始5条聊天信息 */
		this.initChatContent()

		/**socket通信 */
		// const token = localStorage.getItem("token")
		const userInfo = localStorage.getItem('userInfo')
		const uid = JSON.parse(userInfo).id
		this.socket = io(`ws://43.139.82.106:3001?uid=${uid}`, {
			transports: ['websocket']
		})
		// socket.emit("sendMessage",{message:"hello I is Client"})
		/**连接成功事件 */
		this.socket.on('connect', () => {
			console.log('connect')
		})
		/**获得新消息事件 */
		this.socket.on('newMessage', payload => {
			// this.chatContent
			this.chatContent.push(payload.MessageObj)
			console.log("新消息",payload)
		})
		/**获得错误消息事件 */
		this.socket.on('errorMessage', payload => {
			this.$message.error(payload.message)
		})
		this.socket.on('currentPersonNum', payload => {
			this.currentPersonNum = payload.num
		})
	},
	mounted() {
		this.clientWidth = document.documentElement.clientWidth
		this.clientHeight = document.documentElement.clientHeight

		const chatInfo = this.$refs.chat.getBoundingClientRect()
		this.chatElementInfo.width = chatInfo.width
		this.chatElementInfo.height = chatInfo.height
		/**觉得居中的值 */
		let v1 = this.clientWidth - this.chatElementInfo.width
		this.chatPosition.chatLeft = (v1 > 0 ? v1 / 2 : 0) + 'px'
		let v2 = this.clientHeight - this.chatElementInfo.height
		this.chatPosition.chatTop = (v2 > 0 ? v2 / 2 : 0) + 'px'
		this.showChatWindow = false

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
.ant-popover-inner-content {
	padding: 0;
}
</style>
