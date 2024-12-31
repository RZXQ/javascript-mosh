const numbers = [1, 2, 3];

// ==================== 1. Using `join()` ====================
console.log(numbers.join(","));

// ==================== 2. Using `split()` ====================
const message1 = "This is my first message";
console.log(message1.split(" "));

// ==================== 3. Combining `split()` and `join()` ====================
const message2 = "Creating arrays in JavaScript";
console.log(message2.split(" ").join("-"));
