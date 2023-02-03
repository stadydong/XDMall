
import instance from '@/service/index'

export const getOrderList = (userId,skip,take)=> instance.get(`/order-list/${userId}`,{data:{
  skip
  ,take
}})
export const deleteOrderList = (id) => instance.delete(`/order-list/${id}`)