const numbers = [1, 2, 3, 4];

// --- 1. Remove from the End ---
const last = numbers.pop();
console.log(last);
console.log(numbers);

// --- 2. Remove from the Beginning ---
const first = numbers.shift();
console.log(first);
console.log(numbers);

// --- 3. Remove from the Middle ---
numbers.splice(1, 1);
console.log(numbers);
