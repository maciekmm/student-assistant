var path = require("path");

module.exports = {
	entry: "src/student-assistant.js",
	output: {
		path: "lib/",
		filename: "student-assistant.js",
		library: true,
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, "src"),
				loader: "babel-loader"
			}
		]
	}
}