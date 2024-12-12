function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// 1. Adding a property using dot notation
circle.location = { x: 1 };
// 2. Adding a property using bracket notation
circle["location"] = { x: 2 };

// 3. Dynamically accessing or setting a property
const propertyName = "location";
circle[propertyName] = { x: 3 };

// 4. Deleting a property
delete circle.location;
