// ===========================================================
//                    1. Using `every()`
// ===========================================================

const numbers = [1, -1, 2, 3];

// Iterate to the 1st element (1), then call callback function with element (1)
// Continue iteration if callback returns true; immediately stop if it returns false.
console.log(numbers.every((n) => n >= 0));

// ===========================================================
//                    2. Using `some()`
// ===========================================================

// Iterate to the 1st element (1), then call callback function with element (1)
// Continue iteration if callback returns false; immediately stop if it returns true.
console.log(numbers.some((n) => n >= 0));
