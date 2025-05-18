function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle, Shape);
extend(Square, Shape);

const c = new Circle(10, "red");
const s = new Square(10, "blue");

console.log(c);
console.log(s);
