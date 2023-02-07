<template>
	<div class="product-content flex w-full overflow-hidden h-20">
		<slot name="left">
			<div class="left mr-6 w-20 h-20  shrink-0">
				<img :src="imgUrl" class="w-20 h-20" :alt="title" />
			</div>
		</slot>
		<slot name="right">
			<div class="right h-20 py-2 overflow-hidden">
				<div class="title text-base leading-8 h-8 truncate ...">{{ title }}</div>
				<div class="price-and-num h-8 leading-8 truncate ...">
					<span class="text-red-600">￥{{price}}</span>
					<span class="text-zinc-300"> x {{num}}</span>
				</div>
			</div>
		</slot>
	</div>
</template>

<script>
export default {
  name:"ProductCart",
	props: {
    price:{
      type:String,
      require:true
    },
    imgUrl:{
      type:String,
    },
    num:{
      type:Number
    },
    title:{
      type:String
    }
  }
}
</script>

<style></style>
