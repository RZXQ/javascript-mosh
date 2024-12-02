// 1. Using a factory function to create an object
//    - A factory function centralizes the logic for creating similar objects,
//      avoiding repetition and improving maintainability.
function createCircle(radius) {
  return {
    radius, // 1.1 Property: The radius of the circle (shorthand syntax for radius: radius)

    // 1.2 Method: Declared using shorthand syntax (equivalent to draw: function() {...})
    draw() {
      console.log("draw");
    },

    // 1.3 Alternative method declaration (commented out for comparison)
    // draw: function () {
    //   console.log("draw");
    // }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
