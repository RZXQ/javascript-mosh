/*
==================================================
               Class Inheritance Example
==================================================
- Demonstrates how to use ES6 `class` and `extends` syntax
  for inheritance.
- Ensures that the parent class is initialized with `super()`
  before accessing or adding subclass-specific properties.
==================================================
*/

// ================================================================
//                          Parent Class
// ================================================================
class Shape {
  constructor(color) {
    this.color = color; // `color` is assigned directly to the instance, not `Shape.prototype`
  }

  move() {
    console.log("move");
  }
}

// ================================================================
//                         Child class: Circle
// ================================================================
class Circle extends Shape {
  constructor(color, radius) {
    super(color); // Calls Shape's constructor → `this.color = color;` is executed
    this.radius = radius; // `radius` is also stored directly in the instance
  }

  draw() {
    console.log("draw");
  }
}

// ================================================================
//                       Instance Creation
// ================================================================
const c = new Circle("red", 1);

console.log(c.color); // ✅ `color` exists directly in the instance `c`, NOT in `Shape.prototype`
console.log(c.radius); // ✅ `radius` is also stored in `c`
c.move(); // 🔍 `move()` is found in `Shape.prototype` via the prototype chain
c.draw(); // 🔍 `draw()` is found in `Circle.prototype`

/*
==================================================
           Why is `color` inside `c`?
==================================================
- In JavaScript, **all instance properties (like `color`) are stored directly in the object (`this`)**.
- When `super(color)` is called, it executes `Shape`'s constructor → `this.color = color;`
- This means `color` is assigned to `c`, rather than being stored in `Shape.prototype`.
- ✅ Methods (`move()`, `draw()`) are inherited through the prototype chain.
- ❌ Properties (`color`, `radius`) are NOT stored in the prototype—they belong to each instance.
==================================================
*/
