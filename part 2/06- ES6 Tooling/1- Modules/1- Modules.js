// ===========================================================
//                      Modularity Benefits
// ===========================================================
// 1. Maintainability: Better organized code.
// 2. Reuse: Reuse one or more modules.
// 3. Abstraction: Hide implementation details using private properties.

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
