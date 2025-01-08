// -----------------------------------------------------------
// Factory function to create circle objects
// -----------------------------------------------------------
function createCircle(radius) {
  return {
    radius, // Circle radius
    draw() {
      // Method to draw the circle
      console.log("draw");
    },
  };
}

// -----------------------------------------------------------
// Create circle objects
// -----------------------------------------------------------
const circle1 = createCircle(1); // Circle with radius 1
const circle2 = createCircle(2); // Circle with radius 2
