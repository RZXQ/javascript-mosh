/*
===========================================================
Task Description:
1. Define an object `circle` which contains:
   a. A property `radius` value is 1.
   b. A getter method `area` that calculates and returns the area of the circle.
      - The area of a circle is calculated using the formula:
        `Math.PI * radius * radius`.
2. Use a **getter** to make `area` accessible as a readonly property of the object,
   so it can be retrieved like a property but cannot be updated directly.

Example Usage:
- Input: Access `circle.area` where `circle.radius = 1`.
- Output: The calculated area (approx. `3.14159`).

Notes:
- The use of getters encapsulates the area calculation logic,
  keeping the object simple while preventing direct modification of `area`.
===========================================================
*/
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
