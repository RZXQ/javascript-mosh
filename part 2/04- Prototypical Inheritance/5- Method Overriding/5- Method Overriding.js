function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicate in Shape");
};

function Circle() {}

extend(Circle, Shape);

// Override the default behavior in Shape
Circle.prototype.duplicate = function () {
  console.log("Duplicate in Circle");
  // Shape.prototype.duplicate(); // if not using `this` in parent's duplicate method, both works
  // Shape.prototype.duplicate.call(this); // if using `this` in parent's duplicate method
};

const c = new Circle(10);
c.duplicate();
console.log(c);
