import Vue from 'vue'
import Vuex from 'vuex'
import { HomeStore } from './home/home'
import { MainStore } from './main/main'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		HomeStore,
		MainStore
	}
})
