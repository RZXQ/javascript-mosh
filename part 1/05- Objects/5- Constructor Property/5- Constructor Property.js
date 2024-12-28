function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = new Circle(1);
console.log(circle1.constructor); // Output: [Function: Circle]

let x = {};
console.log(x.constructor); // Output: [Function: Object]

const circle2 = createCircle(1);
console.log(circle2.constructor); // Output: [Function: Object]
