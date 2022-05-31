module.exports={
	presets:[
		[
			"@babel/preset-env",
			{
				// targets:{
				// 		// browser:['last 2 versions'],//最近两个版本的浏览器
				// }
				"targets": "ie >= 8",
				// useBuiltIns:'entry',//会在入口处把所有ie8以上浏览器不支持api的polyfill引入进来
				useBuiltIns:'usage'//功能更为强大，它会扫描你的代码，只有你的代码用到了哪个新的api，它才会引入相应的polyfill
			}
		]
	],
	// sourceType:'unambiguous',//解决ES6和commonJS模块导出不能混用的问题
	// 解决打包时throw Error:ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead:
	// plugins: ['@babel/plugin-transform-runtime'], // 解决 regeneratorRuntime is not defined 错误信息
}