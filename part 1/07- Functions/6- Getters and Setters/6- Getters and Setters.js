// ===========================================================
//                      Object Getters & Setters
// ===========================================================

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    this.firstName = value.split(" ")[0];
    this.lastName = value.split(" ")[1];
  },
};

person.fullName = "Ruizhi WANG";
console.log(person);
