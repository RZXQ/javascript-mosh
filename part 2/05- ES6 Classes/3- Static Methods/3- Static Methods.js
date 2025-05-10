// ===========================================================
//                Class-based Syntax (ES6+)
// ===========================================================

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Static method -- only one copy exists, shared by all instances.
  // Called on Circle class itself, not on objects created by Circle.
  static parse(str) {
    return new Circle(JSON.parse(str).radius);
  }

  // Instance method -- NOT static, each instance inherits access from the prototype.
  // No separate copy per instance; the method lives on Circle.prototype.
  draw() {}
}
const circle = Circle.parse('{"radius":10}');

console.log(circle);

// ===========================================================
//                Constructor Function Syntax (Pre-ES6)
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

// Instance method -- shared via prototype, NOT duplicated per instance.
Circle.prototype.draw = function () {
  console.log("draw");
};

// Static method -- only one copy exists on the constructor function itself.
// Not accessible from instances, only from Circle (the function object).
Circle.parse = function (str) {
  return new Circle(JSON.parse(str).radius);
};

const circle = Circle.parse('{"radius":10}');

console.log(circle);
