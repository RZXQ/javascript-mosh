const numbers = [1, -1, 2, 3];

// ===========================================================
//                  1. `reduce()` with Initial Value
// ===========================================================

const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

// ===========================================================
//               2. `reduce()` without Initial Value
// ===========================================================

const sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log(sum2);
