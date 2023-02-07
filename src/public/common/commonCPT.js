import Vue from 'vue'
import Cart from '@/components/common/Cart'
import ProductCart from '@/components/common/ProductCart'
import { Pagination,message,Popover,Modal,Button } from 'ant-design-vue'
import './importAntStyle'
export function registerCPT() {
	// 注册我自己封装的全局组件
	Vue.component(Cart.name, Cart)
	Vue.component(ProductCart.name, ProductCart)

	//注册ant-design的组件
	registerAntCPT()
}
export function registerAntCPT() {
	//注册消息组件
	Vue.prototype.$message = message
	Vue.component(Pagination.name, Pagination)

	Vue.component(Popover.name,Popover)
	Vue.component(Modal.name,Modal)
	/**必须注册不然报错 */
	Vue.use(Modal)
	Vue.use(Button)
}
