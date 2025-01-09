// -----------------------------------------------------------
// arrayBase
// -----------------------------------------------------------
let myArray = [];
console.log(myArray); // Logs the array and its prototype (Array.prototype)

// -----------------------------------------------------------
// circleBase
// -----------------------------------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle); // Logs the Circle instance and its prototype (Circle.prototype)
