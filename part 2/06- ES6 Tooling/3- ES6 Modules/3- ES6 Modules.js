// ===========================================================
//                   Importing Circle Class
// ===========================================================
// - ES Modules require the `.js` extension when importing local files.
// - This is a named import, meaning `Circle` was exported with `export class Circle {}`.
// - The file must be executed as an ES Module:
//   - In Node.js, use `"type": "module"` in `package.json` OR rename files to `.mjs`.
//   - In browsers, use `<script type="module">` in HTML.

import { Circle } from "./circle.js"; // Named import

// ===========================================================
//                    Example Usage
// ===========================================================

const c = new Circle(10);
c.draw();
