function Circle(radius) {
  let color = "red";
  this.radius = radius;
  this.draw = function () {
    console.log(color);
  };
}

const circle = new Circle(10);
console.log(circle);
