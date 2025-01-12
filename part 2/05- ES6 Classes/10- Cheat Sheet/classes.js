// ================================================================
//                         Circle Class
// ================================================================
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // This will be available on the Circle class (Circle.parse())
  static parse(str) {}

  // These methods will be added to the prototype.
  draw() {}
}

// ================================================================
//          Square Class with Symbol-Based Private Members
// ================================================================
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
    // "Kind of" private property
    this[_size] = size;
  }

  // "Kind of" private method
  [_draw]() {}
}

// ================================================================
//      Rectangle Class with WeakMap-Based Private Members
// ================================================================
const _width = new WeakMap();

class Rectangle {
  constructor(width) {
    _width.set(this, width);
  }

  draw() {
    console.log("Rectangle with width " + _width.get(this));
  }
}

// ================================================================
//                    Inheritance Example
// ================================================================
class Triangle extends Shape {
  constructor(color) {
    // To call the base constructor
    super(color);
  }

  draw() {
    // Call the base method
    super.draw();

    // Do some other stuff here
  }
}
