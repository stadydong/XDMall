<template>
	<div class="h-full w-full bg-slate-300">
		<header class="px-40 h-20 flex justify-between bg-black text-white">
			<div class="h-left flex justify-center h-full items-center">
				<div class="h-8 w-8 text-2xl bg-white text-center text-black rounded-3xl p-2 box-content">M</div>
			</div>
			<div class="h-right flex justify-center h-full items-center">
				<div class="h-search relative">
					<input
						type="text"
						name="keyword"
						id=""
						class="h-8 text-xs text-black rounded w-60"
						placeholder="请输入商品信息"
						v-model="keyword"
					/>
					<span class="iconfont icon-wode absolute text-red-400 right-0 text-xl h-8 flex items-center top-0"></span>
				</div>
				<div class="h-8 px-8">全部商品</div>
				<div class="h-8 px-8">|</div>
				<div class="h-8 iconfont icon-wode text-2xl px-8"></div>
				<div class="h-8 iconfont icon-gouwucheman text-2xl px-8"></div>
			</div>
		</header>
		<nav class="px-40 nav h-20 flex space-x-6 items-center bg-white shadow-2xl">
			<div v-for="(item, index) in navList" :key="item.id">
				<span class="mr-6 font-bold">·</span>
				<a :class="{ activeNav: index === currentIndex }" :href="item.toUrl">{{ item.title }}</a>
			</div>
		</nav>
		<div class="goods px-40 bg-zinc-50 pb-16">
			<div class="goods-item" v-for="(item, index) in goodsList" :key="item.id">
				<!-- 轮播图模块开始 -->
				<div class="swiper h-88 w-full" ref="swiper" v-if="item.type === 1">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="panel in item.panel" :key="panel.id">
							<img :src="panel.productImageUrl" :alt="panel.title" class="h-88 w-full" />
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination" ref="s_pagination"></div>
				</div>
				<!-- 轮播图模块结束 -->
				<!-- 活动模块开始 -->

				<div v-if="item.type === 2" class="activity mt-8 rounded-md overflow-hidden">
					<h2 class="text-2xl pl-4 py-4 bg-zinc-150">{{ item.title }}</h2>
					<div class="content flex space-x-2.5">
						<div v-for="panel in item.panel" :key="panel.id" class="relative">
							<a href="#">
								<img :src="panel.productImageUrl" :alt="panel.title" class="h-52 w-full" />
							</a>
							<div class="absolute w-full h-full top-0 z-50 hover:shadow-myinner1"></div>
							<!-- shadow-myinner1 我的内阴影 -->
						</div>
					</div>
				</div>
				<!-- 活动模块结束 -->
				<!-- 热门商品开始 -->
				<div v-if="item.type === 3" class="hot mt-8">
					<h2 class="text-2xl pl-4 py-4 bg-zinc-150">{{ item.title }}</h2>
					<div class="content flex flex-wrap">
						<div
							class="hot-item w-1/2 py-14 bg-white shadow-"
							v-for="(panel, pindex) in item.panel"
							:key="panel.id"
							@mouseenter="currentShop(index, pindex)"
							@mouseleave="outShop(index, pindex)"
							:class="{ floatbox: panel.status === 0 }"
						>
							<!-- {{ panel }} -->
							<div class="shop-img flex justify-center">
								<img :src="panel.productImageUrl" :alt="panel.title" class="w-full h-52 px-14" />
							</div>
							<div class="shop-desc flex flex-col items-center">
								<div class="title text-lg py-1">{{ panel.title }}</div>
								<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
								<div class="price text-red-600 text-xl border-white border-t-2" v-show="panel.status">
									￥{{ panel.price }}
								</div>
								<div class="change" v-show="!panel.status">
									<button class="bg-zinc-100 border text-sm px-4 py-1 rounded-md">查看详细</button
									><button class="ml-3 text-white bg-blue-500 border text-sm px-4 py-1 rounded-md">加入购物车</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 热门商品结束 -->
				<!-- 类型4开始 -->
				<div v-if="item.type === 4" class="selection mt-8">
					<h2 class="text-2xl pl-4 py-4 bg-zinc-150">{{ item.title }}</h2>
					<div class="content grid grid-cols-4 gap-y-4 gap-x-2">
						<div
							class="selection-item border border-zinc-150 rounded-md"
							v-for="(panel, pindex) in item.panel"
							:key="panel.id"
							:class="{ 'col-span-2': pindex === 0, floatbox: panel.status === 0 }"
							@mouseenter="currentShop(index, pindex)"
							@mouseleave="outShop(index, pindex)"
						>
							<div v-if="pindex === 0" class="">
								<div class="img-box">
									<img
										:src="panel.productImageUrl"
										:alt="panel.title"
										class="w-full h-80"
										style="height: calc(27rem + 2px)"
									/>
								</div>
								<!-- <div class="shop-desc flex flex-col items-center">
									<div class="title text-lg py-1">{{ panel.title }}</div>
									<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
									<div class="price text-red-600 text-xl border-white border-t-2 mb-2" v-show="panel.status">
										￥{{ panel.price }}
									</div>
									<div class="change mb-2" v-show="!panel.status">
										<button class="bg-zinc-100 border text-sm px-4 py-1 rounded-md">查看详细</button
										><button class="ml-3 text-white bg-blue-500 border text-sm px-4 py-1 rounded-md">加入购物车</button>
									</div>
									2.25+1+1.75
									5
								</div> -->
							</div>
							<div v-else>
								<div class="img-box">
									<img :src="panel.productImageUrl" :alt="panel.title" class="w-full h-80" />
								</div>
								<div class="shop-desc flex flex-col items-center">
									<div class="title text-lg py-1">{{ panel.title }}</div>
									<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
									<div class="price text-red-600 text-xl border-white border-t-2 pb-4" v-show="panel.status">
										￥{{ panel.price }}
									</div>
									<div class="change pb-4" v-show="!panel.status">
										<button class="bg-zinc-100 border text-sm px-4 py-1 rounded-md">查看详细</button
										><button class="ml-3 text-white bg-blue-500 border text-sm px-4 py-1 rounded-md">加入购物车</button>
									</div>
								</div>
							</div>
						</div>
						<!-- {{ item }} -->
					</div>
				</div>
				<!-- 类型4结束 -->
			</div>
		</div>
		<footer class="px-40 pb-10">
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
import { mapState } from 'vuex'

