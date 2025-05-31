// Default import - imports the main export
const Circle = require("./circle");
const circle = new Circle(10);

// Named import - imports specific named export
const { Circle } = require("./circle");
const circle2 = new Circle(15);
circle2.show();
