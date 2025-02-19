// ===========================================================
//                 Implementation Detail
// ===========================================================
const _radius = new WeakMap();

// ===========================================================
//                   Public Interface
// ===========================================================
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}

// ===========================================================
//                   Module Exports
// ===========================================================

// 1. Export multiple classes
// - module.exports is an object containing multiple properties.
// - When imported, it needs destructuring:
//   const { Circle } = require('./circle');
//
// module.exports.Circle = Circle;
// module.exports.Square = Square;

// 2. Export a single class
// - module.exports is assigned directly to Circle.
// - Since a class is essentially a function object, module.exports still holds an object,
//   but in this case, it's the class itself, not an object with named properties.
//
// - When imported, it can be used directly without destructuring:
//   const Circle = require('./circle');
module.exports = Circle;
