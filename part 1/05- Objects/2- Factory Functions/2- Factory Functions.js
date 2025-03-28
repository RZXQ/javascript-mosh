// Factory function using full syntax to create a circle object
function createCircle1(radius) {
  return {
    radius: radius, // explicitly defining 'radius' property
    draw: function () {
      // explicitly defining 'draw' method
      console.log("draw");
    },
  };
}

// Factory function using shorter ES6 syntax for object literals and methods
function createCircle2(radius) {
  return {
    radius, // shorter syntax (ES6): automatically assigns property from parameter
    draw() {
      // concise method definition (ES6 shorthand syntax)
      console.log("draw");
    },
  };
}

// Creating and logging circle object made with full syntax
const circle1 = createCircle1(1);
console.log(circle1);

// Creating and logging circle object made with shorter ES6 syntax
const circle2 = createCircle2(2);
console.log(circle2);
