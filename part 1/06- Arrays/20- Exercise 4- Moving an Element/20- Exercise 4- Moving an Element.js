// Task: Create function `move` to shift array elements by given offset
// - Input: An array, the index of the element to move, and the offset positions
// - Output: New array with the element moved; original array unchanged
// - Handle invalid offsets by logging an error
// Example: move([1, 2, 3, 4], 1, 2) ➜ [1, 3, 4, 2]

const numbers = [1, 2, 3, 4];

// ==================== Move Element ====================
const output = move(numbers, 1, 2);
console.log(output);

// ==================== Function: move ====================
function move(array, index, offset) {
  const position = index + offset;

  // --- Validation ---
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];

  // --- Cut and Paste ---
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);

  return output;
}
