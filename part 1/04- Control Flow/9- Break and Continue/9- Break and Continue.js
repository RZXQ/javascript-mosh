// Example with break:
let i = 0;
while (i <= 10) {
  if (i === 5) {
    i++; // Increment i before breaking out of the loop
    break; // Exit the loop completely
  }
  console.log(i);
  i++; // Increment i for the next iteration
}

// Example with continue:
let j = 0;
while (j <= 10) {
  if (j === 5) {
    j++; // Increment j to avoid infinite loop
    continue; // Skip the current iteration and move to the next
  }
  console.log(j);
  j++; // Increment j for the next iteration
}
