import Vue from 'vue'
import Cart from '@/components/common/Cart'
import { Pagination,message } from 'ant-design-vue'
import './importAntStyle'
export function registerCPT() {
	// 注册我自己封装的全局组件
	Vue.component(Cart.name, Cart)

	//注册ant-design的组件
	registerAntCPT()
}
export function registerAntCPT() {
	//注册消息组件
	Vue.prototype.$message = message
	Vue.component(Pagination.name, Pagination)

}
