// ===========================================================
//                 Implementation Detail
// ===========================================================
const _radius = new WeakMap(); // Private property stored in WeakMap

// ===========================================================
//                 Export One or More Classes
// ===========================================================
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}
