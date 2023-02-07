<template>
	<div class="main px-40 bg-zinc-50 pb-16">
		<div class="main-item" v-for="(item, index) in goodsList" :key="item.id">
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
					<div v-for="panel in item.panel" :key="panel.id" class="relative w-1/4">
						<img :src="panel.productImageUrl" :alt="panel.title" class="h-52 w-full" />
						<a href.sync="" @click="toProductDetail(panel)">
							<div class="absolute w-full h-full top-0 z-20 hover:shadow-myinner1"></div>
						</a>
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
						class="hot-item w-1/2 py-14 bg-white border"
						v-for="(panel, pindex) in item.panel"
						:key="panel.id"
						@mouseenter="currentShop(index, pindex)"
						@mouseleave="outShop(index, pindex)"
						:class="{ floatbox: panel.status === 0 }"
					>
						<div class="shop-img flex justify-center">
							<img :src="panel.productImageUrl" :alt="panel.title" class="w-full px-14" />
						</div>
						<div class="shop-desc flex flex-col items-center">
							<div class="title text-lg py-1">{{ panel.title }}</div>
							<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
							<div class="price text-red-600 text-xl border-white border-t-2" v-show="panel.status">
								￥{{ panel.price }}
							</div>
							<div class="change" v-show="!panel.status">
								<button class="bg-zinc-100 border text-sm px-4 py-1 rounded-md" @click="toProductDetail(panel)">查看详细</button
								><button class="ml-3 text-white bg-blue-500 border text-sm px-4 py-1 rounded-md" @click="addCar(panel)">加入购物车</button>
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
						class="selection-item border border-zinc-150 rounded-md
						 hover:shadow-float-shadow
						 transition duration-500 hover:-translate-y-1"
						v-for="(panel, pindex) in item.panel"
						:key="panel.id"
						:class="{ 'col-span-2': pindex === 0}"
						@mouseenter="currentShop(index, pindex)"
						@mouseleave="outShop(index, pindex)"
					>
						<a href.sync="" @click="toProductDetail(panel)" v-if="pindex === 0">
							<div class="img-box">
								<img
									:src="panel.productImageUrl"
									:alt="panel.title"
									class="w-full h-80"
									style="height: calc(27rem + 2px)"
								/>
							</div>
						</a>
						<div v-else>
							<div class="img-box">
								<img :src="panel.productImageUrl" :alt="panel.title" class=" h-80" />
							</div>
							<div class="shop-desc flex flex-col items-center">
								<div class="title text-lg py-1">{{ panel.title }}</div>
								<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
								<div class="price text-red-600 text-xl border-white border-t-2 pb-4" v-show="panel.status">
									￥{{ panel.price }}
								</div>
								<div class="change pb-4" v-show="!panel.status">
									<button class="bg-zinc-100 border text-sm px-4 py-1 rounded-md"  @click="toProductDetail(panel)">查看详细</button
									><button class="ml-3 text-white bg-blue-500 border text-sm px-4 py-1 rounded-md" @click="addCar(panel)">加入购物车</button>
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
</template>

<script>
import { mapState } from 'vuex'

import Swiper, { Autoplay, Pagination } from 'swiper'
export default {
	data() {
		return {}
	},
	methods: {
		currentShop(index, pindex) {
			// panel.status = 1
			// console.log(index, pindex)
			// console.log(this.$store.state.HomeStore)
			//1表示显示价格 0表示隐藏
			//可以封装为一个同步函数
			this.$store.state.HomeStore.goodsList[index].panel[pindex].status = 0
		},
		outShop(index, pindex) {
			this.$store.state.HomeStore.goodsList[index].panel[pindex].status = 1
			// console.log('离开了', index, pindex)
		},
		// 点击查看详细按钮
		toProductDetail(panel){
			console.log(panel);
			this.$router.push({
				path:"/goodsDetail",
				query:{
					productId:panel.productId.id
				}
			})
		},
		/**加入购物车事件 */
		addCar(panel){
			this.$store.dispatch("AddCar",{
				product:panel.productId,
			})
			
		}
	},
	computed: {
		...mapState({
			goodsList: state => state.HomeStore.goodsList
		})
	},
  /**
   * 发送网络请求
   */
	created() {
		/**获取商品列表 */
		this.$store.dispatch('GetGoodsList')
		/**获取购物车列表 */
		this.$store.dispatch("GetCarList")

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
		}
	}
}
</script>

<style scoped>
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
</style>
