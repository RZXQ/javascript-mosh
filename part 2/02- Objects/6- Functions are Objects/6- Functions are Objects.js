function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const obj1 = {};
Circle.call(obj1, 1);
obj1.draw();

const obj2 = {};
Circle.apply(obj2, [1]);
obj2.draw();
