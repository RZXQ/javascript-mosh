/*                             Getter / Setter Definition Forms:
=======================================================================================================================
| Aspect                | Object Literal Form                           | Object.defineProperty() Form                 |
|-----------------------|-----------------------------------------------|----------------------------------------------|
| Syntax clarity        | Cleaner, concise                              | More verbose, explicit                       |
| Descriptor control    | Defaults (`enumerable`, `configurable`: true) | Explicit fine-grained control                |
| Context (`this`)      | Automatically refers to object                | Explicit (`this` may differ with arrow functions)|
| Property overriding   | Can be easily overridden implicitly           | Overrides explicitly                         |
====================================================================================================================== */

// A. Object Literal Form
const person = {
  firstName: "Ruizhi",
  lastName: "WANG",

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// B. Object.defineProperty() Form
Object.defineProperty(person, "fullName", {
  set: (value) => ([person.firstName, person.lastName] = value.split(" ")),
  get: () => `${person.firstName} ${person.lastName}`,
});

person.fullName = "Ruizhi WANG";
console.log(person);
