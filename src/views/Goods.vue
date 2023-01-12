<template>
	<div class="goods px-40 bg-zinc-50">
		<div class="order mb-1 flex h-12 items-center">
			<a href.sync="" @click="orderRule(0)">
				<div class="order-item" :class="{ 'order-item-active': priceOrderType === 0 }">综合排序</div>
			</a>
			<a href.sync="" @click="orderRule(1)">
				<div class="order-item" :class="{ 'order-item-active': priceOrderType === 1 }">价格从低到高</div></a
			>
			<a href.sync="" @click="orderRule(2)">
				<div class="order-item" :class="{ 'order-item-active': priceOrderType === 2 }">价格从高到低</div></a
			>
			<div class="price order-item">
				<input
					type="text"
					name="startPrice"
					v-model="PriceValue.startPrice"
					placeholder="价格"
					class="text-center w-20 rounded-md text-lg border"
				/>
				<span class="mx-2 leading-7">-</span>
				<input
					type="text"
					name="endPrice"
					v-model="PriceValue.endPrice"
					placeholder="价格"
					class="text-center w-20 rounded-md text-lg border"
				/>
				<button class="rounded-md text-base leading-7 w-20 border ml-2 bg-blue-600 text-white" @click="orderRule(3)">
					确定
				</button>
			</div>
		</div>
		<div class="product-list flex flex-wrap">
			<Cart
				:panel="product"
				:pindex="0"
				v-for="(product, index) in productData?.productList"
				:key="product.id"
				class="w-1/4 p-8 bg-white border"
			/>
		</div>
		<!-- 分页器 -->
		<div class="pagination flex justify-center py-10">
			<a-pagination
				show-size-changer
				:total="productData?.count"
				v-model="currentPage"
				@showSizeChange="onShowSizeChange"
				@change="changeCurrentPage"
				:page-size.sync="pageSize"
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { getProductList } from '@/service/goods/goods'
export default {
	data() {
		return {
			productData: {},
			currentPage: 1,
			pageSize: 10,
			PriceValue: {
				startPrice: null,
				endPrice: null
			},
			priceOrderType: 0
		}
	},
	watch: {},
	methods: {
		async getProductData(page, take, priceOrderType, startPrice, endPrice) {
			let skip = page * take
			this.productData = {}
			try {
				const res = await getProductList(skip, take, priceOrderType, startPrice, endPrice)
				console.log(res.data)
				this.productData = res.data
			} catch (error) {
				console.log('获取ProductList错误', error)
			}
		},
		onShowSizeChange(currentPage, pageSize) {
			this.getProductData(--currentPage, pageSize)
		},
		changeCurrentPage(page, pageSize) {
			this.getProductData(--page, pageSize)
		},

		/**
		 * 按照什么规则进行排序
		 * 提交按照指定价格排序
		 */
		orderRule(type) {
			if(type===3){		//类型为3时保存默认进行提交
				type= this.priceOrderType
			}else{
				if (this.priceOrderType === type) return
			}
			this.priceOrderType = type
			let page = this.currentPage
			let pageSize = this.pageSize
			const { startPrice, endPrice } = this.PriceValue
			this.getProductData(--page, pageSize, type, startPrice, endPrice)
		}
	},
	created() {
		//不要改变响应式里的数据
		let currentPage = this.currentPage
		this.getProductData(--currentPage, this.pageSize)
	}
}
</script>

<style scoped>
.order-item {
	@apply pl-8 text-xs text-zinc-400;
}
.order-item-active {
	@apply text-blue-400;
}
</style>
