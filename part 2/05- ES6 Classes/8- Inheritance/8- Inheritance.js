/*
==================================================
               Class Inheritance Example
==================================================
- Demonstrates how to use ES6 `class` and `extends` syntax
  for inheritance.
- Ensures that the parent class is initialized with `super()`
  before accessing or adding subclass-specific properties.
==================================================
*/

// ================================================================
//                          Parent Class
// ================================================================
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

// ================================================================
//                         Child class: Circle
// ================================================================
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

// ================================================================
//                       Instance Creation
// ================================================================
const c = new Circle("red", 1);
console.log(c.color);
console.log(c.radius);
c.move();
c.draw();
