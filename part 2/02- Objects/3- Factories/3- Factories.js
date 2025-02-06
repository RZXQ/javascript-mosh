/* -----------------------------------------------------------
 *                   Factory function
 * ----------------------------------------------------------- */
function createCircle(radius) {
  return {
    radius, // Circle radius
    draw() {
      console.log("draw"); // Method to draw the circle
    },
  };
}

/* -----------------------------------------------------------
 *               Create circle objects
 * ----------------------------------------------------------- */
const circle1 = createCircle(1); // Circle with radius 1
const circle2 = createCircle(2); // Circle with radius 2
