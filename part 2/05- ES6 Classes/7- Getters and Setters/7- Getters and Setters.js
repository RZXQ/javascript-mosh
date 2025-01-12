/*
==================================================
      Using WeakMap to Implement Private Properties
==================================================
This example demonstrates two approaches to implement private properties in JavaScript:
A. Using `Object.defineProperty` (ES5+)
B. Using ES6+ getter and setter syntax
==================================================
*/

const _radius = new WeakMap(); // Private WeakMap for storing radius

class Circle {
  // ================================================================
  //               Constructor: Private Property Initialization
  // ================================================================
  constructor(radius) {
    _radius.set(this, radius);

    // ================================================================
    //               Approach A: Object.defineProperty (ES5+)
    // ================================================================
    // Uncomment the following block to use this approach:
    /*
        Object.defineProperty(this, "radius", {
          get: function () {
            return _radius.get(this); // Access private radius
          },
          set: function (value) {
            _radius.set(this, value); // Set private radius
          },
        });
        */
  }

  // ================================================================
  //               Approach B: ES6+ Getters and Setters (Syntax Sugar)
  // ================================================================
  get radius() {
    return _radius.get(this); // Access private radius
  }

  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius"); // Validation for radius
    _radius.set(this, value); // Update private radius
  }
}

// ================================================================
//                       Instance Creation
// ================================================================
const c = new Circle(1); // Create a Circle instance with radius 1
c.radius = 2; // Update radius using the setter
console.log(c.radius); // Access radius using the getter
