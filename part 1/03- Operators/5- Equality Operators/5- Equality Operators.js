// ===========================================================
//            Strict Equality (Type and Value Check)
// ===========================================================

console.log(1 === 1); // true (both type and value are the same)
console.log("1" === 1); // false (type is different: string vs number)

// ===========================================================
//      Loose Equality (Value Check with Type Conversion)
// ===========================================================

console.log(1 == 1); // true (both values are the same)
console.log("1" == 1); // true (string "1" is converted to number 1)
console.log(true == 1); // true (true is converted to number 1)
