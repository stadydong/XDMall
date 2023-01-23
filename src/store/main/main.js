import { getCarList,addCar,getUserInfo,updateCar } from '@/service/common/common'
export const MainStore = {
	state: {
		/**用户信息 */
		userInfo: {},
		/**购物车数据 */
		carList: []
	},
	mutations: {
		GETUSERINFO(state, userInfo) {
			state.userInfo = userInfo
		},
		GETCARLIST(state, carShoppingInfo) {
      console.log(carShoppingInfo);
      state.carList = carShoppingInfo
    },
    // ADDCAR(state,carInfo){
    //   console.log(carInfo);
    // }
	},
	actions: {
		async GetUserInfo({ commit }, _this) {
			const uid = localStorage.getItem('uid')
			try {
				const res = await getUserInfo(uid)
				console.log(res)
				if (res.success) {
          localStorage.setItem("userInfo",JSON.stringify(res.data))
					commit('GETUSERINFO', res.data)
					return
				}
				ErrorMessageAlert(res, _this)
			} catch (error) {}
		},
		async GetCarList({commit}) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
			const result = await getCarList(userInfo.car.id)
      // commit()
      if(result.success){
        commit("GETCARLIST",result.data.carshoppinginfo)
      }
		},
    async AddCar({commit,state},carInfo){
      // {carId,num,productId}
      let carId = JSON.parse(localStorage.getItem("userInfo")).car.id
      let currentCarProduct = state.carList.find((item)=>item.productId===carInfo.id)
      if(currentCarProduct){
        console.log(currentCarProduct);
        console.log("商品在购物车已经存在,进行数量加1");
        let num = currentCarProduct.num + 1
        console.log(num);
        const updateResult = await updateCar(currentCarProduct.id,{
          num,
          carId
        })
        if(updateResult.success) this.dispatch("GetCarList")
      }else{
        carInfo.num = 1
        carInfo.carId = carId
        // carInfo.
        const result = await addCar(carInfo)
        if(result.success) this.dispatch("GetCarList")
      }
    },
	},
	getters: {
    totalPrice(state){
      let prices = state.carList.reduce((previousValue, currentValue)=>{
        let price =  parseFloat(currentValue.product.productDetail.salePrice) 
        price *= currentValue.num

        return price + previousValue
      },0)
      return prices
    },
    productTotal(state){
      return state.carList.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue.num
      },0)
    }
  }
}
