function Circle(radius) {
  // demo or this
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);
Circle(2);

console.log(circle);
