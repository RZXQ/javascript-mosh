function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(Circle.name); // "Circle"
console.log(Circle.length); // 1
console.log(Circle.constructor); // [Function: Function]

const obj = {};
Circle.call(obj, 1); // Sets obj.radius = 1
Circle.apply(obj, [1]); // Same as call, with arguments as an array
