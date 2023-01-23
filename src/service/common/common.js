import instance from '../index'
export const getUserInfo = (id)=>instance.get(`/user?id=${id}`)
export const getCarList = (id)=>instance.get(`/car/${id}`)
export const addCar = (carInfo)=>instance.post("/car",carInfo)
export const updateCar = (id,carInfo) =>instance.patch(`/car/${id}`,carInfo)