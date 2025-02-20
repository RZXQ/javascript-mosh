const path = require("path"); // Node.js module to handle file paths

module.exports = {
  // Entry: The starting point of your application.
  entry: "./src/index.js",

  // Output: Defines where the bundled file will be saved.
  output: {
    // Name of the output bundle.
    filename: "bundle.js",
    // Absolute path to the output directory (using Node's path module).
    path: path.resolve(__dirname, "dist"),
  },

  // Mode: Set to 'development' for easier debugging.
  // Change to 'production' when you are ready to deploy (optimizations, minification, etc.).
  mode: "development",

  // Optional: Generate source maps for debugging.
  devtool: "source-map",

  // Optional: Module rules (loaders) to handle different file types.
  // Example: Transpile ES6+ JavaScript to ES5 using Babel.
  module: {
    rules: [
      {
        // Apply this rule to .js files, excluding node_modules.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpiler for JavaScript
          options: {
            // Preset to convert modern JavaScript into a version compatible with older browsers.
            presets: ["@babel/preset-env"],
          },
        },
      },
      // Additional loaders (e.g., for CSS or images) can be added here.
    ],
  },
};
