// -----------------------------------------------------------
// Every object has a constructor property referencing its creator function
// -----------------------------------------------------------
let x = {}; // Equivalent to: let x = new Object()
console.log(x.constructor); // Logs: [Function: Object]
