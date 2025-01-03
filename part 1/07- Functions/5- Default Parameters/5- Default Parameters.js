// ==================== Default Parameters in ES6+ ====================
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years; // Calculate interest
}

// ==================== Pre-ES6 Default Values ====================
// Traditionally, defaults were set using `||` to handle falsy values:
function interest(principal, rate, years) {
  rate = rate || 3.5; // Defaults rate to 3.5 if falsy
  years = years || 5; // Defaults years to 5 if falsy
  return ((principal * rate) / 100) * years;
}
