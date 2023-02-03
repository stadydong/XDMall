const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, //关闭eslint出现的停止编译
	productionSourceMap:false,
	outputDir:"dist2",
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				pathRewrite: { '^/api': '' },
				changeOrigin: true
			}
		}
	},
	chainWebpack:config=>{
		config.module
		.rule("less")
		.use("less-loader")
		.tap(options => options)
	}
})
