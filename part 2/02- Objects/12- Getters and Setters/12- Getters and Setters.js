function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 }; // Private variable

  // -----------------------------------------------------------
  // Define getter and setter for defaultLocation
  // -----------------------------------------------------------
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });

  this.radius = radius; // Public property
  this.draw = function () {
    console.log("draw");
  };
}

// -----------------------------------------------------------
const circle = new Circle(1);
circle.defaultLocation = { x: 2, y: 2 }; // Setter is called
console.log(circle.defaultLocation); // Getter is called
