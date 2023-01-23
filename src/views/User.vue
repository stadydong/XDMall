<template>
	<div class="user px-40 bg-zinc-50 py-10">
		<div class="usercontent flex">
			<div class="userList w-44 bg-white mr-4 rounded-md">
				<div class="userInfo flex flex-col items-center">
					<img :src="userInfo.imgUrl" class="w-32 h-32  my-4" />
          <div class=" mb-4 text-2xl font-bold">{{ userInfo.username }}</div>
				</div>
				<div class="menu flex flex-col text-center">
					<router-link to="/user/orderList" class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">我的订单</router-link>
					<router-link to="/user/information"  class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">账号资料</router-link>
					<router-link to="/user/addressList"  class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">收货地址</router-link>
					<router-link to="/user/coupon"  class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">售后服务</router-link>
					<router-link to="/user/support"  class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">我的优惠</router-link>
					<router-link to="/user/aihuishou"  class=" h-10 hover:bg-blue-300 leading-10 hover:text-white border-t">以旧换新</router-link>
				</div>
			</div>
			<div class="userContent bg-white flex-1 rounded-md">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			userInfo: state => state.MainStore.userInfo
		})
	}
}
</script>

<style scoped></style>
