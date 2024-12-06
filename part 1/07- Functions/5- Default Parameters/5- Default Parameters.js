// 1. ES6+ syntax: Default values can be set directly in the parameter list.
// 2. If a parameter has a default value, all subsequent parameters should also have defaults.
function interest(principal, rate = 3.5, years = 5) {
  // 3. Traditional method (pre-ES6): Use `||` to set default values if needed.
  // rate = rate || 3.5; // Defaults `rate` to 3.5 if falsy.
  // years = years || 5; // Defaults `years` to 5 if falsy.

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
