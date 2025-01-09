/*
CLOSURE EXPLANATION:

In traditional OOP, private members are stored directly in the object and managed using access modifiers like `private`.
In JavaScript, private variables are stored in the function's local scope and accessed through closures.

Key Differences:

| Feature         | Traditional OOP                          | JavaScript                          |
|------------------|------------------------------------------|--------------------------------------|
| **Storage**      | Inside the object's memory structure     | Local scope of the outer function   |
| **Access**       | Controlled via `private`/`protected`     | Accessed via closures               |
| **Persistence**  | Exists as long as the object exists      | Exists as long as the closure exists|
| **Visibility**   | Hidden by access modifiers               | Not directly visible on the object  |

In JavaScript, closures allow inner functions to "remember" and access variables from their outer function's scope, even after the outer function has returned.
*/

function Circle(radius) {
  // Private variables (stored in local scope, captured by closure)
  let color = "red";
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    // ...
  };

  // Public property (stored on the object itself)
  this.radius = radius;

  // Public method (forms a closure)
  this.draw = function () {
    console.log("draw");
    console.log(defaultLocation); // Access private variable via closure
    console.log(this.radius); // Access public property directly
  };
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // undefined, private variables are not on the object
circle.draw(); // Accesses private (via closure) and public properties
