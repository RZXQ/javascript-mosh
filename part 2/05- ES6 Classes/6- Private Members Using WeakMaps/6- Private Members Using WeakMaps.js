/*
==================================================
            JavaScript Privacy Approaches
==================================================
- WeakMap keys must be objects (class instances in this case).
- "Weak" means that if no other references to a key exist,
  both key and its value can be garbage collected.
- Ideal for storing private data without polluting the object.

Comparing Privacy Approaches:
--------------------------------------------------
| Feature             | Symbol                            | WeakMap                          | Private Fields (#)              |
|---------------------|-----------------------------------|----------------------------------|--------------------------------|
| Garbage Collection  | Property remains until object     | Value is collected when key      | Handled automatically as       |
|                     | is garbage collected              | is unused                        | part of the object             |
| Accessibility       | Accessible via                    | Only accessible via WeakMap      | True private fields, cannot    |
|                     | Object.getOwnPropertySymbols()    |                                  | be accessed outside class      |
| Complexity          | Directly attached to object       | Requires external structure      | Native language feature        |
| Performance         | Faster than WeakMap               | Slightly slower                  | Best performance               |
| Use Case            | Lightweight non-enumerable        | Pre-ES2019 privacy              | Modern private implementation  |
|                     | properties                        |                                  | (ES2019+)                      |
| Syntax              | Moderate complexity               | Complex, verbose                 | Clean, simple                  |
==================================================
*/

// ================================================================
//             Private Data with WeakMap in a Class
// ================================================================
const _radius = new WeakMap(); // private radius storage
const _move = new WeakMap(); // private move method storage

class Circle {
  // --------------------------------------------------------------
  //        Constructor: Initialize Private Data
  // --------------------------------------------------------------
  constructor(radius) {
    _radius.set(this, radius); // 'this' (the instance) is the key, radius is the value
    _move.set(this, () => console.log("move", this)); // if using traditional function() {} would lose `this` binding, should bind manually later
  }

  // --------------------------------------------------------------
  //         Public Method: Draw Circle
  // --------------------------------------------------------------
  draw() {
    console.log(_radius.get(this)); // print radius
    _move.get(this)(); // invoke instance method
  }
}

// ================================================================
//              Create and Use a Circle Instance
// ================================================================
const c = new Circle(3);
c.draw(); // Outputs: 3, "move Circle { ... }"

// ================================================================
//              Modern Approach: Private Fields with #
// ================================================================
class Circle {
  #radius; // Truly private field, only accessible within class
  #draw; // Private method reference

  constructor(radius) {
    this.#radius = radius; // Direct assignment to private field

    this.#draw = function () {
      console.log("draw");
    };
  }

  show() {
    console.log(this.#radius);
    this.#draw();
  }
}

const circle = new Circle(10);
circle.show();
