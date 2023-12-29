const path = require("path");

const src = path.join(process.cwd(), "src", "electron");

module.exports = {
	mode: "development",
	// Enables source map file generation for debugging purposes
	devtool: "source-map",
	// Indicates the main entry point of the Electron application
	entry: path.join(src, "main.ts"),
	// Defines the path and the filename of the Electron bundle that will be generated from webpack
	output: {
		// Points to the same folder used by the Angular CLI to create the bundle of the Angular application
		path: path.join(process.cwd(), "dist", "my-editor"),
		// The filename property is set to shell.js because the default one generated from webpack is main.js,
		// and it will cause a conflict with the main.js file generated from the Angular application
		filename: "shell.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					configFile: path.join(src, "tsconfig.json"),
				},
			},
		],
	},
	target: "electron-main",
};
