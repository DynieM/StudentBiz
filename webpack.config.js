/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackLinkTypePlugin =
	require("html-webpack-link-type-plugin").HtmlWebpackLinkTypePlugin;

module.exports = {
	mode: "production",
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
	},
	stats: {
		children: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./style.[contenthash].css",
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new HtmlWebpackLinkTypePlugin(),
	],
	optimization: {
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		splitChunks: {
			chunks: "all",
		},
	},
	performance: { hints: false },
};
