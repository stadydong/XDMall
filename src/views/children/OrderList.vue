<template>
	<div class="order-list">
		<h2 class="text-2xl pl-4 py-4 bg-zinc-150 mb-0">我的订单</h2>
		<div class="content">
			<table class="w-full">
				<tbody>
					<tr v-for="item in orderListInfo.orderList" :key="item.id">
						<table class=" w-full">
							<thead>
								<tr class="bg-zinc-300 h-10 border">
									<th class="pl-4">商品信息</th>
									<th>单价</th>
									<th>数量</th>
									<th>状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tr v-for="childrenItem in item.orderListItem" :key="childrenItem.id" class=" border-b last:border-b-0">
								<td class="flex items-center w-full">
									<img
										:src="childrenItem.product.productImageUrl"
										class="w-20 h-20 mx-4 my-4"
										:alt="childrenItem.product.title"
									/>
									<span>{{ childrenItem.product.title }}</span>
								</td>
                <td   class=" w-20" >
                  {{ childrenItem.product.price }}
                </td>
                <td  class=" w-20">
                  {{ childrenItem.num }}
                </td>
                <td  class=" w-32">
                  {{ item.order_status }}
                </td>
                <td class=" w-24 group">
                  <button class=" bg-blue-600 text-white px-3 py-2 hidden group-hover:block" @click="DeleteOrderList(item.id)">删除订单</button>
                </td>
							</tr>
						</table>
					</tr>
				</tbody>
			</table>

			<div class=" flex py-4 justify-center"><a-pagination v-model="current" :total="orderListInfo.count" :defaultPageSize="take" /></div>
		</div>
	</div>
</template>

<script>
import { getOrderList,deleteOrderList } from '@/service/user/orderList/orderList'
export default {
	data() {
		return {
			orderListInfo: {
				orderList: [],
				count: 0
			},
			current: 1,
			take: 10
		}
	},
	created() {
		this.getOrderListInfo()
	},
	methods: {
		async getOrderListInfo() {
			const userId = JSON.parse(localStorage.getItem('userInfo')).id
			const result = await getOrderList(userId)
			if (result.success) {
				this.orderListInfo.orderList = result.data.orderList
				this.orderListInfo.count = result.data.count
				console.log(this.orderListInfo)
			}
		},
    async DeleteOrderList(id){
      const DeleteResult = await deleteOrderList(id)
      if(DeleteResult.success){
        this.$message.success(DeleteResult.data.message)
        this.getOrderListInfo()
      }
    }
	}
}
</script>

<style scoped></style>
