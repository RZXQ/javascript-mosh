class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  static parse(jsonString) {
    // ===========================================================
    //                Object Destructuring Example
    // Extracts 'radius' from parsed JSON object
    // Example input: '{"radius": 5}' → {radius: 5}
    // ===========================================================
    const { radius } = JSON.parse(jsonString);

    // ===========================================================
    //                 Array Destructuring Example
    // Extracts first two values from array, ignoring third element
    // Example: [10, 20, 30] → diameter1=10, diameter2=20
    // ===========================================================
    const diameterOptions = [10, 20, 30];
    const [defaultDiameter1, defaultDiameter2] = diameterOptions;

    return new Circle(radius);
  }

  draw() {}
}

// Usage remains the same
console.log(Circle.parse('{"radius":1}'));
const circle = new Circle(1);
