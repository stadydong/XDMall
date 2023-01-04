<template>
	<div class="h-full w-full bg-slate-300">
		<header class="px-40 h-20 flex justify-between bg-black text-white">
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
		<router-view />

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

export default {
	data() {
		return {
			keyword: ''
		}
	},
	methods: {
		toUrl(toUrl) {
			console.log(toUrl)
		}
	},
	computed: {
		...mapState({
			navList: state => state.HomeStore.navList,
			currentIndex: state => state.HomeStore.currentIndex
		})
	},
	created() {
		this.$store.dispatch('GetNavList')
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
</style>
