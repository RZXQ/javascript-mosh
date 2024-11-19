// 1. The result of a logical operation is not necessarily a boolean true or false.
///    It depends on the operands involved.
///
/// Falsy (not a boolean false) values in JavaScript:
/// - undefined
/// - null
/// - 0
/// - false
/// - '' (empty string)
/// - NaN
///
/// Anything that is not falsy is considered truthy.

console.log(false || "Reacher"); /// "Reacher" (truthy value is returned)
console.log(false || 1); /// 1 (truthy value is returned)
console.log(false || 1 || 2); /// 1 (short-circuiting: returns first truthy value, 1)

/// 2. Real-World Example: Assigning Default Values
let userColor = undefined; /// User has not selected a color
let defaultColor = "blue"; /// Default color to use
let currentColor = userColor || defaultColor; /// Chooses defaultColor if userColor is falsy
console.log(currentColor); /// Output: "blue"
