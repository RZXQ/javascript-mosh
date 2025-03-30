// ===========================================================
//                        `filter()`
// ===========================================================

const numbers = [1, -1, 2, 3];

// 1. filter() creates a new array internally ([])
// 2. It iterates over each element in the original array
// 3. For each element, the callback checks the condition provided (n >= 0)
// 4. If the callback returns true, the element is added to the new array
// 5. After iteration finishes, filter() returns the new array ([1, 2, 3])

console.log(numbers.filter((n) => n >= 0)); // Output: [1, 2, 3]
