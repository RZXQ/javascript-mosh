// ==================== 1- Arithmetic Operators ====================
let a = 10,
  b = 3;
a + b;
a - b;
a * b;
a / b;
a % b;
a ** b;
a++;
b--;

// ==================== 2- Assignment Operators ====================
let x = 5;
x += 3;
x -= 2;
x *= 4;
x /= 6;
x %= 3;

// ==================== 3- Comparison Operators ====================
10 > 5;
10 < 5;
10 >= 5;
10 <= 5;
10 === 5;
10 !== 5;

// ==================== 4- Equality Operators ====================
5 == "5";
5 === "5";
5 != "5";
5 !== "5";

// ==================== 5- Logical Operators ====================
true && false;
true || false;
!true;

// ==================== 6- Ternary Operator ====================
let age = 20,
  canVote = age >= 18 ? "Yes" : "No";

// ==================== 7- Logical Operators with Non-booleans ====================
false || "Reacher"; // First truthy value or last falsy if no truthy
false || 1; // 1 (First truthy value)
false || 1 || 2; // 1 (First truthy value)
true && "Reacher"; // Last truthy value
false && "Reacher"; // First falsy value
42 && "Hello"; // Last truthy value
0 && "Reacher"; // First falsy value
let currentColor = undefined || "blue"; // Default value

// ==================== 8- Operator Precedence ====================
10 + 5 * 3;
(10 + 5) * 3; // Parentheses first
