/// This is an example of Object-oriented Programming (OOP) in JavaScript.
/// It illustrates an object with properties and a method.
let circle = {
  radius: 1, // 1. Circle radius
  location: { x: 1, y: 1 }, // 2. Circle's center location
  isVisible: true, // 3. Visibility status
  draw: function () {
    // 4. Method to draw the circle
    console.log("draw");
  },
};

circle.draw(); // Invokes the draw method
