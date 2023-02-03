<template>
  <div class="cart px-40 bg-zinc-50">
    <div class="content bg-zinc-50">
      <h2 class="text-2xl pl-4 py-4 bg-zinc-150 mb-0">购物清单</h2>
    </div>
    <table class="table-auto w-full">
  <thead>
    <tr class=" bg-zinc-400 h-10 border">
      <th>商品信息</th>
      <th>单价</th>
      <th>数量</th>
      <th>小计</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in  carList" :key="item.id" class="border">
      <td class=" flex items-center pl-4">
        <input type="checkbox" :value="item.id" v-model="selectProduct" @change="changeChecked(item.checked,item.id)">
        <img :src="item.product.productImageUrl" class="w-20 h-20 mx-4 my-4" :alt="item.product.title">
        <span>{{ item.product.title }}</span>
      </td>
      <td>
        {{ item.product.price }}
      </td>
      <td>
        {{ item.num }}
      </td>
      <td>
        {{ item.num * item.product.price }}
      </td>
      <td>
        <button @click="checkout">删除</button>
      </td>
    </tr>

  </tbody>
</table>
  <div class=" flex justify-between items-center py-4 border border-t-0">
    <div class="left"><input type="checkbox" v-model="allSelect" class=" ml-4" @click="allChecked"> 全选</div>
    <div class="right flex items-center text-base">
      <div>已选择 <span class=" text-xl text-red-600">{{selectCount}}</span> 件商品</div>
      <div class="px-4 text-zinc-300">|</div>
      <div class="">应付总额：<span class=" text-xl text-red-600">￥{{ selectProductPrice }}</span></div>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg mx-4" @click="payment">现在结算</button>
    </div>
  </div>
  <div class="h-10"></div>
  <!-- 全局对话框结算时打开 -->
  <!-- :confirm-loading="confirmLoading" -->
  <a-modal
      title="由于个人用户无法申请微信二维码支付，只能模拟测试"
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="取消支付"
      okText="支付成功"
    >
      <div class="text-center text-3xl text-green-400">微信扫码</div>
      <img :src="codeImg" class="mx-auto">
      <div class="text-center">扫完码后点击支付成功</div>
  </a-modal>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import { changeCarChecked,getCodeImg,Payfail } from '@/service/cart/cart';
export default {
  data(){
    return {
      selectProduct:[],
      /**打开支付全局窗口 */
      visible:false,
      codeImg:""
    }
  },
  computed:{
    ...mapState({
      carList:state=>state.MainStore.carList
    }),
    ...mapGetters(["checkProduct"]),
    allSelect:{
      get(){
        return this.selectProduct.length === this.carList.length
      },
      set(v){
        return v
      }
    },
    selectCount(){
      return this.selectProduct.length
    },
    selectProductPrice(){
      let result = this.carList.reduce((previousValue, currentValue)=>{
        let price = 0
        if(currentValue.checked){
          price = currentValue.num * currentValue.product.productDetail.salePrice
        }
        return previousValue + price
      },0)
      return result
    }
  },
  methods:{
    /**改变单选框当前的状态 */
    async changeChecked(state,id){
      const carId = JSON.parse(localStorage.getItem("userInfo")).car.id
      state = state ? 0 :1
      const result = await changeCarChecked(carId,[id],state)
        /**只有成功的时候才去选择 */
        if(result.success){
          this.$store.dispatch("GetCarList")
        }
    },
    /**点击全选按钮 */
    async allChecked(){
      /**表示还没有全选 */
      const carId = JSON.parse(localStorage.getItem("userInfo")).car.id
      if(this.selectProduct.length < this.carList.length){
        let allSelectArr = []
        this.carList.map(item=>{
          allSelectArr.push(item.id)
        })
        const result = await changeCarChecked(carId,allSelectArr,1)
        /**只有成功的时候才去选择 */
        if(result.success){
          this.selectProduct = allSelectArr
          this.$store.dispatch("GetCarList")
        }
      }else{
        const result = await changeCarChecked(carId,this.selectProduct,0)
        if(result.success){
          this.selectProduct = []
          this.$store.dispatch("GetCarList")

        }
      }
    },
    /**删除当前商品 */
    checkout(){},
    /**结账 */
    async payment(){
      this.visible = !this.visible
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      const carId = userInfo.car.id
      const userId = userInfo.id
      const result = await getCodeImg(carId,userId)
      if(result.success){
        this.codeImg = result.data
      }
    },
    handleOk(){
      this.$store.dispatch("GetCarList")
      this.visible = false
      this.$message.success("支付成功")
    },
    async handleCancel(){
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      const carId = userInfo.car.id
      const userId = userInfo.id
      const result = await Payfail(carId,userId)
      console.log(result);
      this.$message.error("已取消支付")
      /**关闭遮罩层 */
      this.visible = false
      this.$store.dispatch("GetCarList")


    }
  },
  watch:{
    carList(){
      this.selectProduct = []
        this.carList.forEach(item=>{
          if(item.checked){
            this.selectProduct.push(item.id)
          }
        })
    }
  },
  created(){
    this.carList.forEach(item=>{
          if(item.checked){
            this.selectProduct.push(item.id)
          }
        })
  },
  mounted(){
   
  }
}
</script>

<style>

</style>