// ===========================================================
//                      Parent Class: Shape
// ===========================================================
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log(this.color); // Demonstrates the use of the 'color' property
  console.log("duplicate");
};

// ===========================================================
//                  Child Class: Circle
// ===========================================================
function Circle(color, radius) {
  Shape.call(this, color); // Call the parent constructor with 'this' and 'color'
  this.radius = radius;
}

// ===========================================================
//                    Utility Function: extend
// ===========================================================
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// ===========================================================
//                      Extend Classes
// ===========================================================
extend(Circle, Shape);

// ===========================================================
//                   Method Override: Circle
// ===========================================================
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); // Call parent method with correct 'this' binding
  console.log("duplicate circle");
};

// ===========================================================
//                      Usage Example
// ===========================================================
const circleInstance = new Circle("red", 5);
circleInstance.duplicate();
