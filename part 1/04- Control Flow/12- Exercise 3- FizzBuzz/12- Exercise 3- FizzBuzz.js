// Description:
// Determine if input is divisible by 3, 5, both, or neither, and return the result.
//    - "FizzBuzz" if divisible by both 3 and 5,
//    - "Fizz" if divisible by only 3,
//    - "Buzz" if divisible by only 5,
//    - the input itself if divisible by neither.
// If the input is not a number, return NaN.
function fizzBuzz(input) {
  if (typeof input !== "number") {
    return NaN;
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
  return input;
}

const output = fizzBuzz(5);
console.log(output);
