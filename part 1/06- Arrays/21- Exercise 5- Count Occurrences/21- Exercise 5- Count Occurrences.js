/// 1. This example demonstrates two approaches to count the occurrences of a specific element in an array:
///    - Approach A: Using a `for...of` loop to manually iterate through the array.
///    - Approach B: Using the `reduce` method to accumulate the count.

const numbers = [1, 2, 3, 4, 1]; // Define an array of numbers

// Count occurrences of the element `1`
const count = countOccurrences(numbers, 1);
console.log(count); // Output: 2

// Function to count occurrences
function countOccurrences(array, searchElement) {
  // Approach A: Using a loop
  // let count = 0;
  // for (let element of array) {
  //   if (element === searchElement) count++; // Increment count if element matches searchElement
  // }
  // return count;

  // Approach B: Using reduce
  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0; // Check if currentValue matches searchElement
    console.log(accumulator, currentValue, searchElement); // Debug log to show intermediate values
    return accumulator + occurrence; // Add occurrence (1 or 0) to accumulator
  }, 0); // Initial value of accumulator is set to 0
}
