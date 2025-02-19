// ===========================================================
//                      Module Concept
// ===========================================================
// - A module is a separate file in JavaScript.
// - Benefits:
//   1. Maintainability: Better organization of code.
//   2. Reusability: Can be used in multiple parts of an application.
//   3. Abstraction: Hides complexity, exposing only essential details.

// ===========================================================
//                      Circle Class
// ===========================================================
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius); // Private property stored in WeakMap
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// ===========================================================
//                      Example Usage
// ===========================================================
const c = new Circle(10);
console.log(_radius.get(c));
