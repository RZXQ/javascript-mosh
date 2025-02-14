/**
 * ================================================================
 *                     Symbol-Based Private Properties
 * ================================================================
 * Symbols are unique, hidden property keys that prevent accidental access
 * and avoid property name collisions in an object.
 */

const _radius = Symbol(); // Unique Symbol for radius (hidden property)
const _draw = Symbol(); // Unique Symbol for private method

class Circle {
  /**
   * ================================================================
   *               Constructor: Symbol-Based Private Property
   * ================================================================
   */
  constructor(radius) {
    this[_radius] = radius;
    // ✅ This property is NOT enumerable and won't appear in loops.
    // ✅ It prevents accidental modification from external code.
  }

  /**
   * ================================================================
   *               Symbol-Based Private Prototype Method
   * ================================================================
   */
  [_draw]() {
    console.log("Drawing a circle...");
    // ✅ This method is hidden from normal access.
    // ✅ Cannot be called using `circle._draw()`
    // ✅ Only accessible via Symbol reference.
  }
}

/**
 * ================================================================
 *                      Instance Creation
 * ================================================================
 * Creates a new Circle object with a hidden `_radius` property.
 */
const circle = new Circle(1);
console.log(circle);
// ℹ️ Output shows {Symbol(): 1}, but `_radius` is NOT directly accessible.

/**
 * ================================================================
 *                HACK: Access Symbol-Based Properties
 * ================================================================
 * ⚠️ Normally, Symbols create private-like properties, but they are still retrievable.
 */
const symbols = Object.getOwnPropertySymbols(circle); // Get all Symbol properties
console.log(symbols); // 🔹 Output: [ Symbol() ]

const radiusKey = symbols[0]; // Extract the first Symbol key
console.log(circle[radiusKey]); // ✅ Outputs: 1 (but should be avoided)

/**
 * ================================================================
 *                 WHY USE SYMBOLS FOR PRIVATE PROPERTIES?
 * ================================================================
 * 🔹 1. Hides implementation details from external code.
 * 🔹 2. Avoids accidental name conflicts in large projects.
 * 🔹 3. Makes properties non-enumerable (ignored in `for...in` loops).
 * 🔹 4. Prevents unintended modifications, but still retrievable when needed.
 */
