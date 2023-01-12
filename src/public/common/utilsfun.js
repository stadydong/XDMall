/**
 * @param {Object} errorMessage
 * 错误消息的对象
 * @param {Object} _this
 * 组件实例
 */
export const ErrorMessageAlert = (errorMessage, _this) => {
	const { status, message } = errorMessage
	// console.log(status);
	console.log(errorMessage, _this)
	switch (status) {
		/**
		 * 参数不符合要求
		 */
		case 400:
			const messages = message.response.message
			messages.forEach(i => {
				_this.$message.error(i)
			})
			break
		/**
		 * 认证相关的错误
		 */
		case 401:
			_this.$message.error(message.message)
			break
		/**
		 * 业务相关的错误
		 */
		case 404:
			_this.$message.error(message.message)
			break
	}
}
