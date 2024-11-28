function createCircle(radius) {
  return {
    radius, // 1. Circle radius
    draw() {
      // 2. Method to draw the circle
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1); // Create circle1 with radius 1
console.log(circle1);

const circle2 = createCircle(2); // Create circle2 with radius 2
console.log(circle2);
