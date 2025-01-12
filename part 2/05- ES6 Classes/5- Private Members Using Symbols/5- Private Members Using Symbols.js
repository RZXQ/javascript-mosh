// ================================================================
//                     Symbol-Based Private Properties
// ================================================================

const _radius = Symbol("radius");
const _draw = Symbol("draw");

class Circle {
  // ================================================================
  //               Constructor: Symbol-Based Private Property
  // ================================================================
  constructor(radius) {
    this[_radius] = radius; // Initialize private property using Symbol
  }

  // ================================================================
  //               Symbol-Based Private Prototype Method
  // ================================================================
  [_draw]() {
    console.log(this); // Define a private-like method using Symbol
  }
}

// ================================================================
//                      Instance Creation
// ================================================================

const circle = new Circle(1);
console.log(circle); // Circle instance with Symbol-based private property

// ================================================================
//                HACK: Access Symbol-Based Properties
// ================================================================

// Access Symbol keys and their values
const key = Object.getOwnPropertySymbols(circle)[0];
console.log(circle[key]);
