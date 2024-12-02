// Using a factory function to create an object.
// It centralizes the logic for object creation.
function createCircle(radius) {
  return {
    radius, // Shorthand property name when key and value are the same.

    // A. Declaring a method using shorthand syntax
    draw() {
      console.log("draw");
    },

    // B. Traditional function declaration syntax
    // draw: function () {
    //   console.log("draw");
    // }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
