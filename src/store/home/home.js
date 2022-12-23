import { getGoodsList, getNavList } from '@/service/home/home'

export const HomeStore = {
	state: {
		navList: [],
		currentIndex: 0,
		goodsList: []
	},
	getters: {},
	mutations: {
		GETNAVLIST(state, navList) {
			state.navList = navList
		},
		GETGOODSLIST(state, goodsList) {
			state.goodsList = goodsList
		}
	},
	actions: {
		async GetNavList({ commit }) {
			try {
				const result = await getNavList()
				// console.log(result)
				commit('GETNAVLIST', result.data)
			} catch (error) {
				console.log('获取导航栏错误')
			}
		},
		async GetGoodsList({ commit }) {
			try {
				const result = await getGoodsList()
				console.log(result.data)
				commit('GETGOODSLIST', result.data)
			} catch (error) {
				console.log('获取商品列表失败', error)
			}
		}
	}
}
