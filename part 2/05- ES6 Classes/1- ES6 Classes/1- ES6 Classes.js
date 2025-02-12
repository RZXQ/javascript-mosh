// ===========================================================
//            Constructor Function (Pre-ES6)
// ===========================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// ===========================================================
//              ES6 Class (Syntactic Sugar)
// ===========================================================
class Circle {
  constructor(radius) {
    this.radius = radius;

    // A. Method defined here is created PER INSTANCE (not in prototype)
    this.move = function () {
      console.log("move");
    };
  }

  // B. Method defined here is in PROTOTYPE (shared between instances)
  draw() {
    console.log("draw");
  }
}

const circle = new Circle(1);
console.log(typeof Circle); // Output: "function"
