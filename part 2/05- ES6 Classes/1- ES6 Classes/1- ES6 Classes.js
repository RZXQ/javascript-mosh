// ===========================================================
//                      Constructor Function
// ===========================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// ===========================================================
//                      ES6 Class: Syntax Sugar
// ===========================================================
class Circle {
  constructor(radius) {
    this.radius = radius;
    // A. Method defined here is not in prototype
    this.move = function () {
      console.log("move");
    };
  }

  // B. draw method is defined in prototype (not inside constructor)
  draw() {
    console.log("draw");
  }
}

const circle = new Circle();