import Swiper, { Autoplay, Pagination } from 'swiper'
export default {
	data() {
		return {
			keyword: ''
		}
	},
	methods: {
		toUrl(toUrl) {
			console.log(toUrl)
		},
		currentShop(index, pindex) {
			// panel.status = 1
			console.log(index, pindex)
			console.log(this.$store.state.HomeStore)
			//1表示显示价格 0表示隐藏
			//可以封装为一个同步函数
			this.$store.state.HomeStore.goodsList[index].panel[pindex].status = 0
		},
		outShop(index, pindex) {
			this.$store.state.HomeStore.goodsList[index].panel[pindex].status = 1
			console.log('离开了', index, pindex)
		}
	},
	computed: {
		...mapState({
			navList: state => state.HomeStore.navList,
			currentIndex: state => state.HomeStore.currentIndex,
			goodsList: state => state.HomeStore.goodsList
		})
	},
	created() {
		this.$store.dispatch('GetNavList')
		this.$store.dispatch('GetGoodsList')
	},
	watch: {
		//利用计算属性+监听vuex的数据
		goodsList(nv, ov) {
			//保证v-for循环完成
			this.$nextTick(() => {
				//初始化swiper
				new Swiper(this.$refs.swiper, {
					modules: [Pagination, Autoplay],
					loop: true, // 循环模式选项
					autoplay: true, //自动播放
					// 如果需要分页器
					pagination: {
						el: this.$refs.s_pagination
					}
				})
			})

			console.log(nv, ov)
		}
	},
	mounted() {
		console.log(this.$store.state.HomeStore.goodsList)
		//初始化swiper
	}
}
</script>
<style>
html,
body {
	width: 100%;
	height: 100%;
}
.activeNav {
	font-weight: 600;
}
.hot-item {
	transition: all 0.5s ease;
}
.selection-item {
	transition: all 0.5s ease;
}
.floatbox {
	/* 不能添加边框否则会导致页面重新计算 */
	transform: translateY(-0.25rem);
	border-radius: 0.375rem;
	box-shadow: 0 3px 3px 5px rgb(230, 230, 230);
}
.siteinfo-title {
	@apply text-xs text-stone-600 mb-4;
}
.siteinfo-text {
	@apply text-xs text-stone-400 mb-1;
}
</style>
