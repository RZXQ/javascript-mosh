// If a customer has more than 100 points, they are a 'gold' customer
// Otherwise, they are a 'silver' customer

let points = 110;
let type = points > 100 ? "gold" : "silver"; // Ternary operator for determining customer type
console.log(type);
