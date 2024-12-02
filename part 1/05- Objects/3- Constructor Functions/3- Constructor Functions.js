// camelCase: oneTwoThreeFour
// PascalCase: OneTwoThreeFour

// Using a constructor function to create an object:
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);
