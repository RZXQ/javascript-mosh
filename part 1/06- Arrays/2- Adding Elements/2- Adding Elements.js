const numbers = [3, 4];

// 1. End
numbers.push(5, 6);

// 2. Beginning
numbers.unshift(1, 2);

// 3. Middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);
