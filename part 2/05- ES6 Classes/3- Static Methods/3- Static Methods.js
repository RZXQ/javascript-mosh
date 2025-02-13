class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // ===========================================================
  //           Static Method: parse
  // Parses a JSON string and creates a new Circle instance.
  //
  // Object Destructuring Example:
  //   Given a JSON string with multiple properties, e.g., '{"radius": 5, "color": "blue"}':
  //
  //   Step 1: Parse the JSON string into an object:
  //           const circleData = JSON.parse('{"radius": 5, "color": "blue"}');
  //           // circleData is now { radius: 5, color: "blue" }
  //
  //   Step 2: Use object destructuring to extract the 'radius' property:
  //           const { radius } = circleData;
  //           // The variable 'radius' now holds the value 5.
  // ===========================================================
  static parse(jsonString) {
    const { radius } = JSON.parse(jsonString);

    // ===========================================================
    //                 Array Destructuring Example:
    //   Extracts the first two elements from an array.
    //
    //   Example:
    //           const diameterOptions = [10, 20, 30];
    //           const [defaultDiameter1, defaultDiameter2] = diameterOptions;
    //           // defaultDiameter1 is 10, defaultDiameter2 is 20.
    // ===========================================================
    const diameterOptions = [10, 20, 30];
    const [defaultDiameter1, defaultDiameter2] = diameterOptions;
    console.log(
      `Default diameters: ${defaultDiameter1} and ${defaultDiameter2}`,
    );

    return new Circle(radius);
  }

  draw() {
    console.log(`Drawing a circle with a radius of ${this.radius}`);
  }
}

// Usage Example:
const circle = Circle.parse('{"radius": 1}');
console.log(circle);
circle.draw();
