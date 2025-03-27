// Description:
// Write a JavaScript function called `generatePattern` that takes a positive integer (`rowCount`) as input.
// The function should create a pattern of stars ('*'), where each row contains one more star than the previous one, up to the number of rows specified by the input.
//
// Example:
// Input: 5
// Output:
// *
// **
// ***
// ****
// *****

function generatePattern(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(generatePattern(5));
