// ===========================================================
//                      Array.push()
// returns: The new length  property of the object upon which the method was called.
// ===========================================================

const numbers = [3, 4];
const pushReturn = numbers.push(5, 6); // returns 4

// ===========================================================
//                      Array.unshift()
// returns: The new length  property of the object upon which the method was called.
// ===========================================================

const unshiftReturn = numbers.unshift(1, 2); // returns 6

// ===========================================================
//                      Array.splice()
// returns: An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.
// ===========================================================

const spliceReturn = numbers.splice(2, 0, "a", "b"); // returns []
