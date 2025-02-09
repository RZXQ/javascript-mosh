// ===========================================================
// 1. Prototype Inheritance (inherit this.draw method)
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1); // Circle { radius: 1 }
console.log(c2); // Circle { radius: 2 }

// ===========================================================
// 2. Overwrite the Default toString (from Object Base)
// ===========================================================
Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};

console.log(c1.toString()); // "Circle with radius 1"
console.log(c2.toString()); // "Circle with radius 2"

// ===========================================================
// 3. Instance Members Call Prototype Members and Vice Versa
// ===========================================================
function CircleEx(radius) {
  this.radius = radius;
  this.move = function () {
    this.draw(); // Call the prototype method
    console.log("move");
  };
}

CircleEx.prototype.draw = function () {
  this.move(); // Call the instance method
  console.log("draw");
};

const c3 = new CircleEx(3);
c3.move(); // "draw", "move"
c3.draw(); // "draw", "move"
