var path = require("path");

module.exports = {
	entry: "./src/student-assistant.js",
	output: {
		path: "lib/",
		filename: "student-assistant.js",
		library: true,
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: path.join(__dirname, "src"),
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}