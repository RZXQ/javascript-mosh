// ===========================================================
//              Default Parameters in ES6+
// Default parameter behavior is essentially identical
// in JavaScript and TypeScript.
// ===========================================================
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// ===========================================================
//              Pre-ES6 Default Values
// In JavaScript (and TypeScript as well), if you have a
// function with parameters and you call it without providing
// values for some of those parameters, they will automatically
// default to `undefined`.
// ===========================================================
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return ((principal * rate) / 100) * years;
}
interest(10);
