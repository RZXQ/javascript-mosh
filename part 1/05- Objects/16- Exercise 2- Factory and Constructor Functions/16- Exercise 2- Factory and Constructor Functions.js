function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = createAddress("a", "b", "c");
console.log(address1);
const address2 = new Address("a", "b", "c");
console.log(address2);
