import instance from '../index'
export const getProductDetail = (id)=>instance.get(`/product/${id}`)