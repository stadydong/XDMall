import instance from '../index'
export const getUserInfo = (id)=>instance.get(`/user?id=${id}`,)