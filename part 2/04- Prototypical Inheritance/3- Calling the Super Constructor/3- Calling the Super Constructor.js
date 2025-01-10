// ===========================================================
// Note: We use Shape.call(this, color) instead of adding `color` in the prototype
// because instance properties like `color` are unique to each object.
// Adding it in the prototype would make it shared among all instances, which is not desired.
// ===========================================================

// ===========================================================
//                      Base Class: Shape
// ===========================================================
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = () => console.log("duplicate");
Shape.prototype.sharedProperty = "shared";

// ===========================================================
//                  Derived Class: Circle
// ===========================================================
function Circle(radius, color) {
  // Shape.call(this, color); // or using Shape.apply(this, [color]) or using Shape.bind(this)(color)
  Shape.call(this, color); // Call base class constructor directly to initialize instance properties
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// ===========================================================
//                      Usage Example
// ===========================================================
const c = new Circle(1, "red");
console.log(c);
console.log(c.sharedProperty);
