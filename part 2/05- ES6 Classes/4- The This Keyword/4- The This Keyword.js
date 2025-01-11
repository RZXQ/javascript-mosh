// ================================================================
//                   Strict Mode: Prevent Global Modifications
// ================================================================

// "use strict";  // Uncomment to enable strict mode

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// Method call: 'this' refers to Circle object
c.draw();

const draw = c.draw;
// Function call: 'this' refers to Window object (in browsers) or global object
draw();

// ================================================================
//                  Class Definition (Strict Mode by Default)
// ================================================================
// Classes in JavaScript are always in strict mode by default,
// meaning 'this' cannot be used to modify the global object.

class Circle {
  draw() {
    console.log(this);
  }
}

const c2 = new Circle();
const drawMethod = c2.draw;
drawMethod(); // undefined
