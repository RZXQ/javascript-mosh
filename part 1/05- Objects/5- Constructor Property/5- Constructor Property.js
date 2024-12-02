// 1. Every object in JavaScript has a property called 'constructor'.
//    - The 'constructor' property references the function that was used to create the object.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle.constructor); // Output: [Function: Circle]

let x = {};
console.log(x.constructor); // Output: [Function: Object]
