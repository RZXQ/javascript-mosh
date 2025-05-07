// ===========================================================
//                      Parent Class: Shape
// ===========================================================
function Shape(color) {
  this.color = color;
}

// ===========================================================
//                  Child Class: Circle
// Note: All three approaches work:
// 1. Shape.call(this, color);
// 2. Shape.apply(this, [color]);
// 3. Shape.bind(this)(color);
// ===========================================================
function Circle(radius, color) {
  // Shape(color); // This would assign color property to window object
  Shape.call(this, color); // Call base class constructor directly to initialize instance properties
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
