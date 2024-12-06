const person = {
  firstName: "Mosh",
  lastName: "Hamedani",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    // 1. Exception handling:
    // Check if the provided value is a string. If not, throw an Error.
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    // 2. Exception handling:
    // Ensure the input consists of exactly two parts (first and last name). If not, throw an Error.
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// 3. Catch Exception
try {
  // Attempt to set an invalid fullName to demonstrate catching exceptions
  person.fullName = "";
} catch (e) {
  // Alert the error message if an exception is caught
  alert(e);
}
console.log(person);
