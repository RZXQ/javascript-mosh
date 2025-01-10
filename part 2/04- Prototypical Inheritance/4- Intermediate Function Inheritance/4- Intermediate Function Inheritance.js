// ===========================================================
//                      Base Class: Shape
// ===========================================================
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// ===========================================================
//                  Derived Class: Circle
// ===========================================================
function Circle(radius, color) {
  Shape.call(this, color); // Call base class constructor
  this.radius = radius;
}

// ===========================================================
//                  Derived Class: Square
// ===========================================================
function Square(size) {
  this.size = size;
}

// ===========================================================
//                    Utility Function: extend
// ===========================================================
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // Set up inheritance
  Child.prototype.constructor = Child; // Restore constructor reference
}

// ===========================================================
//                      Extend Classes
// ===========================================================
extend(Circle, Shape);
extend(Square, Shape);

// ===========================================================
//                      Usage Example
// ===========================================================
const circle = new Circle(2, "red");
console.log(circle);
