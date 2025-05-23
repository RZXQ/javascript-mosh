// ===========================================================
//                    1. Using `for...of` Loop
// ===========================================================

const numbers = [1, 2, 3];
for (let num of numbers) console.log(num);

// ===========================================================
//                  2. Using `forEach` Method
// ===========================================================

numbers.forEach((num, idx) => console.log(idx, num));
