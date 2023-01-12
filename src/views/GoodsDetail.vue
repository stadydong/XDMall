<template>
	<div class="product-detail bg-zinc-50">
		<div class="header px-40 py-4 bg-zinc-50 flex">
			<div class=" flex-shrink-0 bg-white w-96">
				<img :src="activeImgUrl" :alt="productInfo.title" class="w-96 h-96" />
				<div class="swiper-box relative px-14 group">
					<div class="left-btn hidden group-hover:block">
						<div class="swiper-button-prev" ref="s_prev"></div>
					</div>
					<div class="swiper h-20-scroll py-4 w-full" ref="swiper">
						<div class="swiper-wrapper">
							<div
								class="swiper-slide flex justify-center items-center"
								v-for="(detaiImg, index) in productInfo.detailImg"
								:key="detaiImg"
								:class="{ activeImg: index === activeIndex }"
								@click="changeActiveImg(index)"
							>
								<img :src="detaiImg" :alt="detaiImg.title" class="h-20 w-full" />
							</div>
						</div>
						<!-- 左右按钮 -->
					</div>
					<div class="right-btn hidden  group-hover:block">
						<div class="swiper-button-next" ref="s_next"></div>
					</div>
				</div>
			</div>
			<div class="product-desc bg-zinc-100">
				<div class="text-2xl  pl-4 mt-8">
					{{ productInfo.title }}
				</div>
				<div class="text  pl-4 text-zinc-400 mt-2 border-b pb-6">
					{{ productInfo.desc }}
				</div>
				<div class=" pl-4  py-4 text-3xl text-red-500 font-bold border-b">
					<span class=" text-xl ">￥</span>
					{{ productInfo.salePrice }}
				</div>
				<div class="pl-4 text-2xl flex border-b py-4">
					<span class="mr-8">数量</span>
					<button @click="changeProductNum(-1)" class="w-10 h-10 rounded-3xl flex items-center justify-center bg-white ">-</button>
					<input type="text" class="mx-4 w-20 text-center bg-none" v-model="ProductNum">
					<button @click="changeProductNum(1)" class="w-10 h-10  rounded-3xl flex items-center justify-center bg-white ">+</button>
				</div>
				<div class=" pl-4 mt-8">
					<!-- bg-blue-500 -->
					<button class="text-white  text-xl px-10 py-4 bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500  rounded-md">加入购物车</button>
					<button class="ml-6 bg-zinc-200 text-xl px-10 py-4 bg-gradient-to-t from-zinc-200 via-zinc-300 to-zinc-200 rounded-md">现在购买</button>
				</div>
			</div>
		</div>
		<div class="datu px-40 bg-zinc-50 mt-10 pb-10">
			<h2 class="text-2xl m-0 pl-4 py-4 bg-zinc-150">产品详细介绍图</h2>
			<img :src="productInfo.detailInfoImg" :alt="productInfo.title">
		</div>
	</div>
</template>

<script>
import Swiper, { Grid, Navigation } from 'swiper'
import { getProductDetail } from '@/service/productDet/productDet'
export default {
	data() {
		return {
			productInfo: {},
			activeIndex: 0,
			ProductNum:1
		}
	},
	computed: {
		activeImgUrl() {
			let url = this.productInfo.detailImg ? this.productInfo.detailImg[this.activeIndex] : ''
			return url
		}
	},
	async created() {
		//获取页面的id
		let id = this.$route.query.productDetailId
		try {
			const result = await getProductDetail(id)
			result.data.detailImg = result.data.detailImg.split(',')
			this.productInfo = result.data
			console.log(result)
		} catch (error) {}
	},
	methods: {
		changeActiveImg(index) {
			this.activeIndex = index
		},
		changeProductNum(num){
			if(this.ProductNum >= this.productInfo.limitNum){
				this.ProductNum = this.productInfo.limitNum
			}else if(this.ProductNum < 1){
				this.ProductNum = 1
			}else{
				if(this.ProductNum === 1){
					if( num != -1){
						this.ProductNum = this.ProductNum + num
						return 
					}else{
						return 
					}
				}
				this.ProductNum = this.ProductNum + num
			}
		}
	},
	watch: {
		productInfo() {

			this.$nextTick(() => {
				//初始化swiper
				new Swiper(this.$refs.swiper, {
					modules: [Grid, Navigation],
					// 如果需要分页器
					slidesPerView: 3,
					grid: {
						fill: 'column',
						rows: 1
					},
					navigation: {
						nextEl: this.$refs.s_next,
						prevEl: this.$refs.s_prev
					}
				})
			})
		}
	}
}
</script>

<style scoped>
.activeImg {
	@apply border-4 border-sky-400;
}
</style>
