const numbers = [3, 4];

// --- 1. Add to the End ---
numbers.push(5, 6);

// --- 2. Add to the Beginning ---
numbers.unshift(1, 2);

// --- 3. Add to the Middle ---
numbers.splice(2, 0, "a", "b");

console.log(numbers);
