// ===========================================================
//            Strict Equality Operator (checks type and value, NO type conversion)
// ===========================================================

console.log(1 === 1); // true (both type and value identical)
console.log("1" === 1); // false (types differ: string vs number)

// ===========================================================
//      Loose Equality Operator (checks value ONLY, includes type conversion)
// ===========================================================

console.log(1 == 1); // true (values identical, same types)
console.log("1" == 1); // true (string "1" converted to number 1)
console.log(true == 1); // true (boolean true converted to number 1)
