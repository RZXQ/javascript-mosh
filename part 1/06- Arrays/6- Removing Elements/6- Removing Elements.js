const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(last);
console.log(numbers);

// Beginning
const first = numbers.shift();
console.log(first);
console.log(numbers);

// Middle
numbers.splice(1, 1);
console.log(numbers);
