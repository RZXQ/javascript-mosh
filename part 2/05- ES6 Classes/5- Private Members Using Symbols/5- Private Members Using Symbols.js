// Benefits:
// - Hides implementation details
// - Prevents name conflicts
// - Makes properties non-enumerable
// - Adds protection while maintaining retrievability when needed

const _radius = Symbol(); // Hidden property
const _draw = Symbol(); // Private method

class Circle {
  constructor(radius) {
    this[_radius] = radius; // Not enumerable, protected from external modification
  }

  [_draw]() {
    console.log("Drawing a circle..."); // Hidden from normal access, requires Symbol reference
  }
}

const circle = new Circle(1); // Create circle with hidden radius property
console.log(circle); // Output: {Symbol(): 1}

// Symbols are retrievable if needed
const symbols = Object.getOwnPropertySymbols(circle);
console.log(symbols); // [ Symbol() ]

const radiusKey = symbols[0];
console.log(circle[radiusKey]); // 1 (avoid in practice)
