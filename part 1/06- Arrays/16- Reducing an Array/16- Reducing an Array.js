const numbers = [1, -1, 2, 3];

// ===========================================================
//                  1. `reduce()` with Initial Value
// ===========================================================

// Execution steps:
// 1. Initial accumulator (acc) = 0 (initial value provided explicitly)
// 2. acc (0) + curr (1) = 1
// 3. acc (1) + curr (-1) = 0
// 4. acc (0) + curr (2) = 2
// 5. acc (2) + curr (3) = 5 → final result
const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1); // outputs: 5

// ===========================================================
//               2. `reduce()` without Initial Value
// ===========================================================

// Execution steps (no explicit initial value, using first element as initial acc):
// 1. Initial accumulator (acc) = 1 (taken from first array element)
// 2. acc (1) + curr (-1) = 0
// 3. acc (0) + curr (2) = 2
// 4. acc (2) + curr (3) = 5 → final result
const sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log(sum2); // outputs: 5
