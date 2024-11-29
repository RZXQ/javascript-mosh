// camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);
