// Task Description:
// Implement a JavaScript function named `calculateGrade` that accepts an array of numerical marks.
// The function calculates the average mark and returns the corresponding letter grade according to these rules:
// - 1-59: Grade "F"
// - 60-69: Grade "D"
// - 70-79: Grade "C"
// - 80-89: Grade "B"
// - 90-100: Grade "A"
//
// Example:
// Given marks: [80, 80, 50]
// Average: 70 --> Output: "C"

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

const marks = [80, 80, 50];
console.log(calculateGrade(marks));
