/*
/*
TASK DESCRIPTION:

Write a JavaScript program to find the maximum number in a given array. 
Your program must implement and demonstrate two alternative methods clearly:

1. Finding Maximum Using a Traditional Loop:
   - Define a function named `getMaxTraditional` that takes a single parameter:
     - An array of numbers.
   - Check if the array is empty, and if so, return `undefined`.
   - Utilize a loop to iterate through each array element to determine the highest value.
   - Return the maximum value found in the array.

2. Finding Maximum Using the `reduce()` Method:
   - Define another function named `getMaxReduce` that accepts the same parameter:
     - An array of numbers.
   - Also verify if the array is empty and return `undefined` in such case.
   - Use the JavaScript array method `reduce()` to directly compute the highest number from the array.
   - Return the maximum value calculated.

Finally, demonstrate both methods clearly:
- Example input: `[1, 5, 3, 4]`
- Call both functions and log their output to console.

Expected output for the provided example array:

5
5
*/

const numbers = [1, 5, 3, 4];

// ==================== Approach A: Using Traditional Loop ====================
function getMaxTraditional(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(getMaxTraditional(numbers));

// ==================== Approach B: Using `reduce` Method ====================
function getMaxReduce(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}

console.log(getMaxReduce(numbers));
