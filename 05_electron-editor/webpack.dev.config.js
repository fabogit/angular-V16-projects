const path = require("path");
const baseConfig = require("./webpack.config");

module.exports = {
  ...baseConfig,
  mode: "development",
  // Enables source map file generation for debugging purposes
  devtool: "source-map",
  output: {
    path: path.join(process.cwd(), "dist", "my-editor"),
    filename: "shell.js",
  },
};
