import instance from '../index'

export const getChatContent = (skip, take = 5) => instance.get('/userChat', { params: { skip, take } })
export const getChatTotal = () => instance('/userChat/total')
