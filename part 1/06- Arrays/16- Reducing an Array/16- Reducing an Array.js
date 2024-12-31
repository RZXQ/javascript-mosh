const numbers = [1, -1, 2, 3];

// ==================== 1. Using `reduce()` with an Initial Value ====================
const sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum1);

// ==================== 2. Using `reduce()` without an Initial Value ====================
const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(sum2);
