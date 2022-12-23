import instance from '../index'
export const getNavList = () => instance.get('/nav')
export const getGoodsList = () => instance.get('/goods')
