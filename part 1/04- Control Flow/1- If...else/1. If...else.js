// ===========================================================
//        Conditional Statements in JavaScript
// ===========================================================
// JavaScript has two conditional statements:
// 1. if...else
// 2. switch...case

// ===========================================================
//         Task: Display Greeting Based on Time
// ===========================================================

let hour = 6;
if (hour >= 6 && hour < 12) {
  console.log("Good morning!"); // 6am to 12pm
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!"); // 12pm to 6pm
} else {
  console.log("Good evening!"); // Any other time
}
