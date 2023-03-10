module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential', //启动vue的基础规则
		'eslint:recommended' //启用 eslint 的推荐规则
		// "plugin:prettier/recommended"
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		//关闭检查组件名称大写
		'vue/multi-word-component-names': 'off'
	}
}
