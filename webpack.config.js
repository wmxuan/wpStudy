const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

const configDEV = {
	mode:'none',//模式
	entry:'./src/index.js',//入口文件
	output:{
		filename:'bundleDEV.js',//输出文件名
		path:path.join(__dirname,'dist')//输出文件目录
	},
	module: { 
    rules: [ // 转换规则
      // {
      //   test: /\.css$/, //匹配所有的 css 文件
      //   // use: ['style-loader','css-loader','postcss-loader'] // use: 对应的 Loader 名称
      //   use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] // use: 对应的 Loader 名称
			// 	/*从后往前执行，
			// 	先使用postcss-loader自动补全css3属性的前缀，---添加之后并没有达到补充前缀的目的，需要配合postcss-preset-env插件使用
			// 	再使用css-loader将css文件进行转化，
			// 	然后再使用style-loader将转换后的css，通过style标签，添加到页面上*/
      // },
			// {
			// 	test:/\.scss$/,
			// 	// use:['style-loader','css-loader', 'postcss-loader','sass-loader']
			// 	use:[MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader','sass-loader']
			// 	// 使用sass-loader将scss文件转换为css
			// },
			// 使用url-loader时，删除file-loader的配置，但是不能删除file-loader，如果图片尺寸超过url-loader的limit，还是会使用file-loader来处理
			// {
      //   test: /\.(jpe?g|png|gif)$/i, // 匹配图片文件
      //   use:[
      //     // 'file-loader' // 使用 file-loader
			// 		{
			// 			loader:'file-loader',
			// 			options: {
			// 				esModule: false,  // file-loader 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
      //         name: 'img/[name][hash:8].[ext]'
      //       },
			// 		},
      //   ],
			// 	type: 'javascript/auto'  // 不加这个配置，一张图片打包后会生成两张,其中一张无法打开，背景图片引入的方法，使用的恰好是错误打不开的二进制那张
			// 	// 添加该配置之后，背景图片可以显示成功，但img标签还是不成功的
      // },

			// webpack4:
			// {
			// 	test: /\.(jpe?g|png|gif)$/i, // 匹配图片文件
			// 	use:{
			// 		loader:'url-loader',
			// 		options:{
			// 			// 文件小于 50k 会转换为 base64，大于则拷贝文件
			// 			limit: 50 * 1024,
			// 			name: 'img/[name][hash:8].[ext]',
			// 			esModule: false,  // file-loader 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
			// 		},
			// 	},
			// 	type: 'javascript/auto'  //在webpack5中使用旧的assets loader和asset时，通过该配置，可以停止当前asset模块的处理
			//  不加这个配置，旧的loader会打包一张，webpack5的asset会打包一张，一张图片打包后会生成两张,其中一张无法打开，背景图片引入的方法，使用的恰好是错误打不开的二进制那张
			// },
			// {
			// 	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,  // 匹配字体文件
			// 	type: 'asset'  // webpack5使用资源模块来打包字体文件
			// },
			// {
			// 	test: /\.(html)$/,
			// 	use: ['html-withimg-loader']//处理在html文件中编译图片，添加后，在html中的img标签引入图片可以成功显示
			// },
			// {
			// 	test:/\.(s[ac]|c)ss$/i,//匹配所有css或scss文件
			// 	use:[MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader','sass-loader']
			// },
			// webpack5:
			{
				test:/\.(jpe?g|png|gif)$/i,
				type:'asset',
				generator:{
					//输出文件位置以及文件名
					// [ext]自带".",这个与url-loader配置不同
					filename:"[name][hash:8][ext]"
				},
				parser:{
					dataUrlCondition:{
						maxSize:50*1024//超多50kb不转base64
					}
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, 
				type:'asset',
				generator:{
					filename:"[name][hash:8][ext]"//输出文件位置及文件名
				},
				parser:{
					dataUrlCondition:{
						maxSize:10*1024//超过100kb不转base64
					}
				}
			},
			{
				test: /\.(html)$/,
				use: ['html-withimg-loader']//处理在html文件中编译图片，添加后，在html中的img标签引入图片可以成功显示
			},
			{
				test:/\.(s[ac]|c)ss$/i,//匹配所有css或scss文件
				use:[MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader','sass-loader']
			},
			// 添加babel配置
			// {
      //   test: /\.js$/i,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: [
      //           '@babel/preset-env'//babel预设，转换大部分ES6以上语法和api
      //         ],
      //       }
      //     }
      //   ]
      // },
			// 如此配置，使用.babelrc里的配置
			{
				test: /\.[tj]sx?$/i,
				exclude: [
				/(node_modules|bower_components)/
				],
				use: [
					/* config.module.rule('script').use('1') */
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
    ]
  },
	plugins:[//配置插件
		new HtmlWebpackPlugin({//自动将打包后的文件引入到指定文件index.html中
			template:'./src/index.html'
		}),
		new CleanWebpackPlugin(),//每次打包前，自动将打包目录清空
		new MiniCssExtractPlugin({//将css通过css文件的形式，引入到页面中
			filename: '[name].[hash:8].css'//打包后的文件，使用[原文件名].[8位哈希].css的格式来命名
		})
	],
	devServer: {
    // static: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    open:true  // 是否自动打开浏览器
  },
};
const configPROD = {
};
module.exports = (env, argv) => {
  console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  // return argv.mode === 'development' ? configDEV : configPROD;
	return configDEV
}