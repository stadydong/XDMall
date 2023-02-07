import instance from '../index'
export const changeCarChecked = (carId, id, checked) => instance.patch('car', { carId, id, checked })
/**获取支付二维码图片 */
export const getCodeImg = (carId, userId) => instance.get(`/pay/codeImg?carId=${carId}&userId=${userId}`)
export const Payfail = (carId, userId) => instance.get(`/pay/fail?carId=${carId}&userId=${userId}`)

export const deleteCarShopping = ids => instance.delete('/car', { data: { ids } })
