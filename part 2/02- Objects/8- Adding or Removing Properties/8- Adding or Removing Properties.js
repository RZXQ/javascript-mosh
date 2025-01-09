function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(5);

// -----------------------------------------------------------
// Adding properties using dot notation
// -----------------------------------------------------------
circle.location = { x: 1 };

// -----------------------------------------------------------
// Adding properties using bracket notation
// -----------------------------------------------------------
const propertyName = "location";
circle[propertyName] = { x: 1 };

// -----------------------------------------------------------
// Deleting a property
// -----------------------------------------------------------
delete circle.location;
