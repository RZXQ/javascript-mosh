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

  showDraw() {
    this[_draw]();
  }
}

const circle = new Circle(1); // Create circle with hidden radius property
console.log(circle); // Output: {Symbol(): 1}
circle.showDraw();

// Symbols are retrievable if needed
const radiusKey = Object.getOwnPropertySymbols(circle)[0];
console.log(circle[radiusKey]); // 1 (avoid in practice)
