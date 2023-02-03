import axios from 'axios'
import { BASEURL } from '@/public/common/constants'
import router from '@/router'
const instance = axios.create({
	baseURL: BASEURL,
	timeout: 6000
})
instance.interceptors.request.use(
	config => {
		let token = localStorage.getItem("token")
		if(token){
			config.headers.Authorization = `Bearer ${JSON.parse(token)}`
		}
		return config
	},
	err => {
		return err
	}
)
instance.interceptors.response.use(
	res => {
		return res.data
	},
	async err => {
		
		if(err.response.data.status===401 && err.response.data.message.name === "UnauthorizedException"){
			localStorage.removeItem("token")
			if(router.currentRoute.path != "/login"){
				await router.push({path:"/login"})
			}
			
		}
		return err.response.data
	}
)
export default instance
