const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'public', 'index.html'), // 模板文件
	filename: 'index.html' // 生成的HTML文件名
})

const cssPlugin = new MiniCssExtractPlugin()

const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
	mode: 'development',
	entry: './src/index.tsx', // 入口文件
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|sass|less)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true, // 启用CSS模块
							localIdentName: '[name]__[local]--[hash:base64:5]' // 可选的自定义类名格式
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images/',
						limit: 200 * 1024 // 小于200kb则打包到js文件里，大于则使用file-loader的打包方式打包到imgages里
					}
				}
			},
			{
				test: /\.(js|jsx)$/, // 匹配.js文件
				exclude: /node_modules/, // 排除node_modules目录
				use: 'babel-loader'
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [htmlPlugin, cssPlugin, cleanPlugin],
	output: {
		filename: 'bundle.js', // 输出文件名
		path: path.resolve(__dirname, 'dist') // 输出路径
	},
	devServer: {
		// https://github.com/webpack/webpack-dev-server/issues/2866
		// contentBase 替换成了 static
		static: path.join(__dirname, 'dist'), // 本地服务器的根目录
		port: 8080, // 服务器端口
		hot: true // 启用热模块替换
	}
}
