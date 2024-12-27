// Logical OR (||):
// - Evaluates from left to right.
// - Returns the first truthy value it encounters.
// - If no truthy value is found, it returns the last falsy value.
console.log(false || "Reacher"); // "Reacher" (first truthy value)
console.log(false || 1); // 1 (first truthy value)
console.log(false || 1 || 2); // 1 (first truthy value)

// Logical AND (&&):
// - Evaluates from left to right.
// - Returns the first falsy value it encounters.
// - If no falsy value is found, it returns the last truthy value.
console.log(true && "Reacher"); // "Reacher" (last truthy value)
console.log(false && "Reacher"); // false (first falsy value)
console.log("Hello" && 42); // 42 (last truthy value)
console.log(0 && "Reacher"); // 0 (first falsy value)
console.log(null && "Anything"); // null (first falsy value)

// Example: Assigning Default Values with OR
let currentColor = undefined || "blue"; // Uses "blue" because undefined is falsy
console.log(currentColor); // "blue"
