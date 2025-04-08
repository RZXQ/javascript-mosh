/*
TASK DESCRIPTION:

Write a JavaScript program that counts how many times a specific element appears within a given array. Your program must provide two alternative methods of solving this task and clearly demonstrate both approaches:

1. Counting Occurrences using a Loop:
   - Create a function named `countOccurrences` that takes two parameters:
      a. An array of elements,
      b. The element whose occurrences you want to count.
   - Utilize a loop construct to iterate through the array and compare each element with the target element.
   - Return the total count of matching occurrences.

2. Counting Occurrences using the `reduce()` Method:
   - Create a second function named `countOccurrencesReduce` with the same two parameters.
   - Implement counting logic using the JavaScript `reduce()` method to efficiently accumulate occurrences of the target element.
   - Return the computed total occurrences.

Finally:
- Create an example array `[1, 2, 3, 4, 1]`.
- Call both created functions, search for number `1const numbers = [1, 2, 3, 4, 1];
 */

// ==================== Approach A: Using a Loop ====================
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

const countA = countOccurrences(numbers, 1);
console.log(countA);

// ==================== Approach B: Using `reduce` ====================
function countOccurrencesReduce(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    return currentValue === searchElement ? accumulator + 1 : accumulator;
  }, 0);
}

const countB = countOccurrencesReduce(numbers, 1);
console.log(countB);
