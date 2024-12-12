// 1. Defines a `circle` object using object literal syntax.
//    - Groups related properties and methods to encapsulate data and functionality.
//    - Improves code organization and readability.
// 2. Properties:
//    - `radius`: Stores the radius of the circle (numeric value).
//    - `location`: An object that represents the x and y coordinates of the circle.
//    - `isVisible`: A boolean indicating whether the circle is visible.
// 3. Method:
//    - `draw`: A function that prints "draw" to the console.
//      - Demonstrates a behavior of the `circle` object.

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
