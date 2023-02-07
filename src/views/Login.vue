<template>
	<div class="login flex justify-center items-center h-full">
		<!-- flex justify-center flex-col -->
		<div class="content w-100 text-center bg-white py-14 border rounded-md">
			<div class="h-16 w-16 text-6xl bg-red-700 text-center text-white rounded-full p-1 box-content mx-auto">M</div>
			<div class="text-lg mt-4 mb-6">使用账号登录XDMall官网</div>
			<input type="text" v-model="userInfo.username" class="w-5/6 border h-10 pl-2 text-base" placeholder="测试账号 test" />
			<input type="password" v-model="userInfo.password" class="w-5/6 border h-10 mt-4 pl-2 text-base" placeholder="测试密码 test" />
			<!-- 验证码 -->
			<div class="code mt-4 w-5/6 mx-auto flex justify-between my-4">
				<input type="text" v-model="userInfo.code" class="border flex-1 pl-4 mr-10 h-10" />
				<span v-html="imgCode" class="" @click="getCode"></span>
			</div>
			<div class="option flex justify-between w-5/6 m-auto">
				<div class="left flex items-center">
					<input type="checkbox" v-model="checkedV" name="" id="" class="w-5 h-5" />
					<span class="ml-1 text-zinc-400 text-sm">记住密码</span>
				</div>
				<div class="right flex">
					<a href="">
						<div>注册XDMall账号</div>
					</a>
					<div class="mx-2 text-zinc-400">|</div>
					<a href="">
						<div>忘记密码</div>
					</a>
				</div>
			</div>
			<div class="w-5/6 m-auto mt-4" @click="login">
				<button class="w-full bg-blue-600 text-white text-xl py-2">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
import { getLoginCode, userLogin } from '@/service/login/login'
import {ErrorMessageAlert} from '@/public/common/utilsfun'
export default {
	data() {
		return {
			/**保存图片验证码 */
			imgCode: '',
			userInfo: {
				username: JSON.parse(localStorage.getItem("account")) || '',
				password: JSON.parse(localStorage.getItem("password")) || '',
				code: ''
			},
			checkedV: true
		}
	},
	created() {
		this.getCode()
	},
	methods: {
		async login() {
			localStorage.setItem('account', JSON.stringify(this.userInfo.username))
			try {
				const result = await userLogin(this.userInfo)

				/**
				 * 表示登录成功
				 */
				if(result.success){
					localStorage.setItem('token', JSON.stringify(result.data.token))
					localStorage.setItem('username', JSON.stringify(result.data.username))
					localStorage.setItem('uid', JSON.stringify(result.data.id))
					localStorage.setItem('password', JSON.stringify(this.userInfo.password))
					this.$message.success("登录成功，正在跳转首页")
					
					this.$router.push({
						path:"/"
					})
				}
				console.log(result);
				ErrorMessageAlert(result,this)
			} catch (error) {
				console.log(error)
			}
		},
		async getCode() {

			try {
				const code = await getLoginCode()
				this.imgCode = code
				// console.log();
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>

<style scoped></style>
