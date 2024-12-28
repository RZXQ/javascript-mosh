// Address: Creates an object with street, city, and zipCode.
// areEqual: Checks if two addresses have identical properties.
// areSame: Checks if two addresses are the same object.

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false
