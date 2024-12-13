function Circle(radius) {
  let defaultLocation = {
    x: 0,
    y: 0,
  };

  // Getter and Setter
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      // some validations
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = { x: 1, y: 2 };
console.log(circle.defaultLocation);
