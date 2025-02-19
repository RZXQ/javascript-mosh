// ===========================================================
//                  1. Importing Circle Class
// ===========================================================
// - ES Modules require the .js extension when importing local files.
// - This is a named import, meaning Circle was exported with export class Circle {}.
// - The file must be executed as an ES Module:
// - In Node.js, use "type": "module" in package.json OR rename files to .mjs.
// - In browsers, use <script type="module"> in HTML.

import { Circle } from "./circle.js"; // Named import

// ===========================================================
//                  2. Importing an Entire Module as an Object
// ===========================================================
// - import * as module returns an ES Module object.
// - This object contains all named exports as properties.
// - Example: import * as module from "./circle.js";
// - const { Circle } = module;

// ===========================================================
//                  3. Object Destructuring
// ===========================================================
// - Given const { name: name } = { name: "ruizhi" };
// 1. Right-side object: { name: "ruizhi" } is an object with a name property that holds "ruizhi".
// 2. Destructuring pattern on the left: { name: name }
// - The left name: refers to the name property of the right-side object.
// - The second name is a new variable that will store the extracted value.
// 3. Assignment process: The name property from the object { name: "ruizhi" } is assigned to the new variable name.
// 4. Final result: The variable name holds the value "ruizhi".

// ===========================================================
// 4. Example Usage
// ===========================================================

const c = new Circle(10);
c.draw();
