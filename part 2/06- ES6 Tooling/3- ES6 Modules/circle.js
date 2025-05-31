const _radius = new WeakMap();

// ========== NAMED EXPORT VERSION ==========
// Export class directly with 'export' keyword
// - Can have multiple named exports per module
// - Must import with EXACT name: import { Circle } from "./circle.js"
export class Circle {
  constructor(radius) {
    // Store radius privately using WeakMap - cannot be accessed directly from outside
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}

// ========== DEFAULT EXPORT VERSION ==========
// Uncomment this version to use default export instead:
/*
export default class Circle {
  constructor(radius) {
    // Store radius privately using WeakMap - cannot be accessed directly from outside
    _radius.set(this, radius);
  }

  draw() {
    // Retrieve and display the private radius value
    console.log(_radius.get(this));
  }
}
*/

// USAGE COMPARISON:
// Named Export:   import { Circle } from "./circle.js";        // EXACT name required
// Default Export: import AnyName from "./circle.js";          // ANY name allowed
// Default Export: import MyCircle from "./circle.js";         // Still works with any name

// KEY DIFFERENCES:
// - Named: Explicit, multiple exports allowed, exact name required
// - Default: Flexible naming, only one per module, less explicit
