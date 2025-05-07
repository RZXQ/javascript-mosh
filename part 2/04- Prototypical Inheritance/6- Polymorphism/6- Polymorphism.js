// ===========================================================
// Polymorphism in Action:
// - Polymorphism allows objects of different classes to be treated as objects of a common parent class.
// - Here, `Circle` and `Square` inherit from `Shape`, and both override the `duplicate` method.
// - At runtime, the appropriate `duplicate` method is invoked based on the object's type.
// ===========================================================

function Shape() {}

function Circle() {}

function Square() {}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle, Shape);
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("Duplicate in Circle");
};

Square.prototype.duplicate = function () {
  console.log("Duplicate in Square");
};

const shapes = [new Circle(), new Square()];

for (let i of shapes) {
  i.duplicate();
}
