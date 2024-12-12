function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// 1. Iterate over keys and values using `for...in`
//    - Skip methods (function properties) using a conditional check
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key);
    console.log(circle[key]);
  }
}

// 2. Iterate over keys using `Object.keys(...)`
for (let key of Object.keys(circle)) {
  console.log(key);
}

// 3. Iterate over values using `Object.values(...)`
for (let value of Object.values(circle)) {
  console.log(value);
}

// 4. Use the `in` operator to check if a property exists
console.log("radius" in circle);
