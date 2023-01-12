<template>
	<div class="cart group transition duration-500 hover:-translate-y-1 hover:shadow-float-shadow">
		<div class="img-box flex justify-center">
			<slot name="topImg">
				<img :src="panel.productImageUrl" :alt="panel.title" class="w-full h-80" :style="{ width: imgWeight }" />
			</slot>
		</div>
		<div class="shop-desc flex flex-col items-center">
			<div class="h-7 my-1 w-full overflow-hidden">
				<div class="title text-lg truncate">{{ panel.title }}</div>
			</div>

			<div class="desc text-xs text-zinc-400 mb-4">{{ panel.desc }}</div>
			<div class="price text-red-600 text-xl pb-4 group-hover:hidden">￥{{ panel.price }}</div>
			<div class="change pb-4 hidden group-hover:block">
				<button class="bg-zinc-100 text-sm px-4 py-1 rounded-md" @click="toProductDetail(panel.productDetailId)">查看详细</button
				><button class="ml-3 text-white bg-blue-500 text-sm px-4 py-1 rounded-md" @click="addCart">加入购物车</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cart',
	props: {
		panel: Object,
		pindex: Number,
		imgWeight: {
			type: String,
			require: false,
			default: '100%'
		}
	},
	methods: {
		toPenelInfo() {
			console.log('查看详细')
		},
		addCart() {
			console.log('加入购物车')
		},
		toProductDetail(productDetailId){
			this.$router.push({
				path:"/goodsDetail",
				query:{
					productDetailId
				}
			})
		}
	}
}
</script>

<style></style>
