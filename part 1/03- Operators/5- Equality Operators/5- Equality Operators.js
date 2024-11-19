// Strict equality (checks both type and value)
console.log(1 === 1); // true (both type and value are the same)
console.log("1" === 1); // false (type is different: string vs number)

// Loose equality (checks value, converts type if needed)
console.log(1 == 1); // true (both values are the same)
console.log("1" == 1); // true (string "1" is converted to number 1, then compared)
console.log(true == 1); // true (boolean true is converted to number 1, then compared)
