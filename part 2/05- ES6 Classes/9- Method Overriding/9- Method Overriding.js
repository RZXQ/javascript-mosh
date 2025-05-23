// ================================================================
//                  Parent Class: Base Method
// ================================================================
class Shape {
  move() {
    console.log("shape move");
  }
}

// ================================================================
//            Subclass: Overriding Parent Method
// ================================================================
class Circle extends Shape {
  move() {
    // we cannot write override move() in javascript, it is a modifier in typescript
    super.move(); // Call the parent class's move method
    console.log("circle move"); // Subclass-specific behavior
  }
}

// ================================================================
//                       Instance Creation
// ================================================================
const c = new Circle();
c.move();
