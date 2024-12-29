let numbers = [1, 2, 3, 4];

// --- 1. Reassign to an Empty Array ---
numbers = [];

// --- 2. Set Length to 0 ---
numbers.length = 0;

// --- 3. Use Splice to Remove All Elements ---
numbers.splice(0, numbers.length);

// --- 4. Use While Loop with Pop ---
while (numbers.length > 0) numbers.pop();
