// ==================== 1- If...else ====================
let condition = true;
if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// ==================== 2- Switch...case ====================
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("You chose apple");
    break;
  case "banana":
    console.log("You chose banana");
    break;
  default:
    console.log("Unknown fruit");
}

// ==================== 3- For Loop ====================
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// ==================== 4- While Loop ====================
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// ==================== 5- Do...while Loop ====================
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// ==================== 6- Infinite Loops ====================
// Use with caution - can crash the program!
// while (true) { /* Infinite loop */ }
// for (;;) { /* Infinite loop */ }

// ==================== 7- For...in ====================
let obj = { name: "John", age: 30 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`); // Outputs keys and values
}

// ==================== 8- For...of ====================
let array = ["apple", "banana", "cherry"];
for (let fruit of array) {
  console.log(fruit); // Outputs each array element
}

// ==================== 9- Break and Continue ====================
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Exit loop at 3
  if (i === 2) continue; // Skip 2
  console.log(i); // Outputs 0, 1, 3, 4
}
