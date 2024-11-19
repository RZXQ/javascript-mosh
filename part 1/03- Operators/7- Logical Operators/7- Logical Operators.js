// Logical AND
let highIncome = false;
let highGoodCreditScore = true; // Corrected variable name
let eligibleForLoan = highIncome && highGoodCreditScore;
console.log("Eligible for Loan (AND):", eligibleForLoan); // Output: false

// Logical OR
eligibleForLoan = highIncome || highGoodCreditScore; // Reassigning the same variable
console.log("Eligible for Loan (OR):", eligibleForLoan); // Output: true

// Logical NOT
let applicationRefused = !eligibleForLoan;
console.log("Application Refused:", applicationRefused); // Output: false
