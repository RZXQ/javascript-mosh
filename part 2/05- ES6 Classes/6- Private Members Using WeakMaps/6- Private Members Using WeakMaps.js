/*
==================================================
            WeakMap Overview & Comparison
==================================================
- WeakMap keys must be objects.
- "Weak" means that if no other references to a key exist,
  both key and its value can be garbage collected.
- Ideal for storing private data without polluting the object.

Comparing WeakMap and Symbol:
--------------------------------------------------
| Feature             | WeakMap                                | Symbol                                |
|---------------------|----------------------------------------|---------------------------------------|
| Garbage Collection  | Value is collected when key is unused  | Property remains until object GC'd    |
| Accessibility       | Only accessible via the WeakMap        | Accessible via Object.getOwnPropertySymbols() |
| Complexity          | Requires external structure            | Directly attached to object           |
| Performance         | Slightly slower                        | Faster                                |
| Use Case            | Strong encapsulation                   | Lightweight privacy                   |
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
    _radius.set(this, radius);
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
