/// 1. This example demonstrates that functions in JavaScript are objects.
///    - Functions have properties like `name`, `length`, and `constructor`.
///    - Functions can be used as constructors to create objects using the `new` keyword.
///    - Functions provide utility methods like `call` and `apply`.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// 2. Creating an instance using the `new` keyword
const circle = new Circle(1); // Creates a new Circle instance
console.log(circle);

// 3. Function properties (functions are objects)
console.log(Circle.name); // Function name: "Circle"
console.log(Circle.length); // Number of parameters: 1
console.log(Circle.constructor); // Constructor reference: [Function: Function]

// 4. Using the `call` method to invoke the Circle constructor
Circle.call({}, 1); // Calls Circle with `this` bound to an empty object

// 5. Explanation: `new Circle(1)` is equivalent to Circle.call({}, 1).
const another = new Circle(1); // Internally similar to the above call

// 6. Using the `apply` method to invoke the Circle constructor
Circle.apply({}, [1]); // Similar to `call` but takes arguments as an array
