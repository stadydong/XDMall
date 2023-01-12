import instance from '../index'
//获取验证码图片
export const getLoginCode = ()=>instance.get("/login/code")
//用户登录
export const userLogin = (userInfo)=>instance.post("/login",userInfo)