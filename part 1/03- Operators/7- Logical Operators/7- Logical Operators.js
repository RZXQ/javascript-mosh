// ===========================================================
//                Logical AND (&&) Operator
// ===========================================================

let income = false;
let creditScore = true;
let isEligible = income && creditScore;
console.log("Eligible (AND):", isEligible); // false

// ===========================================================
//                Logical OR (||) Operator
// ===========================================================

isEligible = income || creditScore;
console.log("Eligible (OR):", isEligible); // true

// ===========================================================
//                 Logical NOT (!) Operator
// ===========================================================

let isRefused = !isEligible;
console.log("Application Refused:", isRefused); // false
