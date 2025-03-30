// TASK DESCRIPTION:
// 1. Write a function named 'arrayFromRange' that takes two numeric parameters, 'min' and 'max',
// and returns an array containing all the numbers from 'min' up to (and including) 'max'.
// 2. For example, if the input values are (1, 4), the function should generate the array [1, 2, 3, 4].
// Then create a variable named 'numbers' and assign the result of calling 'arrayFromRange'
// with arguments 1 and 4.
// 3. Finally, print the resulting array to the console.

function arrayFromRange(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

const numbers = arrayFromRange(1, 4);
console.log(numbers);
