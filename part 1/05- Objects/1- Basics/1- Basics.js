// 1. The circle object groups related properties and methods together.
//    - This allows for better organization and encapsulation of related data and functionality.

// 2. Using object literal syntax to define the 'circle' object:
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

circle.draw();
