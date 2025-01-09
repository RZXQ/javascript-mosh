// Objects created bya given constructor will have the same prototype
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle);
