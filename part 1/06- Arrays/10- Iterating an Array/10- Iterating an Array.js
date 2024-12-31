const numbers = [1, 2, 3];

// ==================== 1. Using `for...of` Loop ====================
for (let num of numbers) {
  console.log(num);
}

// ==================== 2. Using `forEach` Method ====================
numbers.forEach((num, idx) => console.log(idx, num));
