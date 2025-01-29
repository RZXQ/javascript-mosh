// ===========================================================
//                          numbers.pop()
// ===========================================================

const numbers = [1, 2, 3, 4];
const last = numbers.pop();
console.log(last); // 4
console.log(numbers); // [1, 2, 3]

// ===========================================================
//                          numbers.shift()
// ===========================================================

const first = numbers.shift();
console.log(first); // 1
console.log(numbers); // [2, 3]

// ===========================================================
//                        numbers.splice()
// ===========================================================

const removed = numbers.splice(1, 1);
console.log(removed); // [3]
console.log(numbers); // [2]
