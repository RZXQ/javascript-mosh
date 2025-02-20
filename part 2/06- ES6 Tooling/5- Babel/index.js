/*
 * JavaScript Tooling Overview: NPM, Babel, and a Note on Webpack
 *
 * 1. NPM (Node Package Manager)
 *    - NPM is used to manage packages and dependencies in your JavaScript projects.
 *    - To initialize a new Node.js project in the current folder, run:
 *         npm init             // Starts an interactive process to create a package.json file.
 *         npm init --yes or npm init -y  // Skips prompts and uses default values.
 *
 *    - After initialization, a package.json file is created, and a package-lock.json file
 *      is automatically generated to lock dependency versions for consistency.
 *
 * 2. Installing Babel for Transpiling ES6+ to ES5
 *    - Babel lets you write modern JavaScript (ES6+) and transpile it into ES5 code that all browsers can understand.
 *
 *    - Install Babel and its necessary tools by running:
 *         npm install --save-dev @babel/core @babel/cli @babel/preset-env
 *
 *    - Package details:
 *         @babel/core:
 *           - The core library that contains Babel's main transpiling logic.
 *         @babel/cli:
 *           - A command-line interface for Babel that lets you run Babel commands from the terminal.
 *         @babel/preset-env:
 *           - A preset that includes plugins for all modern JavaScript features (e.g., let/const, arrow functions).
 *
 *    - Note on dependency flags:
 *         --save       : Adds the package to "dependencies" in package.json (required during runtime).
 *         --save-dev   : Adds the package to "devDependencies" (needed only during development).
 *
 * 3. Transpiling Your Code
 *    - Create a new folder (e.g., "build") to store the transpiled ES5 code.
 *    - Modify your package.json to add a script for Babel. For example:
 *
 *       {
 *         "name": "5--babel",
 *         "version": "1.0.0",
 *         "main": "index.js",
 *         "scripts": {
 *           "babel": "babel --presets env index.js -o build/index.js"
 *         },
 *         "keywords": [],
 *         "author": "",
 *         "license": "ISC",
 *         "description": "",
 *         "devDependencies": {
/ *         "babel": "^5.8.38"
 *         }
 *       }
 *
 *    - Then run:
 *         npm run babel
 *
 *      This command tells Babel to transpile your ES6 code in index.js to ES5 and output the result
 *      in build/index.js.
 *
 * 4. A Note on Babel and Webpack
 *    - The Babel command shown above handles only a single file (index.js).
 *    - For larger projects with multiple JavaScript files and more complex dependencies, consider using Webpack.
 *      Webpack bundles all your modules and assets together, making it easier to manage complex projects.
 *
 * 5. Example ES6 Code (index.js)
 */

const x = 1;
console.log(`The value of x is: ${x}`);

// This file demonstrates the basics of setting up a Node.js project, installing Babel to transpile ES6 to ES5,
// and notes on how Webpack can be used for more advanced bundling needs.
