// -----------------------------------------------------------
// Constructor function to create Circle objects
// -----------------------------------------------------------
// When using the constructor function, three things happen:
// 1. An empty object is created.
// 2. Properties are initialized.
// 3. The object (this) is returned.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
    console.log(this);
  };
}

// -----------------------------------------------------------
// Example usage
// -----------------------------------------------------------
const circle = new Circle(5);
circle.draw();
