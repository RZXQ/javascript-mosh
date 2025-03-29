// Properties: street, city, zipCode
// Function: showAddress(address) logs all key-value pairs of the address

let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
