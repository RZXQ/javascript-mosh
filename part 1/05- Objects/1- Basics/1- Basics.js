// The circle object groups related properties and methods together.
// Use object literal syntax to define the object:
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// The draw method is a function associated with the circle object.
circle.draw();
