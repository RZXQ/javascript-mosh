// Logical OR (||): Returns the first truthy value or the last falsy value.
console.log(false || "Reacher"); // "Reacher"
console.log(false || 1); // 1
console.log(false || 1 || 2); // 1

// Logical AND (&&): Returns the first falsy value or the last truthy value.
console.log(true && "Reacher"); // "Reacher"
console.log(false && "Reacher"); // false
console.log("Hello" && 42); // 42
console.log(0 && "Reacher"); // 0
console.log(null && "Anything"); // null

// Example: Assigning Default Values
let currentColor = undefined || "blue"; // Use default if the first is falsy
console.log(currentColor); // "blue"
