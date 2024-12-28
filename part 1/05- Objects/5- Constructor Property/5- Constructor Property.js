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
console.log(circle1.constructor); // Output: [Function: Circle] (Circle was created using a constructor function)

let x = {};
console.log(x.constructor); // Output: [Function: Object] (x was created using the Object constructor by default)

const circle2 = createCircle(1);
console.log(circle2.constructor); // Output: [Function: Object] (circle2 is created using a factory function, which creates plain objects)
