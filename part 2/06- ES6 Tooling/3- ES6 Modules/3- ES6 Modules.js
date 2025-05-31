// ========== NAMED IMPORT ==========
// Must use EXACT name with curly braces
import { Circle } from "./circle.js";

const c1 = new Circle(10);
c1.draw(); // Output: 10

// ========== DEFAULT IMPORT ==========
// Use ANY name, no curly braces
// (Only works if circle.js uses: export default class Circle)
/*
import CustomCircle from "./circle.js";

const c3 = new CustomCircle(30);
c3.draw(); // Output: 30
*/

// KEY DIFFERENCES:
// Named:   import { Circle } from "./circle.js"    // Exact name required
// Default: import AnyName from "./circle.js"       // Any name allowed
