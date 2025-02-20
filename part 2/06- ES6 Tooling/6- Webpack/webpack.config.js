/**
 * =============================================================================
 * Beginner-Friendly Webpack Configuration Explained
 * =============================================================================
 *
 * This file tells Webpack how to bundle your application.
 * Below, each section is explained in simple terms.
 */

/*
 * 1. Import the "path" module:
 *    Node.js has a built-in module called "path" to work with file paths.
 *    We use it to create an absolute path (a complete path from the root) for our output folder.
 *    - __dirname is a Node.js variable that gives you the directory of this file.
 */
const path = require("path");

/*
 * 2. Export the configuration object:
 *    Webpack reads this object to know what to do.
 */
module.exports = {
  /*
   * ENTRY
   * -----
   * "entry" is where Webpack starts reading your code.
   * It is the main file of your application.
   * Here, it's set to "./src/index.js".
   */
  entry: "./src/index.js",

  /*
   * OUTPUT
   * ------
   * "output" tells Webpack where to put the bundled (combined) file.
   *
   * filename: The name of the final bundled file (here, "bundle.js").
   *
   * path: The folder where the bundled file will be saved.
   *       We use path.resolve(__dirname, "dist") to create an absolute path:
   *         - __dirname: the folder of this configuration file.
   *         - "dist": the folder name where we want our output.
   */
  output: {
    filename: "bundle.js", // The bundled file will be named "bundle.js"
    path: path.resolve(__dirname, "dist"), // The output folder is "dist"
  },

  /*
   * MODE
   * ----
   * "mode" tells Webpack whether to optimize for development or production.
   *
   * - "development" mode:
   *     * Keeps the output readable and easier to debug.
   *     * Does not minify (compress) the code.
   * - "production" mode:
   *     * Optimizes the bundle (minifies, removes extra code) for better performance.
   *
   * Here, we use "development" for easier debugging while building.
   */
  mode: "development",

  /*
   * DEVTOOL (Source Maps)
   * ----------------------
   * "devtool" helps you debug your code by mapping the bundled code back to the original source code.
   * - "source-map" creates a separate file that shows this mapping.
   * This means when you debug in the browser, you can see your original code.
   */
  devtool: "source-map",

  /*
   * MODULE RULES (Loaders)
   * ----------------------
   * "module.rules" defines how different types of files should be processed.
   * Loaders transform files into modules that Webpack can include in the bundle.
   *
   * Here’s one rule that tells Webpack to use Babel for JavaScript files:
   */
  module: {
    rules: [
      {
        /*
         * test: /\.js$/
         *
         * "test" is a regular expression that tells Webpack which files to process.
         *
         * Explanation of /\.js$/:
         *   - The two forward slashes (/) enclose a regular expression.
         *   - "\.js" means "a literal '.js'" (the dot is escaped with \ because a dot normally means any character).
         *   - "$" means "the end of the file name".
         * So, /\.js$/ matches any file that ends with ".js".
         */
        test: /\.js$/,

        /*
         * exclude: /node_modules/
         *
         * This tells Webpack not to process files in the "node_modules" folder.
         * We usually don't want to transpile third-party code.
         */
        exclude: /node_modules/,

        /*
         * use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } }
         *
         * "use" specifies which loader to use for the matched files.
         * Here, we use "babel-loader" to convert modern JavaScript (ES6+) into a version that older browsers can run.
         *
         * - loader: "babel-loader" means use Babel to process the file.
         *
         * - options.presets: ["@babel/preset-env"]
         *   This preset tells Babel what transformations to apply, based on the environment.
         *
         * NOTE: To use Babel, you must install the following packages:
         *       npm install --save-dev babel-loader @babel/core @babel/preset-env
         */
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // You can add more rules here to handle CSS, images, etc.
    ],
  },
};

/**
 * =============================================================================
 * END OF WEBPACK CONFIGURATION
 * =============================================================================
 *
 * Summary:
 * - entry: "./src/index.js" tells Webpack where to start bundling.
 * - output: The bundle is saved as "bundle.js" in the "dist" folder.
 * - mode: "development" is used for debugging; switch to "production" for deployment.
 * - devtool: "source-map" helps map the bundled code back to your original code.
 * - module.rules: Processes files using loaders; here, babel-loader transforms JavaScript files.
 *
 * Each part is customizable based on your project needs.
 */
