import axios from 'axios'
import { BASEURL } from '@/public/common/constants'
const instance = axios.create({
	baseURL: BASEURL,
	timeout: 6000
})
instance.interceptors.request.use(
	config => {
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
	err => {
		return err
	}
)
export default instance
