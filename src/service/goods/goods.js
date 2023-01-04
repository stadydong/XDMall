import instance from '../index'

export const getProductList = (skip,take,priceOrderType,startPrice,endPrice)=>instance.get(`/product`,{params:{skip,take,priceOrderType,startPrice,endPrice}})